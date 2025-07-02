import { useState } from "react";
import { VoyaCompanion } from "@/components/VoyaCompanion";
import { VoiceHealthMetrics } from "@/components/VoiceHealthMetrics";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Dashboard() {
  const [isListening, setIsListening] = useState(false);
  const [conversationActive, setConversationActive] = useState(false);

  const handleStartConversation = () => {
    setConversationActive(true);
    // Simulate listening detection after a brief delay
    setTimeout(() => setIsListening(true), 1000);
  };

  const handleEndConversation = () => {
    setConversationActive(false);
    setIsListening(false);
  };

  return (
    <div className="min-h-screen bg-gradient-medical">
      <div className="container mx-auto p-6 space-y-8">
        {/* Welcome Header */}
        <div className="text-center space-y-2 animate-fade-in-up">
          <h1 className="text-3xl font-bold text-foreground">
            Welcome back to Voya
          </h1>
          <p className="text-muted-foreground">
            Your AI health companion is ready to analyze your voice biomarkers
          </p>
        </div>

        {/* Main Companion Area */}
        <div className="flex justify-center">
          <VoyaCompanion
            isListening={isListening}
            onStartConversation={handleStartConversation}
            onEndConversation={handleEndConversation}
          />
        </div>

        {/* Voice Health Metrics */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">
            Today's Voice Health Snapshot
          </h2>
          <VoiceHealthMetrics />
        </div>

        {/* Recent Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-card/80 border-border/50">
            <CardHeader>
              <CardTitle className="text-lg text-foreground">Recent Insights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-success/10 border border-success/20">
                  <div className="w-2 h-2 rounded-full bg-success mt-2" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Voice energy improving
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Your vocal energy has increased 15% this week
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Speech patterns stable
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Consistent patterns detected over the past 7 days
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 border-border/50">
            <CardHeader>
              <CardTitle className="text-lg text-foreground">Weekly Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Conversations</span>
                  <span className="text-lg font-semibold text-foreground">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Analysis hours</span>
                  <span className="text-lg font-semibold text-foreground">3.5h</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Health score</span>
                  <span className="text-lg font-semibold text-success">82/100</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}