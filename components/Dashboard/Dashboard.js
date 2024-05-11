'use client'
import dynamic from 'next/dynamic';
import React, {useEffect, useState} from "react";
import RadarLoad from "./RadarLoad";
import TotalLoadFromSubChart from "./TotalLoadFromSubChart"; 
import TownsBoard from "./TownsBoard";

import styles from './Dashboard.module.css';



const Dashboard = () => {
  const [totalOutputLoad, setTotalOutputLoad] = useState([]);
  const [longDistanceLoad, setLongDistanceLoad] = useState([]);
  const [towns, setTowns] = useState([]);

  useEffect(() => {
    const TotalOutputLoad = JSON.parse(localStorage.getItem('totalOutgoingLoad') || '{}');
    const LongDistanceLoad = JSON.parse(localStorage.getItem('longDistanceLoad') || '{}');
    setLongDistanceLoad(LongDistanceLoad);
    setTotalOutputLoad(TotalOutputLoad.map(item => ({
      ...item,
      fullMark: 250
    })));
    const townsLoaded = JSON.parse(localStorage.getItem('TownsState') || '{}');
    setTowns(townsLoaded);
  }, []);

    return (
      <div className={styles.container}>
        <h2 style={{ marginRight: '10px' }}>Визуальное представление <span>-&gt;</span> </h2>
        <div className={styles.column}>
            <RadarLoad data={totalOutputLoad}/>
        </div>
        <div className={styles.column}>
          <TotalLoadFromSubChart data={longDistanceLoad}/>
        </div>
        <div className={styles.column}>
          <TownsBoard data={towns}/>
        </div>
      </div>
    );
};

export default Dashboard