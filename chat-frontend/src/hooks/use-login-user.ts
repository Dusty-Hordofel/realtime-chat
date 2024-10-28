"use client";
import { useState } from "react";
import client from "@/lib/apollo-client";
import { useRouter } from "next/navigation";

interface LoginRequest {
  email: string;
  password: string;
}

export const useLoginUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  console.log("🚀 ~ useLoginUser ~ success:", success);

  const router = useRouter();

  // Add your login logic here
  const login = async (request: LoginRequest) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(request),
          credentials: "include",
        }
      );

      if (!response.ok) {
        setError("Error occured while logging in.");
        // setError(getErrorMessage(result));
        // setError(result.message);
        // alert(`Erreur: ${getErrorMessage(result)}`);
        // alert(`Erreur: ${result.message}`);
        return;
      }

      const result = await response.json();

      setSuccess(result.message);
      alert(success);
      router.push("/");
    } catch (error) {
      // console.log("🚀 ~ onSubmit ~ error:ERROR", error);
      setError("An error occurred while logging in.");
    } finally {
      setLoading(false);
      await client.refetchQueries({ include: "active" });
    }
  };

  return { login, error, loading, success };
};
