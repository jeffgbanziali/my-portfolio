import { RevealOnScroll } from "../RevealOnScroll";
import profileImage from "../../assets/my_profil.png";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center flex flex-row ">
          <div className="text-center  z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
              Hi, I'm Jeff GBANZIALI
            </h1>

            <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
              4th year student in Big Data and Artificial Intelligence, with a
              solid background in digital engineering. My journey has allowed
              the development of versatile skills in development web, mobile and
              software, as well as expertise in analysis and exploitation of
              massive data. I am motivated by the search for innovative
              technological solutions, model creation powerful predictions and
              optimization of business processes thanks to the power of data.
              Available to collaborate on projects with high added value.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#projects"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className=" overflow-hidden w-72 h-72 rounded-2xl text-center z-10 px-4">
            <img
              src={profileImage}
              alt="my profil"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
