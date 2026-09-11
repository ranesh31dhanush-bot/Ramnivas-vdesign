import Image from "next/image";
import { Building2, ExternalLink } from "lucide-react";
import { project } from "@/lib/data";
import { cn } from "@/lib/utils";

interface ProjectMapEmbedProps {
  className?: string;
  iframeClassName?: string;
  showCaption?: boolean;
  showPinOverlay?: boolean;
}

export function ProjectMapEmbed({
  className,
  iframeClassName,
  showCaption = false,
  showPinOverlay = false,
}: ProjectMapEmbedProps) {
  return (
    <div className={className}>
      {showCaption && (
        <div className="mb-3 flex items-center justify-between gap-2">
          <p className="flex items-center gap-2 text-sm font-medium text-navy sm:text-base">
            <Building2 size={18} className="shrink-0 text-accent" aria-hidden />
            <span>
              <strong className="font-serif">{project.name}</strong> — {project.location.area}
            </span>
          </p>
          <a
            href={project.location.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent-dark transition-colors hover:bg-accent/20"
          >
            Open in Maps
            <ExternalLink size={12} />
          </a>
        </div>
      )}
      <div className="relative h-full w-full overflow-hidden rounded-sm">
        <iframe
          src={project.location.mapEmbedUrl}
          title={`Map showing ${project.name} at ${project.location.area}`}
          className={cn("h-full w-full border-0", iframeClassName)}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        {showPinOverlay && (
          <div
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
            aria-hidden
          >
            {/* 3D Floating Building Marker */}
            <div className="relative -mt-16 flex flex-col items-center select-none">
              {/* Floating 3D Building Card */}
              <div className="animate-float-subtle relative flex items-center gap-3 rounded-xl border border-accent/40 bg-navy/95 p-2.5 pr-4 shadow-[0_16px_36px_rgba(28,43,58,0.45)] backdrop-blur-md">
                {/* 3D Elevation Thumbnail */}
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-accent/30 shadow-inner">
                  <Image
                    src="/images/elevation/elevation-1.jpeg"
                    alt={`${project.name} 3D Elevation`}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                </div>

                {/* Building Details */}
                <div className="flex flex-col text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="inline-block h-2 w-2 rounded-full bg-accent animate-pulse" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-accent-light">
                      {project.name}
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-cream">
                    3D Building Site
                  </span>
                  <span className="text-[11px] text-cream/70">
                    {project.location.roadFrontage}
                  </span>
                </div>
              </div>

              {/* 3D Pin Needle / Stem */}
              <div className="relative flex flex-col items-center">
                <div className="h-4 w-1 bg-gradient-to-b from-accent to-accent-dark shadow-md" />
                <div className="h-0 w-0 border-x-4 border-t-[8px] border-x-transparent border-t-accent-dark" />
              </div>

              {/* Pulsing Ground Beacon / Radar Rings */}
              <div className="relative -mt-1 flex items-center justify-center">
                <span className="absolute h-8 w-8 rounded-full bg-accent/40 animate-ping" />
                <span className="absolute h-5 w-5 rounded-full bg-accent/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent ring-2 ring-white shadow-sm" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
