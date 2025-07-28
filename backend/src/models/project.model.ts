import mongoose, { Schema, Document, Model } from "mongoose";

export interface ProjectContent {
  html: string;
  css: string;
}

export const PROJECT_STATUSES = ["pending", "generating", "failed", "completed"] as const;

export type ProjectStatus = (typeof PROJECT_STATUSES)[number];


export interface IProject extends Document {
  user: string;
  name: string;
  prompt: string;
  template?: string;
  palette?: string;
  language: string;
  content: ProjectContent | null;
  status: ProjectStatus;
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema: Schema<IProject> = new Schema(
  {
    user: { type: String, required: true },
    name: { type: String, required: true },
    prompt: { type: String, required: true },
    template: { type: String },
    palette: { type: String },
    content: {
      html: { type: String, default: "" },
      css: { type: String, default: "" },
      js: { type: String, default: "" },
    },
    status: {
      type: String,
      enum: PROJECT_STATUSES,
      default: "pending",
    },
    language: { type: String, default: "en" },
  },
  {
    timestamps: true,
  }
);

export const Project: Model<IProject> = mongoose.model<IProject>("Project", ProjectSchema);
