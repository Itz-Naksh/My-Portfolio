"use client";

import { useRef } from "react";
import Image from "next/image";
import { Eye, X } from "lucide-react";
import { buttonStyles } from "@/lib/styles";

interface CertificateViewerProps {
  image: string;
  name: string;
  label?: string; // button text, e.g. "View Card" for memberships
}

/**
 * "View Certificate" button that opens the certificate in a pop-up on the same page.
 * Uses the native <dialog>, so Esc, focus trapping and the backdrop work out of the box.
 */
export default function CertificateViewer({ image, name, label = "View Certificate" }: CertificateViewerProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button type="button" onClick={() => dialogRef.current?.showModal()} className={buttonStyles.small}>
        <Eye size={15} aria-hidden="true" />
        {label}
      </button>

      <dialog
        ref={dialogRef}
        aria-label={`${name}: ${label.replace("View ", "").toLowerCase()}`}
        // Clicking the dark backdrop (the dialog element itself) closes it
        onClick={(e) => e.target === dialogRef.current && dialogRef.current?.close()}
        className="m-auto w-[min(92vw,1000px)] rounded-2xl border border-border bg-surface p-0 text-body shadow-lift backdrop:bg-black/70 backdrop:backdrop-blur-sm"
      >
        <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-3">
          <p className="font-heading text-base font-semibold text-heading">{name}</p>
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Close certificate"
            className="flex h-9 w-9 items-center justify-center rounded-xl text-heading transition-colors hover:bg-alt"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>
        <div className="relative aspect-[1400/950] bg-white">
          <Image src={image} alt={`${name} certificate`} fill sizes="1000px" className="object-contain p-2" />
        </div>
      </dialog>
    </>
  );
}
