"use client";

import { i18n } from "@/i18n"; // Named export'ni import qilamiz
import { ExpandMore, Language } from '@mui/icons-material';
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from '@/components/button/Button'
import Image from "next/image";
export default function Navbar() {
  const [showBtn, setShowBtn] = useState(false)
  const { t } = useTranslation();
  return (
    <nav className="w-full h-[10vh] flex justify-between">
      <div className="w-1/2 flex items-center justify-center gap-6">
        <Link href={'/'}>
          <Image width={90} height={30} src="/logo.svg" alt="miro logo" className="" />
        </Link>
        <ul className="flex gap-4 items-center">
          <li className="hover:underline underline-offset-4">{t("navbar.Product")} <ExpandMore /></li>
          <li className="hover:underline underline-offset-4">{t("navbar.Solutions")} <ExpandMore /></li>
          <li className="hover:underline underline-offset-4">{t("navbar.Resources")} <ExpandMore /></li>
          <li className="hover:underline underline-offset-4">{t("navbar.Enterprise")}</li>
          <li className="hover:underline underline-offset-4">{t("navbar.Pricing")}</li>
        </ul>
      </div>
      <div className="w-1/2 flex justify-center items-center gap-6">
        <button onClick={() => setShowBtn(prev => !prev)}
          className="relative cursor-pointer flex gap-1">
          <Language />{t("navbar.EN")}
          {showBtn && <div className="absolute top-6 left-5 flex flex-col gap-1 border border-[#F0F0F0] shadow-2xs">
            <div className="border border-[#F0F0F0] py-1 px-3 cursor-pointer hover:bg-[#F0F0F0]" onClick={() => i18n.changeLanguage("uz")}>Uz</div>
            <div className="border border-[#F0F0F0] py-1 px-3 cursor-pointer hover:bg-[#F0F0F0]" onClick={() => i18n.changeLanguage("en")}>En</div>
          </div>}
        </button>
        <h3>{t("navbar.Contact Sales")}</h3>
        <div className="flex gap-0.5 items-center">
          <button className="hover:bg-[#4262FF] rounded-full py-4 px-5 text-black hover:text-white cursor-pointer">{t("navbar.Sign up free")} →</button>
          <Button />
        </div>
      </div>
    </nav>
  );
}
