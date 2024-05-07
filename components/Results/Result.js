'use client'
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { townsState, LongDistanceStationLoadState, TotalLoadFromSubscribersOfOneStationState } from "../../src/app/State/store";
import LongDistanceStationLoad from '../../utils/calc/LongDistanceStationLoad';
import TotalLoadFromSubscribersOfOneStation from '../../utils/calc/TotalLoadFromSubscribersOfOneStation';
import styles from './Result.module.css';

export default function Result({onSubmit}) {
    const [towns, setTowns] = useRecoilState(townsState);
    const [loadStationResult, setLoadStationResult] = useRecoilState(LongDistanceStationLoadState);
    const [totalLoadFromSub, setTotalLoadFromSub] = useRecoilState(TotalLoadFromSubscribersOfOneStationState);

    useEffect(() => {
        const loadedData = JSON.parse(localStorage.getItem('TownsState') || '{}');
        setTowns(loadedData);
        setLoadStationResult(LongDistanceStationLoad(loadedData));
        setTotalLoadFromSub(TotalLoadFromSubscribersOfOneStation(loadedData));
        onSubmit(TotalLoadFromSubscribersOfOneStation(loadedData));
    }, []);


    return (
        <div className={styles.container}>
            <div className={styles.column}>
                <h2 className={styles.header}>Междугородняя нагрузка</h2>
                <ul className={styles.list}>
                    {loadStationResult.map((townLoad, index) => (
                        <li key={index} className={styles.listItem}>
                            <span>{townLoad.name}:</span> {typeof townLoad.load === 'number' ? townLoad.load.toFixed(3) : parseFloat(townLoad.load).toFixed(3)} Эрл.
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.column}>
                <h2 className={styles.header}>Города</h2>
                <ul className={styles.list}>
                    {towns.map((town, index) => (
                        <li key={index} className={styles.listItem}>
                            {town.name}: {town.population}
                        </li>
                    ))}
                </ul>
            </div>
            {/* Оставшиеся 2 колонки */}
            <div className={styles.column}>
                <h2 className={styles.header}>Общая нагрузка от абонентов</h2>
                <ul className={styles.list}>
                    {totalLoadFromSub.map((totalLoad, index) => (
                        <li key={index} className={styles.listItem}>
                            <span>{totalLoad.name}:</span> {typeof totalLoad.TotalLoadFromSub === 'number' ? totalLoad.TotalLoadFromSub.toFixed(3) : parseFloat(totalLoad.TotalLoadFromSub).toFixed(3)} Эрл.
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.column}>
                {/* Дополнительный контент для четвертой колонки */}
            </div>
        </div>
    );
}