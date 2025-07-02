import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { VoyaSidebar } from "@/components/VoyaSidebar";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import ConversationInsights from "./pages/ConversationInsights";
import Family from "./pages/Family";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="min-h-screen flex w-full bg-background">
            <VoyaSidebar />
            <div className="flex-1 flex flex-col">
              {/* Header with sidebar trigger */}
              <header className="h-16 flex items-center border-b border-border/50 bg-card/50 px-6">
                <SidebarTrigger className="text-foreground" />
                <div className="flex-1" />
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-success animate-voice-pulse" />
                  <span>Voice analysis ready</span>
                </div>
              </header>
              
              {/* Main content */}
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/analytics" element={<Analytics />} />
                  <Route path="/insights" element={<ConversationInsights />} />
                  <Route path="/family" element={<Family />} />
                  <Route path="/reports" element={<Reports />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
