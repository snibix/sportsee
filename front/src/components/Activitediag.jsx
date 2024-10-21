import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "1", poids: 68, calories: 330 },
  { name: "2", poids: 69, calories: 350 },
  { name: "3", poids: 68, calories: 356 },
  { name: "4", poids: 65, calories: 350 },
  { name: "5", poids: 68, calories: 250 },
  { name: "6", poids: 68, calories: 280 },
  { name: "7", poids: 69, calories: 280 },
  { name: "8", poids: 69, calories: 356 },
  { name: "9", poids: 69, calories: 300 },
  { name: "10", poids: 69, calories: 330 },
];

const RoundedBar = ({ x, y, width, height, fill }) => {
  const radius = 5;

  return (
    <g>
      <rect
        x={x}
        y={y + radius}
        width={width}
        height={height - radius}
        fill={fill}
      />
      <path
        d={`M${x + radius},${y} 
           L${x + width - radius},${y} 
           A${radius},${radius} 0 0 1 ${x + width},${y + radius} 
           L${x + width},${y + height} 
           L${x},${y + height} 
           L${x},${y + radius} 
           A${radius},${radius} 0 0 1 ${x + radius},${y}`}
        fill={fill}
      />
    </g>
  );
};

const MyBarChart = () => {
  const poidsValues = data.map((d) => d.poids);
  const minPoids = Math.min(...poidsValues);
  const maxPoids = Math.max(...poidsValues);

  const calValues = data.map((d) => d.calories);
  const minCal = Math.min(...calValues);
  const maxCal = Math.max(...calValues);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{
          top: 80,
          right: 30,
          left: 20,
          bottom: 15,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        {/* Axe des Y pour le poids */}
        <YAxis
          domain={[minPoids, maxPoids]}
          ticks={[minPoids - 2, minPoids, maxPoids, maxPoids + 2]}
          orientation="right"
          yAxisId="poids"
        />
        {/* Deuxième axe des Y pour les calories */}
        <YAxis
          domain={[minCal, maxCal]}
          ticks={[minCal, maxCal, maxCal - 50]}
          yAxisId="calories"
          orientation="left"
          hide
        />
        <Tooltip />
        <Bar
          dataKey="poids"
          shape={<RoundedBar />}
          fill="#000000"
          barSize={10}
          yAxisId="poids"
        />
        <Bar
          dataKey="calories"
          shape={<RoundedBar />}
          fill="#ff0000"
          barSize={10}
          yAxisId="calories"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MyBarChart;
