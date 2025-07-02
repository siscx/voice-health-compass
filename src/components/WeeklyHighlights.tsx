import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface WeeklyHighlight {
  topic: string;
  count: number;
  trend: "increasing" | "decreasing" | "stable";
  summary: string;
  importance: "high" | "medium" | "low";
}

interface WeeklyHighlightsProps {
  highlights: WeeklyHighlight[];
}

export function WeeklyHighlights({ highlights }: WeeklyHighlightsProps) {
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "increasing": return "📈";
      case "decreasing": return "📉";
      default: return "➡️";
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case "increasing": return "text-warning";
      case "decreasing": return "text-success";
      default: return "text-muted-foreground";
    }
  };

  return (
    <Card className="bg-card/80 border-border/50">
      <CardHeader>
        <CardTitle className="text-lg text-foreground">This Week&apos;s Highlights</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {highlights.map((highlight, index) => (
          <div 
            key={index}
            className="p-3 rounded-lg bg-muted/20 border border-border/30 hover:bg-muted/30 transition-colors cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1 space-y-2">
                <div className="flex items-center space-x-3">
                  <h4 className="font-medium text-foreground">{highlight.topic}</h4>
                  <Badge variant="outline" className="text-xs">
                    {highlight.count} mentions
                  </Badge>
                  <div className={`flex items-center space-x-1 text-sm ${getTrendColor(highlight.trend)}`}>
                    <span>{getTrendIcon(highlight.trend)}</span>
                    <span className="capitalize">{highlight.trend}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{highlight.summary}</p>
              </div>
              
              {highlight.importance === "high" && (
                <div className="w-3 h-3 rounded-full bg-destructive animate-voice-pulse ml-3" />
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}