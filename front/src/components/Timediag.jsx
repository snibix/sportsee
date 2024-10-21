import React from "react";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

// Données pour le line chart
const data = [
  { name: "L", dure: 60 },
  { name: "M", dure: 30 },
  { name: "M", dure: 40 },
  { name: "J", dure: 20 },
  { name: "V", dure: 70 },
  { name: "S", dure: 10 },
  { name: "D", dure: 90 },
];

// Composant fonctionnel pour le line chart
const MyLineChart = () => {
  return (
    <div className="graph-time">
      <ResponsiveContainer width="110%" height={200}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 30,
          }}
        >
          <XAxis
            dataKey="name"
            stroke="#FFFFFF"
            tick={{ fontSize: 14, fontWeight: "bold" }}
            padding={{ left: 10, right: 35 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            content={({ payload }) => {
              // Vérifie si on a des données dans le payload
              if (payload && payload.length) {
                return (
                  <div
                    style={{
                      color: "black",
                      backgroundColor: "white",
                      padding: "5px",
                      borderRadius: "4px",
                    }}
                  >
                    {payload[0].value} min
                  </div>
                ); // Affiche la valeur avec "min" et un fond sombre
              }
              return null;
            }}
            cursor={false}
          />
          <Line
            type="monotoneX"
            dataKey="dure"
            stroke="#FFFFFF"
            strokeWidth={3}
            dot={false} // Pas de points par défaut
            activeDot={{
              r: 5, // Rayon du point au survol
              stroke: "#FFFFFF",
              strokeWidth: 2,
            }} // Point au survol
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

// Exporter le composant
export default MyLineChart;
