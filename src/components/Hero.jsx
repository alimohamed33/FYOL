function Hero() {
  return (
    <section className="container mx-auto">
      <div className="max-w-[750px]">
        <img
          src="/src/assets/images/illustration-intro.png"
          alt="Landing img"
          className="w-full h-fit"
        />
      </div>
      <div className="text-white text-center">
        <h1 className="text-[30px] md:text-[40px] font-semibold mb-[15px]">
          All your files in one secure location, <br />
          accessible anywhere.
        </h1>
        <p className="font-normal text-lg px-[15px] md:max-w-[600px] mx-auto">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
      </div>
    </section>
  );
}

export default Hero;
