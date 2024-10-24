import React from "react";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { dayTranslations } from "../utils/translate"; // Importer la traduction des jours

const MyLineChart = ({ sessionsData }) => {
  if (
    !sessionsData ||
    !sessionsData.sessions ||
    sessionsData.sessions.length === 0
  ) {
    return <div>Aucune donnée disponible</div>;
  }

  // Utilise les sessions pour créer un tableau de données pour le LineChart
  const data = sessionsData.sessions.map((session) => ({
    name: dayTranslations.days[session.day], // Remplace le numéro du jour par la lettre correspondante
    dure: session.sessionLength, // Renomme 'sessionLength' en 'dure' pour le chart
  }));

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
                );
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
            dot={false}
            activeDot={{
              r: 5,
              stroke: "#FFFFFF",
              strokeWidth: 2,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MyLineChart;
