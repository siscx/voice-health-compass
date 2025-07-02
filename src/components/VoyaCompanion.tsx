import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface VoyaCompanionProps {
  isListening?: boolean;
  onStartConversation?: () => void;
  onEndConversation?: () => void;
}

export function VoyaCompanion({ 
  isListening = false, 
  onStartConversation, 
  onEndConversation 
}: VoyaCompanionProps) {
  const [isActive, setIsActive] = useState(false);

  const handleToggleConversation = () => {
    if (isActive) {
      setIsActive(false);
      onEndConversation?.();
    } else {
      setIsActive(true);
      onStartConversation?.();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-8 p-8">
      {/* Main Companion Circle */}
      <div className="relative">
        {/* Outer pulse rings when active */}
        {isActive && (
          <>
            <div className="absolute inset-0 w-80 h-80 rounded-full bg-gradient-companion opacity-20 animate-voice-pulse" />
            <div className="absolute inset-4 w-72 h-72 rounded-full bg-gradient-companion opacity-30 animate-voice-pulse delay-75" />
            <div className="absolute inset-8 w-64 h-64 rounded-full bg-gradient-companion opacity-40 animate-voice-pulse delay-150" />
          </>
        )}
        
        {/* Main companion circle */}
        <div className={`
          relative w-64 h-64 rounded-full 
          bg-gradient-companion 
          shadow-companion-glow 
          flex items-center justify-center
          transition-all duration-500 ease-in-out
          ${isActive ? 'animate-companion-breathe' : 'animate-float'}
          ${isListening ? 'shadow-voice-pulse' : ''}
        `}>
          {/* Inner glow effect */}
          <div className="absolute inset-4 rounded-full bg-gradient-companion opacity-50" />
          
          {/* Center indicator */}
          <div className={`
            relative z-10 w-8 h-8 rounded-full 
            transition-all duration-300
            ${isActive ? 'bg-background animate-voice-pulse' : 'bg-accent/30'}
          `} />
          
          {/* Voice level indicators when listening */}
          {isListening && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex space-x-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className={`
                      w-1 bg-background rounded-full animate-voice-pulse
                      ${i === 0 || i === 4 ? 'h-4' : i === 1 || i === 3 ? 'h-8' : 'h-12'}
                    `}
                    style={{ animationDelay: `${i * 100}ms` }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Status and Controls */}
      <div className="text-center space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-foreground">
            {isActive ? (isListening ? "I'm listening..." : "Ready to chat") : "Voya AI Health Companion"}
          </h2>
          <p className="text-muted-foreground max-w-md">
            {isActive 
              ? "Speak naturally with me about your health and wellbeing" 
              : "Start a conversation to begin voice biomarker analysis"
            }
          </p>
        </div>

        <Button
          onClick={handleToggleConversation}
          size="lg"
          variant={isActive ? "destructive" : "default"}
          className={`
            min-w-48 h-12 text-lg font-medium
            transition-all duration-300
            ${isActive 
              ? "bg-destructive hover:bg-destructive/90" 
              : "bg-primary hover:bg-primary/90 shadow-medical"
            }
          `}
        >
          {isActive ? "End Conversation" : "Start Conversation"}
        </Button>
      </div>

      {/* Voice Analysis Status */}
      {isActive && (
        <Card className="p-4 bg-card/50 border-primary/20">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 rounded-full bg-success animate-voice-pulse" />
            <span className="text-sm text-muted-foreground">
              Voice biomarker analysis active
            </span>
          </div>
        </Card>
      )}
    </div>
  );
}