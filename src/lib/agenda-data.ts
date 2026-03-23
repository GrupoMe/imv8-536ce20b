export type AgendaEventType = "workshop" | "palestra" | "masterclass" | "webinar"
export type AgendaEventStatus = "inscricoes-abertas" | "lotado"

export interface AgendaEvent {
  id: number
  title: string
  type: AgendaEventType
  date: string
  time: string
  location: string
  participants: number
  maxParticipants: number
  description: string
  status: AgendaEventStatus
}

const AGENDA_STORAGE_KEY = "agenda_events"

export const defaultAgendaEvents: AgendaEvent[] = [
  {
    id: 1,
    title: "Workshop: Liderança Feminina no Setor Automotivo",
    type: "workshop",
    date: "15 de Fevereiro, 2025",
    time: "14:00 - 17:00",
    location: "São Paulo - SP",
    participants: 25,
    maxParticipants: 30,
    description:
      "Desenvolva suas habilidades de liderança e aprenda estratégias específicas para mulheres no setor automotivo.",
    status: "inscricoes-abertas",
  },
  {
    id: 2,
    title: "Palestra: Inovação e Tecnologia Automotiva",
    type: "palestra",
    date: "22 de Fevereiro, 2025",
    time: "19:00 - 21:00",
    location: "Online",
    participants: 150,
    maxParticipants: 200,
    description:
      "Conheça as últimas tendências em tecnologia automotiva e como elas impactam o futuro da indústria.",
    status: "inscricoes-abertas",
  },
  {
    id: 3,
    title: "Masterclass: Gestão de Equipes de Alta Performance",
    type: "masterclass",
    date: "28 de Fevereiro, 2025",
    time: "09:00 - 12:00",
    location: "Rio de Janeiro - RJ",
    participants: 15,
    maxParticipants: 20,
    description:
      "Aprenda técnicas avançadas de gestão e como formar equipes de alta performance no ambiente corporativo.",
    status: "inscricoes-abertas",
  },
  {
    id: 4,
    title: "Webinar: Carreira Internacional no Setor Automotivo",
    type: "webinar",
    date: "05 de Março, 2025",
    time: "20:00 - 21:30",
    location: "Online",
    participants: 80,
    maxParticipants: 100,
    description:
      "Descubra oportunidades de carreira internacional e como se preparar para trabalhar em empresas globais.",
    status: "inscricoes-abertas",
  },
  {
    id: 5,
    title: "Workshop: Networking Estratégico para Mulheres",
    type: "workshop",
    date: "10 de Março, 2025",
    time: "15:00 - 18:00",
    location: "Belo Horizonte - MG",
    participants: 20,
    maxParticipants: 25,
    description:
      "Aprenda técnicas de networking eficazes e construa uma rede de contatos sólida.",
    status: "inscricoes-abertas",
  },
  {
    id: 6,
    title: "Masterclass: Transformação Digital na Indústria",
    type: "masterclass",
    date: "12 de Março, 2025",
    time: "10:00 - 13:00",
    location: "Online",
    participants: 12,
    maxParticipants: 15,
    description:
      "Entenda como liderar processos de transformação digital em empresas do setor automotivo.",
    status: "lotado",
  },
]

const normalizeType = (type: unknown): AgendaEventType => {
  if (type === "workshop" || type === "palestra" || type === "masterclass" || type === "webinar") {
    return type
  }

  return "workshop"
}

const normalizeEvent = (event: Partial<AgendaEvent>, index: number): AgendaEvent => {
  return {
    id: typeof event.id === "number" ? event.id : index + 1,
    title: typeof event.title === "string" ? event.title : "",
    type: normalizeType(event.type),
    date: typeof event.date === "string" ? event.date : "",
    time: typeof event.time === "string" ? event.time : "",
    location: typeof event.location === "string" ? event.location : "",
    participants: typeof event.participants === "number" ? event.participants : 0,
    maxParticipants: typeof event.maxParticipants === "number" ? event.maxParticipants : 20,
    description: typeof event.description === "string" ? event.description : "",
    status: event.status === "lotado" ? "lotado" : "inscricoes-abertas",
  }
}

export const loadAgendaEvents = (): AgendaEvent[] => {
  if (typeof window === "undefined") {
    return defaultAgendaEvents
  }

  const saved = window.localStorage.getItem(AGENDA_STORAGE_KEY)
  if (!saved) {
    return defaultAgendaEvents
  }

  try {
    const parsed = JSON.parse(saved)
    if (!Array.isArray(parsed)) {
      return defaultAgendaEvents
    }

    return parsed.map((event, index) => normalizeEvent(event as Partial<AgendaEvent>, index))
  } catch {
    return defaultAgendaEvents
  }
}

export const persistAgendaEvents = (events: AgendaEvent[]): void => {
  if (typeof window === "undefined") {
    return
  }

  window.localStorage.setItem(AGENDA_STORAGE_KEY, JSON.stringify(events))
}
