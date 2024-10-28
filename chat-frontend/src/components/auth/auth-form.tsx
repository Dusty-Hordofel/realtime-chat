"use client";

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

import DynamicFormField from "../forms/dynamic-form-field";

import { useGetMe } from "@/hooks/use-get-me";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthForm = ({
  form,
  loading,
  onSubmit,
  title = "Get Started",
  buttonLabel = "Create Account",
  description = "Create your account now",
}: any) => {
  const router = useRouter();
  const { user } = useGetMe();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user]);

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
