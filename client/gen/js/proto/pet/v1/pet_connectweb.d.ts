// @generated by protoc-gen-connect-web v0.8.4
// @generated from file proto/pet/v1/pet.proto (package pet.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { GetPetRequest, GetPetResponse } from "./pet_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service pet.v1.PetStoreService
 */
export declare const PetStoreService: {
  readonly typeName: "pet.v1.PetStoreService",
  readonly methods: {
    /**
     * @generated from rpc pet.v1.PetStoreService.GetPet
     */
    readonly getPet: {
      readonly name: "GetPet",
      readonly I: typeof GetPetRequest,
      readonly O: typeof GetPetResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

