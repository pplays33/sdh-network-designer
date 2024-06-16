import dynamic from 'next/dynamic';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";
  

  
const TownsBoard = ({data}) => {
    return (
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <XAxis dataKey="name" />
        <Tooltip />
        <Area type="monotone" dataKey="updatedLoad" stroke="#000000" fill="#8884d8" />
      </AreaChart>
    );
}

export default TownsBoard;