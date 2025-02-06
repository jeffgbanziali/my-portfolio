import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const programmingLanguages = [
    "JavaScript",
    "Python",
    "R",
    "Java",
    "C#",
    "PHP",
    "SQL",
    "TypeScript",
  ];

  const frontendSkills = [
    "React",
    "Vue",
    "TypeScript",
    "TailwindCSS",
    "HTML",
    "CSS",
  ];

  const backendSkills = ["Node.js", "Django", "Spring Boot", ".NET", "Symfony"];

  const databaseSkills = [
    "MySQL",
    "MongoDB",
    "PostgreSQL",
    "SQL Server",
    "Oracle DB",
  ];

  const bigDataSkills = [
    "Hadoop",
    "Spark",
    "Kafka",
    "Hive",
    "MapReduce",
    "Cloudera",
  ];

  const aiSkills = ["TensorFlow", "Keras", "PyTorch", "Scikit-learn"];

  const dataVisualizationTools = [
    "Tableau",
    "Power BI",
    "Matplotlib",
    "Seaborn",
    "D3.js",
  ];

  const mobileSkills = [
    "React Native",
    "Flutter",
    "Swift",
    "Kotlin",
    "Android Studio",
    "Xcode",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Developer specializing in the creation of scalable web solutions,
              mobile applications and the exploitation of massive data. Eager to
              conquer new challenges in Big Data and Artificial Intelligence, I
              am ready to work on projects aimed at optimizing processes and
              providing data-driven solutions, in order to help companies make
              informed decisions.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">
                  {" "}
                  Programming Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {programmingLanguages.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Mobile App</h3>
                <div className="flex flex-wrap gap-2">
                  {mobileSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">big Data </h3>
                <div className="flex flex-wrap gap-2">
                  {bigDataSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">AI </h3>
                <div className="flex flex-wrap gap-2">
                  {aiSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Visualization tools </h3>
                <div className="flex flex-wrap gap-2">
                  {dataVisualizationTools.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Database </h3>
                <div className="flex flex-wrap gap-2">
                  {databaseSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> Bachelor Engineering and Digital </strong> - Efrei
                  Paris (2021-2024)
                </li>
                <li>
                  <strong>
                    {" "}
                    Master's degree Artificial Intelligence and Big Data
                  </strong>{" "}
                  - Efrei Paris (2024-2026)
                </li>
             
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-bold">
                    {" "}
                    FullStack Developer (Internship) at FIDJI PARIS (JANUARY
                    2024 - JUNE 2024){" "}
                  </h4>
                  <p className="text-gray-400">
                    Implementation of a mobile application for the Fiji store,
                    implementation of site resources on the app and Update of
                    user data.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold">
                    {" "}
                    Web Designer (internship) at SARL LES SHIBAS (January 2022 -
                    March 2022){" "}
                  </h4>
                  <p className="text-gray-400">
                    Updating the company's website, Database Management, Added
                    new content, Risk analyzes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
