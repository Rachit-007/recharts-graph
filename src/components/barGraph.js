import React from "react";
import {
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar,
  Cell,
  ReferenceLine,
} from "recharts";

const data = [
  {
    day: "Mon",
    value: 9,
  },
  {
    day: "Tue",
    value: 12,
  },
  {
    day: "Wed",
    value: 5,
  },
  {
    day: "Thu",
    value: 2,
  },
  {
    day: "Fri",
    value: 2.5,
  },
  {
    day: "Sat",
    value: 3,
  },
  {
    day: "Sun",
    value: 0,
  },
];

const legendData = [
  {
    name: "Normal",
    color: "#00e907",
  },
  {
    name: "Pre-diabetes",
    color: "#FFD400",
  },
  {
    name: "Diabetes",
    color: "#FF6200",
  },
  {
    name: "High-diabetes",
    color: "#DC1C13",
  },
];

/**
 *@BarChart This component is responsible for showing the graph in th form of bars
 *Link of this library is https://recharts.org/en-US/api/BarChart
 *
 *@Bar is responsible for draw the chart using the data.you can refer this on https://recharts.org/en-US/api/Bar
 *
 * 1) dataKey : The key of the data that we want to plot
 *
 *@lenierGradient is responsible for the gradient effect in the bar
 *
 * 1) id : the id you provide in the lenierGradient will be used by other component like Cell to fill the color based on the id of the lenier gradient
 * e.g : if you set one lenierGradient and gave id to it then you can use that gradient effect in the bar
 *
 *@Cell is responsible for style in each bar.you can refer to it on https://recharts.org/en-US/api/Cell
 *
 * 1) fill:is used to fill the color in the each bar.color is filled based on the id you give in the lenier gradient
 *
 * @legend is responsible showing the dots in the bottom of the graph.it is used to represent which bar color represents which diabetic level
 *
 * 1)type: is used to choose the shape of the legend
 * 2)payload: is used for the custom data in the legend
 * 3)formatter : is used to style the text of the legend
 *
 *
 * @returns a bar grpah 
 */
const BarGraph = () => {
  return (
    <>
      <div style={{ marginTop: "50px" }}>
        <ResponsiveContainer width="90%" height={350}>
          <BarChart width={500} height={250} data={data}>
            <CartesianGrid horizontal={true} vertical={false} />
            <defs>
              {data.map((item, index) => {
                if (item.value <= 4) {
                  return (
                    <linearGradient
                      id={`colorUv${index}`}
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="100%"
                    >
                      <stop offset="0" stopColor="#00e907" />
                      <stop offset="1" stopColor="#D6F6D5" />
                    </linearGradient>
                  );
                } else if (item.value <= 8) {
                  return (
                    <linearGradient
                      id={`colorUv${index}`}
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="100%"
                    >
                      <stop offset="0" stopColor="#FFD400" />
                      <stop offset="1" stopColor="#FFFFB7" />
                    </linearGradient>
                  );
                } else if (item.value <= 10) {
                  return (
                    <linearGradient
                      id={`colorUv${index}`}
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="100%"
                    >
                      <stop offset="0" stopColor="#FF6200" />
                      <stop offset="1" stopColor="#FDB777" />
                    </linearGradient>
                  );
                } else {
                  return (
                    <linearGradient
                      id={`colorUv${index}`}
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="100%"
                    >
                      <stop offset="0" stopColor="#DC1C13" />
                      <stop offset="1" stopColor="#F1959B" />
                    </linearGradient>
                  );
                }
              })}
            </defs>
            <XAxis dataKey="day" />
            <YAxis dataKey="value" />
            <Tooltip cursor={{ fill: "transparent" }} />
            <Legend
              iconType="circle"
              payload={legendData.map((item, index) => ({
                value: item.name,
                color: item.color,
              }))}
              formatter={(value, entry) => (
                <span style={{ color: "black", marginInline: "15px" }}>
                  {value}
                </span>
              )}
            />
            <ReferenceLine y={12} stroke="red" />
            <ReferenceLine y={10} stroke="orange" />
            <ReferenceLine y={8} stroke="yellow" />
            <ReferenceLine y={4} stroke="#00e907" />
            <Bar dataKey="value" barSize={60}>
              {data.map((item, index) => (
                <Cell fill={`url(#colorUv${index})`} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default BarGraph;
