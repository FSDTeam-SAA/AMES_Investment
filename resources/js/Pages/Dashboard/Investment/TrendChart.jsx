import {
    Line,
    LineChart,
    CartesianGrid,
    XAxis,
    YAxis,
    ReferenceLine,
    Label,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

import { usePage } from "@inertiajs/react";

export default function TrendChart() {
    // Generate sample data
    const generateData = () => {
        const { adminPersonalValues } = usePage().props;
        console.log("adminPersonalValues: ", adminPersonalValues);

        const baseValue = 1000;
        const variance = 1000;
        const dataPoints = 90;

        return Array.from({ length: dataPoints }, (_, i) => {
            const date = new Date(2024, 0, i + 1); // January 2024

            const value =
                baseValue + Math.sin(i * 0.5) * variance + Math.random() * 200;
            return {
                date: date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                }),
                value: Math.round(value),
            };
        });
    };

    const data = generateData();
    console.log("mydata", data);
    const maxValue = Math.max(...data.map((d) => d.value));
    const minValue = Math.min(...data.map((d) => d.value));
    const avgValue = Math.round(
        data.reduce((acc, curr) => acc + curr.value, 0) / data.length
    );

    const formatCurrency = (value) => `$${(value / 1000).toFixed(1)}K`;
    return (
        <Card className="w-[750px] border-gray-800 bg-transparent text-white">
            <CardHeader className="pb-4">
                <CardTitle className="text-lg font-medium text-center  ">
                    Portfolio Trend{" "}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ChartContainer
                    config={{
                        value: {
                            label: "Portfolio Value",
                            color: "hsl(216, 100%, 50%)",
                        },
                    }}
                    className="h-[300px] w-full"
                >
                    <LineChart
                        data={data}
                        margin={{ top: 20, right: 80, left: 40, bottom: 20 }}
                    >
                        <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="rgba(255,255,255,0.1)"
                            horizontal={true}
                            vertical={false}
                        />
                        <XAxis
                            dataKey="date"
                            stroke="rgba(255,255,255,0.5)"
                            tickLine={false}
                            axisLine={false}
                        />
                        <YAxis
                            stroke="rgba(255,255,255,0.5)"
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={formatCurrency}
                        />
                        <ChartTooltip
                            content={<ChartTooltipContent />}
                            cursor={{ stroke: "rgba(255,255,255,0.2)" }}
                        />
                        {/* Main Line */}
                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="rgb(59, 130, 246)"
                            strokeWidth={2}
                            dot={false}
                            activeDot={{ r: 4 }}
                        />
                        {/* Reference Lines for Max, Min, and Average */}
                        <ReferenceLine
                            y={maxValue}
                            stroke="rgba(255,255,255,0.2)"
                            strokeDasharray="3 3"
                        >
                            <Label
                                value={`Max: ${formatCurrency(maxValue)}`}
                                position="right"
                                fill="rgba(255,255,255,0.7)"
                            />
                        </ReferenceLine>
                        <ReferenceLine
                            y={minValue}
                            stroke="rgba(255,255,255,0.2)"
                            strokeDasharray="3 3"
                        >
                            <Label
                                value={`Min: ${formatCurrency(minValue)}`}
                                position="right"
                                fill="rgba(255,255,255,0.7)"
                            />
                        </ReferenceLine>
                        <ReferenceLine
                            y={avgValue}
                            stroke="rgba(255,255,255,0.2)"
                            strokeDasharray="3 3"
                        >
                            <Label
                                value={`Avg: ${formatCurrency(avgValue)}`}
                                position="right"
                                fill="rgba(255,255,255,0.7)"
                            />
                        </ReferenceLine>
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
