import './App.css';
import {useEffect, useState} from "react";
import axiosApi from "../axios-api";

function App() {
    const [state, setState] = useState([]);

    const fetchData = async () => {
      try {
          const response = await axiosApi.get('/');
          const newState = Object.entries(response.data).map(([key, value]) => ({
              id: key,
              ...value,
          }));
          setState(newState);
          console.log(newState);
      } catch (e) {
          console.error('Error fetching data: ', e);
      }
    };

    useEffect(() => {
        fetchData().then();
    }, []);

    return (
        <div className="App">
            <div className="header">
                Annual planer app
            </div>
            <div className="action-panel">
                <button>Add new month</button>
                <button>Add new plan</button>
            </div>
            <div className="main-block">
                {state.map((item) => (
                    <div className="month" key={item.id}>{item.id}</div>
                ))}
            </div>
        </div>
    );
}

export default App;
