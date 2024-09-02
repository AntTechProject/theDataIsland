import React from 'react'

const MakeUsAcall = ({
    title,
    icon,
    position,
    handleClick,
    otherClasses,
    gradient
}: {
    title: string;
    icon: React.ReactNode;
    position: string;
    handleClick?: () => void;
    otherClasses?: string;
    gradient?: string;
}) => {
    const defaultGradient = "90deg,#E2CBFF 0%,#393BB2 50%,#E2CBFF 100%";
    const gradientStyle = gradient || defaultGradient;

    return (
        <button
            onClick={handleClick}
            className={`group/call relative inline-flex h-10 w-full overflow-hidden rounded-full p-[3px] focus:outline-none ${otherClasses}`}
        >
            <span 
                className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]"
                style={{background: `conic-gradient(from ${gradientStyle})`}}
            />
            <span className="relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[rgb(2,6,23)] px-3 text-sm font-medium text-white backdrop-blur-sm gap-2">
                {position === 'left' && (
                    <div className="transition-transform duration-300 group-hover/call:scale-150 group-hover/call:animate-pulse">
                        {icon}
                    </div>
                )}
                {title}
                {position === 'right' && (
                    <div className="transition-transform duration-300 group-hover/call:scale-150 group-hover/call:animate-pulse">
                        {icon}
                    </div>
                )}
            </span>
        </button>
    )
}

export default MakeUsAcall