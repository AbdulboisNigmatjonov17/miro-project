"use client";

import { i18n } from "@/i18n";
import { ExpandMore, Language, Menu } from '@mui/icons-material';
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from '@/components/button/Button'
import Image from "next/image";
import { Drawer, List, ListItem } from "@mui/material";

export default function Navbar() {
  const [showBtn, setShowBtn] = useState(false)
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const handleChangeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };
  return (
    <nav className="max-w-[1500px] mx-auto h-[10vh] flex justify-between px-5 gap-5">
      <div className="flex items-center justify-center gap-6">
        <Link href={'/'}>
          <Image width={90} height={30} src="/logo.svg" alt="miro logo" />
        </Link>
        <ul className="hidden lg:flex gap-4 items-center">
          <li className="hover:underline underline-offset-4">{t("navbar.Product")} <ExpandMore /></li>
          <li className="hover:underline underline-offset-4">{t("navbar.Solutions")} <ExpandMore /></li>
          <li className="hover:underline underline-offset-4">{t("navbar.Resources")} <ExpandMore /></li>
          <li className="hover:underline underline-offset-4">{t("navbar.Enterprise")}</li>
          <li className="hover:underline underline-offset-4">{t("navbar.Pricing")}</li>
        </ul>
      </div>
      <div className="hidden md:flex justify-center items-center gap-6">
        {/* <button onClick={() => setShowBtn(prev => !prev)}
          className="relative cursor-pointer flex gap-1">
          <Language />{t("navbar.EN")}
          {showBtn && <div className="absolute top-6 left-5 flex flex-col gap-1 border border-[#F0F0F0] shadow-2xs">
            <div className="border border-[#F0F0F0] py-1 px-3 cursor-pointer hover:bg-[#F0F0F0]" onClick={() => i18n.changeLanguage("uz")}>Uz</div>
            <div className="border border-[#F0F0F0] py-1 px-3 cursor-pointer hover:bg-[#F0F0F0]" onClick={() => i18n.changeLanguage("en")}>En</div>
          </div>}
        </button> */}
        <Language />
        <select
          onChange={handleChangeLanguage}
          defaultValue={i18n.language}
          className="cursor-pointer border border-[#F0F0F0] px-3 py-1 rounded-md shadow-2xs"
        >
          <option value="uz" className="cursor-pointer">Uz</option>
          <option value="en" className="cursor-pointer">En</option>
        </select>
        <h3>{t("navbar.Contact Sales")}</h3>
        <div className="flex gap-0.5 items-center">
          <button className="hover:bg-[#4262FF] rounded-full py-4 px-5 text-black hover:text-white cursor-pointer">{t("navbar.Sign up free")} →</button>
          <Button />
        </div>
      </div>

      <button className="lg:hidden" onClick={() => setOpen(true)}>
        <Menu className="w-8 h-8" />
      </button>

      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <List className="md:w-64 w-48 h-full bg-[#F6F6F7] text-black flex flex-col">
          <ListItem>
            <div className="flex flex-col justify-center items-start gap-6">
              <select
                onChange={handleChangeLanguage}
                defaultValue={i18n.language}
                className="cursor-pointer border border-[#F0F0F0] px-3 py-1 rounded-md shadow-2xs"
              >
                <option value="uz">Uz</option>
                <option value="en">En</option>
              </select>
              <h3>{t("navbar.Contact Sales")}</h3>
              <div className="md:hidden flex flex-col  gap-0.5 items-start">
                <button className="hover:bg-[#4262FF] rounded-full py-4 px-5 text-black hover:text-white cursor-pointer">{t("navbar.Sign up free")} →</button>
                <Button />
              </div>
            </div>
          </ListItem>
          <ListItem>
            <ul>
              <li className="hover:underline underline-offset-4 mt-2.5">{t("navbar.Product")} <ExpandMore /></li>
              <li className="hover:underline underline-offset-4 mt-2.5">{t("navbar.Solutions")} <ExpandMore /></li>
              <li className="hover:underline underline-offset-4 mt-2.5">{t("navbar.Resources")} <ExpandMore /></li>
              <li className="hover:underline underline-offset-4 mt-2.5">{t("navbar.Enterprise")}</li>
              <li className="hover:underline underline-offset-4 mt-2.5">{t("navbar.Pricing")}</li>
            </ul>
          </ListItem>
        </List>
      </Drawer>
    </nav>
  );
}