const hasuraEndpoint =
  process.env["REACT_APP_HASURA_ENDPOINT"] ?? "http://localhost:8080";

module.exports = {
  schema: [
    {
      [`${hasuraEndpoint}/v1/graphql`]: {
        headers: {
          Authorization: `Bearer ${process.env["AUTH_TOKEN"]}`,
        },
      },
    },
  ],
  documents: ["./src/**/*.graphql", "./src/**/*.tsx", "./src/**/*.ts"],
  overwrite: true,
  generates: {
    "./src/generated/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: true,
        withComponent: true,
        scalars: {
          uuid: "string",
        },
        enumsAsTypes: true,
      },
    },
  },
};
