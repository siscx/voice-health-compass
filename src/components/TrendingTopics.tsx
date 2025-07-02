import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface TrendingTopic {
  name: string;
  mentions: number;
  change: number;
  category: "health" | "wellness" | "medication" | "symptoms";
}

interface TrendingTopicsProps {
  topics: TrendingTopic[];
}

const categoryColors = {
  health: "bg-primary/20 text-primary",
  wellness: "bg-success/20 text-success-foreground", 
  medication: "bg-accent/20 text-accent-foreground",
  symptoms: "bg-destructive/20 text-destructive"
};

export function TrendingTopics({ topics }: TrendingTopicsProps) {
  const maxMentions = Math.max(...topics.map(t => t.mentions));

  return (
    <Card className="bg-card/80 border-border/50">
      <CardHeader>
        <CardTitle className="text-lg text-foreground">Trending Health Topics</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {topics.map((topic, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="font-medium text-foreground">{topic.name}</span>
                <span className={`px-2 py-1 rounded-full text-xs ${categoryColors[topic.category]}`}>
                  {topic.category}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">{topic.mentions} mentions</span>
                <span className={`text-sm ${topic.change > 0 ? "text-warning" : topic.change < 0 ? "text-success" : "text-muted-foreground"}`}>
                  {topic.change > 0 ? "+" : ""}{topic.change}%
                </span>
              </div>
            </div>
            <Progress 
              value={(topic.mentions / maxMentions) * 100} 
              className="h-2"
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}