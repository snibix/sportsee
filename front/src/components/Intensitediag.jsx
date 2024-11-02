import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import { performanceTranslations } from "../utils/translate";
import useFetch from "../hooks/useFetch";

const MyRadarChart = ({ id }) => {
  const {
    data: performance,
    isLoading,
    error,
  } = useFetch(id, "performance", {});

  if (isLoading) {
    return <div>Chargement en cours ...</div>;
  }

  if (error) {
    return <div>Aucune donnée disponible</div>;
  }

  // Formatage des données avec l'ordre personnalisé
  const data = performance.data
    .map((item) => {
      const kindName = performance.kind[item.kind];
      return {
        subject: performanceTranslations.kinds[kindName] || kindName,
        value: item.value,
      };
    })
    .reverse();

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
