import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarMenuSub,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import {
    Home,
    User,
    Settings,
    Bell,
    HelpCircle,
    FileQuestion,
    Mail,
    BookOpen
} from "lucide-react"
import Link from "next/link"

export const HomeSidebar = () => {
    return (
        <Sidebar className="pt-16 z-40 border-r-2" collapsible="icon">
            <SidebarContent className="bg-cyan-600 text-white">
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/dashboard" className="flex items-center gap-2">
                                        <Home className="size-6" />
                                        <span>Dashboard</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/task" className="flex items-center gap-2">
                                        <User className="w-4 h-4" />
                                        <span>Task</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="#" className="flex items-center gap-2">
                                        <Settings className="w-4 h-4" />
                                        <span>Settings</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="#" className="flex items-center gap-2">
                                        <Bell className="w-4 h-4" />
                                        <span>Notifications</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="#" className="flex items-center gap-2">
                                        <HelpCircle className="w-4 h-4" />
                                        <span>Help</span>
                                    </a>
                                </SidebarMenuButton>

                                {/* Sub items */}
                                <SidebarMenuSub>
                                    <SidebarMenuSubItem>
                                        <SidebarMenuButton asChild>
                                            <a href="#" className="flex items-center gap-2 pl-6">
                                                <FileQuestion className="w-4 h-4" />
                                                <span>FAQ</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuSubItem>

                                    <SidebarMenuSubItem>
                                        <SidebarMenuButton asChild>
                                            <a href="#" className="flex items-center gap-2 pl-6">
                                                <Mail className="w-4 h-4" />
                                                <span>Contact Support</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuSubItem>

                                    <SidebarMenuSubItem>
                                        <SidebarMenuButton asChild>
                                            <a href="#" className="flex items-center gap-2 pl-6">
                                                <BookOpen className="w-4 h-4" />
                                                <span>Documentation</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuSubItem>
                                </SidebarMenuSub>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
