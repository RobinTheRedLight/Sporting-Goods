import Carousel from "../Carousel/Carousel";
import Categories from "../Categories/Categories";
import ContactUs from "../ContactUs/ContactUs";
import Featured from "../Featured/Featured";

const Home = () => {
  return (
    <>
      <Carousel />
      <Featured />
      <Categories />
      <ContactUs />
    </>
  );
};

export default Home;
