
# Plano: Upload e Organização de Imagens da Galeria

## Objetivo
Substituir o campo atual de "URLs das imagens" (textarea) por um sistema profissional de upload de arquivos direto do computador, organizado por evento, com reordenação e gerenciamento individual de cada foto.

---

## 1. Storage (Lovable Cloud)

Criar um **bucket público** chamado `gallery` com a seguinte estrutura:

```text
gallery/
├── {event_id}/
│   ├── {timestamp}-{nome-sanitizado}.jpg
│   ├── {timestamp}-{nome-sanitizado}.webp
│   └── ...
└── {outro_event_id}/
    └── ...
```

- **Público para leitura** (galeria pública do site).
- **Upload/delete restrito a admins** via políticas de acesso.
- O campo `images` da tabela `gallery_events` continua armazenando um array de URLs públicas — sem mudança de schema.

---

## 2. Admin da Galeria — Novo fluxo de upload

### Criação de um novo evento
1. Admin preenche título, categoria, data e local.
2. Ao clicar em **"Criar Evento"**, o registro é salvo primeiro (para obter o `event_id`).
3. Em seguida, a tela exibe a área de upload de imagens daquele evento.

### Área de upload (dentro do modal de edição)
- **Drag & drop** de múltiplos arquivos + botão "Selecionar arquivos".
- Aceita: **JPG, PNG, WEBP**.
- Limite: **10 MB por imagem**.
- Validação no client antes de enviar (tipo e tamanho), com mensagem clara se rejeitado.
- Barra de progresso por arquivo durante o upload.
- Após upload, miniatura aparece na grade.

### Gerenciamento das imagens já enviadas
Para cada imagem na grade:
- Botão **↑** mover para cima
- Botão **↓** mover para baixo
- Botão **🗑 Remover** (deleta do storage e do array `images`)
- A **primeira imagem é tratada como capa** (usada no card e na listagem).

### Edição de evento existente
- Abre o modal já com a grade de imagens atuais.
- Pode adicionar novas, remover ou reordenar.
- Salvar persiste o novo array `images` no banco.

---

## 3. Página pública `/galeria`
Sem mudanças visuais. Continua lendo `events.images[]` como hoje — apenas as URLs agora apontam para o storage da Lovable Cloud em vez de URLs externas.

---

## 4. Migração de dados existentes
Os eventos atuais que já têm URLs externas (ex: Unsplash) continuam funcionando — o array `images` aceita qualquer URL. Não vamos forçar migração; admin pode editar e reenviar quando quiser.

---

## Detalhes técnicos

**Migration SQL:**
- Criar bucket `gallery` (público).
- Política `SELECT`: liberado para todos (`true`).
- Políticas `INSERT`, `UPDATE`, `DELETE` em `storage.objects` restritas a `has_role(auth.uid(), 'admin')` quando `bucket_id = 'gallery'`.

**Componentes/arquivos:**
- Novo: `src/components/ImageUploader.tsx` — componente reutilizável com drag & drop, validação, progresso, grade com reordenar/remover. Recebe `eventId`, `images[]`, `onChange`.
- Editado: `src/pages/AdminGaleria.tsx` — remover textarea de URLs, integrar `ImageUploader`. Fluxo de criação passa a ser em 2 etapas (criar registro → upload). Ao deletar evento, também remove a pasta do storage.
- Sanitização de nome de arquivo: lowercase, sem acentos, espaços → `-`, prefixo `Date.now()` para evitar colisões.
- Upload via `supabase.storage.from('gallery').upload(path, file)` e URL pública via `getPublicUrl`.

**Dependências:** nenhuma nova (drag & drop nativo HTML5).

**Acessibilidade/UX:**
- Mensagens de erro com `toast`.
- Estados: idle, uploading (com %), success, error.
- Confirmação ao remover imagem.
