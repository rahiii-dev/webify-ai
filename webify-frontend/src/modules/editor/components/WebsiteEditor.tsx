import StudioEditor from '@grapesjs/studio-sdk/react';
import CustomLeftSidebar from './CustomLeftSidebar';
import type { Editor } from 'grapesjs';
import { useAiWebsiteBuilder } from '@/shared/context/ai-website-builder-context';


const WebsiteEditor = () => {
    const {currentProject} = useAiWebsiteBuilder();

    const loadInitialPages = (editor: Editor) => {
        if(!currentProject) return;
        editor.setComponents(currentProject.content?.html || "");
        editor.setStyle(currentProject.content?.css || "");
    }

    return (
        <StudioEditor
            options={{
                licenseKey: 'your-license-key-here',
                onReady: (editor) => {
                    editor.runCommand('studio:sidebarRight:toggle');
                    loadInitialPages(editor);
                },

                layout: {
                    default: {
                        type: 'row',
                        className: "h-screen",
                        children: [
                            // Left Sidebar
                            {
                                type: 'column',
                                children: [
                                    {
                                        type: "custom",
                                        id: "ai-container",
                                        className: "w-[25vw] max-w-[400px] !h-full",
                                        component: ({ editor }) => (
                                            <CustomLeftSidebar editor={editor} />
                                        ),
                                    }
                                ],
                            },

                            // Top Sidebar for Canvas
                            {
                                type: 'canvasSidebarTop',
                                className: "min-h-screen",
                                sidebarTop: {
                                    leftContainer: {
                                        buttons: [
                                            {
                                                id: "right-sidebar-toggler",
                                                label: "Tools",
                                                icon: "viewDashboard",
                                                tooltip: "Open Tools",
                                                className: `text-left 
                                                        text-sm
                                                        text-white 
                                                        font-medium 
                                                        bg-primary 
                                                        hover:bg-primary/90 
                                                        rounded 
                                                        transition 
                                                        duration-150 
                                                        ease-in-out
                                                    `,
                                                onClick: ({ editor }) => {
                                                    editor.runCommand("studio:sidebarRight:toggle");
                                                },
                                            }

                                        ],
                                    },
                                },
                            },

                            // Right Sidebar
                            {
                                type: 'sidebarRight',
                                style: { width: 300 },
                                children: [
                                    {
                                        type: "tabs",
                                        id: "sidebar-right-tabs",
                                        value: "blocks",
                                        tabs: [
                                            {
                                                id: "blocks",
                                                label: "Components",
                                                children: [
                                                    {
                                                        type: "panelBlocks"
                                                    }
                                                ]
                                            },
                                            {
                                                id: "styles",
                                                label: "Styles",
                                                children: [
                                                    {
                                                        type: "column",
                                                        style: { height: "100%" },
                                                        children: [
                                                            { type: "panelSelectors" },
                                                            { type: "panelStyles" },
                                                        ],
                                                    }
                                                ]
                                            },
                                            {
                                                id: "props",
                                                label: "Properties",
                                                children: {
                                                    type: "panelProperties",
                                                },
                                            },
                                        ]
                                    }
                                ],
                            },
                        ],
                    },
                },
            }}
        />
    );
};

export default WebsiteEditor;
