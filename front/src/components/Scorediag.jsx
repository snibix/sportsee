import React from "react";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";

const ScoreRadialBarChart = ({ user }) => {
  // Vérification de l'existence des données
  if (!user || (user.score === undefined && user.todayScore === undefined)) {
    return <div>Aucune donnée disponible</div>;
  }

  // Récupère le score (gestion des deux propriétés possibles)
  const scoreValue = (user.score || user.todayScore) * 100;

  // Données formatées pour le RadialBarChart
  const data = [
    {
      name: "Score",
      value: scoreValue,
      fill: "#FF0000",
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={250}>
      <RadialBarChart
        cx="50%"
        cy="40%"
        innerRadius="60%"
        outerRadius="80%"
        barSize={10}
        data={data}
        startAngle={180}
        endAngle={-180}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          angleAxisId={0}
          tick={false}
        />
        <RadialBar
          background
          clockWise
          dataKey="value"
          cornerRadius={10}
          fill="#FF0000"
        />
        <text
          x="50%"
          y="35%"
          textAnchor="middle"
          dominantBaseline="middle"
          style={{ fontSize: "24px" }}
        >
          {`${scoreValue}%`}
        </text>
        <text
          x="50%"
          y="45%"
          textAnchor="middle"
          dominantBaseline="middle"
          style={{ fontSize: "16px", fill: "#666666" }}
        >
          de votre objectif
        </text>
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default ScoreRadialBarChart;
