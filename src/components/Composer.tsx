
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Send, Braces, Sparkles } from "lucide-react";

interface ComposerProps extends React.HTMLAttributes<HTMLDivElement> {
  onSend: (message: string, strength: number, encrypted: boolean) => void;
}

export function Composer({
  onSend,
  className,
  ...props
}: ComposerProps) {
  const [message, setMessage] = useState("");
  const [strength, setStrength] = useState([5]);
  const [encrypted, setEncrypted] = useState(false);
  
  const handleSend = () => {
    if (!message.trim()) return;
    onSend(message, strength[0], encrypted);
    setMessage("");
  };
  
  return (
    <div className={cn("rounded-xl overflow-hidden border border-mycelium-bark/30 bg-mycelium-soil/40 p-4", className)} {...props}>
      <div className="space-y-4">
        <Textarea
          placeholder="Compose your message to the mycelium network..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="min-h-24 bg-transparent border-mycelium-bark/50 focus-visible:ring-mycelium-glow-blue/50 text-mycelium-spore"
        />
        
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <div className="flex-1 space-y-2">
            <div className="text-sm text-mycelium-spore flex justify-between">
              <span>Signal Strength</span>
              <span className="text-mycelium-glow-blue">{strength[0]}/10</span>
            </div>
            <Slider
              value={strength}
              max={10}
              min={1}
              step={1}
              onValueChange={setStrength}
              className="cursor-pointer"
            />
          </div>
          
          <div className="flex space-x-2">
            <Button
              type="button"
              variant={encrypted ? "default" : "outline"}
              size="icon"
              onClick={() => setEncrypted(!encrypted)}
              className={cn(
                "h-10 w-10",
                encrypted ? "bg-mycelium-glow-purple text-black" : "border-mycelium-bark/50"
              )}
            >
              <Braces className="h-4 w-4" />
              <span className="sr-only">Encrypt Message</span>
            </Button>
            
            <Button
              type="button"
              variant="default"
              size="icon"
              onClick={() => {}}
              className="h-10 w-10 bg-mycelium-forest hover:bg-mycelium-forest/80"
            >
              <Sparkles className="h-4 w-4" />
              <span className="sr-only">Add Effects</span>
            </Button>
            
            <Button
              type="button"
              onClick={handleSend}
              className="bg-mycelium-glow-blue hover:bg-mycelium-glow-blue/80 text-black"
            >
              <Send className="h-4 w-4 mr-2" />
              <span>Send</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
