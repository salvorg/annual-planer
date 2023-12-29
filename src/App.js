import './App.css';
import {useEffect, useState} from "react";
import axiosApi from "./axios-api";
import AddMonthModal from "./components/AddMonthModal";

function App() {
    const [state, setState] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

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
                <button onClick={openModal}>Add new month</button>
                <button>Add new plan</button>
            </div>
            <div className="main-block">
                {state.map((item) => (
                    <div className="month" key={item.id}>{item.id}</div>
                ))}
            </div>
            <AddMonthModal isOpen={modalIsOpen} onClose={closeModal} />
        </div>
    );
}

export default App;
