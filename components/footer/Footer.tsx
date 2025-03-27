"use client"
import { footerData } from '@/helpers/FooterData';
import { FacebookOutlined, Instagram, Language, LinkedIn, Twitter, YouTube } from '@mui/icons-material';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className='bg-[#050038] text-white px-5 py-10 flex flex-col gap-20'>
      <div className="flex flex-wrap lg:justify-between justify-start px-6 lg:gap-0 md:gap-10 gap-5">
        {footerData.map((section, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold mb-4">{t(`footer.${section.title}`)}</h3>
            <ul className="space-y-2">
              {section.links.map((link, idx) => (
                <li key={idx} className="text-gray-300 hover:text-white transition">
                  {t(`footer.${link}`)}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <hr className='text-[#9B99AF]' />
      <div className='w-full md:px-8 px-5 flex flex-wrap justify-between items-center lg:gap-0 gap-5'>
        <div className='flex flex-wrap items-center gap-8'>
          <div className='flex gap-6'>
            <Twitter />
            <FacebookOutlined />
            <LinkedIn />
            <Instagram />
            <YouTube />
            <Language />
            {t("footer.en")}
          </div>
          <span>{t('footer.copyright')}</span>
          <span>{t('footer.terms')}</span>
          <span>{t('footer.privacy')}</span>
          <span>{t('footer.cookies')}</span>
        </div>
        <div className='min-h-[45px] flex flex-wrap gap-3 '>
          <Image width={135} height={45} src="/appstore.png" alt="app store" />
          <Image width={150} height={45} src="/googleplay.png" alt="google play" />
          <Image width={45} height={45} src="/image.png" alt="miro logo" />
        </div>
      </div>
    </footer>
  )
}
