import { MapPin } from "lucide-react";
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
        <p className="mb-3 flex items-center gap-2 text-sm font-medium text-navy sm:text-base">
          <MapPin size={18} className="shrink-0 text-accent" aria-hidden />
          {project.name} — Your building here
        </p>
      )}
      <div className="relative h-full w-full">
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
            <MapPin
              size={44}
              className="-mt-10 fill-accent text-accent drop-shadow-lg"
              strokeWidth={1.5}
            />
          </div>
        )}
      </div>
    </div>
  );
}
