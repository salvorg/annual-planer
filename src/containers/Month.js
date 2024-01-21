import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {months} from "../constants";

const Month = () => {
    const [numbersData, setNumbersData] = useState({});
    const {year, monthName} = useParams();
    const [daysInMonth, setDaysInMonth] = useState(0);

    useEffect(() => {
        const currentDate = new Date(parseInt(year), months.findIndex(month => month.name === monthName) + 1, 0);
        const numberOfDays = currentDate.getDate();

        setDaysInMonth(numberOfDays);
    }, [year, monthName]);

    return (
        <div>
            <p>{year}</p>
            <p>{monthName}</p>
            <p>{daysInMonth}</p>
        </div>
    );
};

export default Month;