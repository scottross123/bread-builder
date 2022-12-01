import Header from "./Header";
import Sidebar from "./Sidebar";

type AppLayoutProps = {
    children: JSX.Element
} 

const AppLayout = (props: AppLayoutProps) => {
    const { children } = props;
    return (
        <div className="min-h-full grid grid-cols-app">
            <Sidebar />
            <Header 
                heading="Pain de Champagne"
            />
            <main>
                {children}
            </main>
        </div>
    );
}

export default AppLayout;