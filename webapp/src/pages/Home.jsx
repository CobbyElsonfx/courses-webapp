import Cards from "../components/Card";
import Header from "../components/partials/Header";
import Footer from "../components/partials/Footer";
import Hero from "../components/partials/Hero";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <Header />
      </div>
      <div>
        <Hero />
      </div>

      <section className="bg-gray-100 dark:bg-dark pb-10 pt-10 lg:pb-20 lg:pt-[40px]">
        <h3 className="text-3xl font-semibold mb-6 text-center relative py-6">
          Our Courses
          <span className="absolute h-1 bg-blue-500 bottom-0 left-1/2 transform -translate-x-1/2 w-20"></span>
        </h3>
        <div className="container mx-auto rounded-md p-6 bg-white dark:bg-gray-800 ">
          <div className="">
            <Cards />
          </div>
        </div>
      </section>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
