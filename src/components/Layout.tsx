
import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Menu, MessageSquare, Network, FileCode, Settings, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();
  
  const routes = [
    { path: "/", label: "Home", icon: Home },
    { path: "/messages", label: "Messages", icon: MessageSquare },
    { path: "/network", label: "Network", icon: Network },
    { path: "/decoder", label: "Decoder", icon: FileCode },
    { path: "/settings", label: "Settings", icon: Settings },
  ];
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-mycelium-soil to-mycelium-forest/80">
      {/* Header */}
      <header className="p-4 border-b border-mycelium-bark/30 bg-mycelium-soil/60 backdrop-blur-sm">
        <div className="container flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-mycelium-glow-blue flex items-center justify-center text-black">
              <Network className="h-5 w-5" />
            </div>
            <h1 className="text-lg font-medium text-mycelium-spore">Mycelium Whisper</h1>
          </div>
          <Button variant="outline" size="icon" className="border-mycelium-bark/30">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </header>
      
      {/* Main content */}
      <main className="flex-1 container py-6">
        {children}
      </main>
      
      {/* Navigation */}
      <nav className="p-4 border-t border-mycelium-bark/30 bg-mycelium-soil/60 backdrop-blur-sm">
        <div className="container">
          <div className="flex justify-between items-center">
            {routes.map((route) => {
              const Icon = route.icon;
              const isActive = location.pathname === route.path;
              
              return (
                <Button
                  key={route.path}
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate(route.path)}
                  className={cn(
                    "flex flex-col items-center h-auto py-2 space-y-1",
                    isActive 
                      ? "text-mycelium-glow-blue" 
                      : "text-mycelium-spore/70 hover:text-mycelium-spore"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-xs">{route.label}</span>
                  {isActive && (
                    <div className="absolute -bottom-4 w-1 h-1 rounded-full bg-mycelium-glow-blue" />
                  )}
                </Button>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}
