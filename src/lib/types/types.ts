export interface User {
  id: string;
  name: string;
  email: string;
  relations?: Relation[];
  createdAt: string;
  updatedAt: string;
}

export interface Relation {
  id: string;
  userId: string;
  name: string;
  birthday?: string;
  age?: number;
  job?: string;
  gender?: "MALE" | "FEMALE" | "OTHER";
  phone?: string;
  notes?: string;
  tags?: string[];
  lastContact?: string;
  importance?: "VERY_LOW" | "LOW" | "MEDIUM" | "HIGH" | "VERY_HIGH";
  user?: User;
  type?: RelationTypes;
  level?: RelationLevels;
  contactFrequency?: ContactFrequency;
  isActive?: boolean;
  createdAt: string;
  updatedAt: string;
}

export enum RelationTypes { // user will can create more types
  FAMILY = "FAMILY",
  WORK = "WORK",
  SCHOOL = "SCHOOL",
  OTHER = "OTHER",
}

export enum RelationLevels { // user will can create more levels
  BEST_FRIENDS = "BEST_FRIENDS",
  CLOSE_FRIEND = "CLOSE_FRIEND",
  FRIEND = "FRIEND",
  PARTNER = "PARTNER",
  ACQUAINTANCE = "ACQUAINTANCE",
}

export enum ContactFrequency {
  DAILY = "DAILY",
  WEEKLY = "WEEKLY",
  BIWEEKLY = "BIWEEKLY",
  MONTHLY = "MONTHLY",
  QUARTERLY = "QUARTERLY",
  YEARLY = "YEARLY",
  SPECIAL_OCCASIONS = "SPECIAL_OCCASIONS",
}
