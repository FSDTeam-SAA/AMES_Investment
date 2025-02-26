"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

import { usePage } from "@inertiajs/react";

export function PortfolioChart() {
    const { adminPersonalValues } = usePage().props;

    const formattedData = adminPersonalValues.map((item) => ({
        date: new Date(item.current_datetime).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
        }),
        value: parseFloat(item.portfolio_value), // Convert string to number if needed
    }));

    const chartConfig = {
        value: {
            label: "Portfolio Value",
            color: "hsl(var(--chart-1))",
        },
    };

    return (
        <Card className="bg-[#2C2F38] border-gray-800 mt-5 mb-5 ">
            <CardHeader>
                <CardTitle className="text-white text-[15px] ml-[80px]">
                    <div className="bg-green-500 w-[25px] h-[5px] inline-block mr-[5px] rounded-[1px]" />
                    portfolio_value
                </CardTitle>
                {/* <CardDescription className="text-gray-400">Equity Performance</CardDescription> */}
            </CardHeader>
            <CardContent>
                <ChartContainer
                    config={chartConfig}
                    className="h-[300px]  w-full"
                >
                    <LineChart
                        width={427} // Fixed width
                        height={240} // Fixed height
                        data={formattedData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid
                            stroke="#374151"
                            strokeDasharray="none"
                        />
                        <XAxis
                            dataKey="date"
                            tickLine={false}
                            axisLine={{ stroke: "#FFFFFF" }}
                            tickMargin={8}
                            stroke="#6B7280"
                        />
                        <YAxis
                            stroke="#6B7280"
                            tickLine={false}
                            axisLine={{ stroke: "#FFFFFF" }}
                            tickFormatter={(value) =>
                                `${(value / 1000).toFixed(0)}K`
                            }
                            dx={-10}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Line
                            dataKey="value"
                            type="monotone"
                            strokeWidth={5}
                            dot={false}
                            stroke="#22C55E"
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
