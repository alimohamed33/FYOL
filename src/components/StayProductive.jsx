function StayProductive() {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-[30px] place-items-center">
        <div>
          <img
            src="/src/assets/images/illustration-stay-productive.png"
            alt="stay-productive-img"
          />
        </div>
        <div className="text-white">
          <h3 className="font-medium text-[35px] leading-[50px]">
            stay productive,
            <br />
            wherever you are
          </h3>
          <div className="my-[15px] font-normal text-sm tracking-[0.8px]">
            <p className="mb-[15px]">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your fil storage needs.
            </p>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
          </div>
          <a
            href="/"
            className="text-primaryColor border-b border-primaryColor border-solid pb-[5px] flex items-center gap-[15px] w-fit hover:text-[#42b0d1] transition-colors duration-200"
          >
            see how Fylo works
            <img src="/src/assets/images/icon-arrow.svg" alt="arrow-img" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default StayProductive;
