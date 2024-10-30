"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import AuthForm from "./auth-form";
import { useLoginUser } from "@/hooks/auth/use-login-user";
import { AuthFormData, AuthSchema } from "@/schemas/auth";

const LoginForm = () => {
  const form = useForm<AuthFormData>({
    resolver: zodResolver(AuthSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { login, loading } = useLoginUser();

  async function onSubmit(data: AuthFormData) {
    console.log("🚀 ~ onSubmit ~ data:", data);
    await login({ email: data.email, password: data.password });
    form.reset();
  }

  return <AuthForm form={form} loading={loading} onSubmit={onSubmit} />;
};

export default LoginForm;
