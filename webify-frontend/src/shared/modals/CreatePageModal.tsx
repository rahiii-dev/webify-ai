import { ProjectForm } from "../components/forms/ProjectForm";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/shared/components/ui/dialog";
import { useModal } from "../hooks/use-modal";
import { usePostApi } from "../hooks/api/use-post-api";
import { toast } from "sonner";
import type { Project } from "@/shared/types/project-type";

interface CreatePageModalProps {
  onCreated?: (project: Project) => void;
}

const CreatePageModal = ({onCreated}: CreatePageModalProps) => {
  const { open, setOpen } = useModal();
  const { isPending, post } = usePostApi("/projects");


  const handleSubmit = async (data: any) => {
    const response = await post(data);

    if (response) {
      toast.success("Project created successfully");
      setOpen(false);
      onCreated?.(response.data); 
    } else {
      toast.error("Failed to create project. Please try again.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Create New Page</DialogTitle>
        </DialogHeader>
        <ProjectForm
          onSubmit={handleSubmit}
          isSubmitting={isPending}
        />
      </DialogContent>
    </Dialog>
  );
};


export default CreatePageModal;
