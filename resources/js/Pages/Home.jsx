import FeaturesSection from "@/Components/FeaturesSection";
import HowItWorks from "@/Components/HowItWorks";
import MainLayout from "@/Layouts/MainLayout";
import { Head, Link } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />

            <MainLayout>
           
                <FeaturesSection/>
                <HowItWorks/>
            </MainLayout>
        </>
    );
}
