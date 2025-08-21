"use client";

import { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  const handleSignOut = async () => {
    setIsLoading(true);
    await signOut({ redirect: false });
    router.push("/login");
  };

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Carregando...</p>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Perfil do Usuário
          </CardTitle>
          <CardDescription className="text-center">
            Suas informações de conta
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-500">ID</p>
            <p className="text-sm text-gray-900">{session.user.id}</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-500">Nome</p>
            <p className="text-sm text-gray-900">
              {session.user.name || "Não definido"}
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-500">Email</p>
            <p className="text-sm text-gray-900">{session.user.email}</p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button
            onClick={handleSignOut}
            className="w-full"
            variant="destructive"
            disabled={isLoading}
          >
            {isLoading ? "Saindo..." : "Sair"}
          </Button>
          <Button
            onClick={() => router.push("/")}
            className="w-full"
            variant="outline"
          >
            Voltar para a Página Inicial
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
