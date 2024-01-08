import React from 'react';
import styles from './PlanModalForm.module.css';

const PlanModalForm = ({ isOpen, onClose }) => {
    return (
        <div className={`${styles.modal} ${isOpen ? `${styles.open}` : ''}`}>
            <div className={styles.modalContent}>
                <span className={styles.close} onClick={onClose}>&times;</span>
                <p>modalContent</p>
            </div>
        </div>
    );
};

export default PlanModalForm;