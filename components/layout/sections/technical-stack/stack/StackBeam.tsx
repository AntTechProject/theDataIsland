"use client";

import React, { forwardRef, useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";
import { AnimatedBeam } from "@/components/ui/AnimatedBeam";
import Image from "next/image";
type IconDetail = {
  name: string;
  imageUrl: string;
  spanText?: string;
  size?: string;
};

type BeamDetail = {
  from: number;
  to: number;
  curvature?: number;
  endYOffset?: number;
  reverse?: boolean;
};

type StackBeamProps = {
  iconDetails: IconDetail[];
  beams: BeamDetail[];
};

const DynamicIcon = ({ icon }: { icon: IconDetail }) => (
  <div className={`${icon.size || "size-12"} flex flex-col items-center gap-2`}>
    <Image
      src={icon.imageUrl}
      alt={icon.name}
      width="100"
      height="100"
      loading ='lazy'
      className={icon.size === "size-16" ? "scale-150" : ""}
      unoptimized={icon.imageUrl.endsWith('.gif')} // Add this line
    />
    {icon.spanText && <span className="text-left">{icon.spanText}</span>}
  </div>
);

const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
  ({ className, children }, ref) => (
    <div
      ref={ref}
      className={cn(
        "z-50 flex size-16 items-center justify-center rounded-full bg-none p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  )
);

Circle.displayName = "Circle";

export function StackBeam({ iconDetails, beams }: StackBeamProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [areBeamsVisible, setAreBeamsVisible] = useState(false);

  const getCircleRef = (index: number) => (el: HTMLDivElement | null) => {
    if (el) {
      circleRefs.current[index] = el;
    } else {
      circleRefs.current[index] = null;
    }
  };

  useEffect(() => {
    const allRefsSet = circleRefs.current.every(ref => ref !== null);
    if (allRefsSet) {
      setAreBeamsVisible(true);
    }
  }, [circleRefs.current]);

  return (
    <div
      className="relative flex h-full w-full items-center justify-center rounded-lg bg-inherit md:shadow-xl pb-5"
      ref={containerRef}
    >
      <div className="flex size-full flex-col max-w-lg max-h-full items-stretch justify-between gap-10">
        {iconDetails.reduce((acc: JSX.Element[][], icon, index) => {
          const rowIndex = Math.floor(index / 3);
          acc[rowIndex] = acc[rowIndex] || [];
          acc[rowIndex].push(
            <Circle key={icon.name} ref={getCircleRef(index)}>
              <DynamicIcon icon={icon} />
            </Circle>
          );
          return acc;
        }, []).map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-row items-center justify-between">
            {row}
          </div>
        ))}
      </div>

      {areBeamsVisible &&
        beams.map((beam, index) => (
          <AnimatedBeam
            key={index}
            containerRef={containerRef}
            fromRef={{ current: circleRefs.current[beam.from] }}
            toRef={{ current: circleRefs.current[beam.to] }}
            curvature={beam.curvature}
            endYOffset={beam.endYOffset}
            reverse={beam.reverse}
          />
        ))
      }
    </div>
  );
}

