import React, {useState} from 'react';
import axiosApi from "../axios-api";

const AddMonthModal = ({isOpen, onClose}) => {
    const [state, setState] = useState({name: '', number: ''});

    const inputHandler = (event) => {
        const {name, value} = event.target;
        setState(prevState => ({ ...prevState, [name]: value }));
    }

    const onSubmit = async (event) => {
        event.preventDefault();

        try {
            await axiosApi.put(`/month/${state.name.toLowerCase()}.json`, {number: state.number});
            setState(prevState => ({...prevState, name: '', number: ''}));
        } finally {
            onClose();
        }
    };

    return (
        <div className={`modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <p>modalContent</p>
                <form>
                    <input onChange={inputHandler} placeholder="add month name" name="name"/>
                    <input onChange={inputHandler} placeholder="add month number" name="number"/>
                    <button onClick={onSubmit}>Add</button>
                </form>
            </div>
        </div>
    );
};

export default AddMonthModal;