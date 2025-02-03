import React from "react";
import TrendChart from "./TrendChart";
import ProtfolioAllocation from "./ProtfolioAllocation";
import InvestmentChanges from "./InvestmentChanges";

const Investment = () => {
    return (
        <div>
            <InvestmentChanges />
            <div className="flex gap-5">
                <TrendChart />
                <ProtfolioAllocation />
            </div>
        </div>
    );
};

export default Investment;
