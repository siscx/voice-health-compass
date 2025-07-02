import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function Analytics() {
  // Mock voice biomarker data
  const voiceMetrics = [
    { name: "Vocal Stability", value: 76, trend: "+2%" },
    { name: "Speech Pace", value: 68, trend: "-1%" },
    { name: "Voice Energy", value: 82, trend: "+5%" },
    { name: "Clarity Index", value: 91, trend: "+3%" }
  ];

  const weeklyData = [
    { day: "Mon", stability: 75, energy: 80, clarity: 88 },
    { day: "Tue", stability: 78, energy: 82, clarity: 90 },
    { day: "Wed", stability: 74, energy: 79, clarity: 87 },
    { day: "Thu", stability: 76, energy: 84, clarity: 92 },
    { day: "Fri", stability: 79, energy: 86, clarity: 94 },
    { day: "Sat", stability: 77, energy: 81, clarity: 89 },
    { day: "Sun", stability: 76, energy: 82, clarity: 91 }
  ];

  return (
    <div className="min-h-screen bg-gradient-medical p-6">
      <div className="container mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Voice Analytics</h1>
          <p className="text-muted-foreground">
            Detailed voice biomarker analysis and health trends
          </p>
        </div>

        {/* Current Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {voiceMetrics.map((metric) => (
            <Card key={metric.name} className="bg-card/80 border-border/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {metric.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-2xl font-bold text-foreground">
                  {metric.value}
                  <span className="text-sm text-muted-foreground ml-1">/100</span>
                </div>
                <Progress value={metric.value} className="h-2" />
                <div className="text-xs text-success">{metric.trend} this week</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Weekly Trends Chart */}
        <Card className="bg-card/80 border-border/50">
          <CardHeader>
            <CardTitle className="text-lg text-foreground">7-Day Voice Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Simple bar chart representation */}
              <div className="grid grid-cols-7 gap-2 text-center">
                {weeklyData.map((day) => (
                  <div key={day.day} className="space-y-2">
                    <div className="text-xs text-muted-foreground">{day.day}</div>
                    
                    {/* Stability bar */}
                    <div className="space-y-1">
                      <div 
                        className="bg-primary rounded-sm mx-auto" 
                        style={{ height: `${day.stability}px`, width: '8px' }}
                      />
                      <div className="text-xs text-muted-foreground">{day.stability}</div>
                    </div>
                    
                    {/* Energy bar */}
                    <div className="space-y-1">
                      <div 
                        className="bg-accent rounded-sm mx-auto" 
                        style={{ height: `${day.energy}px`, width: '8px' }}
                      />
                      <div className="text-xs text-muted-foreground">{day.energy}</div>
                    </div>
                    
                    {/* Clarity bar */}
                    <div className="space-y-1">
                      <div 
                        className="bg-success rounded-sm mx-auto" 
                        style={{ height: `${day.clarity}px`, width: '8px' }}
                      />
                      <div className="text-xs text-muted-foreground">{day.clarity}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-sm bg-primary" />
                  <span className="text-muted-foreground">Stability</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-sm bg-accent" />
                  <span className="text-muted-foreground">Energy</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-sm bg-success" />
                  <span className="text-muted-foreground">Clarity</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Insights and Correlations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-card/80 border-border/50">
            <CardHeader>
              <CardTitle className="text-lg text-foreground">Voice Insights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <p className="text-sm font-medium text-foreground">
                    Speech patterns show improvement
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Your voice stability has increased consistently over the past week
                  </p>
                </div>
                
                <div className="p-3 rounded-lg bg-warning/10 border border-warning/20">
                  <p className="text-sm font-medium text-foreground">
                    Energy dip on Wednesday
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Consider reviewing your sleep pattern from Tuesday night
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 border-border/50">
            <CardHeader>
              <CardTitle className="text-lg text-foreground">Correlations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 rounded-lg bg-success/10">
                  <div>
                    <p className="text-sm font-medium text-foreground">Sleep Quality</p>
                    <p className="text-xs text-muted-foreground">vs Voice Energy</p>
                  </div>
                  <div className="text-lg font-bold text-success">+0.8</div>
                </div>
                
                <div className="flex justify-between items-center p-3 rounded-lg bg-primary/10">
                  <div>
                    <p className="text-sm font-medium text-foreground">Exercise</p>
                    <p className="text-xs text-muted-foreground">vs Voice Stability</p>
                  </div>
                  <div className="text-lg font-bold text-primary">+0.6</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}