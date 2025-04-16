
import React from "react";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { BellRing, Book, ChevronRight, Cpu, Info, MapPin, Network, Save, User } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Settings = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-mycelium-spore">Settings</h1>
          <Button
            variant="default"
            size="sm"
            className="bg-mycelium-glow-blue text-black hover:bg-mycelium-glow-blue/80"
          >
            <Save className="h-4 w-4 mr-2" />
            <span>Save Changes</span>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-mycelium-bark/30 bg-mycelium-soil/40">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-mycelium-glow-purple" />
                  <CardTitle className="text-mycelium-spore">User Profile</CardTitle>
                </div>
                <CardDescription>Your identity on the mycelium network</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="displayName" className="text-mycelium-spore">Display Name</Label>
                    <Input
                      id="displayName"
                      placeholder="Enter your display name"
                      defaultValue="Forest Observer"
                      className="bg-mycelium-soil/60 border-mycelium-bark/50 text-mycelium-spore"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nodeId" className="text-mycelium-spore">Node ID</Label>
                    <Input
                      id="nodeId"
                      placeholder="Your unique node identifier"
                      defaultValue="node-8a72b9c1"
                      readOnly
                      className="bg-mycelium-soil/60 border-mycelium-bark/50 text-mycelium-spore/70"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="bio" className="text-mycelium-spore">Bio</Label>
                  <Input
                    id="bio"
                    placeholder="A short description about you"
                    defaultValue="Researcher studying mycelium communication patterns in temperate forests."
                    className="bg-mycelium-soil/60 border-mycelium-bark/50 text-mycelium-spore"
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="location" className="text-mycelium-spore">Location</Label>
                    <div className="relative">
                      <MapPin className="absolute left-2 top-2.5 h-4 w-4 text-mycelium-spore/50" />
                      <Input
                        id="location"
                        placeholder="Your physical location"
                        defaultValue="Eastwood Forest"
                        className="bg-mycelium-soil/60 border-mycelium-bark/50 text-mycelium-spore pl-8"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role" className="text-mycelium-spore">Network Role</Label>
                    <Input
                      id="role"
                      placeholder="Your role in the network"
                      defaultValue="Observer"
                      className="bg-mycelium-soil/60 border-mycelium-bark/50 text-mycelium-spore"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-mycelium-bark/30 bg-mycelium-soil/40">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Network className="h-5 w-5 text-mycelium-glow-purple" />
                  <CardTitle className="text-mycelium-spore">Network Settings</CardTitle>
                </div>
                <CardDescription>Configure how you connect to the mycelium network</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-mycelium-spore">Auto-Connect on Startup</Label>
                      <p className="text-xs text-mycelium-spore/70">
                        Automatically connect to known nodes when app starts
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <Separator className="bg-mycelium-bark/30" />
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-mycelium-spore">Allow New Connections</Label>
                      <p className="text-xs text-mycelium-spore/70">
                        Permit new mycelium nodes to connect to your network
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <Separator className="bg-mycelium-bark/30" />
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-mycelium-spore">Encrypt All Messages</Label>
                      <p className="text-xs text-mycelium-spore/70">
                        Automatically encrypt outgoing messages
                      </p>
                    </div>
                    <Switch />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <Label className="text-mycelium-spore">Default Signal Strength</Label>
                    <span className="text-xs text-mycelium-glow-blue">7/10</span>
                  </div>
                  <Slider defaultValue={[7]} max={10} min={1} step={1} />
                  <p className="text-xs text-mycelium-spore/70">
                    Higher signal strength uses more energy but improves message clarity and reach
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="border-mycelium-bark/30 bg-mycelium-soil/40">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <BellRing className="h-5 w-5 text-mycelium-glow-purple" />
                  <CardTitle className="text-mycelium-spore">Notifications</CardTitle>
                </div>
                <CardDescription>Alert preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="newMessages" className="text-mycelium-spore">New Messages</Label>
                  <Switch id="newMessages" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <Label htmlFor="networkChanges" className="text-mycelium-spore">Network Changes</Label>
                  <Switch id="networkChanges" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <Label htmlFor="decodedSignals" className="text-mycelium-spore">Decoded Signals</Label>
                  <Switch id="decodedSignals" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <Label htmlFor="systemUpdates" className="text-mycelium-spore">System Updates</Label>
                  <Switch id="systemUpdates" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-mycelium-bark/30 bg-mycelium-soil/40">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Cpu className="h-5 w-5 text-mycelium-glow-purple" />
                  <CardTitle className="text-mycelium-spore">System</CardTitle>
                </div>
                <CardDescription>Application settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="animations" className="text-mycelium-spore">Interface Animations</Label>
                  <Switch id="animations" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <Label htmlFor="soundEffects" className="text-mycelium-spore">Sound Effects</Label>
                  <Switch id="soundEffects" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <Label htmlFor="autoUpdate" className="text-mycelium-spore">Auto Updates</Label>
                  <Switch id="autoUpdate" defaultChecked />
                </div>
                
                <div className="p-3 rounded-lg border border-mycelium-bark/30 bg-mycelium-soil/60 mt-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-start space-x-2">
                      <Info className="h-4 w-4 text-mycelium-spore/70 mt-0.5" />
                      <div>
                        <h3 className="text-sm font-medium text-mycelium-spore">Version Info</h3>
                        <p className="text-xs text-mycelium-spore/70">v1.0.3 build 247</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-mycelium-spore/70">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-mycelium-bark/30 bg-mycelium-soil/40">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Book className="h-5 w-5 text-mycelium-glow-purple" />
                  <CardTitle className="text-mycelium-spore">Resources</CardTitle>
                </div>
                <CardDescription>Help and documentation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-between border-mycelium-bark/50 text-mycelium-spore">
                    <span>User Guide</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-between border-mycelium-bark/50 text-mycelium-spore">
                    <span>Mycelium Research</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-between border-mycelium-bark/50 text-mycelium-spore">
                    <span>Support Center</span>
                    <ChevronRight className="h-4 w-4" />
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

export default Settings;
