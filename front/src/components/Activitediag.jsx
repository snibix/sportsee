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

const MyBarChart = ({ activity }) => {
  if (!activity || !activity.sessions) {
    return <div>Aucune donnée disponible</div>;
  }

  const data = activity.sessions;

  const poidsValues = data.map((d) => d.kilogram);
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
        <XAxis dataKey="day" />
        <YAxis
          domain={[minPoids - 1, maxPoids + 1]}
          ticks={[minPoids - 1, minPoids, maxPoids, maxPoids + 1]}
          orientation="right"
          yAxisId="poids"
        />
        <YAxis
          domain={[minCal - 100, maxCal + 100]}
          ticks={[minCal, (minCal + maxCal) / 2, maxCal]}
          yAxisId="calories"
          orientation="left"
          hide
        />
        <Tooltip />
        <Bar
          dataKey="kilogram"
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
