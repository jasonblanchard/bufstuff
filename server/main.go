package main

import (
	"context"
	"fmt"
	"log"
	"net/http"

	"github.com/bufbuild/connect-go"
	petv1 "github.com/jasonblanchard/bufstuff/gen/go/proto/pet/v1"
	"github.com/jasonblanchard/bufstuff/gen/go/proto/pet/v1/petv1connect"
	"golang.org/x/net/http2"
	"golang.org/x/net/http2/h2c"
)

const address = "localhost:8080"

func main() {
    mux := http.NewServeMux()
    path, handler := petv1connect.NewPetStoreServiceHandler(&petStoreServiceServer{})
    mux.Handle(path, handler)
    fmt.Println("... Listening on", address)
    http.ListenAndServe(
        address,
        // Use h2c so we can serve HTTP/2 without TLS.
        h2c.NewHandler(mux, &http2.Server{}),
    )
}

// petStoreServiceServer implements the PetStoreService API.
type petStoreServiceServer struct {
    petv1connect.UnimplementedPetStoreServiceHandler
}

// PutPet adds the pet associated with the given request into the PetStore.
func (s *petStoreServiceServer) GetPet(
    ctx context.Context,
    req *connect.Request[petv1.GetPetRequest],
) (*connect.Response[petv1.GetPetResponse], error) {
    id := req.Msg.GetPetId()
    log.Printf("Got a request to get pet with id %s", id)

    response := &petv1.GetPetResponse{
        Pet: &petv1.Pet{
            Name: "Fido from Go",
        },
    }

    return connect.NewResponse(response), nil
}