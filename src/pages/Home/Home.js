import React from "react";
import HighlightsSection from "../../components/Highlights/Highlights.js";
import TestimonialSection from "../../components/Testimonial/TestimonialSection.js";
import AboutSection from "../../components/about/About.js";

export default function Home() {
  return (
    <>
      <HighlightsSection></HighlightsSection>
      <TestimonialSection></TestimonialSection>
      <AboutSection></AboutSection>
    </>
  );
}