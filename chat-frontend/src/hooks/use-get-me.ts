"use client";
import { GET_ME } from "@/graphql/user/queries";
import { useQuery } from "@apollo/client";

export const useGetMe = () => {
  const { loading, error, data } = useQuery(GET_ME);

  if (loading) return { loading, user: null };
  if (error) {
    console.error("Erreur d'authentification :", error);
    return { loading: false, user: null, error };
  }

  return { loading: false, user: data ? data.me : null };
};
