import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Dashboard", url: "/", icon: "○" },
  { title: "Voice Analytics", url: "/analytics", icon: "〜" },
  { title: "Conversation Insights", url: "/insights", icon: "💭" },
  { title: "Family", url: "/family", icon: "♥" },
  { title: "Reports", url: "/reports", icon: "📊" },
  { title: "Settings", url: "/settings", icon: "⚙" },
];

export function VoyaSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const isCollapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-primary/20 text-primary font-medium border-primary/20" 
      : "hover:bg-muted/50 hover:text-foreground";

  return (
    <Sidebar
      className={`${isCollapsed ? "w-16" : "w-64"} border-r border-border/50 bg-sidebar`}
      collapsible="icon"
    >
      <SidebarContent className="bg-gradient-medical">
        {/* Header */}
        <div className="p-4 border-b border-border/20">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-gradient-companion" />
            {!isCollapsed && (
              <div>
                <h2 className="text-lg font-bold text-foreground">Voya</h2>
                <p className="text-xs text-muted-foreground">Health Companion</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className={getNavCls}>
                      <span className="text-lg mr-3">{item.icon}</span>
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Status indicator */}
        {!isCollapsed && (
          <div className="mt-auto p-4 border-t border-border/20">
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-success animate-voice-pulse" />
              <span>Voice analysis ready</span>
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}