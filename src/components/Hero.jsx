import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
    return (
        <section className={`relative w-full h-screen mx-auto`}>
            <div
                className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
            >
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
                    <div className="w-1 sm:h-80 h-40 violet-gradient" />
                </div>

                <div style={{ zIndex: 1 }}>
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        Hi, I'm{" "}
                        <motion.span
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-[#915EFF]"
                        >
                            Gabriel Jeannot
                        </motion.span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        Multimedia Engineer | A.I. Specialist | Front-end Developer
                    </p>
                </div>
            </div>
            <ComputersCanvas />
        </section>
    );
};

export default Hero;
