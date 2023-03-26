import { ConnectRouter } from "@bufbuild/connect";
import { PetStoreService } from "../../gen/js/proto/pet/v1/pet_connectweb";
import { GetPetResponse, Pet } from "../../gen/js/proto/pet/v1/pet_pb";
import { Timestamp } from "@bufbuild/protobuf";

export default (router: ConnectRouter) => {
  router.service(PetStoreService, {
    async getPet(req) {
      const pet = new Pet({
        petId: "123",
        name: "Fido from next.js",
        petType: 1,
        createdAt: Timestamp.now(),
      });
      const response = new GetPetResponse({ pet });
      return response;
    },
  });
};
