import { PlusCircle } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { useModal } from "@/shared/hooks/use-modal";
import CreatePageModal from "@/shared/modals/CreatePageModal";
import type { Project } from "../../../shared/types/project-type";
import { useGetApi } from "@/shared/hooks/api/use-get-api";
import type { BackendResponse } from "@/shared/types/api-types";
import { useEffect, useState } from "react";
import ProjectTable from "../components/ProjectTable";
import { TableSkeleton } from "@/shared/components/ui/table-skeleton";
import { useDeleteApi } from "@/shared/hooks/api/use-delete-api";
import { useNavigate } from "react-router-dom";

const BuilderMainPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const { isPending, error, data, refetch } = useGetApi<BackendResponse<Project[]>>(
    "/projects",
    true
  );
  const { remove } = useDeleteApi("/projects")
  const { openModal } = useModal();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setProjects(data.data);
    }
  }, [data, error]);

  const handleNewPage = () => {
    openModal(<CreatePageModal onCreated={(p) => navigate(`/editor/${p._id}`)} />);
  };

  const handleProjectDelete = async (project: Project) => {
    try {
      await remove(project._id);
      setProjects(prev => prev.filter(p => p._id != project._id));
    } catch (error) {
      console.log("Failed to delete a project");
    }
  }

  const handleSiteEdit = (project: Project) => {
    navigate(`/editor/${project._id}`)
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Website Builder</h1>
          <p className="text-sm text-muted-foreground">
            Create, manage, and edit your web pages.
          </p>
        </div>
        <Button onClick={handleNewPage}>
          <PlusCircle className="w-4 h-4 mr-2" />
          New Page
        </Button>
      </div>

      {isPending ? (
        <TableSkeleton rows={10} columns={4} />
      ) : error ? (
        <div className="text-sm text-destructive flex items-center gap-4">
          <span>Failed to load projects.</span>
          <Button variant="outline" size="sm" onClick={() => refetch()}>
            Retry
          </Button>
        </div>
      ) : projects.length === 0 ? (
        <p className="text-muted-foreground text-sm">No projects yet.</p>
      ) : (
        <ProjectTable projects={projects} onDelete={handleProjectDelete} onEdit={handleSiteEdit} />
      )}
    </div>
  );
};

export default BuilderMainPage;
