import React from "react";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { dayTranslations } from "../utils/translate"; // Importer la traduction des jours
import useFetch from "../hooks/useFetch";

const MyLineChart = ({ id }) => {
  const {
    data: average,
    isLoading,
    error,
  } = useFetch(id, "average-sessions", {});

  if (isLoading) {
    return <div>Chargement en cours ...</div>;
  }

  if (error) {
    return <div>Aucune donnée disponible</div>;
  }

  const data = average.sessions.map((item) => ({
    name: dayTranslations.days[item.day],
    dure: item.sessionLength,
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
