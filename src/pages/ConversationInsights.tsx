import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TodayInsights } from "@/components/TodayInsights";
import { WeeklyHighlights } from "@/components/WeeklyHighlights";
import { TrendingTopics } from "@/components/TrendingTopics";
import { QuickInsights } from "@/components/QuickInsights";

// Mock data for conversation insights
const mockInsights = [
  {
    id: "1",
    content: "Mentioned feeling more energetic after starting morning walks",
    topic: "energy" as const,
    date: "Today",
    time: "10:30 AM",
    context: "I've been feeling really good since I started those morning walks you suggested",
    importance: "medium" as const
  },
  {
    id: "2", 
    content: "Reported taking blood pressure medication consistently for 5 days",
    topic: "medication" as const,
    date: "Today",
    time: "2:15 PM", 
    context: "I haven't missed my blood pressure meds in 5 days now",
    importance: "high" as const
  },
  {
    id: "3",
    content: "Slight headache mentioned, possibly related to screen time",
    topic: "symptoms" as const,
    date: "Today", 
    time: "4:45 PM",
    context: "I have a bit of a headache, probably from staring at the computer all day",
    importance: "low" as const
  }
];

const mockWeeklyHighlights = [
  {
    topic: "Sleep Quality",
    count: 8,
    trend: "increasing" as const,
    summary: "Sleep duration increased from 6.5 to 7.5 hours. Mentioned feeling more rested.",
    importance: "medium" as const
  },
  {
    topic: "Headaches",
    count: 4,
    trend: "increasing" as const, 
    summary: "Headache frequency increased. Often mentions screen time and stress as triggers.",
    importance: "high" as const
  },
  {
    topic: "Energy Levels",
    count: 12,
    trend: "stable" as const,
    summary: "Consistent reports of good energy, especially after morning exercise routine.",
    importance: "low" as const
  }
];

const mockTrendingTopics = [
  { name: "Sleep", mentions: 15, change: 8, category: "wellness" as const },
  { name: "Headaches", mentions: 12, change: 25, category: "symptoms" as const },
  { name: "Blood Pressure Meds", mentions: 10, change: -5, category: "medication" as const },
  { name: "Energy", mentions: 8, change: 12, category: "health" as const },
  { name: "Exercise", mentions: 6, change: 40, category: "wellness" as const }
];

const mockQuickInsights = [
  {
    id: "q1",
    text: "Mentioned headaches 4 times this week - consider tracking triggers",
    type: "attention" as const,
    actionable: true
  },
  {
    id: "q2", 
    text: "Sleep quality improving consistently over 7 days",
    type: "positive" as const,
    actionable: false
  },
  {
    id: "q3",
    text: "Blood pressure medication adherence at 95% this month",
    type: "positive" as const,
    actionable: false
  },
  {
    id: "q4",
    text: "Energy levels correlate with morning exercise routine", 
    type: "neutral" as const,
    actionable: true
  }
];

export default function ConversationInsights() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTopic, setFilterTopic] = useState("all");

  return (
    <div className="min-h-screen bg-gradient-medical p-6">
      <div className="container mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-foreground">Conversation Insights</h1>
            <p className="text-muted-foreground">
              AI-captured health insights from your conversations, organized and easy to review
            </p>
          </div>
          
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              placeholder="Search insights..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1"
            />
            <Select value={filterTopic} onValueChange={setFilterTopic}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by topic" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Topics</SelectItem>
                <SelectItem value="symptoms">Symptoms</SelectItem>
                <SelectItem value="medication">Medication</SelectItem>
                <SelectItem value="energy">Energy</SelectItem>
                <SelectItem value="sleep">Sleep</SelectItem>
                <SelectItem value="mood">Mood</SelectItem>
                <SelectItem value="exercise">Exercise</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Quick Insights Cards */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Quick Insights</h2>
          <QuickInsights insights={mockQuickInsights} />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Today's Insights */}
          <TodayInsights insights={mockInsights} />
          
          {/* Trending Topics */}
          <TrendingTopics topics={mockTrendingTopics} />
        </div>

        {/* Weekly Highlights */}
        <WeeklyHighlights highlights={mockWeeklyHighlights} />

        {/* Export Options */}
        <div className="flex justify-center space-x-4">
          <Button variant="outline">
            Export This Week
          </Button>
          <Button variant="outline">
            Share with Doctor
          </Button>
          <Button>
            Generate Full Report
          </Button>
        </div>
      </div>
    </div>
  );
}