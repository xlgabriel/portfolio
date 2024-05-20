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
                    <div className="flex sm:flex-row mt-7">
                        <a
                            href="https://github.com/xlgabriel"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mb-4 sm:mb-0 sm:mr-4 green-pink-gradient p-[2px] rounded-[10px] shadow-card"
                        >
                            <button className="bg-[#151131] text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-95">
                                GitHub
                            </button>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/xlgabriel"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mb-4 sm:mb-0 sm:mr-4 green-pink-gradient p-[2px] rounded-[10px] shadow-card"
                        >
                            <button className="bg-[#151131] text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-95">
                                LinkedIn
                            </button>
                        </a>
                        <a
                            href="https://drive.google.com/file/d/1qP4Mnce30lQxUlB8L2eBomzXtFEedgky/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mb-4 sm:mb-0 sm:mr-4 green-pink-gradient p-[2px] rounded-[10px] shadow-card"
                        >
                            <button className="bg-[#151131] text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-95">
                                <strong>CV</strong>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <ComputersCanvas />
        </section>
    );
};

export default Hero;
