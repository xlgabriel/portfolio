import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#1d1836",
                color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "px solid  #232631" }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
                <motion.div
                    className="flex justify-center items-center w-full h-full"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <a href={experience.iconLink} target="_blank">
                        <img
                            src={experience.icon}
                            alt={experience.company_name}
                            className="w-[100%] h-[60%] object-contain"
                        />
                    </a>
                </motion.div>
            }
        >
            <div>
                <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
                <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
                    {experience.company_name}
                </p>
            </div>

            <ul className="mt-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>My growth as a professional</p>
                <h2 className={`${styles.sectionHeadText} text-center`}>Projects.</h2>
            </motion.div>

            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={`experience-${index}`} experience={experience} />
                    ))}
                </VerticalTimeline>
            </div>
            <div className="flex justify-center mt-10">
                <a
                    href="https://github.com/xlgabriel?tab=repositories"
                    target="_blank"
                    className="mb-4 sm:mb-0 sm:mr-4 green-pink-gradient p-[2px] rounded-[10px] shadow-card"
                >
                    <button className="bg-[#151131] text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-95">
                        See all my projects on GitHub
                    </button>
                </a>
            </div>
        </>
    );
};

export default SectionWrapper(Experience, "work");
