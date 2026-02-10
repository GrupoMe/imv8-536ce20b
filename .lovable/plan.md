

# Mover Numeros de Impacto para fora do Hero

Vamos tirar os 3 quadros (Mulheres Impactadas, Eventos Realizados, Estados do Brasil) de dentro da secao hero (que tem a imagem de fundo) e coloca-los em uma nova secao independente logo abaixo.

## O que muda

- Os 3 cards de numeros saem de dentro do `<section>` do hero (linhas 107-141)
- Uma nova `<section>` e criada entre o hero e a secao de Pilares
- Fundo da nova secao em cor solida (rosa `bg-primary`) para dar destaque e contraste
- Os cards mantem o mesmo layout em grid de 3 colunas, com fundo branco semi-transparente e estilo visual similar

## Resultado visual

O hero fica mais limpo, mostrando apenas o texto e botoes sobre a foto. Logo abaixo, uma faixa com fundo rosa exibe os 3 numeros de impacto com destaque.

## Detalhes tecnicos

**Arquivo**: `src/pages/Home.tsx`

1. Remover o bloco dos numeros de impacto (linhas 107-141) de dentro da secao hero
2. Reduzir o `min-h-[90vh]` do hero para algo como `min-h-[70vh]` ja que os numeros nao precisam mais caber dentro
3. Criar uma nova `<section>` com fundo `bg-primary` entre o fechamento do hero e a secao "Pilares de Formacao"
4. Mover os 3 cards para dentro dessa nova secao, ajustando estilos (texto branco, icones amarelos, fundo semi-transparente)

