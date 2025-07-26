import mongoose, { Schema, Document, Model } from "mongoose";

export interface IProject extends Document {
  user: string;
  name: string;
  prompt: string;
  template?: string;
  palette?: string;
  language: string;
  html?: string;
  css?: string;
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
    language: { type: String, default: "en" },
    html: { type: String },
    css: { type: String },
  },
  {
    timestamps: true, 
  }
);

export const Project: Model<IProject> = mongoose.model<IProject>("Project", ProjectSchema);
