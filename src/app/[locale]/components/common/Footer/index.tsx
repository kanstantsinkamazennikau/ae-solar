"use client";

import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Button from "@/app/[locale]/components/common/Button";
import ContactInfo from "@/app/[locale]/components/common/Footer/ContactInfo";
import { FooterCategory } from "@/app/[locale]/components/common/Footer/FooterCategory";
import PolicyLink from "@/app/[locale]/components/common/Footer/PolicyLink";
import Social from "@/app/[locale]/components/common/Footer/Social";
import { FooterFormFields } from "@/app/[locale]/components/common/Footer/types";
import Input from "@/app/[locale]/components/common/Input";
import Logo from "@/app/[locale]/components/common/Logo";
import {
  FOOTER_COPYRIGHT,
  FOOTER_GERMAN_BRAND,
  FOOTER_GERMAN_BRAND_WORDS_TO_BOLD,
  FOOTER_LINKS_ARRAY,
  FOOTER_SAVE_THE_WORLD,
  FOOTER_SUBSCRIBE,
  FOOTER_SUBSCRIBE_NEWSLETTER,
  FOOTER_YOUR_EMAIL,
  FORMS_FIELDS,
  POLICY_LINKS,
} from "@/app/[locale]/utils/constants";
import { styleMatchingText } from "@/app/[locale]/utils/styleMatchingText";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import {
  FieldValues,
  RegisterOptions,
  SubmitHandler,
  useForm,
} from "react-hook-form";

export default function Footer() {
  const pathname = usePathname();
  const inputsRules: { [key in keyof FooterFormFields]: RegisterOptions } = {
    email: {
      required: "Email is required",
      pattern: {
        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        message: "Invalid email address",
      },
    },
  };

  const defaultValues = {
    [FORMS_FIELDS.email]: "",
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col justify-center items-center relative">
      <BasicWidthContainer>
        <footer className="text-sm pt-20 ">
          <Image
            src={`/images/glowFull.png`}
            alt="glow"
            priority
            width={1320}
            height={60}
            className="rotate-180"
          />
          <nav className="grid md:grid-cols-[auto_auto] min-[500px]:items-start gap-2 grid-cols-1 justify-between">
            {/* BACKGROUND */}
            <div className="flex justify-between w-full absolute top-0 left-0 mt-20 h-[calc(100%-80px)] items-center">
              <Image
                src={`/images/footer/productLeft.png`}
                alt="productLeft"
                priority
                width={870}
                height={547}
                quality={100}
                className="-z-10 md:max-w-[45%] md:h-full max-w-[40%] h-1/2"
              />
              <Image
                src={`/images/footer/productRight.png`}
                alt="productRight"
                priority
                width={800}
                height={547}
                quality={100}
                className="-z-10 md:max-w-[45%] md:h-full max-w-[40%] h-1/2"
              />
            </div>

            {/* INFO */}
            <div className="flex gap-8 flex-col max-w-[203px] max-[500px]:max-w-full pb-3 z-10">
              <div className="flex flex-col w-fit">
                <Logo />
                <p className="text-base-red text-[10px] text-right">
                  {FOOTER_SAVE_THE_WORLD}
                </p>
              </div>
              <div>
                {styleMatchingText(
                  FOOTER_GERMAN_BRAND,
                  FOOTER_GERMAN_BRAND_WORDS_TO_BOLD,
                  "text-sm font-normal leading-[130%] font-walsheim text-[#747474]",
                  "text-dark-gray-900 font-bold"
                )}
              </div>
              <ContactInfo />
              <Social />
            </div>
            {/* LINKS */}
            <div className="min-[500px]:justify-between min-w-0 lg:min-w-[720px] grid min-[500px]:grid-cols-4 grid-cols-1 w-full">
              {FOOTER_LINKS_ARRAY.map(({ category, links }) => (
                <FooterCategory
                  key={category.title}
                  category={category}
                  links={links}
                />
              ))}
              <form
                className="
                  flex
                  p-6
                  min-[500px]:flex-row
                  flex-col
                  gap-4
                  bg-[#0D0D0D]
                  border
                  border-solid
                  border-[#191919]
                  rounded-xl
                  w-full
                  min-[500px]:items-end
                  min-[500px]:col-start-1
                  min-[500px]:col-end-5
                "
              >
                <span className="leading-[120%] text-white [font-size:_clamp(12px,1vw,16px)] max-w-[140px]">
                  {FOOTER_SUBSCRIBE_NEWSLETTER}
                </span>
                <Input
                  placeholder={FOOTER_YOUR_EMAIL}
                  externalContainerStyle="!w-full"
                  externalStyle="placeholder:[font-size:_clamp(11px,1vw,16px)]"
                  error={errors?.email}
                  name="email"
                  register={register("email", inputsRules.email)}
                />
                <Button
                  onClick={handleSubmit(onSubmit)}
                  style="outline"
                  size="extrasmall"
                  externalStyle="py-3 px-6"
                >
                  <span className="leading-none [font-size:_clamp(12px,1vw,14px)]">
                    {FOOTER_SUBSCRIBE}
                  </span>
                </Button>
              </form>
            </div>
          </nav>
          {/* POLICY */}
          <hr className="bg-dark-gray-800 h-[1px] border-none mb-3" />
          <div className="flex justify-between text-dark-gray-800 mb-5 text-[10px] min-[550px]:flex-row flex-col">
            <div>{FOOTER_COPYRIGHT}</div>
            <div className="flex last-of-type:[&>a]:pr-0 last-of-type:[&>div]:hidden min-[550px]:flex-row flex-col">
              {POLICY_LINKS.map((link) => (
                <PolicyLink key={link} link={link} />
              ))}
            </div>
          </div>
        </footer>
      </BasicWidthContainer>
    </div>
  );
}
