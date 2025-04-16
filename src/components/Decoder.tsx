
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Brain, Play, Radio, Wand2 } from "lucide-react";

interface DecoderProps extends React.HTMLAttributes<HTMLDivElement> {
  onDecode: () => void;
}

export function Decoder({
  onDecode,
  className,
  ...props
}: DecoderProps) {
  const [decoding, setDecoding] = useState(false);
  const [progress, setProgress] = useState(0);
  
  const handleDecode = () => {
    setDecoding(true);
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15;
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setDecoding(false);
            onDecode();
          }, 500);
          return 100;
        }
        
        return newProgress;
      });
    }, 300);
  };
  
  return (
    <div
      className={cn(
        "p-4 rounded-xl border border-mycelium-bark/30 bg-mycelium-soil/40",
        decoding && "border-mycelium-glow-blue/50",
        className
      )}
      {...props}
    >
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <div className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center",
            decoding 
              ? "bg-mycelium-glow-blue text-black animate-pulse" 
              : "bg-mycelium-bark/50"
          )}>
            <Brain className="h-6 w-6" />
          </div>
          
          <div className="flex-1">
            <h3 className="text-lg font-medium text-mycelium-spore">Mycelium Signal Decoder</h3>
            <p className="text-sm text-mycelium-spore/70">
              {decoding 
                ? "Interpreting mycelium signals..." 
                : "Decode encrypted mycelium communications"}
            </p>
          </div>
        </div>
        
        {decoding && (
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-mycelium-spore/70">
              <span>Decoding progress</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2 bg-mycelium-bark/30" />
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="p-1 rounded bg-mycelium-soil/60 text-mycelium-glow-blue animate-pulse">Signal pattern recognized</span>
              <span className="p-1 rounded bg-mycelium-soil/60 text-mycelium-spore">Chemical composition analysis</span>
              <span className="p-1 rounded bg-mycelium-soil/60 text-mycelium-glow-purple animate-pulse">Electrical signal mapping</span>
            </div>
          </div>
        )}
        
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="border-mycelium-bark/50 text-mycelium-spore"
            disabled={decoding}
          >
            <Radio className="h-4 w-4 mr-2" />
            <span>Scan</span>
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            className="border-mycelium-bark/50 text-mycelium-spore"
            disabled={decoding}
          >
            <Wand2 className="h-4 w-4 mr-2" />
            <span>Auto-tune</span>
          </Button>
          
          <Button
            variant={decoding ? "default" : "default"}
            size="sm"
            className={cn(
              decoding 
                ? "bg-mycelium-glow-purple text-black" 
                : "bg-mycelium-glow-blue text-black"
            )}
            onClick={handleDecode}
            disabled={decoding}
          >
            <Play className="h-4 w-4 mr-2" />
            <span>{decoding ? "Decoding..." : "Start Decoder"}</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
