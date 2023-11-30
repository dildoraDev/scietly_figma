import { Faq, Footer, Hero, Know, Navbar, Partners, Platform, Services, Socielity, Subscribe, Testimonial, Trusted } from "../../components/pages/home-components";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Trusted />
      <Services />
      <Socielity />
      <Testimonial />
      <Know />
      <Faq />
      <Platform />
      <Subscribe />
      {/* <Partners /> */}
    </div>
  );
};
