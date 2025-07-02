import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export default function Settings() {
  return (
    <div className="min-h-screen bg-gradient-medical p-6">
      <div className="container mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground">
            Configure your Voya health companion experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-card/80 border-border/50">
            <CardHeader>
              <CardTitle className="text-lg text-foreground">Voice Analysis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Real-time Analysis</p>
                  <p className="text-sm text-muted-foreground">Analyze voice patterns during conversations</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Health Insights</p>
                  <p className="text-sm text-muted-foreground">Generate health correlations</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Background Processing</p>
                  <p className="text-sm text-muted-foreground">Continuous voice pattern monitoring</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 border-border/50">
            <CardHeader>
              <CardTitle className="text-lg text-foreground">Privacy & Sharing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Family Sharing</p>
                  <p className="text-sm text-muted-foreground">Share insights with family members</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Doctor Reports</p>
                  <p className="text-sm text-muted-foreground">Generate medical reports</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <Button variant="outline" className="w-full">
                Manage Data Privacy
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}