import { Plus } from "lucide-react";
import WebPageList from "../components/WebPageList";
import { useNavigate } from "react-router-dom";
import { Button } from "@/shared/components/ui/button";

// Dummy data — replace this with real fetched pages
const pages = [
    {
        id: "1",
        title: "Home Page",
        createdAt: "2024-07-01",
    },
    {
        id: "2",
        title: "About Us",
        createdAt: "2024-07-10",
    },
];

const WebPageMain = () => {
    const navigate = useNavigate();

    return (
        <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-foreground">Website Builder</h1>
                    <p className="text-sm text-muted-foreground">
                        Create, manage, and edit your web pages.
                    </p>
                </div>
                <Button onClick={() => navigate("/builder/new")}>
                    <Plus className="w-4 h-4 mr-2" />
                    New Page
                </Button>
            </div>

            <WebPageList pages={pages} />
        </div>

    );
};

export default WebPageMain;
