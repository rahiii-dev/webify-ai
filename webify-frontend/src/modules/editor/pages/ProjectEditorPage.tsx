import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import WebsiteEditor from "../components/WebsiteEditor";
import { useGetApi } from "@/shared/hooks/api/use-get-api";
import PageLoader from "@/shared/components/PageLoader";
import { AiWebsiteBuilderProvider } from "@/shared/context/ai-website-builder-context";

const ProjectEditorPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { isPending, data, error } = useGetApi(`/projects/${id}`);

  useEffect(() => {
    if (error) {
      navigate("/dashboard/website-builder");
    }
  }, [error, navigate]);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/@grapesjs/studio-sdk/style";
    link.id = "grapesjs-style";

    document.head.appendChild(link);

    return () => {
      const existing = document.getElementById("grapesjs-style");
      if (existing) existing.remove();
    };
  }, []);

  if (isPending) {
    return (
      <PageLoader />
    );
  }

  if (!data) return null;

  const project = data.data;

  return (
    <AiWebsiteBuilderProvider project={project}>
      <WebsiteEditor />
    </AiWebsiteBuilderProvider>
  );
};

export default ProjectEditorPage;
