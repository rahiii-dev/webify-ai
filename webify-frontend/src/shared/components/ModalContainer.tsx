import { Dialog, DialogContent } from "@/shared/components/ui/dialog";
import { useModal } from "../hooks/use-modal";

export const ModalContainer = () => {
  const { open, setOpen, content } = useModal();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-2xl">{content}</DialogContent>
    </Dialog>
  );
};
