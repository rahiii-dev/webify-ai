import StudioEditor from '@grapesjs/studio-sdk/react';
import CustomLeftSidebar from './CustomLeftSidebar';
import { useAiWebsiteBuilder } from '@/shared/context/ai-website-builder-context';

interface WebsiteEditorProps {
    onSave?: ({html, css}: {html: string, css: string}) => void;
}


const WebsiteEditor = ({onSave}: WebsiteEditorProps) => {
    const { currentProject } = useAiWebsiteBuilder();

    return (
        <StudioEditor
            options={{
                licenseKey: import.meta.env.VITE_GRAPEJS_LICENCE_KEY,
                onReady: (editor) => {
                    editor.runCommand('studio:sidebarRight:toggle');
                    // loadInitialPages(editor);
                },
                storage: {
                    type: "self",
                    autosaveChanges: 5,
                    onLoad: async () => {
                        return {
                            project: {
                                pages: [
                                    { 
                                        name: 'Home', 
                                        component: currentProject.content?.html || '<h1>New project</h1>',
                                        style: currentProject.content?.css
                                    },
                                ]
                            }
                        };
                    },
                    onSave: async ({ editor }) => {
                        const html = editor.getHtml() || ""
                        const css = editor.getCss() || "";
                        onSave?.({html, css});
                    },
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
