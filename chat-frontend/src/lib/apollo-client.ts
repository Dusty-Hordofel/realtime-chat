import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
// import excludedRoutes from "./excluded-routes";
// import { onLogout } from "../utils/logout";

// const logoutLink = onError((error) => {
//   if (
//     error.graphQLErrors?.length &&
//     (error.graphQLErrors[0].extensions.originalError as any).statusCode === 401
//   ) {
//     if (!excludedRoutes.includes(window.location.pathname)) {
//       onLogout();
//     }
//   }
// });

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URI as string, // Remplacez par l'URL de votre API GraphQL
  credentials: "include", // Inclure les cookies dans chaque requête
});

const client = new ApolloClient({
  // uri: process.env.NEXT_PUBLIC_GRAPHQL_URI as string, // Type asserte la variable d'environnement
  link: httpLink,
  cache: new InMemoryCache(),
  ssrMode: typeof window === "undefined", // Active le mode SSR côté serveur
});

export default client;
