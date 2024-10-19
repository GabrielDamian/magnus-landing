import Footer from "@/components/Footer/Footer_1/Footer";
import Section0 from "@/components/Sections/Section0/Section0";
import Section1 from "@/components/Sections/Section1/Section1";
import Section2 from "@/components/Sections/Section2/Section2";
import Section3 from "@/components/Sections/Section3/Section3";
import Section4 from "@/components/Sections/Section4/Section4";
import Section5 from "@/components/Sections/Section5/Section5";
import Section6 from "@/components/Sections/Section6/Section6";
import Section7 from "@/components/Sections/Section7/Section7";
import FadeInSection from "@/saturn/FadeInSection";
import React from "react";

const RootPage = ({ src }) => {
  console.log("index:", src);
  return (
    <div>
      <FadeInSection delay={1}>
        <Section0 />
      </FadeInSection>
      <FadeInSection>
        <Section1 />
      </FadeInSection>

      <FadeInSection>
        <Section7 />
      </FadeInSection>

      <FadeInSection>
        <Section2 />
      </FadeInSection>
      <FadeInSection>
        <Section3 />
      </FadeInSection>
      <FadeInSection>
        <Section4 />
      </FadeInSection>

      <FadeInSection>
        <Section5 />
      </FadeInSection>

      <FadeInSection>
        <Section6 />
      </FadeInSection>

      <Footer />
    </div>
  );
};

export default RootPage;
