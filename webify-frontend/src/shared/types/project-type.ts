export interface ProjectContent {
  html: string;
  css: string;
}

export type ProjectStatus = "pending" | "generating" | "failed" | "completed";

export interface Project {
  _id: string;
  user: string;
  name: string;
  prompt: string;
  template?: string;
  palette?: string;
  language?: string;
  content: ProjectContent | null;
  status: ProjectStatus;
  createdAt: Date;
  updatedAt: Date;
}
