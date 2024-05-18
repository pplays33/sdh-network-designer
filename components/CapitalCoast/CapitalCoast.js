'use client'
import { useState, useEffect } from "react";
import styles from './CapitalCoast.module.css';

export default function CapitalCoast({ items }) {
    const [countTown, setCountTown] = useState([]);
    const [totalCost, setTotalCost] = useState(0);


    useEffect(() => {
        const res = JSON.parse(localStorage.getItem('loadInternet') || '{}');
        setCountTown(res.length);
    }, []);

    useEffect(() => {
        setTotalCost(items.reduce((acc, item) => acc + ((item.quantity + countTown) * item.price), 0));
    }, [countTown]);

    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Наименование</th>
                        <th>Количество</th>
                        <th>Цена, руб</th>
                        <th>Стоимость, руб</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.quantity + countTown} шт</td>
                            <td>{item.price.toLocaleString('ru-RU')}</td>
                            <td>{((item.quantity + countTown) * item.price).toLocaleString('ru-RU')}</td>
                        </tr>
                    ))}
                    <tr className={styles.totalRow}>
                        <td colSpan="3">Общая стоимость</td>
                        <td>{totalCost.toLocaleString('ru-RU')}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}