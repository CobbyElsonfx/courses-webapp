import Modules from "../components/Modules";
import Footer from "../components/partials/Footer";
import Header from "../components/partials/Header";

const Home = () => {
  return (
    <div className=" flex flex-col min-h-screen">
      <div>
        <Header />
      </div>
      <section className="bg-gray-100 dark:bg-dark pb-10 pt-10 lg:pb-20 lg:pt-[40px]">
        <Modules />
      </section>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
