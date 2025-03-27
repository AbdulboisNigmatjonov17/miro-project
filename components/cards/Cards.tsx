import Image from 'next/image'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Cards() {
  const { t } = useTranslation()
  return (
    <section className='w-full my-20 flex flex-col gap-10 items-center text-center'>
      <div className='flex flex-col gap-6 items-center'>
        <h1 className='font-bold text-5xl leading-14'>{t("Cards.title")}</h1>
        <button aria-label="See all customers" className='min-w-[280px] h-12 flex items-center justify-center rounded-3xl cursor-pointer border border-[#4262FF] text-[#4262FF] font-normal text-[18px] leading-6 hover:bg-[#4262FF] hover:text-white'>{t("Cards.button")} →</button>
      </div>
      <div className='w-full flex flex-wrap justify-between'>
        <div className='w-[350px] h-[450px] flex flex-col justify-between p-9 gap-8 text-left'>
          <Image width={285} height={60} src="/cards/vmware.png" alt="vmware img" className='shadow-2xl' />
          <p className='text-[#05003899] font-normal text-[18px] leading-6'>{t("Cards.card1.text")}</p>
          <div className='flex items-center gap-4'>
            <Image width={48} height={48} src="/cards/user1.png" alt="" />
            <div>
              <h4 className='text-[#05003899] text-[14px] font-normal leading-5'>Roxanne Mustafa</h4>
              <h4 className='text-[#05003899] text-[14px] font-normal leading-5'>{t("Cards.card1.job")}</h4>
            </div>
          </div>
        </div>
        <div className='w-[350px] h-[450px] flex flex-col justify-between p-9 gap-8 text-left'>
          <Image width={285} height={60} src="/cards/DocuSign.png" alt="DocuSign img" className='' />
          <p className='text-[#05003899] font-normal text-[18px] leading-6'>{t("Cards.card2.text")}</p>
          <div className='flex items-center gap-4'>
            <Image width={48} height={48} src="/cards/user2.png" alt="" />
            <div>
              <h4 className='text-[#05003899] text-[14px] font-normal leading-5'>Roxanne Mustafa</h4>
              <h4 className='text-[#05003899] text-[14px] font-normal leading-5'>{t("Cards.card2.job")}</h4>
            </div>
          </div>
        </div>
        <div className='w-[350px] h-[450px] flex flex-col justify-between p-9 gap-8 text-left'>
          <Image width={285} height={60} src="/cards/frog.png" alt="frog img" className='shadow-2xl' />
          <p className='text-[#05003899] font-normal text-[18px] leading-6'>{t("Cards.card3.text")}</p>
          <div className='flex items-center gap-4'>
            <Image width={48} height={48} src="/cards/user3.png" alt="" />
            <div>
              <h4 className='text-[#05003899] text-[14px] font-normal leading-5'>Roxanne Mustafa</h4>
              <h4 className='text-[#05003899] text-[14px] font-normal leading-5'>{t("Cards.card3.job")}</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
