import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Logos() {
  const { t } = useTranslation()
  return (
    <section className='w-full flex flex-col gap-12 items-center py-14'>
      <h3 className='text-[#05003899] text-[18px]'>{t("logos.Trusted by 45M+ users")}</h3>
      <div className='w-full flex flex-wrap items-center justify-between'>
        {["/logos/Walmart.png", "/logos/cisco.png", "/logos/Volvo.png", "/logos/deloitte.png", "/logos/okta.png"].map((item, index) => (
          <div key={index}>
            <img src={item} alt={`${item} ${index}`} />
          </div>
        ))}
      </div>
    </section>
  )
}
