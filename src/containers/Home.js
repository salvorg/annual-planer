import React, {useState} from 'react';
import PlanModalForm from "../components/PlanModalForm";
import {useNavigate} from "react-router-dom";
import YearCarousel from "../components/YearCarousel";
import {months} from "../constants";

const Home = () => {
    // const [state, setState] = useState([]);
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [modalFirstOpen, setModalFirstOpen] = useState(false);
    const [modalSecondOpen, setModalSecondOpen] = useState(false);
    const navigate = useNavigate();

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

    const goToMonthInfo = (year, monthName) => {
        navigate(`/${year}/${monthName}`);
    };

    // const fetchData = async () => {
    //     try {
    //         const response = await axiosApi.get('/month.json');
    //         const newState = Object.entries(response.data).map(([key, value]) => ({
    //             id: key,
    //             ...value,
    //         }));
    //         setState(newState);
    //         console.log(newState);
    //     } catch (e) {
    //         console.error('Error fetching data: ', e);
    //     }
    // };

    // useEffect(() => {
    //     fetchData().then();
    // }, []);

    return (
        <div>
            <div className="actionPanel">
                <button className="pointer" onClick={openFirstModal}>Add new month</button>
                <button className="pointer" onClick={openSecondModal}>Add new plan</button>
            </div>
            <YearCarousel currentYear={currentYear} setCurrentYear={setCurrentYear} />
            <div className="mainBlock">
                {months
                    .sort((a, b) => a.number - b.number)
                    .map((item) => (
                        <div
                            className="month pointer"
                            key={item.number}
                            onClick={() => goToMonthInfo(currentYear, item.name)}
                        >
                            {item.name}
                        </div>
                    ))}
            </div>
            {/*<MonthModalForm isOpen={modalFirstOpen} onClose={closeFirstModal} fetchData={fetchData} />*/}
            <PlanModalForm isOpen={modalSecondOpen} onClose={closeSecondModal} />
        </div>
    );
};

export default Home;