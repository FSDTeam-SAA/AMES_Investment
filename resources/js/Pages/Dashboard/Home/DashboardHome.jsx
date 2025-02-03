import { usePage } from "@inertiajs/react";

import React, { useState, useEffect } from "react";
import { PositionsTable } from "./PositionTable";
import { getPositions, getPortfolioHistory } from "../AlpacaDataFetch";
import { PortfolioChart } from "./PortfolioChart";
import DashboardChange from "./DashboardChange";

const DashboardHome = () => {
    const { auth } = usePage().props;
    console.log("dashboard", auth.user.api_key);

    const [positions, setPositions] = useState([]);
    const [history, setHistory] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [positionsData, historyData] = await Promise.all([
                    getPositions(),
                    getPortfolioHistory(),
                ]);

                setPositions(positionsData);
                setHistory(historyData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <div className="w-[80%]">
                <PortfolioChart data={history} />
            </div>
            <div className="w-[80%]">
                <PositionsTable positions={positions} />
            </div>
            <DashboardChange />
        </div>
    );
};

export default DashboardHome;
