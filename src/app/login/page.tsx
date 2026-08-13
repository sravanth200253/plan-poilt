"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  IconBrandGoogle,
  IconBrandApple,
  IconBrandFacebook,
} from "@tabler/icons-react";

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#F7F1E7] px-6 py-12 dark:bg-[#171310]">
      <Link href="/" className="mb-6 flex items-center gap-2">
        <img src="/logo1.png" alt="PlanPilot logo" className="h-9 w-9 object-contain" />
        <span className="text-lg font-bold text-[#4A3728] dark:text-[#F0EBE3]">
          Plan Pilot
        </span>
      </Link>

      <div className="w-full max-w-[350px] rounded-[40px] border-[5px] border-white bg-gradient-to-b from-white to-[#FBF6EC] px-[35px] py-[25px] shadow-[0_30px_30px_-20px_rgba(200,135,106,0.45)] dark:border-white/10 dark:from-[#221C15] dark:to-[#1B1610]">
        <h1 className="bg-gradient-to-r from-[#C8876A] via-[#B99A73] to-[#4A3728] bg-clip-text text-center text-3xl font-black text-transparent">
          Login
        </h1>

        <form className="mt-5" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="mt-[15px] w-full rounded-[20px] border-x-2 border-transparent bg-white px-5 py-[15px] text-sm text-[#4A3728] shadow-[0_10px_10px_-5px_#F3E6D6] placeholder:text-[#AAAAAA] focus:outline-none focus:border-x-2 focus:border-[#C8876A] dark:bg-white/5 dark:text-[#F0EBE3]"
          />
          <input
            type="password"
            placeholder="Password"
            className="mt-[15px] w-full rounded-[20px] border-x-2 border-transparent bg-white px-5 py-[15px] text-sm text-[#4A3728] shadow-[0_10px_10px_-5px_#F3E6D6] placeholder:text-[#AAAAAA] focus:outline-none focus:border-x-2 focus:border-[#C8876A] dark:bg-white/5 dark:text-[#F0EBE3]"
          />

          <span className="mt-[10px] ml-[10px] block">
            <a href="#" className="text-[11px] text-[#8B6F47] no-underline hover:underline">
              Forgot Password?
            </a>
          </span>

          <button
            type="submit"
            className="mx-auto my-5 block w-full rounded-[20px] bg-gradient-to-br from-[#C8876A] to-[#8B6F47] py-[15px] text-sm font-bold text-white shadow-[0_20px_10px_-15px_rgba(200,135,106,0.6)] transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_23px_10px_-20px_rgba(200,135,106,0.6)] active:scale-95 active:shadow-[0_15px_10px_-10px_rgba(200,135,106,0.6)]"
          >
            Login
          </button>
        </form>

        <div className="mt-[25px]">
          <span className="block text-center text-[10px] text-[#8B6F47]/70">
            Or Sign in With
          </span>
          <div className="mt-[5px] flex w-full items-center justify-center gap-[15px]">
            {[IconBrandGoogle, IconBrandApple, IconBrandFacebook].map(
              (Icon, idx) => (
                <button
                  key={idx}
                  type="button"
                  className="grid aspect-square w-10 place-content-center rounded-full border-[5px] border-white bg-gradient-to-br from-[#4A3728] to-[#6B5A4A] shadow-[0_12px_10px_-8px_rgba(200,135,106,0.5)] transition-transform duration-200 hover:scale-[1.2] active:scale-90"
                >
                  <Icon size={16} className="text-white" />
                </button>
              )
            )}
          </div>
        </div>

        <span className="mt-[15px] block text-center">
          <a href="#" className="text-[9px] text-[#8B6F47] no-underline hover:underline">
            Learn user licence agreement
          </a>
        </span>
      </div>
    </div>
  );
}
