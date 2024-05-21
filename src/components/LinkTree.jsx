import { Link } from "react-router-dom";
import { logo, me } from "../assets";

const LinkTree = () => {
    return (
        <div className="relative z-0 min-h-screen flex flex-col items-center">
            <nav className="w-full flex items-center py-5 bg-primary">
                <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-6">
                    <Link to="/" className="flex items-center gap-2">
                        <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
                        <p className="text-white text-[18px] font-bold cursor-pointer flex">Gabriel Jeannot</p>
                    </Link>
                </div>
            </nav>
            <div className="flex flex-col items-center mt-20">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-8 avatar-violet-gradient">
                    <img src={me} alt="avatar" className="w-full h-full object-cover p-1 rounded-full" />
                </div>
                <h1 className="text-white text-4xl font-bold mb-6">Let's connect</h1>
                <div className="flex flex-col items-center">
                <a
                        href="https://drive.google.com/file/d/1qP4Mnce30lQxUlB8L2eBomzXtFEedgky/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mb-4 w-72 text-center green-pink-gradient p-[2px] rounded-[10px] shadow-card"
                    >
                        <button className="w-full bg-[#151131] text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-95">
                            <strong>CV</strong>
                        </button>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/xlgabriel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mb-4 w-72 text-center green-pink-gradient p-[2px] rounded-[10px] shadow-card"
                    >
                        <button className="w-full bg-[#151131] text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-95">
                            LinkedIn
                        </button>
                    </a>
                    <a
                        href="https://github.com/xlgabriel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mb-4 w-72 text-center green-pink-gradient p-[2px] rounded-[10px] shadow-card"
                    >
                        <button className="w-full bg-[#151131] text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-95">
                            GitHub
                        </button>
                    </a>
                    <div className="flex flex-row gap-1">
                    <a
                        href="https://drive.google.com/file/d/1qP4Mnce30lQxUlB8L2eBomzXtFEedgky/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mb-4 w-36 text-center green-pink-gradient p-[2px] rounded-[10px] shadow-card"
                    >
                        <button className="w-full bg-[#151131] text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-95">
                            Instagram
                        </button>
                    </a>
                    <a
                        href="https://drive.google.com/file/d/1qP4Mnce30lQxUlB8L2eBomzXtFEedgky/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mb-4 w-36 text-center green-pink-gradient p-[2px] rounded-[10px] shadow-card"
                    >
                        <button className="w-full bg-[#151131] text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-95">
                            YouTube
                        </button>
                    </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LinkTree;
