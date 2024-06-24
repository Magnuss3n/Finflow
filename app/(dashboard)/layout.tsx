import { Header } from "@/components/header";

type Props = {
    children: React.ReactNode;
};
// as another rule of layout is it needs to get children 
// cause it's a first thing that is fetched in dashboard 
// we wrap our page in dashboard layout 


const DashboardLayout = ({ children }: Props) => {
    return (
        <>
            <Header />
            <main className="px-3 lg:px-14">
                {children}
            </main>
        </>
    )
};

export default DashboardLayout;