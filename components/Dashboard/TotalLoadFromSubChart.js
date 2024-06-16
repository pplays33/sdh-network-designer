'use client'
import React, { useState, useEffect, useCallback } from "react";
import { BarChart, Bar, Cell } from "recharts";
import dynamic from 'next/dynamic';


const TotalLoadFromSubChart = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        setActiveIndex(0);
    }, []);

    const handleClick = useCallback(
        (entry, index) => {
            setActiveIndex(index);
        },
        [setActiveIndex]
    );

    return (
        <div>
            <p style={{ marginBottom: '20px' }}> Междугородняя нагрузка: </p>
            <BarChart width={350} height={180} data={data}>
                <Bar dataKey="load" onClick={handleClick}>
                    {data.map((entry, index) => (
                        <Cell
                            cursor="pointer"
                            fill={index === activeIndex ? "#82ca9d" : "#8884d8"}
                            key={`cell-${index}`}
                        />
                    ))}
                </Bar>
            </BarChart>
            <p>{`в "${data[activeIndex]?.name}": ${data[activeIndex]?.load}`}</p>
        </div>
    );
}

export default dynamic(() => Promise.resolve(TotalLoadFromSubChart), { ssr: false });