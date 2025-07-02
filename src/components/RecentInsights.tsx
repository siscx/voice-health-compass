import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

interface RecentInsight {
  content: string;
  topic: "symptoms" | "medication" | "energy" | "sleep" | "mood" | "exercise";
  time: string;
  importance: "high" | "medium" | "low";
}

const topicColors = {
  symptoms: "bg-destructive/20 text-destructive",
  medication: "bg-primary/20 text-primary", 
  energy: "bg-accent/20 text-accent-foreground",
  sleep: "bg-secondary/20 text-secondary-foreground",
  mood: "bg-success/20 text-success-foreground",
  exercise: "bg-warning/20 text-warning-foreground"
};

const mockRecentInsights: RecentInsight[] = [
  {
    content: "Mentioned feeling more energetic after morning walks",
    topic: "energy",
    time: "2 hours ago",
    importance: "medium"
  },
  {
    content: "Blood pressure medication taken consistently for 5 days",
    topic: "medication", 
    time: "4 hours ago",
    importance: "high"
  },
  {
    content: "Better sleep quality reported for 3 consecutive nights",
    topic: "sleep",
    time: "Yesterday",
    importance: "medium"
  }
];

export function RecentInsights() {
  return (
    <Card className="bg-card/80 border-border/50">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg text-foreground">Recent Conversation Insights</CardTitle>
          <NavLink to="/insights">
            <Button variant="outline" size="sm">
              View All
            </Button>
          </NavLink>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {mockRecentInsights.map((insight, index) => (
          <div 
            key={index}
            className={`
              p-3 rounded-lg border transition-all duration-200 hover:bg-muted/10 cursor-pointer
              ${insight.importance === "high" ? "border-destructive/30 bg-destructive/5" :
                "border-border/30 bg-muted/5"}
            `}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1 space-y-2">
                <div className="flex items-center space-x-2">
                  <Badge 
                    variant="secondary"
                    className={`${topicColors[insight.topic]} text-xs`}
                  >
                    {insight.topic}
                  </Badge>
                  {insight.importance === "high" && (
                    <div className="w-2 h-2 rounded-full bg-destructive animate-voice-pulse" />
                  )}
                </div>
                <p className="text-sm text-foreground">{insight.content}</p>
              </div>
              <span className="text-xs text-muted-foreground ml-3">{insight.time}</span>
            </div>
          </div>
        ))}
        
        {mockRecentInsights.length === 0 && (
          <div className="text-center py-6 text-muted-foreground">
            <p className="text-sm">No insights captured yet.</p>
            <p className="text-xs mt-1">Start a conversation to begin tracking health insights.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}