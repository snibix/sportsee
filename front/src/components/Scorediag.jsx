import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Label,
  Text,
} from "recharts";

const SemiCircleChart = ({ percentage = 12, color = "#FF0000" }) => {
  const data = [
    { name: "Completed", value: percentage },
    { name: "Remaining", value: 100 - percentage },
  ];

  const CustomLabel = ({ viewBox }) => {
    const { cx, cy } = viewBox;
    return (
      <>
        <Text
          x={cx}
          y={cy - 10}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={24}
          fill="#000"
        >
          {`${percentage}%`}
        </Text>
        <Text
          x={cx}
          y={cy + 15}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={14}
          fill="#666"
        >
          de votre
        </Text>
        <Text
          x={cx}
          y={cy + 35}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={14}
          fill="#666"
        >
          objectif
        </Text>
      </>
    );
  };

  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          startAngle={90}
          endAngle={450}
          innerRadius={60}
          outerRadius={80}
          paddingAngle={0}
          dataKey="value"
        >
          <Cell fill={color} />
          <Cell fill="#F3F3F3" />
          <Label content={<CustomLabel />} position="center" />
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default SemiCircleChart;
