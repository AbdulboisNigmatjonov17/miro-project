"use client";

import { i18n } from "@/i18n"; // Named export'ni import qilamiz
import { ExpandMore, Language } from '@mui/icons-material';
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";

{/* <h1>{t("welcome")}</h1> */ }
export default function Navbar() {
  const [showBtn, setShowBtn] = useState(false)
  const { t } = useTranslation();
  return (
    <nav className="w-full h-[10vh] flex justify-between">
      <div className="w-1/2 flex items-center justify-center gap-6">
        <Link href={'/'}>
          <img src="/logo.svg" alt="miro logo" className="" />
        </Link>
        <ul className="flex gap-4 items-center">
          <li className="hover:underline underline-offset-4">{t("Product")} <ExpandMore /></li>
          <li className="hover:underline underline-offset-4">{t("Solutions")} <ExpandMore /></li>
          <li className="hover:underline underline-offset-4">{t("Resources")} <ExpandMore /></li>
          <li className="hover:underline underline-offset-4">{t("Enterprise")}</li>
          <li className="hover:underline underline-offset-4">{t("Pricing")}</li>
        </ul>
      </div>
      <div className="w-1/2 flex justify-center items-center gap-6">
        <button onClick={() => setShowBtn(prev => !prev)}
          className="relative cursor-pointer">
          <Language />{t("EN")}
          {showBtn && <div className="absolute top-6 left-5 flex flex-col gap-1 border border-[#F0F0F0] shadow-2xs">
            <div className="border border-[#F0F0F0] py-1 px-3 cursor-pointer" onClick={() => i18n.changeLanguage("uz")}>Uz</div>
            <div className="border border-[#F0F0F0] py-1 px-3 cursor-pointer" onClick={() => i18n.changeLanguage("en")}>En</div>
          </div>}
        </button>
        <h3>{t("Contact Sales")}</h3>
        <div>
          <button className="hover:bg-[#4262FF] rounded-full py-4 px-5 text-black hover:text-white cursor-pointer">{t("Sign up free")} →</button>
          <button className="bg-[#4262FF] rounded-full py-4 px-5 text-white cursor-pointer">{t("Sign up free")} →</button>
        </div>
      </div>
    </nav>
  );
}
