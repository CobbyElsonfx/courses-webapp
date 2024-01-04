import learnSVG from '../../assets/learn.png';

// Resuable Hero component for the page
const Hero = () => {
  return (
    <div className="md:mx-[3rem] flex flex-col">
      {/* grid layout for main content */}
      <div className="my-auto mb-8 mt-12 w-full grid-cols-1 justify-center md:flex md:gap-1 lg:grid lg:grid-cols-2">
        <div className="col-span-1 flex flex-col justify-center text-center md:w-3/5 lg:w-full lg:justify-center lg:text-left">
          {/* header for the entire section */}
          <div className="mb-4 flex items-center justify-center lg:justify-start">
            <h4 className="ml-2 text-sm font-bold tracking-widest text-primary">
              LANGUAGE LEARNING PLATFORM
            </h4>
          </div>
          {/*  title */}
          <h1 className="mb-6 text-4xl font-extrabold leading-tight text-dark-grey-900 lg:text-5xl xl:w-11/12 xl:text-6xl">
            Explore Language Courses <br /> with <span className='text-primary'>Zoni</span>  Learning Hub
          </h1>
          {/* main description text */}
          <p className="mb-8 text-base px-3 font-medium leading-7 text-dark-grey-600 xl:w-3/4">
            Unlock the world of languages with Zoni Learning Hub! Dive into our comprehensive
            language courses, explore interactive modules, and accelerate your language skills
            with ease.
          </p>
          {/*  buttons  */}
          <div className="flex flex-col items-center lg:flex-row">
            <button className="flex items-center rounded-xl bg-purple-blue-500 px-5 py-4 text-sm font-medium text-white transition hover:bg-purple-blue-600 focus:bg-purple-blue-700">
              Explore Courses
            </button>
            <button className="flex items-center rounded-xl px-5 py-4 mt-4 lg:mt-0 text-sm font-medium text-dark-grey-900">
              <img className="mr-2 h-6" src={learnSVG} alt="book icon" />
              Book a free language Learning session
            </button>
          </div>
        </div>
        {/* Right column for the image  (hidden on smaller screens) */}
        <div className="col-span-1 hidden items-center justify-start md:mr-3 lg:flex">
          <img className="w-4/5 rounded-2xl" src={learnSVG} alt="header image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
