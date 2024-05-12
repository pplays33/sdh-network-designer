'use client'
import React, { useEffect, useState } from 'react';
import styles from './OutLoadOutTo.module.css';
import FromToOutLoads from '../../utils/calc/FromToOutLoads';

export default function OutLoadOutTo() {
    const [outLoads, setOutLoads] = useState([]);
    const [fromToOutLoads, setFromToOutLoads] = useState([]);

    useEffect(() => {
        const OutLoadDatas = JSON.parse(localStorage.getItem('totalOutgoingLoad') || '{}');
        setOutLoads(OutLoadDatas);
        const result = FromToOutLoads(OutLoadDatas);
        setFromToOutLoads(result);
        localStorage.setItem('FromToOutLoads', JSON.stringify(result));
    }, []);

    return (
        <div>
            <h1>Исходящие нагрузки между городами</h1>
            <table>
                <thead>
                    <tr>
                        <th>Из города</th>
                        <th>В город</th>
                        <th>Нагрузка</th>
                    </tr>
                </thead>
                <tbody>
                    {fromToOutLoads.map((load, index) => (
                        <tr key={index}>
                            <td>{load.from}</td>
                            <td>{load.to}</td>
                            <td>{load.load}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}