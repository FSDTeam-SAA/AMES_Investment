"use client";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const trades = [
    {
        symbol: "SPXL",
        timestamp: "2024-10-08 13:30:26",
        position: "short",
        pnl: -42.1832,
    },
    {
        symbol: "MA",
        timestamp: "2024-07-10 15:59:55",
        position: "long",
        pnl: 20.6082,
    },
    {
        symbol: "CVCO",
        timestamp: "2024-11-04 09:30:10",
        position: "long",
        pnl: 0,
    },
    {
        symbol: "AVGO",
        timestamp: "2024-08-06 15:41:12",
        position: "long",
        pnl: -11.7888,
    },
    {
        symbol: "FAS",
        timestamp: "2025-01-14 09:30:17",
        position: "long",
        pnl: 0,
    },
    {
        symbol: "GNTX",
        timestamp: "2024-08-06 15:39:16",
        position: "long",
        pnl: -7.0358,
    },
    {
        symbol: "TQQQ",
        timestamp: "2024-08-08 11:00:03",
        position: "long",
        pnl: 146.1109,
    },
    {
        symbol: "TQQQ",
        timestamp: "2024-12-20 15:52:20",
        position: "short",
        pnl: 14.53,
    },
    {
        symbol: "LOPE",
        timestamp: "2024-07-10 15:59:53",
        position: "long",
        pnl: 35.46,
    },
    {
        symbol: "SGOV",
        timestamp: "2024-09-13 15:51:15",
        position: "long",
        pnl: 0,
    },
    {
        symbol: "PGR",
        timestamp: "2024-07-10 15:59:59",
        position: "long",
        pnl: -40.098,
    },
    {
        symbol: "UPRO",
        timestamp: "2024-02-27 10:55:11",
        position: "long",
        pnl: -3.42,
    },
    {
        symbol: "SOXL",
        timestamp: "2024-08-14 11:45:07",
        position: "long",
        pnl: 1012.2099,
    },
    {
        symbol: "META",
        timestamp: "2024-08-06 15:39:25",
        position: "long",
        pnl: -7.61,
    },
];

export default function TradingTable() {
    return (
        <div className="p-4 my-5 bg-[#0B1218] w-[500px] text-gray-100 rounded-[19px]">
            <Table>
                <TableHeader>
                    <TableRow className="border-gray-800 hover:bg-gray-700">
                        <TableHead className="text-gray-400">Symbol</TableHead>
                        <TableHead className="text-gray-400">
                            Open Timestamp
                        </TableHead>
                        <TableHead className="text-gray-400">
                            Position
                        </TableHead>
                        <TableHead className="text-gray-400 text-right">
                            PnL
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {trades.map((trade) => (
                        <TableRow
                            className="border-gray-800 hover:bg-gray-800"
                            key={`${trade.symbol}-${trade.timestamp}`}
                        >
                            <TableCell className="font-medium">
                                {trade.symbol}
                            </TableCell>
                            <TableCell>{trade.timestamp}</TableCell>
                            <TableCell>{trade.position}</TableCell>
                            <TableCell
                                className={`text-right tabular-nums ${
                                    trade.pnl > 0
                                        ? "text-green-400"
                                        : trade.pnl < 0
                                        ? "text-red-400"
                                        : "text-gray-400"
                                }`}
                            >
                                {trade.pnl === 0
                                    ? "$0.00"
                                    : trade.pnl > 0
                                    ? `$${trade.pnl.toFixed(4)}`
                                    : `-$${Math.abs(trade.pnl).toFixed(4)}`}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
