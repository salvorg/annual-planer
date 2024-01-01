import React from 'react';
import styles from './MySelect.module.css';

const MySelect = ({options, defaultValue, value, onChange, name}) => {
    return (
        <select
            className={styles.mySelect}
            value={value}
            onChange={event => onChange(event)}
            name={name}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option key={option.number ? option.number : option} value={option.name ? option.name : option}>
                    {option.name ? option.name : option}
                </option>
            )}
        </select>
    );
};

export default MySelect;