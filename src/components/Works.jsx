import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, upper_title, date, name, description, tags, image, source_code_link }) => {
    const [isImageOpen, setIsImageOpen] = useState(false);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (isImageOpen && !event.target.closest(".bg-black")) {
                setIsImageOpen(false);
            }
        };

        const handleScroll = () => {
            if (isImageOpen) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "auto";
            }
        };

        handleScroll();

        if (isImageOpen) {
            window.addEventListener("click", handleOutsideClick);
            window.addEventListener("scroll", handleScroll);
        } else {
            window.removeEventListener("click", handleOutsideClick);
            window.removeEventListener("scroll", handleScroll);
        }

        return () => {
            window.removeEventListener("click", handleOutsideClick);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isImageOpen]);

    const openImage = () => {
        setIsImageOpen(true);
    };

    const closeImage = () => {
        setIsImageOpen(false);
    };

    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
            >
                {" "}
                <div className="relative w-full h-[230px]">
                    <div
                        className="absolute inset-0 bg-black bg-opacity-75 flex justify-center items-center cursor-pointer rounded-2xl z-10"
                        onClick={openImage}
                    >
                        <img src={image} alt="project_image" className="w-full h-full object-cover rounded-2xl" />
                    </div>
                </div>
                <div className="mt-5">
                    {date && <p className="text-gray-300 text-[16px] font-semibold mb-1">{date}</p>}
                    <a
                        href={source_code_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white font-bold text-[28px] transition-colors duration-300 hover:text-secondary"
                    >
                        {name}
                    </a>
                    <div>
                        <a className="text-white text-[13px] italic transition-colors duration-300 hover:text-gray-400">
                            {upper_title}
                        </a>
                    </div>
                    <p className="mt-2 text-secondary text-[14px]">{description}</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>

            {isImageOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-75 z-50 cursor-pointer"
                    onClick={closeImage}
                >
                    <motion.img
                        src={image}
                        alt="project_image"
                        className="max-w-[75%] max-h-[75%]"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.3 }}
                    />
                    <button className="absolute top-4 right-4 text-white text-xl" onClick={closeImage}>
                        X
                    </button>
                </motion.div>
            )}
        </motion.div>
    );
};

const Works = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} `}>My impact as an engineer</p>
                <h2 className={`${styles.sectionHeadText}`}>Professional experience.</h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
                >
                    Let's talk about my professional experience. I've worked as a front-end developer, some backend,
                    infrastructure, DevOps, Scrum Master, Cloud Engineer, Game Developer and more. What will be the next
                    challenge?
                </motion.p>
            </div>

            <div className="mt-20 flex flex-wrap gap-7">
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Works, "");
