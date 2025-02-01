import PortfolioDashboard from "./DashboadHeader";

const Content = ({ activeItem }) => {
    const renderContent = () => {
        switch (activeItem) {
            case "home":
                return <h2>Welcome to the Home Page</h2>;
            case "about":
                return <h2>About Us</h2>;
            case "services":
                return <h2>Our Services</h2>;
            case "contact":
                return <h2>Contact Us</h2>;
            default:
                return <h2>Select an item from the sidebar</h2>;
        }
    };

    return (
        <div className="content bg-black  text-white">
            <PortfolioDashboard
                portfolioValue={227169.85}
                growth={25.2}
                riskLevel="High"
                status="Not Ready"
            />
            {renderContent()}
        </div>
    );
};

export default Content;
