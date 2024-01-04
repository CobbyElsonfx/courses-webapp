const Header = () => {
  return (
    <header>
      <div className="navbar bg-base-100 px-[4rem] shadow-lg flex items-center">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl font-bold">Zoni</a>
        </div>
        <div className="navbar-center">
          <div className="relative  flex w-full flex-wrap items-center items-stretch">
            <input
              type="search"
              className="relative m-0 block min-w-0 flex-auto rounded rounded-xl h-[2.4rem] max-w-[7rem] md:max-w-[17rem] border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.15rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
            <button className="btn btn-ghost  btn-circle  ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="navbar-end ">
          <div className="dropdown relative ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
