"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export function PortfolioChart({ data }) {
  const formattedData = data.timestamp.map((timestamp, index) => ({
    date: new Date(timestamp * 1000).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }),
    value: data.equity[index],
  }))

  const chartConfig = {
    value: {
      label: "Portfolio Value",
      color: "hsl(var(--chart-1))",
    },
  }

  return (
    <Card className="bg-[#1F2937]">
      <CardHeader>
        <CardTitle className="text-white">Portfolio Chart</CardTitle>
        <CardDescription className="text-gray-400">Equity Performance</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px]">
          <LineChart
            width={427}  // Fixed width
            height={240} // Fixed height
            data={formattedData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid stroke="#374151" strokeDasharray="none" />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              stroke="#6B7280"
            />
            <YAxis
              stroke="#6B7280"
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`}
              dx={-10}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="value"
              type="monotone"
              stroke="var(--color-value)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none text-white">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4 text-green-400" />
        </div>
        <div className="leading-none text-gray-400">
          Portfolio performance over time
        </div>
      </CardFooter>
    </Card>
  )
}
