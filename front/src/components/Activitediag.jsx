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
import useFetch from "../hooks/useFetch";

const MyBarChart = ({ id }) => {
  const { data: activity, isLoading, error } = useFetch(id, "activity", {});

  if (isLoading) {
    return <div>Chargement en cours ...</div>;
  }

  if (error) {
    return <div>Aucune donnée disponible</div>;
  }

  const data = activity.sessions.map((item, index) => ({
    ...item,
    day: index + 1,
  }));

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
          domain={["dataMin-5", "auto"]}
          orientation="right"
          yAxisId="poids"
        />
        <YAxis
          domain={["dataMin-50", "auto"]}
          yAxisId="calories"
          orientation="left"
          hide
        />
        <Tooltip />
        <Bar
          dataKey="kilogram"
          radius={[20, 20, 0, 0]}
          fill="#000000"
          barSize={10}
          yAxisId="poids"
        />
        <Bar
          dataKey="calories"
          radius={[20, 20, 0, 0]}
          fill="#ff0000"
          barSize={10}
          yAxisId="calories"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MyBarChart;
