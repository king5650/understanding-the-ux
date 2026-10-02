import { Link, useRouterState } from "@tanstack/react-router";
import {
  Bell, BookOpen, Boxes, CalendarDays, ChevronLeft, CircleAlert, ClipboardList,
  FolderKanban, LayoutDashboard, Menu, MessageSquare, Package, Search, Settings,
  Users, Wrench, X,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Button } from "./Button";

const nav = [
  { to: "/" as const, label: "Overview", icon: LayoutDashboard },
  { to: "/orders" as const, label: "Orders", icon: ClipboardList, badge: 8 },
  { to: "/bookings" as const, label: "Bookings", icon: CalendarDays, badge: 4 },
  { to: "/products" as const, label: "Products", icon: Package },
  { to: "/catalog" as const, label: "Catalog", icon: BookOpen },
  { to: "/projects" as const, label: "Projects", icon: FolderKanban },
  { to: "/team" as const, label: "Team", icon: Users },
  { to: "/equipment" as const, label: "Equipment", icon: Wrench },
  { to: "/messages" as const, label: "Messages", icon: MessageSquare, badge: 3 },
  { to: "/issues" as const, label: "Issues", icon: CircleAlert, badge: 2 },
];

export function DashboardShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [collapsed, setCollapsed] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const saved = window.localStorage.getItem("as-sidebar-collapsed");
    if (saved === "true") setCollapsed(true);
  }, []);

  function toggleCollapsed() {
    setCollapsed((value) => {
      window.localStorage.setItem("as-sidebar-collapsed", String(!value));
      return !value;
    });
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {drawer && <button aria-label="Close navigation" className="fixed inset-0 z-[9] bg-overlay md:hidden" onClick={() => setDrawer(false)} />}
      <aside className={`fixed inset-y-0 left-0 z-10 flex flex-col bg-sidebar text-sidebar-foreground transition-[width,transform] duration-200 ${collapsed ? "w-[76px]" : "w-[236px]"} ${drawer ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
        <div className="flex h-20 items-center justify-between border-b border-sidebar-border px-4">
          <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setDrawer(false)}>
            <span className="grid size-10 shrink-0 place-items-center rounded-md bg-primary font-heading text-sm font-bold text-primary-foreground">AS</span>
            {!collapsed && <span className="font-heading text-sm font-semibold tracking-wide">AS-AFRICA</span>}
          </Link>
          {!collapsed && <Button variant="ghost" size="icon" className="md:hidden" aria-label="Close navigation" onClick={() => setDrawer(false)}><X className="size-5" /></Button>}
        </div>
        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-5" aria-label="Main navigation">
          {nav.map((item) => {
            const Icon = item.icon;
            const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            return (
              <Link key={item.to} to={item.to} aria-label={collapsed ? item.label : undefined} onClick={() => setDrawer(false)} className={`relative flex min-h-11 items-center gap-3 rounded-md px-3 text-sm font-medium transition-colors ${active ? "bg-sidebar-accent text-sidebar-accent-foreground before:absolute before:-left-3 before:h-7 before:w-1 before:rounded-r before:bg-primary" : "text-sidebar-muted hover:bg-sidebar-accent/60 hover:text-sidebar-foreground"}`}>
                <Icon className="size-[18px] shrink-0" />
                {!collapsed && <span className="truncate">{item.label}</span>}
                {!collapsed && item.badge ? <span className={`ml-auto min-w-5 rounded-full px-1.5 py-0.5 text-center text-[10px] font-bold ${item.label === "Issues" ? "bg-primary text-primary-foreground" : "bg-sidebar-badge text-sidebar-foreground"}`}>{item.badge}</span> : null}
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-sidebar-border p-3">
          <Link to="/settings" aria-label={collapsed ? "Settings" : undefined} className={`flex min-h-11 items-center gap-3 rounded-md px-3 text-sm font-medium transition-colors ${pathname === "/settings" ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-sidebar-muted hover:bg-sidebar-accent hover:text-sidebar-foreground"}`}>
            <Settings className="size-[18px]" />{!collapsed && <span>Settings</span>}
          </Link>
          <Button variant="ghost" size="icon" className="mt-3 hidden w-full text-sidebar-muted hover:bg-sidebar-accent hover:text-sidebar-foreground md:flex" aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"} onClick={toggleCollapsed}><ChevronLeft className={`size-5 transition-transform ${collapsed ? "rotate-180" : ""}`} /></Button>
        </div>
      </aside>

      <div className={`min-w-0 transition-[padding] duration-200 ${collapsed ? "md:pl-[76px]" : "md:pl-[236px]"}`}>
        <header className="sticky top-0 z-10 flex h-20 items-center gap-3 border-b border-border bg-background/95 px-4 backdrop-blur sm:px-6 lg:px-8">
          <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open navigation" onClick={() => setDrawer(true)}><Menu className="size-5" /></Button>
          <button onClick={() => setSearchOpen(true)} className="flex h-11 min-w-0 max-w-xl flex-1 items-center gap-3 rounded-md border border-border bg-card px-3 text-left text-sm text-muted-foreground transition-colors hover:border-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <Search className="size-4 shrink-0" /><span className="truncate">Search orders, bookings, products…</span><kbd className="ml-auto hidden rounded border border-border bg-muted px-2 py-0.5 text-[10px] sm:inline">⌘ K</kbd>
          </button>
          <div className="relative">
            <Button variant="ghost" size="icon" aria-label="Notifications" onClick={() => setNotificationsOpen(!notificationsOpen)}><Bell className="size-5" /><span className="absolute right-2 top-2 size-2 rounded-full bg-primary ring-2 ring-background" /></Button>
            {notificationsOpen && <div className="absolute right-0 top-13 z-40 w-[min(340px,calc(100vw-2rem))] rounded-md border border-border bg-popover p-2 shadow-panel animate-scale-in"><div className="px-3 py-2 font-heading text-sm font-semibold">Notifications</div>{["New order AS-2841 received", "Booking confirmed for 11:30", "Low stock: Terra Clay Tile"].map((text, i) => <div key={text} className="rounded px-3 py-3 text-sm hover:bg-muted"><p className="font-medium">{text}</p><p className="mt-1 text-xs text-muted-foreground">{i + 2} min ago</p></div>)}</div>}
          </div>
          <div className="relative">
            <button onClick={() => setProfileOpen(!profileOpen)} className="flex min-h-11 items-center gap-3 rounded-md px-1.5 text-left hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <span className="grid size-9 place-items-center rounded-full bg-secondary font-heading text-xs font-bold text-secondary-foreground">TK</span><span className="hidden lg:block"><span className="block text-sm font-semibold">Tata Kevin</span><span className="block text-xs text-muted-foreground">Super Admin</span></span>
            </button>
            {profileOpen && <div className="absolute right-0 top-13 z-40 w-48 rounded-md border border-border bg-popover p-2 shadow-panel animate-scale-in"><Link to="/settings" className="block rounded px-3 py-2 text-sm hover:bg-muted">Profile & settings</Link><button className="w-full rounded px-3 py-2 text-left text-sm text-destructive hover:bg-muted">Log out</button></div>}
          </div>
        </header>
        <main className="min-w-0 animate-fade-in px-4 py-6 sm:px-6 lg:px-8 lg:py-8">{children}</main>
      </div>
      {searchOpen && <div className="fixed inset-0 z-30 flex items-start justify-center bg-overlay px-4 pt-[12vh]" onMouseDown={() => setSearchOpen(false)}><div className="w-full max-w-2xl rounded-md border border-border bg-popover shadow-panel animate-scale-in" onMouseDown={(e) => e.stopPropagation()}><div className="flex items-center gap-3 border-b border-border p-4"><Search className="size-5 text-muted-foreground" /><input autoFocus className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground" placeholder="Search by name, number, or phone" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} /><Button variant="ghost" size="icon" aria-label="Close search" onClick={() => setSearchOpen(false)}><X className="size-5" /></Button></div><div className="p-3"><p className="px-2 py-2 text-xs font-semibold uppercase text-muted-foreground">Quick results</p>{[{ label: "Order AS-2841 · Mireille N.", to: "/orders" as const }, { label: "Booking · Carine A.", to: "/bookings" as const }, { label: "Product · Travertine Ivory", to: "/products" as const }].filter((result) => result.label.toLowerCase().includes(searchTerm.toLowerCase())).map((result) => <Link key={result.label} to={result.to} onClick={() => setSearchOpen(false)} className="flex min-h-11 w-full items-center rounded px-3 text-left text-sm hover:bg-muted">{result.label}</Link>)}</div></div></div>}
    </div>
  );
}
