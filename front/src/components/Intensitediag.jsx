import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const MyRadarChart = ({ performance }) => {
  // Vérification de l'existence des données
  if (!performance || !performance.data) {
    return <div>Aucune donnée disponible</div>;
  }

  // Vérification de la structure de 'kind'
  if (!performance.kind || typeof performance.kind !== "object") {
    return <div>Mapping des performances indisponible</div>;
  }

  // Création du tableau de données formaté pour le RadarChart
  const data = performance.data.map((item) => {
    // Utilise l'index numérique de 'item.kind' pour récupérer le nom du kind
    const kindName = performance.kind[item.kind.toString()]; // Assure-toi que c'est une string
    return {
      subject: kindName || "Inconnu", // S'assurer qu'un nom est présent
      value: item.value,
    };
  });

  return (
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid stroke="#ffffff" />
        <PolarAngleAxis
          dataKey="subject"
          stroke="#ffffff"
          tick={{ fill: "#ffffff" }}
        />
        <Radar
          name="Performance"
          dataKey="value"
          fill="#FF0000"
          fillOpacity={0.6}
          stroke="#FF0000"
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default MyRadarChart;
