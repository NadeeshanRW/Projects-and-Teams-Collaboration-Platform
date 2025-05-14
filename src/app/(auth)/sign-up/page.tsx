
import { getCurrent } from "@/features/auth/queries";
import { SignUPCard } from "@/features/auth/components/sign-up-card";
import { redirect } from "next/navigation";

export const SignupPage = async () => {
    const user = await getCurrent();
        if (user) redirect("/");
    return <SignUPCard/>
};

export default SignupPage;
