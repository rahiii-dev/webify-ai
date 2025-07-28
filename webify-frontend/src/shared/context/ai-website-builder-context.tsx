import React, { createContext, useCallback, useContext, useState } from 'react';
import { DEFAULT_AI_MODEL } from '../utils/constants';
import type { Project } from '@/shared/types/project-type';
import { usePostApi } from '@/shared/hooks/api/use-post-api';
import type { AIGenerationResponse } from '../types/ai-type';
import type { BackendResponse } from '../types/api-types';

interface AiWebsiteBuilderContextValue {
  isGenerating: boolean;
  response: AIGenerationResponse | null;
  error: string | null;
  aiModel: string;
  currentProject: Project;
  triggerGeneration: (prompt: string) => Promise<void>;
  setCurrentProject: (project: Project) => void;
  setCurrentAiModel: (modelId: string) => void;
}

const AiWebsiteBuilderContext = createContext<AiWebsiteBuilderContextValue | null>(null);

export const AiWebsiteBuilderProvider = ({
  children,
  project,
}: {
  children: React.ReactNode;
  project: Project;
}) => {
  const [selectedProject, setSelectedProject] = useState<Project>(project);
  const [aiModel, setAiModel] = useState<string>(DEFAULT_AI_MODEL);
  const [response, setResponse] = useState<AIGenerationResponse | null>(null);

  const { post: generate, isPending: isGenerating, error } = usePostApi<BackendResponse<AIGenerationResponse>>('/ai/website/generate');

  const triggerGeneration = useCallback(async (prompt: string) => {
    if (!selectedProject) {
      return;
    }
    setResponse(null);
    const res = await generate({ projectId: selectedProject._id, model: aiModel, prompt });
    setResponse(res?.data!);
  }, [selectedProject, aiModel]);

  const setCurrentProject = (project: Project) => {
    setSelectedProject(project);
  };

  const setCurrentAiModel = (modelId: string) => {
    setAiModel(modelId);
  };

  return (
    <AiWebsiteBuilderContext.Provider
      value={{
        isGenerating,
        response,
        error,
        aiModel,
        currentProject: selectedProject,
        triggerGeneration,
        setCurrentProject,
        setCurrentAiModel,
      }}
    >
      {children}
    </AiWebsiteBuilderContext.Provider>
  );
};

export const useAiWebsiteBuilder = () => {
  const context = useContext(AiWebsiteBuilderContext);
  if (!context) throw new Error('useAiWebsiteBuilder must be used within a AiWebsiteBuilderProvider');
  return context;
};
