
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface NetworkVisualizerProps extends React.HTMLAttributes<HTMLDivElement> {
  connections: number;
  active: boolean;
}

export function NetworkVisualizer({
  connections,
  active,
  className,
  ...props
}: NetworkVisualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    const width = canvas.width;
    const height = canvas.height;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Set center point
    const centerX = width / 2;
    const centerY = height / 2;
    
    // Draw mycelium network
    ctx.strokeStyle = active ? "#7DF9FF" : "#5C4033";
    ctx.lineWidth = 1.5;
    
    // Draw connections
    const nodeCount = Math.min(connections, 20);
    const nodes: {x: number, y: number}[] = [];
    
    // Create random nodes
    for (let i = 0; i < nodeCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * (width / 2 - 50) + 50;
      
      nodes.push({
        x: centerX + Math.cos(angle) * distance,
        y: centerY + Math.sin(angle) * distance
      });
    }
    
    // Draw connections from center to nodes
    nodes.forEach(node => {
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      
      // Create a curved path for more organic look
      const controlX = (centerX + node.x) / 2 + (Math.random() - 0.5) * 50;
      const controlY = (centerY + node.y) / 2 + (Math.random() - 0.5) * 50;
      
      ctx.quadraticCurveTo(controlX, controlY, node.x, node.y);
      ctx.stroke();
      
      // Draw node
      ctx.beginPath();
      ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
      ctx.fillStyle = active ? "#B19CD9" : "#8B6B4A";
      ctx.fill();
    });
    
    // Draw some connections between nodes for a network effect
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (Math.random() > 0.7) continue; // Only draw some connections
        
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        
        const midX = (nodes[i].x + nodes[j].x) / 2 + (Math.random() - 0.5) * 20;
        const midY = (nodes[i].y + nodes[j].y) / 2 + (Math.random() - 0.5) * 20;
        
        ctx.quadraticCurveTo(midX, midY, nodes[j].x, nodes[j].y);
        ctx.stroke();
      }
    }
    
    // Draw center node (root)
    ctx.beginPath();
    ctx.arc(centerX, centerY, 8, 0, Math.PI * 2);
    ctx.fillStyle = active ? "#7DF9FF" : "#D2B48C";
    ctx.fill();
    
  }, [connections, active]);
  
  return (
    <div className={cn("relative rounded-lg overflow-hidden", className)} {...props}>
      <canvas
        ref={canvasRef}
        width={600}
        height={400}
        className="w-full h-full bg-mycelium-soil/20"
      />
      {active && (
        <div className="absolute inset-0 bg-mycelium-glow-blue/5 animate-pulse" />
      )}
    </div>
  );
}
