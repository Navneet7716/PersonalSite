export default function Home() {
  const projects = [
    {
      title: "MP Hand Cricket 🏏",
      description: `An online multiplayer hand cricket game website, If you don't know what is hand cricket I feel sorry for your childhood.`,
      githubLink: "",
      liveLink: "",
    },
    {
      title: "Code Compiler 👨🏻‍💻",
      description: `An online
      <code>code</code> compiler, with multi language support and also support for custom
      inputs.`,
      githubLink: "",
      liveLink: "",
    },
    {
      title: "Jobbers 🏃🏻",
      description: `An online job hunting site, aab koi berozgaar nai rahega (jk, if government can say all this then why can't I)`,
      githubLink: "",
      liveLink: "",
    },
    {
      title: "Realtors 🏡",
      description: `An online real-estate searching portal, paise bhale na ho tumhare pass but dekh ke khus ho sakte ho tum.`,
      githubLink: "",
      liveLink: "",
    },
  ];

  return (
    <>
      <div className="flex justify-center items-center min-h-64 flex-col">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 sm:text-5xl md:text-5xl lg:text-6xl dark:text-white">
          Hi 👋 I’m Navneet!
        </h1>
        <div className="w-1/2">
          <p>I am a full-stack software engineer at BeingZero (yes that&#39;s a real company google it.), 
            I like to learn/experiment with new technologies and love working on new projects that challenge my skills and knowledge. 
            And also I love to talk about tech, 
            I mean I am a software engineer so.. that is kind off a given isn&#39;t it..</p>
        </div>
      </div>
      <h2 className="text-center text-4xl font-bold">Projects</h2>

      <section className="pt-10 flex gap-6 flex-col lg:flex-row md:flex-row">
        {projects.map((project, index) => {
          return (
            <div key={index} className="w-full border-2 h-auto p-3">
              <div className="flex items-center gap-4">
                <h1 className="text-lg font-bold">{project.title}</h1>{" "}
                <div>
                  <a className="text-blue-400" href={project.githubLink}>
                    Github
                  </a>{" "}
                  |{" "}
                  <a className="text-blue-400" href={project.liveLink}>
                    Live
                  </a>
                </div>
              </div>
              <p
                className="prose"
                dangerouslySetInnerHTML={{ __html: project.description }}
              />
            </div>
          );
        })}
      </section>
    </>
  );
}
