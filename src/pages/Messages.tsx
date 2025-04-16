
import React, { useState } from "react";
import { Layout } from "@/components/Layout";
import { MessageCard } from "@/components/MessageCard";
import { Composer } from "@/components/Composer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Filter, MessageSquare, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

const DEMO_MESSAGES = [
  {
    id: "1",
    sender: "Forest Hub Node",
    timestamp: "10:23 AM",
    message: "Nitrogen levels rising in sector 3. Adjusting nutrient flow to compensate. All connected organisms please acknowledge.",
    decoded: true,
    strength: 9
  },
  {
    id: "2",
    sender: "Eastern Oak Cluster",
    timestamp: "Yesterday",
    message: "Weather alert: Increasing moisture detected. Preparing for water distribution across the network.",
    decoded: true,
    strength: 7
  },
  {
    id: "3",
    sender: "Underground Network",
    timestamp: "Yesterday",
    message: "Foreign organism detected at coordinates 32.5, 18.7. Defensive signals activated. Avoid this area.",
    decoded: false,
    strength: 4
  },
  {
    id: "4",
    sender: "Mushroom Colony Alpha",
    timestamp: "2 days ago",
    message: "Spore release scheduled for tonight at solar cycle end. All connected entities prepare for genetic data transfer.",
    decoded: false,
    strength: 3
  }
];

const Messages = () => {
  const [messages, setMessages] = useState(DEMO_MESSAGES);
  const [activeTab, setActiveTab] = useState("all");
  
  const handleSend = (message: string, strength: number, encrypted: boolean) => {
    const newMessage = {
      id: Date.now().toString(),
      sender: "You",
      timestamp: "Just now",
      message,
      decoded: !encrypted,
      strength
    };
    
    setMessages([newMessage, ...messages]);
  };
  
  const handleDecode = (id: string) => {
    setMessages(messages.map(msg => 
      msg.id === id ? { ...msg, decoded: true } : msg
    ));
  };
  
  const filteredMessages = messages.filter(msg => {
    if (activeTab === "all") return true;
    if (activeTab === "decoded") return msg.decoded;
    return !msg.decoded;
  });
  
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-mycelium-spore">Mycelium Messages</h1>
          <Button variant="outline" size="sm" className="border-mycelium-bark/50 text-mycelium-spore">
            <RefreshCw className="h-4 w-4 mr-2" />
            <span>Refresh</span>
          </Button>
        </div>
        
        <Composer onSend={handleSend} />
        
        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-between items-center mb-4">
            <TabsList className="bg-mycelium-soil/60">
              <TabsTrigger 
                value="all"
                className="data-[state=active]:bg-mycelium-forest data-[state=active]:text-mycelium-spore"
              >
                All
              </TabsTrigger>
              <TabsTrigger 
                value="decoded"
                className="data-[state=active]:bg-mycelium-forest data-[state=active]:text-mycelium-spore"
              >
                Decoded
              </TabsTrigger>
              <TabsTrigger 
                value="encoded"
                className="data-[state=active]:bg-mycelium-forest data-[state=active]:text-mycelium-spore"
              >
                Encoded
              </TabsTrigger>
            </TabsList>
            
            <Button variant="ghost" size="sm" className="text-mycelium-spore">
              <Filter className="h-4 w-4 mr-2" />
              <span>Filter</span>
            </Button>
          </div>
          
          <TabsContent value="all" className="space-y-4 mt-0">
            {filteredMessages.length > 0 ? (
              filteredMessages.map(message => (
                <MessageCard
                  key={message.id}
                  {...message}
                />
              ))
            ) : (
              <div className="text-center py-12">
                <MessageSquare className="h-12 w-12 mx-auto text-mycelium-bark/50 mb-3" />
                <h3 className="text-lg font-medium text-mycelium-spore mb-1">No messages</h3>
                <p className="text-sm text-mycelium-spore/70">
                  Send a message to start communicating through the mycelium network
                </p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="decoded" className="space-y-4 mt-0">
            {/* Same content but filtered */}
            {filteredMessages.length > 0 ? (
              filteredMessages.map(message => (
                <MessageCard
                  key={message.id}
                  {...message}
                />
              ))
            ) : (
              <div className="text-center py-12">
                <MessageSquare className="h-12 w-12 mx-auto text-mycelium-bark/50 mb-3" />
                <h3 className="text-lg font-medium text-mycelium-spore mb-1">No decoded messages</h3>
                <p className="text-sm text-mycelium-spore/70">
                  Use the decoder to interpret encrypted messages
                </p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="encoded" className="space-y-4 mt-0">
            {/* Same content but filtered */}
            {filteredMessages.length > 0 ? (
              filteredMessages.map(message => (
                <MessageCard
                  key={message.id}
                  {...message}
                />
              ))
            ) : (
              <div className="text-center py-12">
                <MessageSquare className="h-12 w-12 mx-auto text-mycelium-bark/50 mb-3" />
                <h3 className="text-lg font-medium text-mycelium-spore mb-1">No encoded messages</h3>
                <p className="text-sm text-mycelium-spore/70">
                  Encoded messages require decoding to be read
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Messages;
