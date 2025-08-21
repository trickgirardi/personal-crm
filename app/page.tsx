"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Carregando...</div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const handleLogout = () => {
    signOut({ callbackUrl: "/login" });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Personal CRM
            </CardTitle>
            <CardDescription className="text-center">
              Bem-vindo ao seu sistema de CRM pessoal
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-green-50 border border-green-200 rounded-md">
              <h3 className="font-semibold text-green-800">
                Login realizado com sucesso!
              </h3>
              <p className="text-green-700">
                Usuário: {session.user?.name || session.user?.email}
              </p>
              <p className="text-green-700">Email: {session.user?.email}</p>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold">Funcionalidades disponíveis:</h4>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>Gerenciamento de contatos</li>
                <li>Histórico de interações</li>
                <li>Acompanhamento de vendas</li>
                <li>Relatórios e análises</li>
              </ul>
            </div>

            <div className="flex flex-col space-y-2">
              <Button
                onClick={() => router.push("/profile")}
                className="w-full"
              >
                Ver Perfil
              </Button>
              <Button
                onClick={handleLogout}
                variant="outline"
                className="w-full"
              >
                Sair
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
