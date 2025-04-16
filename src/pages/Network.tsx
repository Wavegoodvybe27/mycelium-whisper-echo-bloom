
import React, { useState } from "react";
import { Layout } from "@/components/Layout";
import { NetworkVisualizer } from "@/components/NetworkVisualizer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Activity, BarChart3, Download, MapPin, Network as NetworkIcon, Plus, RefreshCw, Signal } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const networkNodes = [
  { id: "1", name: "Forest Hub", type: "Primary", strength: 95, status: "Active" },
  { id: "2", name: "Eastern Oak", type: "Secondary", strength: 78, status: "Active" },
  { id: "3", name: "Mushroom Colony", type: "Tertiary", strength: 62, status: "Active" },
  { id: "4", name: "Underground Net", type: "Secondary", strength: 85, status: "Active" },
  { id: "5", name: "Western Edge", type: "Tertiary", strength: 41, status: "Weak" },
];

const Network = () => {
  const [activeNode, setActiveNode] = useState(networkNodes[0]);
  const [scanning, setScanning] = useState(false);
  
  const handleScan = () => {
    setScanning(true);
    setTimeout(() => setScanning(false), 3000);
  };
  
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-mycelium-spore">Network Map</h1>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              className="border-mycelium-bark/50 text-mycelium-spore"
              onClick={handleScan}
              disabled={scanning}
            >
              {scanning ? (
                <>
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                  <span>Scanning...</span>
                </>
              ) : (
                <>
                  <RefreshCw className="h-4 w-4 mr-2" />
                  <span>Scan Network</span>
                </>
              )}
            </Button>
            
            <Button
              variant="default"
              size="sm"
              className="bg-mycelium-forest text-mycelium-spore hover:bg-mycelium-forest/80"
            >
              <Plus className="h-4 w-4 mr-2" />
              <span>Add Node</span>
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <Card className="border-mycelium-bark/30 bg-mycelium-soil/40">
              <CardHeader className="pb-2">
                <CardTitle className="text-mycelium-spore">Mycelium Network Visualization</CardTitle>
                <CardDescription>Interactive map of connected mycelium nodes</CardDescription>
              </CardHeader>
              <CardContent>
                <NetworkVisualizer
                  connections={networkNodes.length}
                  active={true}
                  className="h-[400px] cursor-pointer"
                />
                
                <div className="mt-4 flex justify-between items-center text-sm text-mycelium-spore/70">
                  <div className="flex items-center">
                    <Signal className="h-4 w-4 mr-1" />
                    <span>5 active nodes</span>
                  </div>
                  
                  <Button variant="link" className="h-auto p-0 text-mycelium-glow-blue">
                    <Download className="h-4 w-4 mr-1" />
                    <span>Export Map</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="border-mycelium-bark/30 bg-mycelium-soil/40">
                <CardHeader className="pb-2">
                  <CardTitle className="text-mycelium-spore text-base">Signal Strength</CardTitle>
                  <CardDescription>Current network performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="space-y-1">
                        <div className="text-3xl font-bold text-mycelium-glow-blue">85%</div>
                        <div className="text-xs text-mycelium-spore/70">Overall signal quality</div>
                      </div>
                      <Activity className="h-12 w-12 text-mycelium-glow-blue opacity-70" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-mycelium-spore/70">
                        <span>Signal stability</span>
                        <span>92%</span>
                      </div>
                      <Progress value={92} className="h-1 bg-mycelium-bark/30" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-mycelium-spore/70">
                        <span>Connection strength</span>
                        <span>78%</span>
                      </div>
                      <Progress value={78} className="h-1 bg-mycelium-bark/30" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-mycelium-bark/30 bg-mycelium-soil/40">
                <CardHeader className="pb-2">
                  <CardTitle className="text-mycelium-spore text-base">Network Activity</CardTitle>
                  <CardDescription>Message traffic over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center h-[120px]">
                    <BarChart3 className="h-32 w-32 text-mycelium-bark/50" />
                  </div>
                  
                  <div className="mt-2 space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-mycelium-spore/70">Messages today</span>
                      <span className="text-mycelium-spore">14</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-mycelium-spore/70">Peak activity</span>
                      <span className="text-mycelium-spore">10:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-mycelium-spore/70">Active connections</span>
                      <span className="text-mycelium-spore">8</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="border-mycelium-bark/30 bg-mycelium-soil/40">
              <CardHeader className="pb-2">
                <CardTitle className="text-mycelium-spore">Connected Nodes</CardTitle>
                <CardDescription>Active mycelium communication points</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
                  {networkNodes.map(node => (
                    <div
                      key={node.id}
                      onClick={() => setActiveNode(node)}
                      className={cn(
                        "p-3 rounded-lg border cursor-pointer transition-colors",
                        activeNode.id === node.id
                          ? "border-mycelium-glow-blue/50 bg-mycelium-soil/80"
                          : "border-mycelium-bark/30 bg-mycelium-soil/60 hover:border-mycelium-bark/60"
                      )}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-sm font-medium text-mycelium-spore flex items-center">
                            {activeNode.id === node.id && (
                              <span className="w-1.5 h-1.5 rounded-full bg-mycelium-glow-blue mr-1.5 animate-pulse" />
                            )}
                            {node.name}
                          </h3>
                          <p className="text-xs text-mycelium-spore/70">{node.type} Node</p>
                        </div>
                        <Badge 
                          className={cn(
                            "text-xs",
                            node.status === "Active" 
                              ? "bg-mycelium-glow-blue text-black" 
                              : "bg-mycelium-spore text-mycelium-soil"
                          )}
                        >
                          {node.status}
                        </Badge>
                      </div>
                      {activeNode.id === node.id && (
                        <div className="mt-2">
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs text-mycelium-spore/70">
                              <span>Signal strength</span>
                              <span>{node.strength}%</span>
                            </div>
                            <Progress value={node.strength} className="h-1 bg-mycelium-bark/30" />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-mycelium-bark/30 bg-mycelium-soil/40">
              <CardHeader className="pb-2">
                <CardTitle className="text-mycelium-spore">Current Node Info</CardTitle>
                <CardDescription>{activeNode.name} details</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 rounded-lg border border-mycelium-bark/30 bg-mycelium-soil/60">
                    <div className="flex items-center space-x-2 mb-2">
                      <MapPin className="h-4 w-4 text-mycelium-glow-purple" />
                      <h3 className="text-sm font-medium text-mycelium-spore">Location Data</h3>
                    </div>
                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span className="text-mycelium-spore/70">Coordinates</span>
                        <span className="text-mycelium-spore">34.2, 18.7</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-mycelium-spore/70">Depth</span>
                        <span className="text-mycelium-spore">12 cm</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-mycelium-spore/70">Habitat</span>
                        <span className="text-mycelium-spore">Forest Floor</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-3 rounded-lg border border-mycelium-bark/30 bg-mycelium-soil/60">
                    <div className="flex items-center space-x-2 mb-2">
                      <NetworkIcon className="h-4 w-4 text-mycelium-glow-purple" />
                      <h3 className="text-sm font-medium text-mycelium-spore">Network Stats</h3>
                    </div>
                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span className="text-mycelium-spore/70">Connected to</span>
                        <span className="text-mycelium-spore">4 nodes</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-mycelium-spore/70">Uptime</span>
                        <span className="text-mycelium-spore">14 days</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-mycelium-spore/70">Latency</span>
                        <span className="text-mycelium-spore">1.2 sec</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-mycelium-glow-blue/30 text-mycelium-glow-blue"
                  >
                    <Signal className="h-4 w-4 mr-2" />
                    <span>Connect to Node</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Network;
