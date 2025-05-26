import AkimboImage from "../../components/assets/Akimbo.png"
import DespieghelImage from '../../components/assets/DeSpieghel.png'
import KsaRooyghemImage from "../../components/assets/KsaRooyghem.png"
import HomeCloudImage from "../../components/assets/InfoHomecloud.jpeg"

export const projects = [
  {
    title: "Akimbo",
    description:
      "Blog site for Art History student that are interested to share there view of things, review book and so on.",
    tech: ["HTML", "CSS", "React", "Firebase"],
    image: AkimboImage.src,
    link: "https://akimbo-mag.com/",
  },
  {
    title: "TaskPulse (In progress)",
    description: "Keeps your team's workflow beating with instant Discord alerts. A project to help teams have a better view on the work progress with instant discord message for pull requests and tasks changes",
    tech: ["Next.js", "Nest.js", "API", "Github"],
    image: null,
    link: null,
  },
  {
    title: "Reservation system",
    description: "A custom reservation system for a restaurant",
    tech: ["React", "Node.js", "Nest.js"],
    image: DespieghelImage.src,
    link: "https://despieghel.be/",
  },
  {
    title: "KSA Roovghem Website",
    description: "Website for my youth association, for planning activities, share news, show info and performance.",
    tech: ["React", "Node.js", "MySQL"],
    image: KsaRooyghemImage.src,
    link: "https://ksarooyghem.be/",
  },
  {
    title: "Budget app (IOS)",
    description:
      "A bugetting app made with swift and a custom backend.",
    tech: ["Swift", "API", "Nest.js"],
    image: null,
    link: "https://github.com/AlexanderCalle/BudgetAppSwift",
  },
  {
    title: "HomeCloud",
    description:
      "A web service for systems that acts as a cloud service for hosting and managing files. It ensures the privacy of data is certain and secure.",
    tech: ["React", "Node.js", "Express"],
    image: HomeCloudImage.src,
    link: "https://github.com/AlexanderCalle/HomeCloud",
  },
]