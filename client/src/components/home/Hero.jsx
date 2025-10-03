function Hero() {
  return (
    <div className="bg-blue-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
        <div className="p-5 mt-20 flex-1">
          <h1 className="text-5xl font-bold text-gray-900 leading-snug">
            Work Together,<span className="text-blue-600">Samrter</span>
            <br />
            with TeamUp
          </h1>
          <p className="mt-5 text-xl text-gray-600">
            Collaborate in real-time with powerful code editing, video <br />
            chat, and workflow management. Everything your team needs <br />
            in one place.
          </p>
          <button className="mt-10 mb-10 px-6 py-3 bg-blue-500 text-white rounded-lg">
            Get Started ➞
          </button>
        </div>
        <div className="flex-1 text-center mt-10 md:mt-20">
          <img
            className="shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out rounded mx-auto"
            style={{
              height: "19rem",
              width: "19rem",
            }}
            src="/assets/heroimg.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
