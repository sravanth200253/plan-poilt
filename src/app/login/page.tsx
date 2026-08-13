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
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#F3D8BE] via-[#E3A876] to-[#4A3728] px-6 py-12">
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-white/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-16 h-96 w-96 rounded-full bg-[#2B231A]/40 blur-3xl" />

      <Link href="/" className="relative z-10 mb-6 flex items-center gap-2">
        <img src="/logo1.png" alt="PlanPilot logo" className="h-9 w-9 object-contain" />
        <span className="text-lg font-bold text-white drop-shadow-sm">
          Plan Pilot
        </span>
      </Link>

      <div className="relative z-10 w-full max-w-[350px] rounded-[40px] border border-white/40 bg-white/25 px-[35px] py-[25px] shadow-[0_30px_60px_-20px_rgba(26,20,15,0.5)] backdrop-blur-2xl">
        <h1 className="bg-gradient-to-r from-[#C8876A] via-[#B99A73] to-[#4A3728] bg-clip-text text-center text-3xl font-black text-transparent">
          Login
        </h1>

        <form className="mt-5" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="mt-[15px] w-full rounded-[20px] border-x-2 border-transparent bg-white/60 px-5 py-[15px] text-sm text-[#4A3728] shadow-[0_10px_10px_-5px_rgba(200,135,106,0.2)] backdrop-blur-md placeholder:text-[#8B6F47]/60 focus:border-x-2 focus:border-[#C8876A] focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="mt-[15px] w-full rounded-[20px] border-x-2 border-transparent bg-white/60 px-5 py-[15px] text-sm text-[#4A3728] shadow-[0_10px_10px_-5px_rgba(200,135,106,0.2)] backdrop-blur-md placeholder:text-[#8B6F47]/60 focus:border-x-2 focus:border-[#C8876A] focus:outline-none"
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
