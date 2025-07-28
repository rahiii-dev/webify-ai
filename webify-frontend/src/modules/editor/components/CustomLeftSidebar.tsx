import type { Editor } from 'grapesjs';
import { useEffect } from 'react';
import Logo from '@/shared/components/Logo';
import AiChatBox from './AIChatBox';
import { useAiWebsiteBuilder } from '@/shared/context/ai-website-builder-context';

interface CustomLeftSidebarProps {
    editor: Editor;
}

const CustomLeftSidebar = ({ editor }: CustomLeftSidebarProps) => {
    const { currentProject, triggerGeneration, response } = useAiWebsiteBuilder();

    useEffect(() => {
        if (currentProject.status === 'pending' || currentProject.status === "failed") {
            triggerGeneration(currentProject.prompt);
        }
    }, [currentProject]);

    useEffect(() => {
        if (response?.needs_followup === false) {
            editor.setComponents(response.html || "");
            editor.setStyle(response.css || "");
        }
    }, [response])

    return (
        <div className="size-full flex flex-col">
            <div className="border-b p-2 border-gray-500">
                <Logo size="sm" />
            </div>

            <AiChatBox />
        </div>
    );
};

export default CustomLeftSidebar;
