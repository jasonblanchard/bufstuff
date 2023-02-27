import { createHandlers, mergeHandlers } from "@bufbuild/connect-node";
import { PetStoreService } from "../../../gen/js/proto/pet/v1/pet_connectweb";
import {
  GetPetRequest,
  GetPetResponse,
  Pet,
} from "../../../gen/js/proto/pet/v1/pet_pb";
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

export async function GET(request: Request) {
  console.log(request.url);

  // const response = new Response();
  // const handler = handlers[0];
  // const result = handler(request, response);
  // console.log(result);

  return new Response("TODO", {
    status: 200,
  });
}
