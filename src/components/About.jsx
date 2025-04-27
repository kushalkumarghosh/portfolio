const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-custom-bg bg-noise-texture text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 ">
            <p className="text-4xl font-bold inline border-b-4 border-[#87CEEB]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Kushal, nice to meet you. Please take a look around. </p>
          </div>
          <div>
            <p>
              I'm a passionate MERN Stack Developer who loves transforming ideas
              into powerful, user-focused web experiences. From designing
              dynamic front-ends with React to building robust back-end APIs
              with Node.js and Express, I bring full-stack solutions to life
              with creativity and precision. Let's turn great ideas into
              extraordinary digital realities together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
