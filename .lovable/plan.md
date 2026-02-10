

# Plano de Alteracoes conforme Documento de Revisao

Este plano cobre todas as alteracoes de texto, layout e navegacao solicitadas no documento. As trocas de imagens ficam por sua conta, conforme combinado.

---

## 1. HOME PAGE - Hero Section

### 1.1 Numeros de impacto
- Numeros em **branco** (text-white) e sinais (+) em **amarelo** (text-brand-yellow) para destaque

### 1.2 Botao "Conhecer Eventos"
- Trocar texto para **"Agenda"**
- Estilo: fundo **rosa** (#ff006b) com **letra branca** (em vez do outline atual)

### 1.3 Headline principal
- Substituir "Da formacao a lideranca" por tres palavras-chave em destaque: **FORMAR, DESENVOLVER, TRANSFORMAR**

### 1.4 Frase de impacto
- Logo abaixo das palavras-chave, adicionar: **"O Instituto Mulheres V8 a Potencia que Transforma o Setor Automotivo."**

### 1.5 Texto descritivo
- Substituir o texto sobre WhatsApp por: **"No MV8 voce encontra tudo o que precisa para uma vida profissional alinhada a sua essencia e vida pessoal. Faca parte da nossa comunidade e viva experiencias que transformam por meio das nossas agendas, encontros e formacoes."**
- Botoes permanecem: "Fazer Parte da Comunidade" e "Agenda"

---

## 2. INSTITUCIONAL - Quem Somos (Hero)

### 2.1 Novo texto "Quem Somos"
Substituir o texto atual pelo novo (com trechos em negrito):

> O Instituto Mulheres V8 e um **ecossistema na industria automotiva** para capacitar, fortalecer e transformar a vida de milhares de mulheres. Nascemos a partir da **vivencia real de mulheres** que construiram carreiras e empresas em ambientes tradicionalmente masculinos, enfrentando desafios invisiveis: sobrecarga, solidao na lideranca, conflitos de identidade e a sensacao de precisar "endurecer" para pertencer e a grande falta de conhecimento tecnico e mao de obra escassa do setor. Por este motivo o MV8 e **pioneiro e o unico HUB de inovacao completo** que atua a partir de quatro pilares fundamentais -- tecnica, negocios, desenvolvimento humano e espiritual -- integrados de forma estrategica para conduzir mulheres a uma atuacao profissional solida, consciente e com proposito, gerando mao de obra feminina qualificada para a industria, impactando diretamente voce mulher e nosso setor, transformando numeros em um avanco real e revolucionario.

### 2.2 Criar destaque visual dos 4 pilares
- Abaixo do texto, exibir os 4 pilares (Tecnica, Negocios, Desenvolvimento Humano, Espiritual) em formato vertical (de cima para baixo) com cores de destaque

---

## 3. INSTITUCIONAL - Nossa Historia

### 3.1 Texto expandido
Substituir pelo novo texto completo com as palavras-chave em negrito (SEO):

> O Instituto Mulheres V8 nasceu ha quatro anos a partir da visao e da vivencia de **Eva Paiva**, filha de mecanico, criada entre oficinas, pecas, conversas tecnicas e os bastidores de um setor historicamente masculino...
> (texto completo conforme documento, com todos os paragrafos)

---

## 4. INSTITUCIONAL - O que Fazemos (Pilares)

### 4.1 Atualizar subtitulo da secao
- Novo texto: **"Tudo o que fazemos e desenvolvido sob o olhar em quatro pilares fundamentais para o avanco, inclusao e melhor performance da mulher no mercado de trabalho automotivo: a tecnica, negocios, desenvolvimento humano e espiritual."**

### 4.2 Atualizar descricoes dos pilares
- **Tecnica**: "Desenvolvemos competencias praticas, metodos e conhecimentos aplicaveis ao dia a dia profissional de mulheres em areas tecnicas e/ou atividades que exigem o conhecimento para melhor performance."
- **Negocios**: "Trabalhamos estrategia, gestao, processos e resultados, ajudando mulheres a organizarem seus negocios e carreiras com sustentabilidade, autonomia e crescimento consciente."
- **Desenvolvimento Humano**: "Atuamos no fortalecimento da identidade, posicionamento, comunicacao e maturidade emocional, essenciais para sustentar escolhas, relacoes e responsabilidades."
- **Espiritualidade**: "Conectamos proposito e consciencia a pratica. A espiritualidade aqui e vivida de forma aplicada, como fonte de clareza, equilibrio e direcao nas decisoes profissionais e pessoais."

### 4.3 Icones dos pilares
- Fundo **amarelo** com icone em **roxo** (inverter o esquema atual)

---

## 5. INSTITUCIONAL - Remover secao "Como Fazemos"

- Excluir completamente a secao "Como Fazemos" (steps 01-04) conforme solicitado

---

## 6. INSTITUCIONAL - Fundadora (Eva Paiva)

### 6.1 Atualizar biografia
Substituir pelo texto completo do documento incluindo:
- Descricao profissional atualizada
- Experiencia e abordagem
- Mencao ao livro "99 Cartas" e podcast "MulherPod"

### 6.2 Ajuste estetico
- No card amarelo com nome, usar fonte **roxa** ou rosa (nao preta), conforme nota 3 do documento

---

## 7. MENTORIAS - Correcao de scroll

- Garantir que ao clicar em "Mentorias" no menu, a pagina abra no topo (scroll to top)

---

## 8. MENTORIAS - Botao "Agendar Conversa"

- Botao CTA "Agendar Conversa" deve abrir link do WhatsApp (placeholder ate receber o link correto)

---

## Resumo de Arquivos Modificados

| Arquivo | Alteracoes |
|---|---|
| `src/pages/Home.tsx` | Hero: headline, texto, botao, numeros |
| `src/pages/Institucional.tsx` | Quem Somos, Historia, Pilares, remover Como Fazemos, Fundadora |
| `src/pages/Mentorias.tsx` | Scroll to top, link WhatsApp no CTA |

---

## Observacoes

- **Imagens**: ficam por sua conta (foto Gauchas Car, foto fundo mentorias, etc.)
- **Pagina "Fale Conosco"**, **aba de Impacto/Resultados** e **secao de patrocinadores com links** foram mencionados no documento mas envolvem novas paginas/funcionalidades - podemos implementar em uma proxima etapa
- **Palavras-chave SEO**: mencionado no documento para Laura pesquisar - quando disponivel, podemos adicionar meta tags

