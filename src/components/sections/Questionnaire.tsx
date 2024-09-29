import SectionWrapper from "../SectionWrapper";
import { Header } from "../Header";
import { config } from "../../constants/config";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import toast from "react-hot-toast";



const Questionnaire = () => {
    const [step, setStep] = useState(0);
    const [noButtonPosition, setNoButtonPosition] = useState({ top: '50%', left: '65%' });
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    const handleNoHover = () => {
        const randomTop = Math.random() * 80 + 10;  
        const randomLeft = Math.random() * 80 + 10;
        setNoButtonPosition({
            top: `${randomTop}%`,
            left: `${randomLeft}%`
        });
    };

    const handleYesClick = () => {   
        setStep(step + 1);
        setNoButtonPosition({ top: '50%', left: '65%' });
    }

    const handleNoClick = () => {
        toast.error("Wrong answer! Try again!");
    }

    const handleStarClick = (rating: number) => {
        if (rating <= 4) {
            toast.error("Wrong answer! Try again!");
        } else {
            setRating(rating);
        }
    }


    return (
        <>
            <Header useMotion={true} {...config.sections.questionnaire} />
            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="text-secondary mt-4 max-w-3xl text-[17px] leading-[30px]"
            >         
            </motion.p>

            {step < config.sections.questionnaire.content.length &&
            (
                <div className="text-quaternary flex flex-col items-center items-center min-h-[450px] w-full p-20">
                    <div className="min-h-[100px] font-bold text-[48px]">{config.sections.questionnaire.content[step].question}</div>
                    <div className="relative flex-grow h-full w-full flex justify-center items-center">
                        <button 
                            className="shadow-card bg-green-500 py-5 px-12 rounded-[20px] absolute border border-3 border-quinary"
                            style={{ top: '50%', left: '35%', transform: 'translate(-50%, -50%)' }}
                            onClick={handleYesClick}
                        >
                            {config.sections.questionnaire.content[step].yes}
                        </button>
                        <motion.button
                            className="shadow-card bg-red-500 py-5 px-12 rounded-[20px] absolute border border-3 border-quinary"
                            style={{ transform: 'translate(-50%, -50%)' }}
                            animate={{ top: noButtonPosition.top, left: noButtonPosition.left }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            onMouseEnter={handleNoHover}
                            onClick={handleNoClick}
                        >
                            {config.sections.questionnaire.content[step].no}
                        </motion.button>
                    </div>
                </div>   
            )}

            {step >= config.sections.questionnaire.content.length &&
            (
                <div className="text-quaternary flex flex-col items-center ">
                    <div className="flex flex-col items-center min-h-[450px] w-full p-10">
                        <div className="min-h-[150px] font-bold text-[36px] items-center flex flex-col">
                            <p>Congratulations! You won!</p>
                            <p>Phần thưởng của bạn là @tresminh.</p>
                            <p>Évalue ton expérience!</p>
                        </div>
                        <div className="flex items-center p-10">
                            {[...Array(5)].map((_, index) => {
                                const ratingValue = index + 1;
                                return (
                                <label key={index} style={{ marginRight: '15px', cursor: 'pointer' }}>
                                    <input 
                                    type="radio" 
                                    name="rating" 
                                    value={ratingValue} 
                                    onClick={() => handleStarClick(ratingValue)}
                                    style={{ display: "none" }}
                                    />
                                    <FaStar 
                                    className="star" 
                                    color={ratingValue <= (hoverRating || rating) ? "#ffc107" : "#e4e5e9"} 
                                    size={100} 
                                    onMouseEnter={() => setHoverRating(ratingValue)}
                                    onMouseLeave={() => setHoverRating(0)}
                                    />
                                </label>
                                );
                            })}
                        </div>
                    </div>
                </div>   
            )}
        </>
    )
}

export default SectionWrapper(Questionnaire, "questionnaire");