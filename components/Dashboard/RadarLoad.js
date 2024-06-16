'use client'

import React, {useEffect, useState} from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
} from "recharts";


const RadarLoad = ({data}) => {

  return (
    <div>
      {/* <p> Общая нагрузка от абонентов одной станции </p> */}
      <RadarChart
        cx={230}
        cy={300}
        outerRadius={150}
        width={500}
              height={500}
              data={data}
          >
              <PolarGrid />
              <PolarAngleAxis dataKey="name" />
              <PolarRadiusAxis />
              <Radar
                  name="Суммарная исходящая нагрузка"
                  dataKey="result"
                  stroke="#8884d8"
                  fill="#8884d8"
                  fillOpacity={0.6}
              />
              <Legend />
        </RadarChart>
      </div>
    );
};

export default RadarLoad;