import { AlertTriangle, Check, LoaderCircle, Trash2, X } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { toast } from "sonner";
import { Button } from "./Button";

export function notify(action: string, subject: string) {
  toast.success(`${subject} ${action}`, { description: "Your dashboard has been updated." });
}

export function CrudDialog({ title, description, children, submitLabel = "Save changes", danger = false, layoutId, onClose, onSubmit }: { title: string; description?: string; children: ReactNode; submitLabel?: string; danger?: boolean; layoutId?: string; onClose: () => void; onSubmit: () => void }) {
  const [saving, setSaving] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    panel.current?.focus();
    const close = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", close);
    return () => { window.removeEventListener("keydown", close); previous?.focus(); };
  }, [onClose]);
  const submit = (event: FormEvent) => {
    event.preventDefault(); setSaving(true);
    window.setTimeout(() => { onSubmit(); setSaving(false); }, 280);
  };
  return <div className="fixed inset-0 z-40 grid place-items-center p-4" role="presentation">
    <button className="absolute inset-0 bg-overlay animate-fade-in" aria-label="Close dialog" onClick={onClose}/>
    <motion.div ref={panel} layoutId={reduceMotion ? undefined : layoutId} layout="position" transition={{ type: "spring", stiffness: 390, damping: 34, mass: 0.72 }} tabIndex={-1} role="dialog" aria-modal="true" aria-labelledby="crud-title" className={`relative max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-lg border border-border bg-card shadow-panel outline-none ${layoutId ? "" : "animate-dialog-morph"}`}>
      <div className="sticky top-0 z-10 flex items-start justify-between gap-5 border-b border-border bg-card/95 px-6 py-5 backdrop-blur">
        <div><h2 id="crud-title" className="font-heading text-xl font-semibold">{title}</h2>{description&&<p className="mt-1 text-sm text-muted-foreground">{description}</p>}</div>
        <Button variant="ghost" size="icon" aria-label="Close dialog" onClick={onClose}><X className="size-5"/></Button>
      </div>
      <form onSubmit={submit}><div className="grid gap-4 p-6 sm:grid-cols-2">{children}</div><div className="sticky bottom-0 flex justify-end gap-3 border-t border-border bg-card/95 px-6 py-4 backdrop-blur"><Button type="button" onClick={onClose}>Cancel</Button><Button type="submit" variant={danger?"danger":"primary"} disabled={saving}>{saving?<LoaderCircle className="size-4 animate-spin"/>:danger?<Trash2 className="size-4"/>:<Check className="size-4"/>}{saving?"Saving…":submitLabel}</Button></div></form>
    </motion.div>
  </div>;
}

export function ConfirmDelete({ name, onClose, onConfirm }: { name: string; onClose: () => void; onConfirm: () => void }) {
  return <CrudDialog title={`Delete ${name}?`} description="This removes it from the current dashboard session." submitLabel="Delete permanently" danger onClose={onClose} onSubmit={onConfirm}>
    <div className="col-span-full flex gap-4 rounded-md border border-destructive/20 bg-danger-soft p-4"><AlertTriangle className="mt-0.5 size-5 shrink-0 text-destructive"/><div><p className="text-sm font-semibold">This action cannot be undone.</p><p className="mt-1 text-sm text-muted-foreground">Review the item name before confirming deletion.</p></div></div>
  </CrudDialog>;
}

export function Field({ label, defaultValue = "", type = "text", required = true, className = "" }: { label: string; defaultValue?: string | number | undefined; type?: string; required?: boolean; className?: string }) {
  return <label className={`block text-xs font-semibold text-muted-foreground ${className}`}>{label}<input name={label} type={type} required={required} defaultValue={defaultValue} className="mt-2 min-h-11 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground outline-none transition-shadow focus:ring-2 focus:ring-ring"/></label>;
}