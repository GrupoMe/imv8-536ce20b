export type CursoCategory = "curso" | "programa"

export interface CursoFormation {
  id: number
  title: string
  category: CursoCategory
  duration: string
  participants: number
  rating: number
  price: string
  description: string
  modules: string[]
  checkoutLink: string
}

const CURSOS_STORAGE_KEY = "courses_formations"

export const defaultCourseFormations: CursoFormation[] = [
  {
    id: 1,
    title: "Liderança Feminina no Setor Automotivo",
    category: "curso",
    duration: "8 semanas",
    participants: 150,
    rating: 4.9,
    price: "R$ 997",
    description:
      "Desenvolva habilidades de liderança específicas para o setor automotivo e aprenda a navegar em ambientes corporativos.",
    modules: [
      "Fundamentos da Liderança",
      "Comunicação Assertiva",
      "Gestão de Equipes",
      "Negociação",
    ],
    checkoutLink: "#checkout-formacoes",
  },
  {
    id: 2,
    title: "Curso de Negociação para Mulheres",
    category: "curso",
    duration: "4 semanas",
    participants: 200,
    rating: 4.7,
    price: "R$ 497",
    description:
      "Aprenda técnicas de negociação e como se posicionar com confiança em conversas de carreira e salário.",
    modules: [
      "Preparação para Negociação",
      "Técnicas Avançadas",
      "Linguagem Corporal",
      "Casos Práticos",
    ],
    checkoutLink: "#checkout-cursos",
  },
  {
    id: 3,
    title: "Programa de Desenvolvimento de Líderes",
    category: "programa",
    duration: "6 meses",
    participants: 50,
    rating: 4.8,
    price: "R$ 4.997",
    description:
      "Programa completo de formação de líderes com módulos práticos, mentoria em grupo e projeto final.",
    modules: [
      "Autoconhecimento",
      "Liderança Situacional",
      "Gestão de Conflitos",
      "Projeto Aplicado",
    ],
    checkoutLink: "#checkout-cursos",
  },
  {
    id: 4,
    title: "Gestão Financeira para Mulheres Empreendedoras",
    category: "curso",
    duration: "6 semanas",
    participants: 120,
    rating: 4.9,
    price: "R$ 697",
    description:
      "Domine as finanças do seu negócio com técnicas práticas de organização financeira e contabilidade.",
    modules: [
      "Fluxo de Caixa",
      "Precificação",
      "Investimentos",
      "Planejamento Tributário",
    ],
    checkoutLink: "#checkout-cursos",
  },
  {
    id: 5,
    title: "Programa de Aceleração de Carreira",
    category: "programa",
    duration: "4 meses",
    participants: 30,
    rating: 4.8,
    price: "R$ 3.497",
    description:
      "Programa intensivo para profissionais que desejam dar um salto na carreira em curto prazo.",
    modules: [
      "Análise de Perfil",
      "Estratégia de Carreira",
      "Personal Branding",
      "Execução do Plano",
    ],
    checkoutLink: "#checkout-cursos",
  },
  {
    id: 6,
    title: "Marketing Digital para o Setor Automotivo",
    category: "curso",
    duration: "5 semanas",
    participants: 80,
    rating: 4.7,
    price: "R$ 597",
    description:
      "Aprenda estratégias de marketing digital específicas para empresas do setor automotivo.",
    modules: [
      "Redes Sociais",
      "Google Ads",
      "Conteúdo Estratégico",
      "Métricas e Análise",
    ],
    checkoutLink: "#checkout-cursos",
  },
]

const normalizeCategory = (category: unknown): CursoCategory => {
  if (category === "curso" || category === "programa") {
    return category
  }

  return "curso"
}

const normalizeFormation = (item: Partial<CursoFormation>, index: number): CursoFormation => {
  return {
    id: typeof item.id === "number" ? item.id : index + 1,
    title: typeof item.title === "string" ? item.title : "",
    category: normalizeCategory(item.category),
    duration: typeof item.duration === "string" ? item.duration : "",
    participants: typeof item.participants === "number" ? item.participants : 0,
    rating: typeof item.rating === "number" ? item.rating : 0,
    price: typeof item.price === "string" ? item.price : "",
    description: typeof item.description === "string" ? item.description : "",
    modules: Array.isArray(item.modules) ? item.modules.filter((module): module is string => typeof module === "string") : [],
    checkoutLink: typeof item.checkoutLink === "string" ? item.checkoutLink : "",
  }
}

export const loadCourseFormations = (): CursoFormation[] => {
  if (typeof window === "undefined") {
    return defaultCourseFormations
  }

  const saved = window.localStorage.getItem(CURSOS_STORAGE_KEY)
  if (!saved) {
    return defaultCourseFormations
  }

  try {
    const parsed = JSON.parse(saved)
    if (!Array.isArray(parsed)) {
      return defaultCourseFormations
    }

    return parsed.map((item, index) => normalizeFormation(item as Partial<CursoFormation>, index))
  } catch {
    return defaultCourseFormations
  }
}

export const persistCourseFormations = (formations: CursoFormation[]): void => {
  if (typeof window === "undefined") {
    return
  }

  window.localStorage.setItem(CURSOS_STORAGE_KEY, JSON.stringify(formations))
}
