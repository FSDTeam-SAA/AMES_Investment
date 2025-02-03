import React from "react";
import TrendChart from "./TrendChart";
import ProtfolioAllocation from "./ProtfolioAllocation";

const Investment = () => {
    return (
        <div className="flex gap-5">
            <h1></h1>
            <TrendChart />
            <ProtfolioAllocation />
        </div>
    );
};

export default Investment;
