import React from 'react';

interface CornerFramesProps {
    color?: 'light' | 'dark';
}

const CornerFrames: React.FC<CornerFramesProps> = ({ color = 'dark' }) => {
    const borderColor = color === 'dark' ? 'border-white/20' : 'border-black/20';

    return (
        <>
            {/* Top Left */}
            <div className={`absolute top-6 left-6 w-8 h-8 border-l-2 border-t-2 ${borderColor}`} />

            {/* Top Right */}
            <div className={`absolute top-6 right-6 w-8 h-8 border-r-2 border-t-2 ${borderColor}`} />

            {/* Bottom Left */}
            <div className={`absolute bottom-6 left-6 w-8 h-8 border-l-2 border-b-2 ${borderColor}`} />

            {/* Bottom Right */}
            <div className={`absolute bottom-6 right-6 w-8 h-8 border-r-2 border-b-2 ${borderColor}`} />
        </>
    );
};

export default CornerFrames;
