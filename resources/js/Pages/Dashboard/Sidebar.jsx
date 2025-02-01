const Sidebar = ({ activeItem, onItemClick }) => {
    const menuItems = ["home", "about", "services", "contact"]
  
    return (
      <div className="sidebar">
        <h2>Menu</h2>
        <ul>
          {menuItems.map((item) => (
            <li key={item} className={activeItem === item ? "active" : ""} onClick={() => onItemClick(item)}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </li>
          ))}
        </ul>
      </div>
    )
  }
  
  export default Sidebar
  
  