'use client'

import { useState } from 'react';
import styles from './CalculationForm.module.css';

const CalculationForm = () => {
    const [phonePer100, setPhonePer100] = useState('');
    const [peakLoad, setPeakLoad] = useState('');
    const [internetLoad, setInternetLoad] = useState('');
    const [internetAccessRate, setInternetAccessRate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            phonePer100,
            peakLoad,
            internetLoad,
            internetAccessRate
        });
    };

    const handleReset = () => {
        setPhonePer100('');
        setPeakLoad('');
        setInternetLoad('');
        setInternetAccessRate('');
    };

    return (
        <form onSubmit={handleSubmit} className={styles.formContainer}>
            <div className={styles.formGroup}>
                <label className={styles.formLabel}>Количество телефонных аппаратов на 100 жителей:</label>
                <input
                    type="number"
                    value={phonePer100}
                    onChange={(e) => setPhonePer100(e.target.value)}
                    className={styles.formInput}
                />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.formLabel}>Междугородняя нагрузка от 1 абонента в час пик:</label>
                <input
                    type="number"
                    value={peakLoad}
                    onChange={(e) => setPeakLoad(e.target.value)}
                    className={styles.formInput}
                />
            </div> 

            <div className={styles.formGroup}>  
                <label className={styles.formLabel}>Междугородняя нагрузка от 1 абонента на сеть Internet:</label>
                <input
                    type="number"
                    value={internetLoad}
                    onChange={(e) => setInternetLoad(e.target.value)}
                    className={styles.formInput}
                />
            </div> 

            <div className={styles.formGroup}>
                <label className={styles.formLabel}>Процент абонентов, имеющих доступ в сеть Internet:</label>
                <input
                    type="number"
                    value={internetAccessRate}
                    onChange={(e) => setInternetAccessRate(e.target.value)}
                    className={styles.formInput}
                />
            </div>

            <div className={styles.buttonGroup}>
                <button type="submit" className={styles.submitButton}>Рассчитать</button>
                <button type="button" onClick={handleReset} className={styles.resetButton}>Очистить</button>
            </div>
        </form>
    );
};

export default CalculationForm;