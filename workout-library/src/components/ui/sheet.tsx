"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Sheet({
  open,
  onOpenChange,
  title,
  children,
  className,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm data-[state=open]:animate-fade-in" />
        <Dialog.Content
          className={cn(
            "fixed inset-x-0 bottom-0 z-[70] flex max-h-[85dvh] flex-col rounded-t-2xl border-t border-border bg-surface p-4 pb-[calc(env(safe-area-inset-bottom)+16px)] focus:outline-none",
            className,
          )}
        >
          <div className="mx-auto mb-2 h-1.5 w-10 shrink-0 rounded-full bg-border" />
          {title && (
            <div className="mb-2 flex items-center justify-between">
              <Dialog.Title className="text-lg font-bold">{title}</Dialog.Title>
              <Dialog.Close className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-elevated text-muted-foreground">
                <X size={18} />
              </Dialog.Close>
            </div>
          )}
          <div className="overflow-y-auto no-scrollbar">{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
