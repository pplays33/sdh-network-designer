'use client'

import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const data = [
  {
    subject: "Math",
    A: 120,
    fullMark: 150,
  },
  {
    subject: "Chinese",
    A: 98,
    fullMark: 150,
  },
  {
    subject: "English",
    A: 86,
    fullMark: 150,
  },
  {
    subject: "Geography",
    A: 99,
    fullMark: 150,
  },
  {
    subject: "Physics",
    A: 85,
    fullMark: 150,
  },
  {
    subject: "History",
    A: 65,
    fullMark: 150,
  },
];


const Dashboard = () => {
    return (
        <RadarChart
            cx={300}
            cy={250}
            outerRadius={150}
            width={500}
            height={500}
            data={data}
        >
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar
                name="Mike"
                dataKey="A"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
            />
        </RadarChart>
    );
};

export default Dashboard;