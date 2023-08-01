import {
  CartesianGrid,
  LineChart,
  Line,
  Tooltip,
  XAxis,
  YAxis,
  ReferenceLine,
  ReferenceArea,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  {
    months: "Jan",
    weight: 89,
  },
  {
    months: "Feb",
    weight: 85,
  },
  {
    months: "March",
    weight: 80,
  },
  {
    months: "Apr",
    weight: 85,
  },
  {
    months: "May",
    weight: 87,
  },
  {
    months: "June",
    weight: 86,
  },
  {
    months: "July",
    weight: 84,
  },
  {
    months: "Aug",
    weight: 85,
  },
  {
    months: "Sept",
    weight: 85,
  },
  {
    months: "Oct",
    weight: 78,
  },
  {
    months: "Nov",
    weight: 75,
  },
  {
    months: "Dec",
    weight: null,
  },
];

/**
 *This component is responsible for showing the graph and it highlights the targeted weight through line
 *and also highlights the area coresponding to the line recharts library is used to create the graph
 *.Link of this library is https://recharts.org
 *
 *@ResponsiveContainer is used to make the graph responsive . it will automatically adjust the points on the x axis according to the screen size and make graph based on this you can refer this on https://recharts.org/en-US/api/ResponsiveContainer
 *
 *
 *@RefernceLine is used to get the highlighted line at the specific point on the y axis.you can refer this on https://recharts.org/en-US/api/ReferenceLine
 *
 * 1) y : it is for the specific point on the y axis
 *
 * @RefernceArea is used to get the highlighted area around the specific point on the y axis.you can refer this on https://recharts.org/en-US/api/ReferenceArea
 *
 * 1) y1 & y2: you can define the upperlimit and lowerlimit of the highlighted area.
 * 2) fill: is used to fill the color inside the area
 * 3) strokeOpacity: is used to add borders around the highlighted area
 *
 * @Line is responsible for draw the chart using the data.you can refer this on https://recharts.org/en-US/api/Line
 *
 * 1) dataKey : The key of the data that we want to plot
 * 2) dot : to spcify the properties of the dot in the in active state
 * 3) active dot : to specify the property of the dot in the active state
 *
 *
 * @returns A chart using that has a refrence line and a higlighted refrence area using the rechart library
 */
const Graph = () => {
  const targetWeight = 75;

  return (
    <>
      <ResponsiveContainer width="90%" height={350}>
        <LineChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <XAxis dataKey="months" />
          <YAxis dataKey="weight" />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <ReferenceLine y={targetWeight} stroke="purple" />
          <ReferenceArea
            y1={targetWeight - 10}
            y2={targetWeight + 10}
            strokeOpacity={0}
            fill="#CBC3E3"
          />
          <Line
            type="monotone"
            dataKey="weight"
            dot={{ r: 4, fill: "purple", strokeDasharray: "0 0" }}
            activeDot={{ fill: "purple", r: 5 }}
            stroke="#800080"
            fillOpacity={1}
            strokeDasharray="3 3"
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default Graph;
