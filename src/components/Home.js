import React, {useEffect, useState} from 'react';
import MonthModalForm from "./MonthModalForm";
import PlanModalForm from "./PlanModalForm";
import axiosApi from "../axios-api";

const Home = () => {
    const [state, setState] = useState([]);
    const [modalFirstOpen, setModalFirstOpen] = useState(false);
    const [modalSecondOpen, setModalSecondOpen] = useState(false);

    const openFirstModal = () => {
        setModalFirstOpen(true);
    };

    const closeFirstModal = () => {
        setModalFirstOpen(false);
    };

    const openSecondModal = () => {
        setModalSecondOpen(true);
    };

    const closeSecondModal = () => {
        setModalSecondOpen(false);
    };

    const goToMonthInfo = () => {

    };

    const fetchData = async () => {
        try {
            const response = await axiosApi.get('/month.json');
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
        <div>
            <div className="actionPanel">
                <button className="pointer" onClick={openFirstModal}>Add new month</button>
                <button className="pointer" onClick={openSecondModal}>Add new plan</button>
            </div>
            <div className="mainBlock">
                {state
                    .sort((a, b) => a.number - b.number)
                    .map((item) => (
                        <div
                            className="month pointer"
                            key={item.id}
                            onClick={goToMonthInfo}
                        >
                            {item.id}
                        </div>
                    ))}
            </div>
            <MonthModalForm isOpen={modalFirstOpen} onClose={closeFirstModal} fetchData={fetchData} />
            <PlanModalForm isOpen={modalSecondOpen} onClose={closeSecondModal} />
        </div>
    );
};

export default Home;