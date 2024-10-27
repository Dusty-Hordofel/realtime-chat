"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import AuthInput from "./auth-input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { getErrorMessage } from "@/app/common/utils/errors";
import DynamicFormField from "../forms/dynamic-form-field";
import { useCreateUser } from "@/hooks/use-create-user";

const AuthSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type AuthFormData = z.infer<typeof AuthSchema>;

const AuthForm = ({
  type = "login",
  description = "Create your account now",
  title = "Get Started",
  successMessage = "User created successfully!",
  errorMessage = "An error occurred while creating user!",
  buttonLabel = "Create Account",
}) => {
  const form = useForm<AuthFormData>({
    resolver: zodResolver(AuthSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { createUser, data, loading, error } = useCreateUser();
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
        alert(successMessage);
        console.log("🚀 ~ onSubmit ~ newUser:", newUser);
        form.reset();
        // router.push("/");
      }
    } catch (error) {
      alert(errorMessage);
      console.error("Error creating user:", error);
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-5xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <DynamicFormField
              inputType="input"
              form={form}
              name="email"
              label="Email"
              placeholder="Email"
              type="text"
              disabled={loading}
            />
            <DynamicFormField
              inputType="input"
              form={form}
              name="password"
              label="Password"
              placeholder="Password"
              type="password"
              disabled={loading}
            />
            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={loading}
            >
              {loading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                buttonLabel
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default AuthForm;
