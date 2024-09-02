// components/DynamicCard.tsx
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { StackBeam } from './stack/StackBeam';

interface IconDetail {
    name: string;
    imageUrl: string;
    spanText?: string;
    size?: string;
}

interface Beam {
    from: number;
    to: number;
    curvature?: number;
    endYOffset?: number;
    reverse?: boolean;
}

interface DynamicCardProps {
    title: string;
    iconDetails: IconDetail[];
    beams: Beam[];
}

const DynamicCard: React.FC<DynamicCardProps> = ({ title, iconDetails, beams }) => {
    return (
        <Card className="mb-4 lg:mb-0 transform-gpu dark:bg-transparent dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-10px_80px_-20px_#ffffff1f_inset]">
            <CardContent className="flex flex-col">
                <h1 className='lg:text-left font-bold font-sans text-xl text-white lg:mb-4 relative z-50 text-nowrap'>
                    {title}
                </h1>
                <StackBeam iconDetails={iconDetails} beams={beams} />
            </CardContent>
        </Card>
    );
};

export default DynamicCard;
