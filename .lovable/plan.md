

# Plano: Migrar para Lovable Cloud (Supabase) como Backend

## Objetivo
Substituir o localStorage por um banco de dados Supabase via Lovable Cloud, garantindo que quando o admin deletar conteúdo, ele seja removido permanentemente para todos os visitantes do site.

## O que muda

Atualmente, Agenda, Galeria e Cursos usam `localStorage` — os dados só existem no navegador do admin. Com Supabase, os dados ficam em um banco central acessível por todos.

## Etapas

### 1. Ativar Lovable Cloud
- Habilitar o Lovable Cloud no projeto (aba Cloud no editor)
- Isso cria automaticamente a infraestrutura Supabase

### 2. Criar tabelas no banco de dados
Três tabelas:

- **agenda_events**: id, title, type, date, time, location, participants, max_participants, description, status
- **gallery_events**: id, title, category, date, location, images (array de URLs)
- **cursos_formations**: id, title, category, duration, participants, rating, price, description, modules (array), checkout_link

Cada tabela será populada com os dados default atuais como seed inicial.

### 3. Configurar autenticação real
- Substituir o login hardcoded (`admin@mulheresv8.com` / `admin123`) por autenticação Supabase com email/senha
- Criar o usuário admin no painel Cloud
- Atualizar `AuthContext.tsx` para usar `supabase.auth`

### 4. Configurar RLS (Row Level Security)
- **Leitura pública**: qualquer visitante pode ver agenda, galeria e cursos
- **Escrita apenas admin**: criar tabela `user_roles` com função `has_role()` para proteger INSERT/UPDATE/DELETE

### 5. Atualizar código do frontend
- Criar cliente Supabase (`src/integrations/supabase/client.ts`)
- Substituir `loadAgendaEvents()` / `persistAgendaEvents()` por queries Supabase
- Substituir lógica localStorage em `AdminGaleria.tsx` por queries Supabase
- Substituir `loadCourseFormations()` / `persistCourseFormations()` por queries Supabase
- Remover os arquivos `agenda-data.ts` e `cursos-data.ts` (ou simplificar para types apenas)

### 6. Atualizar páginas públicas
- `Agenda.tsx`, `Galeria.tsx`, `Cursos.tsx` — buscar dados do Supabase ao invés de localStorage

## Detalhes técnicos

- **Arquivos modificados**: `AuthContext.tsx`, `AdminAgenda.tsx`, `AdminGaleria.tsx`, `AdminCursos.tsx`, `Agenda.tsx`, `Galeria.tsx`, `Cursos.tsx`, `agenda-data.ts`, `cursos-data.ts`
- **Arquivos criados**: migrations SQL, `src/integrations/supabase/client.ts`
- **Dependência**: `@supabase/supabase-js` (já disponível via Lovable Cloud)

## Pré-requisito
Antes de implementar, é necessário **ativar o Lovable Cloud** na aba Cloud do editor. Você pode fazer isso agora?

