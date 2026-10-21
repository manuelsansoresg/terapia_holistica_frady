import { Hero } from "@/components/sections/hero";
import { Introduction } from "@/components/sections/introduction";
import { Benefits } from "@/components/sections/benefits";
import { Session } from "@/components/sections/session";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { FinalCta } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <Benefits />
      <Session />
      <Faq />
      <Contact />
      <FinalCta />
    </>
  );
}
