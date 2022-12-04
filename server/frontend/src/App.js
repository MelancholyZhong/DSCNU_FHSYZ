import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import IntroPage from "./components/IntroPage";
import GenerateQRcodePage from "./components/GenerateQRcodePage";
import InfoPage from "./components/InfoPage";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";


function App() {
    return (
        <div className="App">
            <Router>
                <NavBar/>
                <div style={{padding: "15px"}}></div>
                <main>
                        <Routes>
                            <Route path="/" exact element={<IntroPage />} />
                            <Route
                                path="/inputInfo"
                                exact
                                element={<GenerateQRcodePage />}
                            />
                            <Route
                                path="/alert/:userId"
                                exact
                                element={<InfoPage />}
                            />
                            <Route
                                path="*"
                                element={<Navigate to="/" replace />}
                            />
                        </Routes>
                </main>
            </Router>
        </div>
    );
}

export default App;
