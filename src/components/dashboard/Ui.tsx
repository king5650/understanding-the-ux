import { ArrowDownRight, ArrowUpRight, ChevronRight, X } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "./Button";

export function PageHeader({ title, eyebrow, action }: { title: string; eyebrow?: string; action?: ReactNode }) {
  return <div className="mb-7 flex flex-wrap items-end justify-between gap-4"><div>{eyebrow && <p className="mb-1 text-xs font-bold uppercase text-primary">{eyebrow}</p>}<h1 className="font-heading text-2xl font-semibold sm:text-3xl">{title}</h1><p className="mt-1 text-sm text-muted-foreground">Thursday, 1 October 2026</p></div>{action}</div>;
}
export function StatCard({ label, value, trend, icon }: { label: string; value: string; trend: string; icon: ReactNode }) {
  const up = !trend.startsWith("-");
  return <article className="min-w-0 rounded-md border border-border bg-card p-4 shadow-card transition-transform duration-150 hover:-translate-y-0.5"><div className="flex items-start justify-between gap-3"><p className="text-xs font-semibold text-muted-foreground">{label}</p><span className="text-primary">{icon}</span></div><p className="mt-5 font-heading text-2xl font-semibold">{value}</p><p className={`mt-2 flex items-center gap-1 text-xs font-semibold ${up ? "text-success" : "text-destructive"}`}>{up ? <ArrowUpRight className="size-3.5" /> : <ArrowDownRight className="size-3.5" />}{trend} <span className="font-normal text-muted-foreground">vs last period</span></p></article>;
}
export function Status({ value }: { value: string }) {
  const kind = ["Paid", "Fulfilled", "Confirmed", "Active", "Replied", "Resolved"].includes(value) ? "success" : ["Cancelled", "Refunded", "Unresolved"].includes(value) ? "danger" : value === "Pending" || value === "Requested" || value === "New" ? "warning" : "neutral";
  return <span className={`inline-flex rounded-full px-2 py-1 text-[11px] font-bold ${kind === "success" ? "bg-success-soft text-success-strong" : kind === "danger" ? "bg-danger-soft text-destructive" : kind === "warning" ? "bg-primary-soft text-primary-strong" : "bg-muted text-muted-foreground"}`}>{value}</span>;
}
export function Panel({ title, action, children, className = "" }: { title: string; action?: ReactNode; children: ReactNode; className?: string }) {
  return <section className={`rounded-md border border-border bg-card shadow-card ${className}`}><div className="flex min-h-14 items-center justify-between gap-3 border-b border-border px-5"><h2 className="font-heading text-sm font-semibold">{title}</h2>{action}</div>{children}</section>;
}
export function Drawer({ title, children, onClose }: { title: string; children: ReactNode; onClose: () => void }) {
  return <><button aria-label="Close detail" className="fixed inset-0 z-[19] bg-overlay" onClick={onClose} /><aside className="fixed inset-y-0 right-0 z-20 w-full max-w-xl overflow-y-auto bg-card shadow-panel animate-slide-in-right"><div className="sticky top-0 flex h-20 items-center justify-between border-b border-border bg-card px-6"><h2 className="font-heading text-lg font-semibold">{title}</h2><Button variant="ghost" size="icon" aria-label="Close detail" onClick={onClose}><X className="size-5" /></Button></div><div className="p-6">{children}</div></aside></>;
}
export function RowAction() { return <ChevronRight className="size-4 text-muted-foreground" />; }
