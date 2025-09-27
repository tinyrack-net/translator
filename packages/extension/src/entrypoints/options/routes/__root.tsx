import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from 'lucide-react';
import { NavMain } from '@/components/nav-main';
import { NavProjects } from '@/components/nav-projects';
import { NavUser } from '@/components/nav-user';
import { TeamSwitcher } from '@/components/team-switcher';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

function Page() {
  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <TeamSwitcher
            teams={[
              {
                name: 'Acme Inc',
                logo: GalleryVerticalEnd,
                plan: 'Enterprise',
              },
              {
                name: 'Acme Corp.',
                logo: AudioWaveform,
                plan: 'Startup',
              },
              {
                name: 'Evil Corp.',
                logo: Command,
                plan: 'Free',
              },
            ]}
          />
        </SidebarHeader>
        <SidebarContent>
          <NavMain
            items={[
              {
                title: 'Playground',
                url: '#',
                icon: SquareTerminal,
                isActive: true,
                items: [
                  {
                    title: 'History',
                    url: '#',
                  },
                  {
                    title: 'Starred',
                    url: '#',
                  },
                  {
                    title: 'Settings',
                    url: '#',
                  },
                ],
              },
              {
                title: 'Models',
                url: '#',
                icon: Bot,
                items: [
                  {
                    title: 'Genesis',
                    url: '#',
                  },
                  {
                    title: 'Explorer',
                    url: '#',
                  },
                  {
                    title: 'Quantum',
                    url: '#',
                  },
                ],
              },
              {
                title: 'Documentation',
                url: '#',
                icon: BookOpen,
                items: [
                  {
                    title: 'Introduction',
                    url: '#',
                  },
                  {
                    title: 'Get Started',
                    url: '#',
                  },
                  {
                    title: 'Tutorials',
                    url: '#',
                  },
                  {
                    title: 'Changelog',
                    url: '#',
                  },
                ],
              },
              {
                title: 'Settings',
                url: '#',
                icon: Settings2,
                items: [
                  {
                    title: 'General',
                    url: '#',
                  },
                  {
                    title: 'Team',
                    url: '#',
                  },
                  {
                    title: 'Billing',
                    url: '#',
                  },
                  {
                    title: 'Limits',
                    url: '#',
                  },
                ],
              },
            ]}
          />
          <NavProjects
            projects={[
              {
                name: 'Design Engineering',
                url: '#',
                icon: Frame,
              },
              {
                name: 'Sales & Marketing',
                url: '#',
                icon: PieChart,
              },
              {
                name: 'Travel',
                url: '#',
                icon: Map,
              },
            ]}
          />
        </SidebarContent>
        <SidebarFooter>
          <NavUser
            user={{
              name: 'shadcn',
              email: 'm@example.com',
              avatar: '/avatars/shadcn.jpg',
            }}
          />
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
          </div>
          <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

const RootLayout = () => {
  // <div className="flex gap-2 p-2">
  //   <Link to="/" className="[&.active]:font-bold">
  //     Home
  //   </Link>{' '}
  //   <Link to="/about" className="[&.active]:font-bold">
  //     About
  //   </Link>
  // </div>
  // <hr />
  return (
    <>
      <Page />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
};

export const Route = createRootRoute({ component: RootLayout });
