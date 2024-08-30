import Logo from "/images/logo.svg";
import Illustration from "/images/illustration-dashboard.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { type SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
    email: z
        .string()
        .email({ message: "Please provide a valid email address" })
        .min(1, { message: "Please provide a valid email address" }),
});

type FormType = z.infer<typeof formSchema>;

export default function App() {
    const {
        register,
        formState: { errors },
        reset,
        handleSubmit,
    } = useForm<FormType>({ resolver: zodResolver(formSchema) });

    const onSubmit: SubmitHandler<FormType> = () => {
        alert("submit successfully")
        reset()
    };
    return (
        <Root>
            <main className="w-full min-h-screen flex flex-col items-center px-5 md:py-16 py-12">
                <div className="md:w-[40rem] w-full flex flex-col items-center">
                    <img src={Logo} alt="logo" />
                    <div className="flex flex-col w-full items-center py-12">
                        <h1 className="md:text-[2.5rem] text-2xl text-c_Gray font-thin">
                            We are launching{" "}
                            <span className="text-c_Very_Dark_Blue font-bold">
                                soon!
                            </span>
                        </h1>
                        <p className="md:text-[1rem] tet-xs font-thin mt-4">
                            Subscribe and get notified
                        </p>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className={`flex relative md:flex-row flex-col items-center md:gap-4 gap-2 w-full mt-8`}
                        >
                            <input
                                type="text"
                                {...register("email")}
                                placeholder="Your email address..."
                                className={`flex-grow h-full text-xs py-3 rounded-full md:w-fit w-full border-[1px] px-6 outline-none ${errors.email ? "border-c_Light_Red" : "border-c_Gray"}`}
                            />
                            {errors.email && <span className="text-[0.5rem] md:absolute left-6 md:pb-0 pb-2 -bottom-4 text-c_Light_Red italic">{errors.email.message}</span>}
                            <button
                                type="submit"
                                className="bg-c_Blue h-full py-3 text-white md:w-fit w-full rounded-full px-12 text-xs font-semibold"
                            >
                                Notify Me
                            </button>
                        </form>
                    </div>
                    <img
                        src={Illustration}
                        alt="illustration"
                        className="w-full aspect-[1280/782] my-6"
                    />
                    <footer className="flex flex-col items-center md:pt-6 pt-32 gap-6">
                        <div className="flex items-center justify-center gap-4">
                            <div className="rounded-full flex items-center justify-center border-[1px] border-c_Gray size-8 text-c_Blue">
                                <FaFacebook className="size-4" />
                            </div>
                            <div className="rounded-full flex items-center justify-center border-[1px] border-c_Gray size-8 text-c_Blue">
                                <FaTwitter className="size-4" />
                            </div>
                            <div className="rounded-full flex items-center justify-center border-[1px] border-c_Gray size-8 text-c_Blue">
                                <FaInstagram className="size-4" />
                            </div>
                        </div>
                        <span className="text-xs text-c_Gray">
                            @ Copyright Ping. All rights reserved
                        </span>
                    </footer>
                </div>
            </main>
        </Root>
    );
}

function Root({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-white font-libre_franklin font-thin">{children}</div>
    );
}
