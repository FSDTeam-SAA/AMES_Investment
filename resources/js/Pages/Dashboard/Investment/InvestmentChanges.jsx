import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { usePage } from "@inertiajs/react";

export default function InvestmentChanges() {
    const { adminPlChange } = usePage().props;

    const [metrics, setMetrics] = useState([
        {
            label: "Week % Change",
            value: parseFloat(adminPlChange.One_Week_Performance),
        },
        {
            label: "Quarter % Change",
            value: parseFloat(adminPlChange.Quarter_Performance),
        },
        {
            label: "6 Month % Change",
            value: parseFloat(adminPlChange["6-Month_Performance"]),
        },
        {
            label: "YTD % Change",
            value: parseFloat(adminPlChange.YTD_Performance),
        },
        {
            label: "Yearly % Change",
            value: parseFloat(adminPlChange.Yearly_Performance),
        },
    ]);

    return (
        <div className="w-[950px] mx-auto    p-4 rounded-lg">
            <div className="grid  grid-cols-2 md:grid-cols-5  ">
                {metrics.map((metric, index) => (
                    <div
                        key={metric.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card className="bg-transparent border-none ">
                            <CardContent className="p-4 bg-[#13171b] rounded-sm border border-gray-800">
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
