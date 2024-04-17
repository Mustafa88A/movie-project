import Navbar from "./Navbar";

function HomePage() {
  return (
    <div className=" ">
      <div>
        <div className="relative  h-96  ">
          <div className="w-full absolute top-0 md:flex md:flex-row-reverse md:justify-between">
            <div
              className=" md:w-[76%] md:h-[100vh]"
              // style={{ border: "1px solid red" }}
            >
              <img
                className=""
                src="https://4kwallpapers.com/images/walls/thumbs_3t/11504.jpg"
                alt=""
              />
            </div>
            <div className="text-[#30AC43] z-20 absolute bottom-0 px-10 md:right-[65%] md:bottom-[60%] md:text-5xl w-[30%] ">
              <h1>name the movie</h1>
              <div>
                <p>80.5</p>
                <p>2022</p>
              </div>
            </div>
          </div>
          <div
            // style={{ border: "1px solid blue" }}
            className="bg-gradient-to-t h-full  w-full absolute -top-20 md:bg-gradient-to-r from-black  md:via-black to-transparent  md:h-[100vh]"
          ></div>
        </div>
      </div>

      <div>
        <div className="relative z-10 top-[300px] ml-8">
          <h1 className="text-[#30AC43]">Popular Movies</h1>
          <a href="#" className="text-[#30AC43] ">
            more
          </a>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
