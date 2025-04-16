
import React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface MessageCardProps extends React.HTMLAttributes<HTMLDivElement> {
  sender: string;
  timestamp: string;
  message: string;
  decoded: boolean;
  strength: number; // 1-10
}

export function MessageCard({
  sender,
  timestamp,
  message,
  decoded,
  strength,
  className,
  ...props
}: MessageCardProps) {
  // Calculate blur amount based on signal strength and decoded status
  const getBlurAmount = () => {
    if (decoded) return "blur-none";
    const blurLevel = Math.max(10 - strength, 0);
    return `blur-[${blurLevel}px]`;
  };

  // Get color based on signal strength
  const getStrengthColor = () => {
    if (strength >= 8) return "bg-mycelium-glow-blue text-black";
    if (strength >= 5) return "bg-mycelium-glow-purple text-black";
    return "bg-mycelium-spore text-mycelium-soil";
  };
  
  return (
    <Card className={cn("backdrop-blur-sm bg-opacity-80 border-mycelium-bark/50 overflow-hidden", className)} {...props}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-md font-medium text-mycelium-spore">{sender}</CardTitle>
          <Badge className={cn("text-xs", getStrengthColor())}>
            Signal: {strength}/10
          </Badge>
        </div>
        <CardDescription className="text-xs opacity-70">{timestamp}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className={cn("text-sm font-medium transition-all duration-300", 
          !decoded && "select-none", 
          getBlurAmount()
        )}>
          {message}
        </p>
        {!decoded && (
          <div className="mt-2 text-xs text-mycelium-glow-purple">
            Message requires decoding
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-1 flex justify-end">
        {!decoded && (
          <Badge variant="outline" className="text-xs cursor-pointer hover:bg-mycelium-glow-blue/20 border-mycelium-glow-blue/50">
            Decode Signal
          </Badge>
        )}
      </CardFooter>
    </Card>
  );
}
