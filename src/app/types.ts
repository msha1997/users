export interface User {
  createdAt: string
  name: string
  avatar: string
  isFavorite: boolean
  id: string
}

export enum Fonts {
  LIGHT = "300",
  REGULAR = "400",
  MEDIUM = "500",
  SEMI_BOLD = "600",
  BOLD = "700",
}
