import React, {useState} from 'react';
import axiosApi from "../axios-api";
import styles from './MonthModalForm.module.css';
import MySelect from "./UI/select/MySelect";

const MonthModalForm = ({isOpen, onClose, fetchData}) => {
    const [state, setState] = useState({name: '', number: '', year: ''});
    const months = [
        {name: 'January', number: '1'},
        {name: 'February', number: '2'},
        {name: 'March', number: '3'},
        {name: 'April', number: '4'},
        {name: 'May', number: '5'},
        {name: 'June', number: '6'},
        {name: 'July', number: '7'},
        {name: 'August', number: '8'},
        {name: 'September', number: '9'},
        {name: 'October', number: '10'},
        {name: 'November', number: '11'},
        {name: 'December', number: '12'},
    ];
    const years = ['2024', '2025'];
    // let disabled = false;

    const inputHandler = (event) => {
        const {name, value} = event.target;

        setState((prevState) => ({ ...prevState, [name]: value }));
    };

    const onSubmit = async (event) => {
        event.preventDefault();

        try {
            await axiosApi.put(`/month/${state.name.toLowerCase()}.json`, {number: state.number, year: state.year});
            setState(prevState => ({...prevState, name: '', number: '', year: ''}));
            await fetchData();
        } finally {
            onClose();
        }
    };

    const disabled = !state.name || !state.number || !state.year;
    // if (state.name === '' || state.number === '' || state.year === '') {
    //     disabled = true;
    // }

    return (
        <div className={`${styles.modal} ${isOpen ? `${styles.open}` : ''}`}>
            <div className={styles.modalContent}>
                <span className={styles.close} onClick={onClose}>&times;</span>
                <p>Create a month card for a new plans</p>
                <form className={styles.monthModalForm}>
                    {/*<input onChange={inputHandler} placeholder="month name" name="name" value={state.name}/>*/}
                    <MySelect
                        options={months}
                        defaultValue="month"
                        value={state.name}
                        name="name"
                        onChange={(event) => {
                            inputHandler(event);
                            const selectedMonth = months.find(month => month.name === event.target.value);
                            setState(prevState => ({ ...prevState, number: selectedMonth?.number }));
                        }}
                    />
                    <MySelect
                        options={years}
                        defaultValue="year"
                        value={state.year}
                        name="year"
                        onChange={inputHandler}
                    />
                    <button onClick={onSubmit} disabled={disabled}>Create</button>
                    {/*<button type={"button"} onClick={() => console.log(state)}>Log</button>*/}
                </form>
            </div>
        </div>
    );
};

export default MonthModalForm;