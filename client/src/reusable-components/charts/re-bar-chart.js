import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./re-bar-chart.css";

export default class ReBarChart extends PureComponent {
  render() {
    if (!this.props.barData) {
      return null;
    }
    const { barChartInfo, barData } = this.props;
    return (
      <div className="bar-chart">
        <p className={barChartInfo.titleClass}>{barChartInfo.title}</p>
        <ResponsiveContainer width="90%" height={barChartInfo.height}>
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            {barChartInfo.barFillColors.map((value) => {
              return (
                <Bar
                  dataKey={Object.keys(value)[0]}
                  fill={Object.values(value)[0]}
                  key={Object.keys(value)[0]}
                />
              );
            })}
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
