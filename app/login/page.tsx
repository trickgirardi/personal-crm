"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { signInUser } from "@/lib/supabase-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const { error } = await signInUser(email, password);

      if (error) {
        console.error("Supabase auth error:", error);
        setError("Credenciais inválidas. Tente novamente.");
        setIsLoading(false);
        return;
      }

      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Credenciais inválidas. Tente novamente.");
      } else {
        router.push("/");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Erro ao fazer login. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Fazer Login
          </CardTitle>
          <CardDescription className="text-center">
            Digite suas credenciais para acessar sua conta
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            {error && (
              <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
                {error}
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu.email@dominio.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="sua-senha-secreta"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full mt-4" disabled={isLoading}>
              {isLoading ? "Entrando..." : "Entrar"}
            </Button>
            <div className="text-center space-y-2">
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Esqueceu sua senha?
              </a>
              <p className="text-sm text-gray-600">
                Não tem uma conta?{" "}
                <a href="/signup" className="text-blue-600 hover:underline">
                  Cadastre-se
                </a>
              </p>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
