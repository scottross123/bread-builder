import Header from "./Header";
import Sidebar from "./Sidebar";

type AppLayoutProps = {
    children: JSX.Element
} 

const AppLayout = (props: AppLayoutProps) => {
    const { children } = props;
    return (
        <div className="min-h-screen grid grid-cols-app">
            <Sidebar />
            <div className="flex flex-col h-full row-span-2">
                <Header 
                    heading="Pain de Champagne"
                />
                <main className="h-full p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}

export default AppLayout;