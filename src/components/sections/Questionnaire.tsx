import SectionWrapper from "../SectionWrapper";
import { Header } from "../Header";
import { config } from "../../constants/config";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { useState, useRef, useEffect } from 'react';


const Questionnaire = () => {

    const [step, setStep] = useState(0);
    const [hoveringNo, setHoveringNo] = useState(false);
    const [noButtonPosition, setNoButtonPosition] = useState({ top: '0px', left: '0px' });
    const noButtonRef = useRef<HTMLButtonElement>(null);
    const yesButtonRef = useRef<HTMLButtonElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleYesClick = () => {
        if (step < 2) {
            setStep(step + 1);
        } else {
            setStep(3);
        }
    };

    const handleNoHover = () => {
        setHoveringNo(true);
        const newPosition = getRandomPosition();
        setNoButtonPosition(newPosition);
    };
    
    const resetHovering = () => {
        setHoveringNo(false);
    };

    const getRandomPosition = () => {
        if (!containerRef.current || !noButtonRef.current || !yesButtonRef.current) {
            return { top: '0px', left: '0px' };
        }
        const containerRect = containerRef.current.getBoundingClientRect();
        const noButtonRect = noButtonRef.current.getBoundingClientRect();
        const yesButtonRect = yesButtonRef.current.getBoundingClientRect();

        const maxLeft = containerRect.width - noButtonRect.width;
        const maxTop = containerRect.height - noButtonRect.height;

        let newTop, newLeft;

        do {
        newLeft = Math.random() * maxLeft;
        newTop = Math.random() * maxTop;
        } while (
            newLeft < yesButtonRect.right &&
            newLeft + noButtonRect.width > yesButtonRect.left &&
            newTop < yesButtonRect.bottom &&
            newTop + noButtonRect.height > yesButtonRect.top
        );

        return { top: `${newTop}px`, left: `${newLeft}px` };
    };

    return (
        <>
            <Header useMotion={true} {...config.sections.questionnaire} />
            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="text-secondary mt-4 max-w-3xl text-[17px] leading-[30px]"
            >
            </motion.p>

            <div ref={containerRef} className="container text-center mt-5 position-relative" style={{ height: '300px' }}>
                {step === 1 && <h1>Can I be your boyfriend?</h1>}
                {step === 2 && <h1>Are you sure?</h1>}
                {step === 3 && <h1>Are you really sure?</h1>}
                {step === 4 && (
                    <div className="congratulations alert alert-success" role="alert">
                    <h1>Congratulations!</h1>
                    </div>
                )}

                {step < 4 && (
                    <div className="d-flex justify-content-center mt-4 position-relative">
                    <button
                        ref={yesButtonRef}
                        onClick={handleYesClick}
                        className="btn btn-success me-3"
                    >
                        Yes
                    </button>
                    <button
                        ref={noButtonRef}
                        onMouseEnter={handleNoHover}
                        onMouseLeave={resetHovering}
                        className="btn btn-danger position-absolute"
                        style={{ top: noButtonPosition.top, left: noButtonPosition.left }}
                    >
                        No
                    </button>
                    </div>
                )}
            </div>
        </>
    )
}

export default SectionWrapper(Questionnaire, "questionnaire");