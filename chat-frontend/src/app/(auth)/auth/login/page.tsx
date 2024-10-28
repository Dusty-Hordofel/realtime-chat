"use client";
import LoginForm from "@/components/auth/login-form";

const LoginPage = () => {
  return (
    <main className="flex justify-center items-center h-screen">
      {/* <AuthForm
        errorMessage="Erreur de connexion. Veuillez vérifier vos identifiants."
        successMessage="Connexion réussie. Bienvenue !"
        title="Connexion à votre compte"
        description="Connectez-vous pour accéder à votre compte"
        buttonLabel="Se connecter"
      /> */}
      <LoginForm />
    </main>
  );
};

export default LoginPage;
