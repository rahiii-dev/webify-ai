export interface Project {
  _id: string;
  user: string;
  name: string;
  prompt: string;
  template?: string;
  palette?: string;
  language?: string;
  html?: string;
  css?: string;
  createdAt: Date;
  updatedAt: Date;
}
