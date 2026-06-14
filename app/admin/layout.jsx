import AdminLayout from "@/components/admin/AdminLayout";

export const metadata = {
    title: "QuiCart. - Admin",
    description: "QuiCart. - Admin",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <AdminLayout>
                {children}
            </AdminLayout>
        </>
    );
}
