import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Family() {
  const familyMembers = [
    { name: "Sarah M.", relation: "Daughter", status: "Good", lastUpdate: "2 hours ago" },
    { name: "John M.", relation: "Son", status: "Excellent", lastUpdate: "1 day ago" },
  ];

  return (
    <div className="min-h-screen bg-gradient-medical p-6">
      <div className="container mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Family Dashboard</h1>
          <p className="text-muted-foreground">
            Share voice health insights with your loved ones
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-card/80 border-border/50">
            <CardHeader>
              <CardTitle className="text-lg text-foreground">Connected Family</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {familyMembers.map((member) => (
                <div key={member.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                  <div>
                    <p className="font-medium text-foreground">{member.name}</p>
                    <p className="text-sm text-muted-foreground">{member.relation}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-success">{member.status}</p>
                    <p className="text-xs text-muted-foreground">{member.lastUpdate}</p>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                Add Family Member
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-card/80 border-border/50">
            <CardHeader>
              <CardTitle className="text-lg text-foreground">Shared Insights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                <p className="text-sm font-medium text-foreground">
                  Weekly family health summary ready
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Share your voice health progress with family
                </p>
              </div>
              <Button className="w-full">
                Share Weekly Report
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}