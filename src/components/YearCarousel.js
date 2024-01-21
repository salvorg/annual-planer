import React from 'react';

const YearCarousel = ({currentYear, setCurrentYear}) => {

    return (
        <div>
            <p>
                <button onClick={() => setCurrentYear(currentYear - 1)}>&lt; </button>
                {currentYear}
                <button onClick={() => setCurrentYear(currentYear + 1)}> &gt;</button></p>
        </div>
    );
};

export default YearCarousel;