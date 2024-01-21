import React, {useState} from 'react';
import styles from './PlanModalForm.module.css';

const PlanModalForm = ({ isOpen, onClose }) => {
    const [state, setState] = useState({
        title: '',

    });

    const inputHandler = (event) => {
        const {name, value} = event.target;

        setState((prevState) => ({ ...prevState, [name]: value }));
    };

    return (
        <div className={`${styles.modal} ${isOpen ? `${styles.open}` : ''}`}>
            <div className={styles.modalContent}>
                <span className={styles.close} onClick={onClose}>&times;</span>

                <input onChange={inputHandler} placeholder="month number" name="number" value={state.number}/>
                <input onChange={inputHandler} placeholder="year" name="year" value={state.year}/>
            </div>
        </div>
    );
};

export default PlanModalForm;