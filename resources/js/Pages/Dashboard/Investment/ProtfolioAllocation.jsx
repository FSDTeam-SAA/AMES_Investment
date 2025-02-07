import { useState, useEffect } from "react";

import { Cell, Pie, PieChart, ResponsiveContainer, Legend } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { usePage } from "@inertiajs/react";

// fort data fetch

export function usePortfolioData() {
    const { adminholdings } = usePage().props;

    const [data, setData] = useState([
        { symbol: "TECL", allocation: 21.7, color: "hsl(32, 100%, 50%)" },
        { symbol: "SOXL", allocation: 21.6, color: "hsl(16, 100%, 40%)" },
        { symbol: "SPY", allocation: 17.0, color: "hsl(0, 100%, 40%)" },
        { symbol: "CVCO", allocation: 12.9, color: "hsl(320, 100%, 50%)" },
        { symbol: "QQQ", allocation: 7.6, color: "hsl(40, 100%, 50%)" },
        { symbol: "AMZN", allocation: 7.5, color: "hsl(120, 100%, 30%)" },
        { symbol: "DIA", allocation: 3.5, color: "hsl(240, 100%, 40%)" },
        { symbol: "PGR", allocation: 2.8, color: "hsl(180, 100%, 40%)" },
        { symbol: "FAS", allocation: 2.2, color: "hsl(200, 100%, 40%)" },
        { symbol: "NVDA", allocation: 1.5, color: "hsl(280, 100%, 50%)" },
        { symbol: "SPXL", allocation: 1.0, color: "hsl(160, 100%, 40%)" },
        { symbol: "TQQQ", allocation: 0.7, color: "hsl(260, 100%, 50%)" },
    ]);

    useEffect(() => {
        // Simulate real-time updates every 5 seconds
        const interval = setInterval(() => {
            setData((currentData) =>
                currentData.map((item) => ({
                    ...item,
                    allocation: Number(
                        (
                            item.allocation *
                            (0.95 + Math.random() * 0.1)
                        ).toFixed(1)
                    ),
                }))
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return data;
}

export default function ProtfolioAllocation() {
    const data = usePortfolioData();

    return (
        <Card className="w-full max-w-[500px] border-gray-800 bg-transparent">
            <CardHeader>
                <CardTitle className="text-center text-white">
                    Portfolio Allocation
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-[400px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                dataKey="allocation"
                                nameKey="symbol"
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={120}
                                paddingAngle={2}
                                label={({
                                    cx,
                                    cy,
                                    midAngle,
                                    innerRadius,
                                    outerRadius,
                                    percent,
                                    index,
                                }) => {
                                    const RADIAN = Math.PI / 180;
                                    const radius =
                                        innerRadius +
                                        (outerRadius - innerRadius) * 0.5;
                                    const x =
                                        cx +
                                        radius * Math.cos(-midAngle * RADIAN);
                                    const y =
                                        cy +
                                        radius * Math.sin(-midAngle * RADIAN);

                                    return (
                                        <text
                                            x={x}
                                            y={y}
                                            fill="#000000"
                                            textAnchor="middle"
                                            dominantBaseline="central"
                                            className="text-xs font-bold"
                                        >
                                            {`${(percent * 100).toFixed(1)}%`}
                                        </text>
                                    );
                                }}
                            >
                                {data.map((entry) => (
                                    <Cell
                                        key={entry.symbol}
                                        fill={entry.color}
                                        stroke="transparent"
                                    />
                                ))}
                            </Pie>
                            <Legend
                                layout="vertical"
                                align="right"
                                verticalAlign="middle"
                                formatter={(value, entry) => (
                                    <span className="text-white">
                                        {value} (
                                        {entry.payload.allocation.toFixed(1)}%)
                                    </span>
                                )}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}
