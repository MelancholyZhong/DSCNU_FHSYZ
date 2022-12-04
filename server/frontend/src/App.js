import React, { Suspense } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import "./App.css";

const Intro = React.lazy(() => import("./components/Intro"));
const InfoForm = React.lazy(() => import("./components/infoForm"));
const Alert = React.lazy(() => import("./components/Alert"));

function App() {
    return (
        <div className="App">
            <Router>
                <main>
                    <Suspense fallback={<div className="center"></div>}>
                        <Routes>
                            <Route path="/" exact element={<Intro />} />
                            <Route
                                path="/inputInfo"
                                exact
                                element={<InfoForm />}
                            />
                            <Route
                                path="/alert/:userId"
                                exact
                                element={<Alert />}
                            />
                            <Route
                                path="*"
                                element={<Navigate to="/" replace />}
                            />
                        </Routes>
                    </Suspense>
                </main>
            </Router>
        </div>
    );
}

export default App;
