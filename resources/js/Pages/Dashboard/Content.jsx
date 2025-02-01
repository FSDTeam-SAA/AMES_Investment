import DashboardHome from "./Home/DashboardHome"

const Content = ({ activeItem }) => {
    const renderContent = () => {
      switch (activeItem) {
        case "home":
          return <DashboardHome />
        case "about":
          return <h2>About Us</h2>
        case "services":
          return <h2>Our Services</h2>
        case "contact":
          return <h2>Contact Us</h2>
        default:
          return <h2>Select an item from the sidebar</h2>
      }
    }
  
    return <div className="content">{renderContent()}</div>
  }
  
  export default Content
  
  