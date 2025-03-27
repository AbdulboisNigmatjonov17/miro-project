"use client";
import React from "react";
import StarRating from "@/components/star/Star";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";

export default function HeroBanner() {
  const { t } = useTranslation();

  return (
    <section className="w-full py-[60px] flex flex-wrap justify-between lg:gap-0 gap-10 lg:px-0 md:px-20 px-10">
      <div className="lg:w-[440px] w-full flex flex-col justify-between lg:gap-0 gap-5">
        <h1 className="text-5xl font-bold text-[#050038] lg:text-left md:text-center text-left">{t("hero.Take ideas from better to best")}</h1>
        <h4 className="text-[#050038B8]">{t("hero.Miro is your team's visual platform to connect, collaborate, and create — together.")}</h4>
        <form className="flex flex-col gap-2.5">
          <input
            type="text"
            placeholder={t("hero.Enter your work email")}
            className="w-full px-6 py-3 rounded-full text-[#5F5C80] text-lg outline-none border border-[#9B99AF]"
          />
          <button aria-label="Sign Up free" className="w-full bg-[#4262FF] hover:bg-[#4262ffd2] px-6 py-3 rounded-full text-white cursor-pointer">
            {t("hero.Sign up free")} →
          </button>
          <label className="text-[#05003866]">{t("hero.Collaborate with your team within minutes")}</label>
        </form>
        <div className="flex flex-wrap lg:justify-between justify-center lg:gap-0 gap-5 bg-[#F5F5F7] p-3.5 rounded-lg">
          <div className="w-[180px]">
            <StarRating />
            <p className="text-[#050038]">{t("hero.Based on 5149+ reviews")}</p>
          </div>
          <div className="flex items-center">
            <Image width={185} height={35} src="/bannerLogos.png" alt="miro bannerLogos" className="w-[200px] h-[40px] object-cover" />
          </div>
        </div>
      </div>
      <Link href={'https://miro.com/app/dashboard/'} className="overflow-hidden">
        <Image width={640} height={462} priority src="/headerimage.png" alt="header image" className="hover:scale-110 delay-200 transition duration-200 cursor-pointer"/>
      </Link>
    </section>
  );
}
