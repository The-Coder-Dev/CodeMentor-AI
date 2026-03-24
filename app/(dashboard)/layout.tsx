import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/ui/app-sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <SidebarTrigger className="flex md:hidden" />
      <div className="flex w-full h-screen overflow-hidden">
        <TooltipProvider>
          <AppSidebar />

          <main className="flex-1 overflow-y-auto">{children}</main>
        </TooltipProvider>
      </div>
    </SidebarProvider>
  );
}
