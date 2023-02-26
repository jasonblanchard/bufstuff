import http from "http";
import { createHandlers, mergeHandlers } from "@bufbuild/connect-node";
import { PetStoreService } from './gen/js/proto/pet/v1/pet_connect';
import { GetPetRequest, GetPetResponse, Pet } from './gen/js/proto/pet/v1/pet_pb';
import { Timestamp } from "@bufbuild/protobuf";

//// @ts-ignore
const handlers = createHandlers(PetStoreService, {
  getPet(_: GetPetRequest): GetPetResponse {
    const pet = new Pet({
      petId: "123",
      name: "Fido from node",
      petType: 1,
      createdAt: new Timestamp(),
    });
    const response = new GetPetResponse({ pet });
    return response;
  },
});

console.log(handlers);

http.createServer({}, mergeHandlers(handlers)).listen(8080, () => console.log("Listening on 8080"));