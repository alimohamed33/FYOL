import { useEffect, useState } from "react";

function Hero() {
  const [imageSrc, setImageSrc] = useState(
    "/src/assets/images/bg-curvy-desktop.svg"
  );

  useEffect(function () {
    if (window.innerWidth < "768") {
      setImageSrc("/src/assets/images/bg-curvy-mobile.svg");
    }
  }, []);

  return (
    <section className="bg-[#1c2230]">
      <div className="container">
        <div className="element-center flex-col pt-[200px] lg:pt-[172px]">
          <div className="max-w-[750px]">
            <img
              src="/src/assets/images/illustration-intro.png"
              alt="Landing img"
              className="w-full h-fit"
            />
          </div>
          <div className="text-white text-center my-[30px] ">
            <h1 className="text-[30px] md:text-[40px] font-semibold mb-[15px]">
              All your files in one secure location, <br />
              accessible anywhere.
            </h1>
            <p className="font-normal opacity-[0.8] text-lg md:max-w-[600px] mx-auto">
              Fylo stores all your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends
              family, and co-workers.
            </p>
          </div>

          <a
            href="/"
            className="btn element-center w-[280px] h-[60px] text-white font-medium uppercase tracking-wide	"
          >
            Get Started
          </a>
        </div>
      </div>
      <div className="w-full h-[200px]">
        <img src={imageSrc} alt="bg-img" className="w-full h-full" />
      </div>
    </section>
  );
}

export default Hero;
