"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import AuthForm from "./auth-form";
import { useCreateUser } from "@/hooks/use-create-user";
import { AuthFormData, AuthSchema } from "@/schemas/auth";
import { useLoginUser } from "@/hooks/use-login-user";

const RegisterForm = () => {
  const form = useForm<AuthFormData>({
    resolver: zodResolver(AuthSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { createUser, data, loading, error } = useCreateUser();
  const { login } = useLoginUser();
  const router = useRouter();

  async function onSubmit(data: AuthFormData) {
    console.log("🚀 ~ onSubmit ~ data:", data);
    await createUser({ email: data.email, password: data.password });

    try {
      const newUser = await createUser({
        email: data.email,
        password: data.password,
      });

      if (newUser) {
        await login({ email: data.email, password: data.password });
        form.reset();
        router.push("/");
      }
    } catch (error) {
      alert("An error occurred while creating user!");
      console.error("Error creating user:", error);
    }
  }

  return <AuthForm form={form} loading={loading} onSubmit={onSubmit} />;
};

export default RegisterForm;
