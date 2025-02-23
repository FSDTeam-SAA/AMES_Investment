import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { usePage } from "@inertiajs/react";
import { CloudCog } from "lucide-react";

export function PositionsTable({ positions }) {
    const { pos } = usePage().props;
    console.log("pos: ", pos);
    console.log("dummy", positions);
    console.log("type", typeof Number(positions[0].unrealized_pl));
    // console.log("type",positions[0].unrealized_pl)

    return (
        <div className="max-h-[500px] overflow-y-auto">
            <Table className="border border-gray-800 bg-transparent rounded-lg">
                <TableHeader className="sticky top-0">
                    <TableRow className="border-gray-800  ">
                        <TableHead className="w-[50px] font-medium  text-[#FFFFFF]">
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
                    <TableBody className="max-h-[500px] overflow-y-auto">
                        {pos.map((position, index) => (
                            <TableRow
                                key={position.Symbol}
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
                                    {position.Symbol}
                                </TableCell>
                                <TableCell className="text-right text-[#FFFFFF] ">
                                    $
                                    {Number.parseFloat(
                                        position["Market Value"]
                                    ).toLocaleString(undefined, {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                    })}
                                </TableCell>
                                <TableCell className="text-right text-[#FFFFFF] font-semibold">
                                    {Number.parseFloat(
                                        position.Qty
                                    ).toLocaleString(undefined, {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                    })}
                                </TableCell>
                                <TableCell className="text-right text-[#FFFFFF] font-semibold">
                                    $
                                    {Number.parseFloat(
                                        position["Cost Basis"]
                                    ).toLocaleString(undefined, {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                    })}
                                </TableCell>
                                <TableCell
                                    className={`text-right ${
                                        Number(position["Unrealized P/L"]) >= 0
                                            ? "text-green-500"
                                            : "text-red-500"
                                    }`}
                                >
                                    $
                                    {Number.parseFloat(
                                        position["Unrealized P/L"]
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
