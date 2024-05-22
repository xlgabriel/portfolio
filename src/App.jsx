import { BrowserRouter, Routes, Route } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, LinkTree } from "./components";

const MainContent = () => {
    return (
        <>
            <About />
            <Works />
            <Experience />
            {/* <Tech /> */}
            <Feedbacks />
            <div className="relative z-0">
                <Contact />
                <StarsCanvas />
            </div>
        </>
    );
};

const AppContent = () => {
    return (
        <div className="relative z-0 bg-primary">
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                                <Navbar usedOnLinkTree={false} />
                                <Hero />
                            </div>
                            <MainContent />
                        </>
                    }
                />
                <Route
                    path="/links"
                    element={
                        <>
                            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center min-h-screen">
                                <Navbar usedOnLinkTree={true} />
                                <LinkTree />
                            </div>
                            <Contact />
                        </>
                    }
                />
            </Routes>
        </div>
    );
};

const App = () => {
    return (
        <BrowserRouter basename="/portfolio">
            <AppContent />
        </BrowserRouter>
    );
};

export default App;
