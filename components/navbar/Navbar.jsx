"use client";

import { i18n } from "@/i18n"; // Named export'ni import qilamiz

export default function Navbar() {
  return (
    <div className="flex gap-10 py-10 px-10">
      
      <button onClick={() => i18n.changeLanguage("uz")}>Uz</button>
      <button onClick={() => i18n.changeLanguage("en")}>En</button>
    </div>
  );
}
