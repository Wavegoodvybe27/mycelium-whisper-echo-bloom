
import React, { useState } from "react";
import { Layout } from "@/components/Layout";
import { Decoder } from "@/components/Decoder";
import { MessageCard } from "@/components/MessageCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, AlertCircle, FileCode, Leaf, Microscope, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const mockEncodedMessages = [
  {
    id: "1",
    sender: "Underground Network",
    timestamp: "Yesterday",
    message: "Foreign organism detected at coordinates 32.5, 18.7. Defensive signals activated. Avoid this area.",
    decoded: false,
    strength: 4
  },
  {
    id: "2",
    sender: "Mushroom Colony Alpha",
    timestamp: "2 days ago",
    message: "Spore release scheduled for tonight at solar cycle end. All connected entities prepare for genetic data transfer.",
    decoded: false,
    strength: 3
  },
  {
    id: "3",
    sender: "Western Edge",
    timestamp: "3 days ago",
    message: "Nutrient shortage detected. Requesting resource reallocation from all connected nodes. Priority status.",
    decoded: false,
    strength: 2
  }
];

const DecoderPage = () => {
  const [encodedMessages, setEncodedMessages] = useState(mockEncodedMessages);
  const [selectedMessage, setSelectedMessage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("decoder");
  
  const handleDecode = () => {
    if (!selectedMessage) return;
    
    setEncodedMessages(messages => messages.map(msg => 
      msg.id === selectedMessage ? { ...msg, decoded: true } : msg
    ));
    
    setSelectedMessage(null);
  };
  
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-mycelium-spore">Signal Decoder</h1>
          <Button
            variant="outline"
            size="sm"
            className="border-mycelium-bark/50 text-mycelium-spore"
          >
            <FileCode className="h-4 w-4 mr-2" />
            <span>Save Patterns</span>
          </Button>
        </div>
        
        <Tabs defaultValue="decoder" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="bg-mycelium-soil/60 w-full justify-start mb-6">
            <TabsTrigger 
              value="decoder"
              className="data-[state=active]:bg-mycelium-forest data-[state=active]:text-mycelium-spore"
            >
              Decoder
            </TabsTrigger>
            <TabsTrigger 
              value="analysis"
              className="data-[state=active]:bg-mycelium-forest data-[state=active]:text-mycelium-spore"
            >
              Signal Analysis
            </TabsTrigger>
            <TabsTrigger 
              value="patterns"
              className="data-[state=active]:bg-mycelium-forest data-[state=active]:text-mycelium-spore"
            >
              Known Patterns
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="decoder" className="space-y-6 mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <Decoder onDecode={handleDecode} />
                
                <Card className="border-mycelium-bark/30 bg-mycelium-soil/40">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-mycelium-spore">Decoding Tools</CardTitle>
                    <CardDescription>Signal processing techniques</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 rounded-lg border border-mycelium-bark/30 bg-mycelium-soil/60 flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-mycelium-forest flex items-center justify-center">
                          <Microscope className="h-5 w-5 text-mycelium-spore" />
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-mycelium-spore">Pattern Recognition</h3>
                          <p className="text-xs text-mycelium-spore/70">Identify common mycelium signal patterns</p>
                        </div>
                      </div>
                      
                      <div className="p-3 rounded-lg border border-mycelium-bark/30 bg-mycelium-soil/60 flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-mycelium-forest flex items-center justify-center">
                          <Activity className="h-5 w-5 text-mycelium-spore" />
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-mycelium-spore">Frequency Analysis</h3>
                          <p className="text-xs text-mycelium-spore/70">Analyze electrical signal frequencies</p>
                        </div>
                      </div>
                      
                      <div className="p-3 rounded-lg border border-mycelium-bark/30 bg-mycelium-soil/60 flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-mycelium-forest flex items-center justify-center">
                          <Leaf className="h-5 w-5 text-mycelium-spore" />
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-mycelium-spore">Chemical Composition</h3>
                          <p className="text-xs text-mycelium-spore/70">Decode chemical messengers in the network</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-6">
                <Card className="border-mycelium-bark/30 bg-mycelium-soil/40">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle className="text-mycelium-spore">Encoded Messages</CardTitle>
                        <CardDescription>Select a message to decode</CardDescription>
                      </div>
                      <AlertCircle className="h-5 w-5 text-mycelium-glow-purple" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
                      {encodedMessages.length > 0 ? (
                        encodedMessages.map(message => (
                          <div 
                            key={message.id}
                            onClick={() => setSelectedMessage(message.id)}
                            className={`cursor-pointer border-2 rounded-lg overflow-hidden transition-colors ${
                              selectedMessage === message.id
                                ? "border-mycelium-glow-blue"
                                : "border-transparent"
                            }`}
                          >
                            <MessageCard
                              {...message}
                              className={`${
                                message.decoded ? "opacity-50" : "opacity-100"
                              }`}
                            />
                          </div>
                        ))
                      ) : (
                        <div className="text-center py-8">
                          <FileCode className="h-10 w-10 mx-auto text-mycelium-bark/50 mb-2" />
                          <h3 className="text-sm font-medium text-mycelium-spore mb-1">No encoded messages</h3>
                          <p className="text-xs text-mycelium-spore/70">
                            All messages have been decoded
                          </p>
                        </div>
                      )}
                    </div>
                    
                    {!encodedMessages.some(msg => !msg.decoded) && (
                      <div className="mt-4 p-3 rounded-lg border border-mycelium-glow-blue/30 bg-mycelium-soil/60">
                        <div className="flex items-start space-x-3">
                          <Wand2 className="h-5 w-5 text-mycelium-glow-blue flex-shrink-0" />
                          <div>
                            <h3 className="text-sm font-medium text-mycelium-spore">All Messages Decoded</h3>
                            <p className="text-xs text-mycelium-spore/70">
                              You've successfully decoded all messages in your inbox. New messages will appear here when received.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
                
                <Card className="border-mycelium-bark/30 bg-mycelium-soil/40">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-mycelium-spore">Decoding History</CardTitle>
                    <CardDescription>Previous signal analysis results</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-mycelium-spore/70">Today</span>
                        <span className="text-mycelium-spore">2 signals decoded</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-mycelium-spore/70">This week</span>
                        <span className="text-mycelium-spore">8 signals decoded</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-mycelium-spore/70">Total</span>
                        <span className="text-mycelium-spore">32 signals decoded</span>
                      </div>
                      <div className="mt-4">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full text-xs border-mycelium-bark/50 text-mycelium-spore"
                        >
                          View Complete History
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="analysis" className="mt-0">
            <Card className="border-mycelium-bark/30 bg-mycelium-soil/40">
              <CardContent className="pt-6">
                <div className="text-center py-12">
                  <Activity className="h-16 w-16 mx-auto text-mycelium-bark/50 mb-3" />
                  <h3 className="text-lg font-medium text-mycelium-spore mb-1">Signal Analysis Tools</h3>
                  <p className="text-sm text-mycelium-spore/70 max-w-md mx-auto mb-6">
                    Advanced tools for analyzing mycelium communication patterns and frequencies
                  </p>
                  <Button className="bg-mycelium-glow-blue text-black hover:bg-mycelium-glow-blue/80">
                    Select a Signal to Analyze
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="patterns" className="mt-0">
            <Card className="border-mycelium-bark/30 bg-mycelium-soil/40">
              <CardContent className="pt-6">
                <div className="text-center py-12">
                  <FileCode className="h-16 w-16 mx-auto text-mycelium-bark/50 mb-3" />
                  <h3 className="text-lg font-medium text-mycelium-spore mb-1">Known Signal Patterns</h3>
                  <p className="text-sm text-mycelium-spore/70 max-w-md mx-auto mb-6">
                    Library of identified mycelium communication patterns and their meanings
                  </p>
                  <Button className="bg-mycelium-forest text-mycelium-spore hover:bg-mycelium-forest/80">
                    Browse Pattern Library
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default DecoderPage;
