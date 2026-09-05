"use client";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

// const data = [
//     { month: "Jan", revenue: 45000 },
//     { month: "Feb", revenue: 62000 },
//     { month: "Mar", revenue: 58000 },
//     { month: "Apr", revenue: 75000 },
//     { month: "May", revenue: 90000 },
//     { month: "Jun", revenue: 82000 },
// ];

const RevenueRechart = ({ revenueResult }) => {

    const data = revenueResult.map((item) => ({
        month: new Date(2026, item._id - 1).toLocaleString("en-US", {
            month: "short",
        }),
        revenue: item.revenue,
    }));

    return (
        <div className="h-75 w-full">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                    />

                    <XAxis
                        dataKey="month"
                        tickLine={false}
                        axisLine={false}
                    />

                    <YAxis
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `৳${value / 1000}K`}
                    />

                    <Tooltip
                        formatter={(value) => [`৳${value}`, "Revenue"]}
                    />

                    <Line
                        type="monotone"
                        dataKey="revenue"
                        stroke="#2563eb"
                        strokeWidth={3}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RevenueRechart;