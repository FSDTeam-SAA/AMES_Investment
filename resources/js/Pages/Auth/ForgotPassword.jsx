import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import { Button } from "@/Components/ui/button";
import MainLayout from "@/Layouts/MainLayout";
import { useForm } from "@inertiajs/react";

export default function ForgotPassword() {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <MainLayout>
            <div className="flex items-center justify-center h-[65vh] ">
                <div className="w-[95%] lg:w-[40%]">
                    <h2 className="text-white text-center text-4xl font-semibold leading-[90px]">
                        Forgot your password?
                    </h2>
                    <div className="mb-4 text-sm text-white text-center">
                        Just let us know your email address and we will email
                        you a password reset link that will allow you to choose
                        a new one.
                    </div>

                    <form onSubmit={submit}>
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            isFocused={true}
                            onChange={(e) => setData("email", e.target.value)}
                        />

                        <InputError message={errors.email} className="mt-2" />

                        <div className="mt-4 flex items-center justify-end">
                            <Button className="ms-4" disabled={processing}>
                                Email Password Reset Link
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </MainLayout>
    );
}
