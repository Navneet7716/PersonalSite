import NameTyper from "@/components/NameTyper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Navneet Singh",
  description: `I am a full-stack software engineer at BeingZero (yes that's a
    real company google it.), I like to learn/experiment with new
    technologies and love working on new projects that challenge my
    skills and knowledge. And also I love to talk about tech, I mean I
    am a software engineer so.. that is kind off a given isn't it..`,
};

export default function Home() {
  const projects = [
    {
      title: "MP Hand Cricket 🏏",
      description: `An online multiplayer hand cricket game website, If you don't know what is hand cricket I feel sorry for your childhood.`,
      githubLink: "",
      liveLink: "",
      techStack:
        "React.js & React Native, Node.js (Express), WebSockets, MYSql.",
    },
    {
      title: "Code Compiler 👨🏻‍💻",
      description: `An online
      <code>code</code> compiler, with multi language support and also support for custom
      inputs.`,
      githubLink: "https://github.com/Navneet7716/Compiler2.0",
      liveLink: "https://github.com/Navneet7716/Compiler2.0",
      techStack: "React.js, Node.js (Express), AWS.",
    },
    {
      title: "Jobbers 🏃🏻",
      description: `An online job hunting site, aab koi berozgaar nai rahega (jk, if government can say all this then why can't I)`,
      githubLink: "https://github.com/Navneet7716/sdp3",
      liveLink: "https://github.com/Navneet7716/sdp3",
      techStack: "React.js, Spring Boot, PostgreSQL.",
    },
    {
      title: "Realtors 🏡",
      description: `An online real-estate searching portal, paise bhale na ho tumhare pass but dekh ke khus ho sakte ho tum.`,
      githubLink: "https://github.com/Navneet7716/realtor-webapp",
      liveLink: "https://github.com/Navneet7716/realtor-webapp",
      techStack: "Angular, Node.js (Express), MongoDB.",
    },
  ];

  return (
    <>
      <div className="flex justify-center items-center min-h-64 flex-col">
        <h1 className="pt-10 mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 sm:text-5xl md:text-5xl lg:text-6xl dark:text-white">
          Hi 👋 I’m <NameTyper />
        </h1>
        <div className="lg:w-1/2 w-full bg-slate-900 p-5 mt-4">
          <p>
            I am a full-stack software engineer at BeingZero (yes that&#39;s a
            real company google it.), I like to learn/experiment with new
            technologies and love working on new projects that challenge my
            skills and knowledge. And also I love to talk about tech, I mean I
            am a software engineer so.. that is kind off a given isn&#39;t it..
          </p>
          <br />
          <p>🎓 CS @ KL University: B.Tech</p>
          <p>💻 Prev. @NEGD @BeingZero @ShortCast</p>
          <p>
            📍Lived in Hyderabad (currently), Vijayawada, Mau, Ranchi, Patna.
          </p>
          <p>🌎 Speaks English, Hindi.</p>
          <p>
            ⚙️ Tech Stack - React.js, Node.js, Django, MongoDB, MySQL,
            PostgreSQL, AWS
          </p>
          <p>
            👨‍💻 Languages - JavaScript, Java, C++, Python (jk python is not a
            real language)
          </p>
        </div>
      </div>
      <div className="flex gap-1 items-center pt-10 justify-center">
        <span className="text-center underline text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-bold">
          Projects
        </span>
        <svg
          width="40px"
          height="40px"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          fill="none"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        >
          <rect height="10.5" width="12.5" y="2.75" x="1.75" />
          <path d="m8.75 10.25h2.5m-6.5-4.5 2.5 2.25-2.5 2.25" />
        </svg>
      </div>

      <section className="py-10 flex gap-6 flex-col lg:flex-row md:flex-row">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="w-full border-2 p-3 flex flex-col hover:bg-green-950 hover:scale-105 transition"
            >
              <div className="flex items-center">
                <h1 className="text-lg font-bold">{project.title}</h1>{" "}
                <div className="flex flex-1 justify-end gap-2">
                  <a
                    className="text-blue-400"
                    href={project.githubLink}
                    data-popover-target="popover-user-profile"
                  >
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
              <p className="pt-3 mt-auto">Tech Stack:- {project.techStack}</p>
            </div>
          );
        })}
      </section>
    </>
  );
}
