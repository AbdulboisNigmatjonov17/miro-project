import React from 'react'
import Button from '../button/Button'
import { useTranslation } from 'react-i18next'

export default function Statisic() {
    const { t } = useTranslation()
    return (
        <section className='w-full h-[450px] flex flex-col items-center justify-center gap-4 bg-[#050038] text-white md:rounded-2xl rounded-none my-20 lg:px-0 px-5 '>
            <h1 className='text-5xl font-bold leading-14 text-center'>{t("Sts.title")}</h1>
            <div className='text-[#FFFFFF99] text-[18px] font-normal leading-6 text-center flex flex-col gap-3'>
                <p>{t("Sts.p1")}</p>
                <p className='underline underline-offset-4'>{t("Sts.p2")}</p>
            </div>
            <Button />
        </section>
    )
}
