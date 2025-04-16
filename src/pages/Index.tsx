
import React from "react";
import { Layout } from "@/components/Layout";
import { NetworkVisualizer } from "@/components/NetworkVisualizer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Info, Pin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <Layout>
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-mycelium-spore">Mycelium Whisper</h1>
          <p className="text-mycelium-spore/70 max-w-md mx-auto">
            Connect, communicate, and decode messages through the living mycelium network
          </p>
        </div>
        
        <div className="rounded-xl overflow-hidden border border-mycelium-bark/30 bg-mycelium-soil/40 p-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-mycelium-spore mb-2">Network Status</h2>
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-mycelium-glow-blue/80 text-black">Connected</Badge>
                <span className="text-sm text-mycelium-spore/70">12 active nodes</span>
              </div>
              
              <NetworkVisualizer connections={12} active={true} className="mb-4" />
              
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="border-mycelium-bark/50 text-mycelium-spore">
                  <Pin className="h-3 w-3 mr-1" />
                  Forest Hub
                </Badge>
                <Badge variant="outline" className="border-mycelium-bark/50 text-mycelium-spore">Signal: Strong</Badge>
                <Badge variant="outline" className="border-mycelium-bark/50 text-mycelium-spore">Nodes: 12</Badge>
              </div>
              
              <div className="space-y-3">
                <Button
                  onClick={() => navigate("/messages")}
                  className="w-full bg-mycelium-forest text-mycelium-spore hover:bg-mycelium-forest/80"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  View Messages
                </Button>
                
                <Button
                  onClick={() => navigate("/network")}
                  className="w-full bg-mycelium-glow-blue text-black hover:bg-mycelium-glow-blue/80"
                >
                  <Network className="h-4 w-4 mr-2" />
                  Explore Network
                </Button>
              </div>
            </div>
            
            <div className="flex-1 space-y-4">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-mycelium-spore">Recent Activity</h2>
                <p className="text-sm text-mycelium-spore/70">
                  Latest signals from the mycelium network
                </p>
              </div>
              
              <div className="space-y-3">
                {[
                  { title: "New message received", time: "2 minutes ago", strength: "Strong" },
                  { title: "Network expanded", time: "1 hour ago", strength: "Medium" },
                  { title: "Signal pattern detected", time: "3 hours ago", strength: "Weak" },
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="p-3 rounded-lg border border-mycelium-bark/30 bg-mycelium-soil/60 flex justify-between items-center"
                  >
                    <div>
                      <h3 className="text-sm font-medium text-mycelium-spore">{item.title}</h3>
                      <p className="text-xs text-mycelium-spore/70">{item.time}</p>
                    </div>
                    <Badge 
                      className={cn(
                        item.strength === "Strong" && "bg-mycelium-glow-blue text-black",
                        item.strength === "Medium" && "bg-mycelium-glow-purple text-black",
                        item.strength === "Weak" && "bg-mycelium-spore text-mycelium-soil"
                      )}
                    >
                      {item.strength}
                    </Badge>
                  </div>
                ))}
              </div>
              
              <div className="p-3 rounded-lg border border-mycelium-bark/30 bg-mycelium-soil/40">
                <div className="flex items-start gap-3">
                  <Info className="h-5 w-5 text-mycelium-glow-purple flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium text-mycelium-spore">Getting Started</h3>
                    <p className="text-xs text-mycelium-spore/70 mb-2">
                      Learn how to send and receive messages through mycelium networks
                    </p>
                    <Button variant="link" className="h-auto p-0 text-xs text-mycelium-glow-blue">
                      View Tutorial <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;

import { cn } from "@/lib/utils";
import { MessageSquare, Network } from "lucide-react";
