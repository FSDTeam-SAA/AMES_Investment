import MainLayout from "@/Layouts/MainLayout";
import { Head, Link } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />

            <MainLayout>
                <div className="h-screen">
                    <h1 className="text-7xl text-white text-center pt-40">
                        Ames Investment Systems || Home Page
                    </h1>
                </div>
            </MainLayout>
        </>
    );
}
