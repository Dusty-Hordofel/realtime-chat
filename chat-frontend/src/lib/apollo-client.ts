import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URI as string, // Type asserte la variable d'environnement
  cache: new InMemoryCache(),
  ssrMode: typeof window === "undefined", // Active le mode SSR côté serveur
});

export default client;
