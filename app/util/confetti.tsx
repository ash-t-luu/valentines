'use client'

import { useRef, useEffect } from 'react';
import Confetti from 'react-confetti';

const Surprise = () => {
    const confettiRef = useRef(null);

    useEffect(() => {
        const confetti = confettiRef.current as HTMLCanvasElement | null;;
        const context = confetti?.getContext('2d');
    }, []);

    return (
        <Confetti ref={confettiRef} numberOfPieces={150} />
    );
}

export default Surprise;