import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface VoiceMetric {
  label: string;
  value: number;
  maxValue: number;
  color: "success" | "warning" | "primary";
  trend: "up" | "down" | "stable";
}

const mockMetrics: VoiceMetric[] = [
  { label: "Vocal Vitality", value: 82, maxValue: 100, color: "success", trend: "up" },
  { label: "Speech Stability", value: 76, maxValue: 100, color: "primary", trend: "stable" },
  { label: "Voice Energy", value: 68, maxValue: 100, color: "warning", trend: "down" },
  { label: "Clarity Score", value: 91, maxValue: 100, color: "success", trend: "up" }
];

export function VoiceHealthMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {mockMetrics.map((metric) => (
        <Card key={metric.label} className="bg-card/80 border-border/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center justify-between">
              {metric.label}
              <div className={`
                w-2 h-2 rounded-full 
                ${metric.color === "success" ? "bg-success" : 
                  metric.color === "warning" ? "bg-warning" : "bg-primary"}
              `} />
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-2xl font-bold text-foreground">
              {metric.value}
              <span className="text-sm text-muted-foreground ml-1">
                /{metric.maxValue}
              </span>
            </div>
            <Progress 
              value={metric.value} 
              className="h-2"
            />
            <div className="flex items-center text-xs text-muted-foreground">
              <span className={`
                mr-1 
                ${metric.trend === "up" ? "text-success" : 
                  metric.trend === "down" ? "text-warning" : "text-muted-foreground"}
              `}>
                {metric.trend === "up" ? "↗" : metric.trend === "down" ? "↘" : "→"}
              </span>
              {metric.trend === "up" ? "Improving" : 
               metric.trend === "down" ? "Needs attention" : "Stable"}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}