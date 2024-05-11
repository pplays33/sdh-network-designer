'use client'
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { townsState, LongDistanceStationLoadState, TotalLoadFromSubscribersOfOneStationState, StationCommunicationCoefficientState, InStationLoadResState, TotalOutgoingLoadFromEachState } from "../../src/app/State/store";
import LongDistanceStationLoad from '../../utils/calc/LongDistanceStationLoad';
import TotalLoadFromSubscribersOfOneStation from '../../utils/calc/TotalLoadFromSubscribersOfOneStation';
import InStationLoad from '../../utils/calc/InStationLoad';
import InStationLoadRes from '../../utils/calc/InStationLoadRes';
import TotalOutgoingLoadFromEach from '../../utils/calc/TotalOutgoingLoadFromEach';
import styles from './Result.module.css';

export default function Result({onSubmit}) {
    const [towns, setTowns] = useRecoilState(townsState);
    const [loadStationResult, setLoadStationResult] = useRecoilState(LongDistanceStationLoadState);
    const [totalLoadFromSub, setTotalLoadFromSub] = useRecoilState(TotalLoadFromSubscribersOfOneStationState);
    const [stMsgCoef, setStMsgCoef] = useRecoilState(StationCommunicationCoefficientState);
    const [inStationLoadRes, setInStationLoadRes] = useRecoilState(InStationLoadResState);
    const [totalOutgoingLoadFromEach, setTotalOutgoingLoadFromEach] = useRecoilState(TotalOutgoingLoadFromEachState);
    const [resStatus, setResStatus] = useState(0);

    useEffect(() => {
        const loadedData = JSON.parse(localStorage.getItem('TownsState') || '{}');
        setTowns(loadedData);
        setLoadStationResult(LongDistanceStationLoad(loadedData));
        setTotalLoadFromSub(TotalLoadFromSubscribersOfOneStation(loadedData));
        setStMsgCoef(InStationLoad(loadedData));
        onSubmit(TotalLoadFromSubscribersOfOneStation(loadedData));
    }, []);

    useEffect(() => {
        setInStationLoadRes(InStationLoadRes(totalLoadFromSub, stMsgCoef));
    }, [totalLoadFromSub, stMsgCoef]);

    useEffect(() => {
        setTotalOutgoingLoadFromEach(TotalOutgoingLoadFromEach(totalLoadFromSub, inStationLoadRes, loadStationResult));
        setResStatus(1);
    }, [inStationLoadRes]);

    useEffect(() => {
        localStorage.setItem('totalOutgoingLoad', JSON.stringify(totalOutgoingLoadFromEach));
        localStorage.setItem('longDistanceLoad', JSON.stringify(loadStationResult));
        setResStatus(0);
    }, [resStatus]);

    
    return (
        <div className={styles.container}>
            <div className={styles.column}>
                <h2 className={styles.header}>Междугородняя нагрузка (Эрл)</h2>
                <ul className={styles.list}>
                    {loadStationResult.map((townLoad, index) => (
                        <li key={index} className={styles.listItem}>
                            <span>{townLoad.name}:</span> {typeof townLoad.load === 'number' ? townLoad.load.toFixed(3) : parseFloat(townLoad.load).toFixed(3)} Эрл.
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.column}>
                <h2 className={styles.header}>Города </h2>
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
                <h2 className={styles.header}>Общая нагрузка от абонентов (Эрл)</h2>
                <ul className={styles.list}>
                    {totalLoadFromSub.map((totalLoad, index) => (
                        <li key={index} className={styles.listItem}>
                            <span>{totalLoad.name}:</span> {typeof totalLoad.TotalLoadFromSub === 'number' ? totalLoad.TotalLoadFromSub.toFixed(3) : parseFloat(totalLoad.TotalLoadFromSub).toFixed(3)} Эрл.
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.column}>
                <h2 className={styles.header}>Коэффициент внутристанционного сообщения </h2>
                <ul className={styles.list}>
                    {stMsgCoef.map((totalLoad, index) => (
                        <li key={index} className={styles.listItem}>
                            <span>{totalLoad.name}:</span> {typeof totalLoad.percent === 'number' ? totalLoad.percent.toFixed(2) : parseFloat(totalLoad.percent).toFixed(2)}
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.column}>
                <h2 className={styles.header}>Внутристанционная нагрузка (Эрл)</h2>
                <ul className={styles.list}>
                    {inStationLoadRes.map((totalLoad, index) => (
                        <li key={index} className={styles.listItem}>
                            <span>{totalLoad.name}:</span> {typeof totalLoad.result === 'number' ? totalLoad.result.toFixed(2) : parseFloat(totalLoad.result).toFixed(2)}
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.column}>
                <h2 className={styles.header}>Суммарная исходящая нагрузка от каждой станции (Эрл)</h2>
                <ul className={styles.list}>
                    {totalOutgoingLoadFromEach.map((totalLoad, index) => (
                        <li key={index} className={styles.listItem}>
                            <span>{totalLoad.name}:</span> {typeof totalLoad.result === 'number' ? totalLoad.result.toFixed(2) : parseFloat(totalLoad.result).toFixed(2)}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}