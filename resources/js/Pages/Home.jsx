import FeaturesSection from "@/Components/FeaturesSection";
import GetStartedCard from "@/Components/GetStartedCard";
import HomeHero from "@/Components/HomeHero";
import HowItWorks from "@/Components/HowItWorks";
import MainLayout from "@/Layouts/MainLayout";
import { Head, Link } from "@inertiajs/react";
import PaymentFaild from "./Dashboard/payment/PaymentFaild";
export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />

            <MainLayout>
                <HomeHero />

                <FeaturesSection />
                <HowItWorks />
                <div className="lg:mt-[-300px]">
                    <GetStartedCard title="Take the First Step to Smarter Investment Choices" />
                </div>
            </MainLayout>
        </>
    );
}
