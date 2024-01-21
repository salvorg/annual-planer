import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {months} from "../constants";

const Month = () => {
    const [numbersData, setNumbersData] = useState({});
    const {year, monthName} = useParams();
    const [daysInMonth, setDaysInMonth] = useState([]);

    const currentDate = new Date(parseInt(year), months.findIndex(month => month.name === monthName) + 1, 0);
    const numberOfDays = currentDate.getDate();

    setDaysInMonth(Array.from({ length: numberOfDays }, (_, index) => index + 1));

    return (
        <div>
            <p>{year}</p>
            <p>{monthName}</p>
            <p>{numberOfDays}</p>
        </div>
    );
};

export default Month;