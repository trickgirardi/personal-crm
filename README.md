# Personal CRM

Um sistema de CRM pessoal construído com Next.js, NextAuth.js e Supabase.

## Configuração

### Pré-requisitos

- Node.js (versão 18 ou superior)
- pnpm (ou npm/yarn)
- Conta no Supabase (https://supabase.com)

### Configuração do Supabase

1. Crie um novo projeto no Supabase
2. No painel do Supabase, vá para "Authentication" > "Settings" e configure:
   - Habilite "Email Auth" em "Providers"
   - Configure o redirecionamento para `http://localhost:3000/api/auth/callback/credentials`
3. Vá para "Settings" > "API" e copie:
   - URL do projeto
   - anon/public key
   - JWT Secret

### Configuração do Projeto

1. Clone o repositório

   ```bash
   git clone https://github.com/seu-usuario/personal-crm.git
   cd personal-crm
   ```

2. Instale as dependências

   ```bash
   pnpm install
   ```

3. Configure as variáveis de ambiente

   - Copie o arquivo `.env.example` para `.env.local`
   - Preencha as variáveis com os valores do seu projeto Supabase:

     ```
     # NextAuth.js Configuration
     NEXTAUTH_URL=http://localhost:3000
     NEXTAUTH_SECRET=sua-chave-secreta-aqui

     # Supabase Configuration (Server-side)
     SUPABASE_URL=sua-url-do-supabase
     SUPABASE_ANON_KEY=sua-chave-anon-do-supabase
     SUPABASE_JWT_SECRET=seu-jwt-secret-do-supabase

     # Supabase Configuration (Client-side)
     NEXT_PUBLIC_SUPABASE_URL=sua-url-do-supabase
     NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anon-do-supabase
     ```

4. Execute o projeto

   ```bash
   pnpm dev
   ```

5. Acesse o projeto em `http://localhost:3000`

## Funcionalidades

- **Autenticação**: Login e registro de usuários usando Supabase Auth
- **Perfil de Usuário**: Visualização e edição de informações do perfil
- **Gerenciamento de Contatos**: (Em desenvolvimento)
- **Histórico de Interações**: (Em desenvolvimento)
- **Acompanhamento de Vendas**: (Em desenvolvimento)
- **Relatórios e Análises**: (Em desenvolvimento)

## Estrutura do Projeto

- `/app`: Páginas e rotas da aplicação (Next.js App Router)
- `/components`: Componentes reutilizáveis
- `/lib`: Utilitários e configurações
  - `auth.ts`: Configuração do NextAuth
  - `supabase.ts`: Cliente Supabase para uso no servidor
  - `supabase-client.ts`: Cliente Supabase para uso no cliente

## Fluxo de Autenticação

1. O usuário se registra ou faz login através do formulário
2. A autenticação é processada pelo Supabase Auth
3. NextAuth.js cria uma sessão para o usuário
4. O usuário é redirecionado para a página inicial

## Desenvolvimento

### Adicionando Novas Páginas

1. Crie um novo diretório em `/app` com o nome da rota
2. Adicione um arquivo `page.tsx` com o componente da página

### Adicionando Novas Funcionalidades

1. Crie os componentes necessários em `/components`
2. Adicione as funções de utilidade em `/lib`
3. Integre os componentes nas páginas

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova funcionalidade'`)
4. Faça push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request
