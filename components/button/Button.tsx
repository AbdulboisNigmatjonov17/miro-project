import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Button() {
    const { t } = useTranslation()
    return (
        <button aria-label="Sign Up free" className='px-5 py-4 bg-[#4262FF] hover:bg-[#4262ffcb] rounded-full text-white cursor-pointer'>{t("navbar.Sign up free")} →</button>
    )
}
