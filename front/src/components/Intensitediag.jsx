import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import { performanceTranslations } from "../utils/translate";

const MyRadarChart = ({ performance }) => {
  const performanceData = Array.isArray(performance)
    ? performance[0]
    : performance;

  // Définir l'ordre souhaité des kinds
  const kindOrder = {
    6: 0, // intensité
    5: 1, // vitesse
    4: 2, // force
    3: 3, // endurance
    2: 4, // energy
    1: 5, // cardio
  };

  // Formatage des données avec l'ordre personnalisé
  const data = performanceData.data
    .map((item) => {
      const kindName = performanceData.kind[item.kind];
      return {
        subject: performanceTranslations.kinds[kindName] || kindName,
        value: item.value,
        order: kindOrder[item.kind], // Ajouter l'ordre pour le tri
      };
    })
    // Trier selon l'ordre défini
    .sort((a, b) => a.order - b.order);

  return (
    <div className="radar-chart-container">
      <ResponsiveContainer width="100%" height={250}>
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid gridType="polygon" stroke="#FFFFFF" strokeWidth={0.8} />
          <PolarAngleAxis
            dataKey="subject"
            tick={{
              fill: "#FFFFFF",
              fontSize: 12,
              fontWeight: 500,
              dy: 4,
              lineHeight: 20,
            }}
            stroke="#FFFFFF"
            tickLine={false}
          />
          <Radar
            name="Performance"
            dataKey="value"
            fill="#FF0101"
            fillOpacity={0.7}
            stroke="#FF0101"
            strokeWidth={1}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MyRadarChart;
