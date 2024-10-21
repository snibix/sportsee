import React from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";

const data = [
  { subject: "Intensité", A: 120, fullMark: 150 },
  { subject: "Vitesse", A: 98, fullMark: 150 },
  { subject: "Force", A: 86, fullMark: 150 },
  { subject: "Endurance", A: 99, fullMark: 150 },
  { subject: "Energie", A: 85, fullMark: 150 },
  { subject: "Cardio", A: 65, fullMark: 150 },
];

const RadarChartComponent = () => {
  return (
    <div className="graph-int">
      <ResponsiveContainer width="100%" height={350}>
        <RadarChart cx="50%" cy="40%" outerRadius="60%" data={data}>
          <PolarGrid stroke="white" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: "#ffffff" }} />
          <Radar name="Athlete" dataKey="A" fill="#ff0000" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadarChartComponent;
