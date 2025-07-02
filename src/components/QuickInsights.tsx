import { Card, CardContent } from "@/components/ui/card";

interface QuickInsight {
  id: string;
  text: string;
  type: "positive" | "neutral" | "attention";
  actionable?: boolean;
}

interface QuickInsightsProps {
  insights: QuickInsight[];
}

export function QuickInsights({ insights }: QuickInsightsProps) {
  const getInsightStyle = (type: string) => {
    switch (type) {
      case "positive": 
        return "bg-success/10 border-success/20 text-success-foreground";
      case "attention": 
        return "bg-warning/10 border-warning/20 text-warning-foreground";
      default: 
        return "bg-primary/10 border-primary/20 text-primary-foreground";
    }
  };

  const getInsightIcon = (type: string) => {
    switch (type) {
      case "positive": return "✨";
      case "attention": return "⚠️";
      default: return "💡";
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {insights.map((insight) => (
        <Card 
          key={insight.id}
          className={`${getInsightStyle(insight.type)} border transition-all duration-200 hover:scale-105 cursor-pointer`}
        >
          <CardContent className="p-4">
            <div className="flex items-start space-x-3">
              <span className="text-lg">{getInsightIcon(insight.type)}</span>
              <div className="flex-1">
                <p className="text-sm font-medium">{insight.text}</p>
                {insight.actionable && (
                  <p className="text-xs opacity-75 mt-1">Click to explore further</p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}