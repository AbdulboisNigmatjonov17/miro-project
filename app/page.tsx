"use client";

import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <h2>Home</h2>
      <h1>{t("welcome")}</h1>
    </div>
  )
}
