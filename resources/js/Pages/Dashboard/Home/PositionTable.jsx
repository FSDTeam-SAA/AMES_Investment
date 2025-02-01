import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function PositionsTable({ positions }) {
  return (
    <div className="dark">
      <Table className="border border-gray-800 bg-gray-900">
        <TableHeader>
          <TableRow className="border-gray-800 hover:bg-gray-800/50">
            <TableHead className="w-[50px] font-medium text-gray-400">#</TableHead>
            <TableHead className="font-medium text-gray-400">Symbol</TableHead>
            <TableHead className="text-right font-medium text-gray-400">Market Value</TableHead>
            <TableHead className="text-right font-medium text-gray-400">Qty</TableHead>
            <TableHead className="text-right font-medium text-gray-400">Cost Basis</TableHead>
            <TableHead className="text-right font-medium text-gray-400">Unrealized P/L</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {positions.map((position, index) => (
            <TableRow
              key={position.symbol}
              className={`
                border-gray-800 
                ${index % 2 === 0 ? "bg-gray-900" : "bg-gray-800/50"}
                hover:bg-gray-800
              `}
            >
              <TableCell className="font-medium text-gray-400">{index + 1}.</TableCell>
              <TableCell className="font-medium text-gray-300">{position.symbol}</TableCell>
              <TableCell className="text-right text-gray-300">
                $
                {Number.parseFloat(position.market_value).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </TableCell>
              <TableCell className="text-right text-gray-300">
                {Number.parseFloat(position.qty).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </TableCell>
              <TableCell className="text-right text-gray-300">
                $
                {Number.parseFloat(position.cost_basis).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </TableCell>
              <TableCell className={`text-right ${position.unrealized_pl >= 0 ? "text-green-500" : "text-red-500"}`}>
                $
                {Number.parseFloat(position.unrealized_pl).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
