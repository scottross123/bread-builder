const Sidebar = () => {
    const sidebarItems = [
        { icon: "", text: "Recipes"},
        { icon: "", text: "Inventory"},
        
    ]


    return (
        <div className="row-span-2 border-r-2 border-r-emerald-500">
            <h1 className="text-2xl h-16">Bread Builder</h1>
            <ul className="p-4">
                <li className="text-xl">recipes</li>
            </ul>
        </div>
    );
}

export default Sidebar;