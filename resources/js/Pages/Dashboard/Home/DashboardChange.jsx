import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function DashboardChange() {
    const [metrics, setMetrics] = useState([
        { label: "Week % Change", value: -3.79 },
        { label: "Quarter % Change", value: 4.38 },
        { label: "6 Month % Change", value: 5.31 },
        { label: "YTD % Change", value: 4.49 },
        { label: "Yearly % Change", value: 2.21 },
    ]);

    // Simulate data updates
    useEffect(() => {
        const interval = setInterval(() => {
            setMetrics((prev) =>
                prev.map((metric) => ({
                    ...metric,
                    value: +(Math.random() * 6).toFixed(2),
                }))
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-[950px]   bg-transparent  py-4 rounded-lg">
            <div className="grid  grid-cols-2 md:grid-cols-5  ">
                {metrics.map((metric, index) => (
                    <div
                        key={metric.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card className="bg-[#2C2F38] border-none ">
                            <CardContent className="p-4 rounded-sm border border-gray-600">
                                <div className="space-y-2">
                                    <p className="text-sm text-zinc-400 font-medium">
                                        {metric.label}
                                    </p>
                                    <p
                                        key={metric.value}
                                        initial={{ scale: 0.8 }}
                                        animate={{ scale: 1 }}
                                        // className="text-2xl font-bold text-emerald-500 tabular-nums"
                                        className={`text-right tabular-nums ${
                                            metric.value > 0
                                                ? "text-emerald-500"
                                                : metric.value < 0
                                                ? "text-red-400"
                                                : "text-gray-400"
                                        } text-2xl font-bold`}
                                    >
                                        {metric.value.toFixed(2)}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}
