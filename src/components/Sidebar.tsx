const Sidebar = () => {
    const sidebarItems = [
        { icon: "", text: "Recipes"},
        { icon: "", text: "Inventory"},
        
    ]


    return (
        <div className="row-span-2 border-r-2 border-r-emerald-500 h-full">
            <h1 className="text-2xl h-16 text-center p-4">Bread Builder</h1>
            <ul className="p-4">
                <li className="text-xl">recipes</li>
                <li className="text-xl">inventory</li>
                <li className="text-xl">ddt calculator</li>
                <li className="text-xl">articles</li>
            </ul>
        </div>
    );
}

export default Sidebar;