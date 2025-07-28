import { useEffect, useState } from "react";
import { useAiWebsiteBuilder } from "@/shared/context/ai-website-builder-context";
import Conversation from "./Conversation";
import Input, { type InputStatus } from "./Input";
import type { AIChatMessage } from "../../types";
import { useGetApi } from "@/shared/hooks/api/use-get-api";
import { useUser } from "@clerk/clerk-react";
import { Spinner } from "@/shared/components/ui/kibo-ui/spinner";
import type { BackendResponse } from "@/shared/types/api-types";
import type { ChatMessage } from "@/shared/types/chat-type";
import { generateUniqueId } from "@/shared/utils/helpers";
import { Button } from "@/shared/components/ui/button";

const AIChatBox = () => {
  const { user } = useUser();
  const { aiModel, response, currentProject, setCurrentAiModel, triggerGeneration, isGenerating, error: generatingError } = useAiWebsiteBuilder();
  const [messages, setMessages] = useState<AIChatMessage[]>([]);
  const { isPending: chatLoading, data: chatData, refetch: loadChats, error: chatError } = useGetApi<BackendResponse<ChatMessage[]>>(`/chats/project/${currentProject._id}`, true, false);
  const [inputStatus, setInputStatus] = useState<InputStatus>("ready");

  useEffect(() => {
    if (!currentProject) return;

    if (currentProject.status === "pending") {
      const id = generateUniqueId();
      setMessages((prev) => [
        ...prev,
        {
          id,
          from: "user",
          content: currentProject.prompt,
          avatar: user?.imageUrl || "",
        },
      ]);
    } else {
      loadChats();
    }

  }, [currentProject])

  useEffect(() => {
    if (chatData) {
      const formattedMessages = chatData.data.map((message) => ({
        id: message._id,
        from: message.from,
        content: message.content,
        avatar: message.from === "user" ? user?.imageUrl || "" : "/sparkle.svg",
      }));

      setMessages(formattedMessages);
    }
  }, [chatData])

  useEffect(() => {
    if (!response) return;

    let aiContent = "";

    if ("needs_followup" in response) {
      aiContent = response.needs_followup
        ? response.question
        : response.summary;
      const id = generateUniqueId();

      setMessages((prev) => [
        ...prev,
        {
          id,
          from: "assistant",
          content: aiContent,
          avatar: "/sparkle.svg",
        },
      ]);
    }

    setInputStatus("ready");
  }, [response]);

  useEffect(() => {
    if (isGenerating) {
      setInputStatus("streaming");
    } else {
      setInputStatus("ready");
    }
  }, [isGenerating])

  useEffect(() => {
    if (generatingError) {
      const id = generateUniqueId();

      setMessages((prev) => [
        ...prev,
        {
          id,
          from: "assistant",
          content: "⚠️ Failed to generate a response. Please try again. ⚠️",
          avatar: "/sparkle.svg",
        },
      ]);
    }
  }, [generatingError])


  const handleUserInput = (message: string) => {
    setInputStatus("submitted");
    triggerGeneration(message);
    const id = generateUniqueId();
    setMessages((prev) => [
      ...prev,
      {
        id,
        from: "user",
        content: message,
        avatar: user?.imageUrl || "",
      },
    ]);
  }

  const handleModelChange = (model: string) => {
    setCurrentAiModel(model);
  }

  return (
    <div className="flex flex-col flex-1 min-h-0">
      {/* Scrollable chat area */}
      <div className="flex-1 min-h-0 overflow-y-auto">
        {chatLoading ? (
          <div className="h-full flex items-center justify-center">
            <Spinner />
          </div>
        ) : chatError ? (
          <div className="h-full flex flex-col items-center justify-center space-y-4 text-center p-4">
            <p className="text-destructive">⚠️ Failed to load chat history.</p>
            <Button onClick={() => loadChats()} variant="outline">
              Reload Chat
            </Button>
          </div>
        ) : (
          <Conversation messages={messages} isGenerating={isGenerating} />
        )}

      </div>

      {/* Sticky input at bottom */}
      <div>
        <Input
          status={inputStatus}
          defaultModel={aiModel}
          onSendPrompt={handleUserInput}
          onModelChange={handleModelChange}
        />
      </div>
    </div>
  );
};

export default AIChatBox;
