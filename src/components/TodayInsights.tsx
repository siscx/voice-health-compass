import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ConversationInsight {
  id: string;
  content: string;
  topic: "symptoms" | "medication" | "energy" | "sleep" | "mood" | "exercise";
  date: string;
  time: string;
  context?: string;
  importance: "high" | "medium" | "low";
}

interface TodayInsightsProps {
  insights: ConversationInsight[];
}

const topicColors = {
  symptoms: "bg-destructive/20 text-destructive",
  medication: "bg-primary/20 text-primary", 
  energy: "bg-accent/20 text-accent-foreground",
  sleep: "bg-secondary/20 text-secondary-foreground",
  mood: "bg-success/20 text-success-foreground",
  exercise: "bg-warning/20 text-warning-foreground"
};

const topicIcons = {
  symptoms: "🩺",
  medication: "💊",
  energy: "⚡",
  sleep: "😴",
  mood: "😊",
  exercise: "🏃"
};

export function TodayInsights({ insights }: TodayInsightsProps) {
  const todayInsights = insights.filter(insight => insight.date === "Today");

  return (
    <Card className="bg-card/80 border-border/50">
      <CardHeader>
        <CardTitle className="text-lg text-foreground flex items-center space-x-2">
          <span>Today&apos;s Key Points</span>
          <Badge variant="secondary" className="ml-2">
            {todayInsights.length}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {todayInsights.length === 0 ? (
          <p className="text-muted-foreground text-sm">
            No conversation insights recorded today. Start a conversation to begin tracking.
          </p>
        ) : (
          <div className="space-y-3">
            {todayInsights.map((insight) => (
              <div 
                key={insight.id}
                className={`
                  p-3 rounded-lg border transition-all duration-200 hover:bg-muted/10 cursor-pointer
                  ${insight.importance === "high" ? "border-destructive/30 bg-destructive/5" :
                    insight.importance === "medium" ? "border-warning/30 bg-warning/5" :
                    "border-border/30 bg-muted/5"}
                `}
              >
                <div className="flex items-start space-x-3">
                  <span className="text-lg">{topicIcons[insight.topic]}</span>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center space-x-2">
                      <Badge 
                        variant="secondary"
                        className={`${topicColors[insight.topic]} text-xs`}
                      >
                        {insight.topic}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{insight.time}</span>
                    </div>
                    <p className="text-sm text-foreground">{insight.content}</p>
                    {insight.context && (
                      <p className="text-xs text-muted-foreground italic">
                        "{insight.context}"
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}