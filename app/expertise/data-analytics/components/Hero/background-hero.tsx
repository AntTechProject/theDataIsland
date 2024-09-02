import React from 'react';
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/utils/cn";

const BackgroundElements: React.FC = () => {
  return (
    <div className="h-screen w-full absolute top-0 left-0 flex items-center justify-center dark:bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-black-100 rounded-full filter blur-[100px] opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-black-100 rounded-full filter blur-[100px] opacity-30 animate-pulse"></div>
      </div>
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] animate-pulse",
        )}
      />
    </div>
  );
};

export default BackgroundElements;