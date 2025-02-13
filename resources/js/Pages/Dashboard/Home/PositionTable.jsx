import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { usePage } from "@inertiajs/react";

export function PositionsTable({ positions }) {
    const { adminholdings } = usePage().props;
    console.log("adminholdings: ", adminholdings);

    return (
        <div className="">
            <Table className="border border-gray-800 bg-transparent rounded-lg">
                <TableHeader>
                    <TableRow className="border-gray-800">
                        <TableHead className="w-[50px] font-medium text-[#FFFFFF]">
                            #
                        </TableHead>
                        <TableHead className="font-medium text-[#FFFFFF]">
                            Symbol
                        </TableHead>
                        <TableHead className="text-right font-medium text-[#FFFFFF]">
                            Market Value
                        </TableHead>
                        <TableHead className="text-right font-medium text-[#FFFFFF]">
                            Qty
                        </TableHead>
                        <TableHead className="text-right font-medium text-[#FFFFFF]">
                            Cost Basis
                        </TableHead>
                        <TableHead className="text-right font-medium text-[#FFFFFF]">
                            Unrealized P/L
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {positions.map((position, index) => (
                        <TableRow
                            key={position.symbol}
                            className={`
                border-gray-800 
                bg-[#2c2f38]
                hover:bg-[#2c2f38]/70
              `}
                        >
                            <TableCell className="font-medium text-[#FFFFFF] ">
                                {index + 1}.
                            </TableCell>
                            <TableCell className="font-medium text-[#FFFFFF] ">
                                {position.symbol}
                            </TableCell>
                            <TableCell className="text-right text-[#FFFFFF] ">
                                $
                                {Number.parseFloat(
                                    position.market_value
                                ).toLocaleString(undefined, {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                })}
                            </TableCell>
                            <TableCell className="text-right text-[#FFFFFF] font-semibold">
                                {Number.parseFloat(position.qty).toLocaleString(
                                    undefined,
                                    {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                    }
                                )}
                            </TableCell>
                            <TableCell className="text-right text-[#FFFFFF] font-semibold">
                                $
                                {Number.parseFloat(
                                    position.cost_basis
                                ).toLocaleString(undefined, {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                })}
                            </TableCell>
                            <TableCell
                                className={`text-right ${
                                    position.unrealized_pl >= 0
                                        ? "text-green-500"
                                        : "text-red-500"
                                }`}
                            >
                                $
                                {Number.parseFloat(
                                    position.unrealized_pl
                                ).toLocaleString(undefined, {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                })}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
