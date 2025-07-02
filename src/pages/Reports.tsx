import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Reports() {
  const reports = [
    { title: "30-Day Voice Analysis", date: "December 2024", status: "Ready" },
    { title: "Medication Correlation Report", date: "November 2024", status: "Ready" },
    { title: "Sleep Pattern Analysis", date: "November 2024", status: "Processing" },
  ];

  return (
    <div className="min-h-screen bg-gradient-medical p-6">
      <div className="container mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Medical Reports</h1>
          <p className="text-muted-foreground">
            Professional voice biomarker reports for healthcare providers
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-card/80 border-border/50">
            <CardHeader>
              <CardTitle className="text-lg text-foreground">Available Reports</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {reports.map((report, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                  <div>
                    <p className="font-medium text-foreground">{report.title}</p>
                    <p className="text-sm text-muted-foreground">{report.date}</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm font-medium ${
                      report.status === "Ready" ? "text-success" : "text-warning"
                    }`}>
                      {report.status}
                    </p>
                    {report.status === "Ready" && (
                      <Button variant="outline" size="sm" className="mt-1">
                        Download
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-card/80 border-border/50">
            <CardHeader>
              <CardTitle className="text-lg text-foreground">Generate New Report</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Button className="w-full" variant="outline">
                  Voice Biomarker Summary
                </Button>
                <Button className="w-full" variant="outline">
                  Trend Analysis Report
                </Button>
                <Button className="w-full" variant="outline">
                  Correlation Study
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}