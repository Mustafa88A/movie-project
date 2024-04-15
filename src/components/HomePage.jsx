import Navbar from "./Navbar";

function HomePage() {
  return (
    <>
      <div className="relative h-96 md:h-auto">
        {/* <Navbar /> */}
        {/* <div id="head" className="flex  h-[50vh] bg-white">
        <div className="absolute">
          <img
          className="w-[100%]"
            src="https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg"
            alt=""
            />
        </div>
        <div className="absolute top-1/4">
          <h1>name the movie</h1>
          <div>
          <div>80.5</div>
          <div>2022</div>
          </div>
          </div>
        </div> */}
        <div className="w-full absolute top-0 md:flex md:flex-row-reverse md:justify-between">
          <div className=" md:w-1/2 md:h-[100vh]">
            <img
              className=""
              src="https://4kwallpapers.com/images/walls/thumbs_3t/11504.jpg"
              alt=""
            />
          </div>
          <div className="text-white z-20 absolute bottom-0 px-10">
            <h1>name the movie</h1>
            <div>
              <p>80.5</p>
              <p>2022</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-t h-full  w-full absolute -top-20 md:bg-gradient-to-r from-black  md:via-black to-transparent  md:h-[100vh]"></div>

        {/* <div id="popular ">
        <div className="flex gap-5 m-4">
        <h1>Popular Movies</h1>
        <a
        href="#"
        className="text-[#30AC43] relative transition-all-ease-out"
        >
        more
        </a>
        </div>
      </div> */}
      </div>
      <div></div>
    </>
  );
}
export default HomePage;
