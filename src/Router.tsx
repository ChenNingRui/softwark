import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MenuPage } from "./pages";
import { DeployPage } from "./pages/Deploy";
import { GamePage } from "./pages/Game";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MenuPage />} />
                <Route path="/deploy" element={<DeployPage />} />
                <Route path="/game" element={<GamePage />} />
            </Routes>
        </BrowserRouter>
    )
}
