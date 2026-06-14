import StoreLayout from "@/components/store/StoreLayout";

export const metadata = {
    title: "QuiCart. - Store Dashboard",
    description: "QuiCart. - Store Dashboard",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <StoreLayout>
                {children}
            </StoreLayout>
        </>
    );
}
