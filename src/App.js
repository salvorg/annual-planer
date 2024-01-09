import './App.css';
import Home from "./containers/Home";
import {Link , Route, Routes} from "react-router-dom";
import Month from "./containers/Month";

function App() {
    return (
        <div className="App">
            <div className="header">
                <Link className="navLink" to="/">Annual planer app</Link>
            </div>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home/>
                    }
                />
                <Route
                    path="/plans/:id"
                    element={
                        <Month/>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
