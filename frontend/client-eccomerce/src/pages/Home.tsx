import { AnimateOnScroll } from "@/components/common/AnimateOnScroll";
import { HeroSection } from "@/components/home/HeroSection";
import { TopFavourites } from "@/components/home/TopFavourites";
import { WhyFashionCart } from "@/components/home/WhyFashionCart";
import { CategorySection } from "@/components/home/CategorySection";
import { OffersSection } from "@/components/home/OffersSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { SubscribeSection } from "@/components/home/SubscribeSection";
import { FAQSection } from "@/components/home/FAQSection";
// import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <>
    <div className="min-h-full">
       <AnimateOnScroll><HeroSection /></AnimateOnScroll>
      <AnimateOnScroll delay={0.1}><WhyFashionCart /></AnimateOnScroll>
      <AnimateOnScroll delay={0.2}><OffersSection /></AnimateOnScroll>
      <AnimateOnScroll delay={0.3}><TopFavourites /></AnimateOnScroll>
      <AnimateOnScroll delay={0.4}><TestimonialsSection /></AnimateOnScroll>
      <AnimateOnScroll delay={0.5}><CategorySection /></AnimateOnScroll>
      <AnimateOnScroll delay={0.6}><SubscribeSection /></AnimateOnScroll>
      <AnimateOnScroll delay={0.7}><FAQSection /></AnimateOnScroll>
    </div>
    </>
  );
};

export default Home;
