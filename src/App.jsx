import { BrowserRouter } from "react-router-dom";

import { Contact, Navbar, StarsCanvas, LinkTree } from "./components";

const App = () => {
    return (
        <div className="relative z-0 bg-primary">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar />
            </div>
            <div className="relative z-0">
                <LinkTree />
                <Contact />
                <StarsCanvas />
            </div>
        </div>
    );
};

const AppWrapper = () => {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
};

export default AppWrapper;
