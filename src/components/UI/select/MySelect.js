import React from 'react';

const MySelect = ({options, defaultValue, value, onChange, name}) => {
    return (
        <select
            value={value}
            onChange={event => onChange(event)}
            name={name}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option key={option.name} value={option.name}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default MySelect;