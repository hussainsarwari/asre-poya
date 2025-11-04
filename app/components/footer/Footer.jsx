"use client";
import { useLanguage } from "../../provider/languageProvider";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/icons/asrepoyaLogo.svg";
import asrepoyatext from "@/public/icons/footer/asrepoyatext.svg";
import sms from "@/public/icons/footer/sms.svg";
import call from "@/public/icons/footer/call.svg";
import location from "@/public/icons/footer/location.svg";

export default function Footer() {
  const { t, lang, setLang, dir } = useLanguage();

  return (
    <footer className="bg-[#1E1E2B] w-full gap-5 flex flex-col justify-evenly items-center mt-auto py-10">
      {/* section 1 */}
      <div
        className={`m-auto flex flex-col-reverse items-end gap-5 justify-around lg:flex-row border-b border-[#06B1FD99] py-12 w-[80%]`}
      >
        <div className="w-full lg:w-[70%]">
          <p
            className={`text-[#FFFFFFCC] ${
              dir === "rtl"
                ? "flex-row-reverse text-right"
                : "flex-row text-left"
            }`}
          >
            {t("footer.paragraph")}
          </p>
        </div>
        <div>
          <Link href="/" className="flex items-center gap-2 text-white">
            <Image src={asrepoyatext} alt="Logo" width={110} />
            <Image src={logo} alt="Logo" width={50} />
          </Link>
        </div>
      </div>

      {/* section 2 */}
      <div className="flex gap-5 justify-around lg:flex-row-reverse w-[80%] flex-col items-end lg:justify-center lg:items-start">
        <h2 className="font-bold text-center text-white lg:w-100 text-md lg:text-3xl">
          {t("contact_info")}
        </h2>
        <div className="grid items-center w-full grid-cols-2 grid-rows-2 gap-4 text-sm text-white lg:gap-2 lg:grid-cols-4 lg:grid-rows-1 ">
          <div className="w-full text-sm h-30 lg:h-15">
            <h3 className="flex items-center justify-end gap-1">
              {t("job")}
              <span>
                <Image src={sms} alt="jobs" width={20} />
              </span>
            </h3>
            <p className="text-[#FFFFFF99] text-right">{t("jobList")}</p>
          </div>
          <div className="border-l h-30 lg:h-15 w-full text-sm border-[#06B1FD33]">
            <h3 className="flex items-center justify-end gap-1">
              {t("email")}
              <span>
                <Image src={sms} alt="email" width={20} />
              </span>
            </h3>
            <p className="text-[#FFFFFF99] text-right">email@asrepoya.com</p>
          </div>
          <div className="w-full text-sm h-30 lg:h-15 lg:border-[#06B1FD33] lg:border-l">
            <h3 className="flex items-center justify-end gap-1">
              {t("call")}
              <span>
                <Image src={call} alt="phone_number" width={20} />
              </span>
            </h3>
            <p className="text-[#FFFFFF99] text-right">+9377777777777</p>
          </div>
          <div className="border-l h-30 lg:h-15 w-full text-sm border-[#06B1FD33]">
            <h3 className="flex justify-end gap-1">
              {t("location")}
              <span>
                <Image src={location} alt="location" width={20} />
              </span>
            </h3>
            <p className="text-[#FFFFFF99] text-right">{t("addressmazar")}</p>
            <p className="text-[#FFFFFF99] text-right">{t("addresskabul")}</p>
          </div>
        </div>
      </div>

      {/* section 3 */}
      <div className="bg-[#06B1FD33] h-[2.188rem] rounded-lg w-[80%] m-auto flex items-center justify-center mt-8">
        <h1 className="text-center text-white text-[10px] md:text-lg">
          {t("all_right_of_this_website")}
        </h1>
      </div>
    </footer>
  );
}
