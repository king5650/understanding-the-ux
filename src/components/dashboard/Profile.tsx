import { Camera, KeyRound, Mail, MapPin, Pencil, Phone, ShieldCheck, Smartphone, LogOut, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Button } from "./Button";
import { CrudDialog, Field, notify } from "./CrudKit";
import { PageHeader, Panel } from "./Ui";
import { useDemoRows } from "./demoState";

const initialProfile = { name: "Tata Kevin", email: "tata.kevin@as-africa.com", phone: "+237 6 77 42 18 90", location: "Douala, Cameroon", title: "Operations Director", bio: "Oversees orders, bookings, and project delivery across the AS-AFRICA showroom network." };
const initialPrefs = { orders: true, bookings: true, stock: true, digest: false, twoFactor: true };
const activity = [
  { text: "Confirmed booking for Carine A.", time: "Today, 11:24" },
  { text: "Marked order AS-2838 as fulfilled", time: "Today, 09:02" },
  { text: "Updated stock for Travertine Ivory", time: "Yesterday, 16:47" },
  { text: "Resolved issue: delayed delivery", time: "Yesterday, 10:15" },
  { text: "Invited new staff member", time: "Mon, 14:30" },
];
const sessions = [
  { device: "Chrome · macOS", place: "Douala", current: true },
  { device: "Safari · iPhone 15", place: "Douala", current: false },
];

export function ProfilePage() {
  const [profile, setProfile] = useDemoRows("profile", initialProfile);
  const [prefs, setPrefs] = useDemoRows("profile-prefs", initialPrefs);
  const [devices, setDevices] = useDemoRows("profile-sessions", sessions);
  const [dialog, setDialog] = useState<null | "edit" | "password">(null);
  const initials = profile.name.split(" ").map(p => p[0]).join("").slice(0, 2).toUpperCase();

  function saveProfile() {
    const form = document.querySelector<HTMLFormElement>('[role="dialog"] form');
    if (!form) return;
    const d = new FormData(form);
    setProfile({ name: String(d.get("Full name")), email: String(d.get("Email")), phone: String(d.get("Phone")), location: String(d.get("Location")), title: String(d.get("Job title")), bio: String(d.get("Bio") ?? "") });
    setDialog(null); notify("updated", "Profile");
  }
  function toggle(key: keyof typeof initialPrefs) {
    setPrefs(p => ({ ...p, [key]: !p[key] }));
    notify("updated", "Preference");
  }

  return <>
    <PageHeader eyebrow="Account" title="My profile" action={<Button variant="primary" onClick={() => setDialog("edit")}><Pencil className="size-4" />Edit profile</Button>} />
    <div className="grid gap-6 lg:grid-cols-[340px_1fr]">
      <div className="space-y-6">
        <section className="overflow-hidden rounded-md border border-border bg-card shadow-card">
          <div className="h-24 bg-sidebar" />
          <div className="-mt-12 px-6 pb-6">
            <div className="relative w-fit">
              <span className="grid size-24 place-items-center rounded-full bg-primary font-heading text-2xl font-bold text-primary-foreground ring-4 ring-card">{initials}</span>
              <button aria-label="Change photo" onClick={() => notify("ready", "Photo upload")} className="absolute bottom-0 right-0 grid size-9 place-items-center rounded-full border border-border bg-card text-foreground shadow-card hover:bg-muted"><Camera className="size-4" /></button>
            </div>
            <h2 className="mt-4 font-heading text-xl font-semibold">{profile.name}</h2>
            <p className="text-sm text-muted-foreground">{profile.title}</p>
            <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-primary-soft px-2.5 py-1 text-[11px] font-bold text-primary-strong"><ShieldCheck className="size-3.5" />Super Admin</span>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{profile.bio}</p>
            <ul className="mt-5 space-y-3 border-t border-border pt-5 text-sm">
              <li className="flex items-center gap-3"><Mail className="size-4 text-muted-foreground" /><span className="truncate">{profile.email}</span></li>
              <li className="flex items-center gap-3"><Phone className="size-4 text-muted-foreground" />{profile.phone}</li>
              <li className="flex items-center gap-3"><MapPin className="size-4 text-muted-foreground" />{profile.location}</li>
            </ul>
          </div>
        </section>
        <div className="grid grid-cols-3 gap-3">
          {[["142", "Orders handled"], ["38", "Bookings"], ["12", "Issues resolved"]].map(([v, l]) => <div key={l} className="rounded-md border border-border bg-card p-3 text-center shadow-card"><p className="font-heading text-lg font-semibold">{v}</p><p className="text-[11px] text-muted-foreground">{l}</p></div>)}
        </div>
      </div>

      <div className="space-y-6">
        <Panel title="Security" action={<Button size="sm" onClick={() => setDialog("password")}><KeyRound className="size-4" />Change password</Button>}>
          <div className="divide-y divide-border">
            <ToggleRow label="Two-factor authentication" hint="Require a code from your phone when signing in." on={prefs.twoFactor} onToggle={() => toggle("twoFactor")} />
            {devices.map(s => <div key={s.device} className="flex items-center gap-4 px-5 py-4"><Smartphone className="size-5 text-muted-foreground" /><div className="min-w-0 flex-1"><p className="text-sm font-medium">{s.device}</p><p className="text-xs text-muted-foreground">{s.place} · {s.current ? "This device" : "Active 2 days ago"}</p></div>{s.current ? <span className="text-xs font-semibold text-success">Current</span> : <Button size="sm" variant="ghost" onClick={() => { setDevices(d => d.filter(x => x.device !== s.device)); notify("signed out", "Session"); }}><LogOut className="size-4" />Sign out</Button>}</div>)}
          </div>
        </Panel>
        <Panel title="Notifications">
          <div className="divide-y divide-border">
            <ToggleRow label="New orders" hint="Alert me when a customer places an order." on={prefs.orders} onToggle={() => toggle("orders")} />
            <ToggleRow label="Booking changes" hint="Confirmations, reschedules, and cancellations." on={prefs.bookings} onToggle={() => toggle("bookings")} />
            <ToggleRow label="Low stock" hint="Products falling below their reorder level." on={prefs.stock} onToggle={() => toggle("stock")} />
            <ToggleRow label="Daily email summary" hint="One email each morning with yesterday's activity." on={prefs.digest} onToggle={() => toggle("digest")} />
          </div>
        </Panel>
        <Panel title="Recent activity">
          <ol className="p-5">
            {activity.map((a, i) => <li key={a.text} className="relative flex gap-4 pb-5 last:pb-0">{i < activity.length - 1 && <span className="absolute left-[9px] top-6 h-full w-px bg-border" />}<CheckCircle2 className="relative size-5 shrink-0 text-primary" /><div><p className="text-sm font-medium">{a.text}</p><p className="text-xs text-muted-foreground">{a.time}</p></div></li>)}
          </ol>
        </Panel>
      </div>
    </div>

    {dialog === "edit" && <CrudDialog title="Edit profile" description="Update how you appear to your team." onClose={() => setDialog(null)} onSubmit={saveProfile}>
      <Field label="Full name" defaultValue={profile.name} />
      <Field label="Job title" defaultValue={profile.title} />
      <Field label="Email" type="email" defaultValue={profile.email} />
      <Field label="Phone" type="tel" defaultValue={profile.phone} />
      <Field label="Location" defaultValue={profile.location} className="sm:col-span-2" />
      <label className="block text-xs font-semibold text-muted-foreground sm:col-span-2">Bio<textarea name="Bio" rows={3} defaultValue={profile.bio} className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring" /></label>
    </CrudDialog>}
    {dialog === "password" && <CrudDialog title="Change password" description="Use at least 8 characters." submitLabel="Update password" onClose={() => setDialog(null)} onSubmit={() => { setDialog(null); notify("changed", "Password"); }}>
      <Field label="Current password" type="password" className="sm:col-span-2" />
      <Field label="New password" type="password" />
      <Field label="Confirm new password" type="password" />
    </CrudDialog>}
  </>;
}

function ToggleRow({ label, hint, on, onToggle }: { label: string; hint: string; on: boolean; onToggle: () => void }) {
  return <div className="flex items-center gap-4 px-5 py-4"><div className="min-w-0 flex-1"><p className="text-sm font-medium">{label}</p><p className="text-xs text-muted-foreground">{hint}</p></div><button role="switch" aria-checked={on} aria-label={label} onClick={onToggle} className={`relative h-6 w-11 shrink-0 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${on ? "bg-primary" : "bg-muted"}`}><span className={`absolute top-0.5 size-5 rounded-full bg-card shadow transition-transform ${on ? "translate-x-[22px]" : "translate-x-0.5"}`} /></button></div>;
}
