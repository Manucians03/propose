import SectionWrapper from "../SectionWrapper";
import { Header } from "../Header";
import { config } from "../../constants/config";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

const Questionnaire = () => {
    return (
        <>
            <Header useMotion={true} {...config.sections.questionnaire} />
            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="text-secondary mt-4 max-w-3xl text-[17px] leading-[30px]"
            >
            </motion.p>
        </>
    )
}

export default SectionWrapper(Questionnaire, "questionnaire");