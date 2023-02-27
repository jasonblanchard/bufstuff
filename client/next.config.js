/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@bufbuild/connect-query"],
  experimental: {
    appDir: true,
  },

  // async rewrites() {
  //   return [
  //     {
  //       source: "/pet.v1.PetStoreService/GetPet",
  //       destination: "http://localhost:8080/pet.v1.PetStoreService/GetPet",
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
