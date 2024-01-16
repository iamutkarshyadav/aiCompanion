"use client"

import { BeatLoader } from "react-spinners";
import { useTheme } from "next-themes";
import { useToast } from "./ui/use-toast";
import { cn } from "@/lib/utils";
import { BotAvatar } from "@/components/bot-avatar";

export interface ChatMessageProps {
    role: "system" | "user",
    content?: string;
    isLoading: boolean;
    src?: string;
};

export const ChatMessage = ({
    role,
    content,
    isLoading,
    src
}: ChatMessageProps) => {
    
    const { toast } = useToast();
    const { theme } = useTheme();

    const onCopy = () => {
        if (!content) {
            return;
        }
        toast({
            description: "Message copied to clipboard",
        });
    }

    return (
        <div className={cn(
            "group flex items-start gap-x-3 py-4 w-full",
            role === "user" && "justify-end"
        )} >
            {role !== 'user' && src && <BotAvatar src={src} />}
            <div className="rounded-md px-4 py-2 max-w-sm text-sm bg-primary/10">
                {isLoading
                    ? <BeatLoader
                        size={5}
                        color={theme === "light" ? "black" : "white"}
                    />
                    :content
                }

            </div>
        </div>
  )
}
