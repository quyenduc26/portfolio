import { Project } from ".";

import NextIcon from "../../assets/next.svg";
import GithubIcon from "../../assets/github.svg";
import TailwindIcon from "../../assets/tailwind.svg";
import NestJsIcon from "../../assets/nest.svg";
import LaravelIcon from "../../assets/laravel.svg"
import VueIcon from "../../assets/vue.svg"
import MysqlIcon from "../../assets/mysql.svg"
import MongoIcon from "../../assets/mongo.svg"
// import JavaIcon from "../../assets/java.svg"
import SpringBootIcon from "../../assets/springboot.svg"
import ReactJsIcon from "../../assets/react.svg"
import GoogleIcon from "../../assets/google.svg"
import NodeJsIcon from "../../assets/nodejs.svg"
import ExpressJsIcon from "../../assets/expressjs.svg"
import TanStackIcon from "../../assets/tanstack.svg"
import TypeScriptIcon from "../../assets/typescript.svg"
import GeminiIcon from "../../assets/gemini.svg"
import PythonIcon from "../../assets/python.svg";
import LangchainIcon from "../../assets/langchain.svg";
import PydanticIcon from "../../assets/pydantic.svg";
import FastAPIIcon from "../../assets/fastapi.svg";
import QdrantIcon from "../../assets/qdrant.svg";
import WebSocketIcon from "../../assets/websocket.svg";
import HandleBarIcon from "../../assets/handlebar.svg";


export const projects: Project[] = [
  {
    title: "Document Analysis AI Agent",
    description:
      "An AI agent can save the time for analyzing document, sematically understanding and generating the draft content for question. Supporting the back and force conversations and refactoring output to enhance the quality of the answer.",
    features: [
      "Document ingestion and content extraction",
      "Semantic search and retrieval",
      "Generating draft content based on user questions",
      "Back-and-forth conversation support, contextual understanding",
      "Conversation and document history management",
    ],
    image:
      "https://res.cloudinary.com/dpnbddror/image/upload/v1685812969/bg_main_df77us.jpg",
    link: "https://maskani-app.vercel.app",
    technologies: [
      {
        svg: PythonIcon,
        text: "Laravel",
      },
      {
        svg: LangchainIcon,
        text: "Langchain",
      },
      {
        svg: PydanticIcon,
        text: "PydanticAI",
      },
       {
        svg: FastAPIIcon,
        text: "FastAPI",
      },
       {
        svg: QdrantIcon,
        text: "Qdrant DB",
      },
    ],
    status: "Completed",
  },
  {
    title: "Ballup",
    description:
      "A website support sport enthusiasts in booking, finding player, building a team and beating with others.",
    features: [
      "Booking and managing sports facilities",
      "Finding and joining sports teams",
      "Creating open matches and inviting players",
      "Real-time notifications for team, schedule updates"
    ],
    image:
      "https://res.cloudinary.com/dpnbddror/image/upload/v1685812969/bg_main_df77us.jpg",
    link: "https://maskani-app.vercel.app",
    technologies: [
      {
        svg: SpringBootIcon,
        text: "Spring Boot",
      },
      {
        svg: NextIcon,
        text: "Next.js",
      },
      {
        svg: TypeScriptIcon,
        text: "TypeScript",
      },
      {
        svg: WebSocketIcon,
        text: "WebSocket",
      },
      {
        svg: TailwindIcon,
        text: "Tailwind CSS",
      },
    ],
    status: "Completed",
  },
  {
    title: "Personel AI Agent",
    description:
      "A AI-powered personel management system. From the basic information about employees, projects, tasks and  to the advanced features like AI agent for answering questions, generating reports, and providing insights.",
    features: [
      "Employee information management",
      "Project and task tracking",
      "AI agent for answering HR-related questions",
      "Report generation and analytics",
    ],
    image:
      "https://res.cloudinary.com/dpnbddror/image/upload/v1685812969/bg_main_df77us.jpg",
    link: "https://maskani-app.vercel.app",
    technologies: [
      {
        svg: LaravelIcon,
        text: "Laravel",
      },
      {
        svg: TailwindIcon,
        text: "Tailwind CSS",
      },
      {
        svg: MysqlIcon,
        text: "MySQL",
      },
    ],
    status: "Completed",
  },
  {
    title: "Techgear",
    description:
      "Built for businesses. The product streamlines device facilities and computer services, tracking inventory, delivery, and quality while providing alerts for service expirations.",
    features: [
      "Manage the facilities in person, stock of company",
      "Manage computer service and expirations",
      "Support scan QR and print label for each device",
      "Announcement for service expirations",
      "Support create checklists and status",
    ],
    image:
      "https://res.cloudinary.com/dpnbddror/image/upload/v1699979124/liplan/Screenshot_from_2023-11-14_19-25-16_znvvkv.png",
    link: "https://navu360.com",
    technologies: [
      {
        svg: SpringBootIcon,
        text: "Spring Boot",
      },
      {
        svg: VueIcon,
        text: "VueJs",
      },
      {
        svg: TailwindIcon,
        text: "Tailwind CSS",
      },
      {
        svg: MysqlIcon,
        text: "MySQL",
      },
      {
        svg: GeminiIcon,
        text: "Gemeni APIs",
      },
    ],
    status: "Active",
  },
  {
    title: "Green River-Lake",
    description:
      "A website is used to monitor the health of aquatic ecosystems in Da Nang city using an integrated toolset. Manage the latest news and store data on the health metrics of ecosystems in rivers and lakes within Da Nang city",
    features: [
      "Identify and manage river and lake areas through Google Maps integration",
      "Import data for the water quality indicators from an Excel file. ",
      "Calculate and illusrate into graph",
      "Support campaing creating and gather user feedbacks",
      "Responsive design for mobile and desktop",
    ],
    image:
      "https://res.cloudinary.com/dpnbddror/image/upload/v1699979294/liplan/Screenshot_from_2023-11-14_19-28-02_vkrzfv.png",
    link: "https://karent.app/welcome",
    technologies: [
      {
        svg: LaravelIcon,
        text: "Laravel",
      },
      {
        svg: VueIcon,
        text: "VueJS",
      },
      {
        svg: TailwindIcon,
        text: "Tailwind CSS",
      },
      {
        svg: MysqlIcon,
        text: "MySQL",
      },
    ],
    status: "On Hold",
  },
  {
    title: "Open Universe",
    description:
      "A social media platform that connects users with features like creating posts, interacting, making friends, and messaging.",
    features: [
      "Secure User Authentication and Authorization",
      "Real-time chatting",
      "Enhancing user experience through a crafted single-page website.",
      "Integration with RESTful API",
      "Optimizing data management with relational and non-relational databases",
      "Responsive Design for Mobile and Desktop",
    ],
    image:
      "https://res.cloudinary.com/dpnbddror/image/upload/v1683393573/liplan/paint_water_liquid_85058_1280x800_r9fa2d.jpg",
    link: "https://courierpal.vercel.app/",
    technologies: [
      {
        svg: NestJsIcon,
        text: "Nest JS",
      },
      {
        svg: ReactJsIcon,
        text: "React JS",
      },
      {
        svg: TanStackIcon,
        text: "TanStack Query",
      },
      {
        svg: TypeScriptIcon,
        text: "TypeScript",
      },
      {
        svg: MongoIcon,
        text: "MongoDB",
      },
      {
        svg: MysqlIcon,
        text: "MySQL",
      },
    ],
    status: "Completed",
  },
  {
    title: "HappyMinds",
    description:
      "A product that supports fitness training by analyzing body metrics, offering effective workout methods and dietary recommendations.",
    features: [
      "Calculate BMI index based on the user informations",
      "Analyzing and visualizing user workout data through detailed charts",
      "Recommend exercise courses and diet to enhance training progress",
      "Creating a blog with interactive user features such as likes, comments, and shares",
      "Integrating login functionality with Google"
    ],
    image:
      "https://res.cloudinary.com/dpnbddror/image/upload/v1685812969/bg_main_df77us.jpg",
    link: "https://maskani-app.vercel.app",
    technologies: [
      {
        svg: NodeJsIcon,
        text: "NodeJs",
      },
      {
        svg: ExpressJsIcon,
        text: "ExpressJs",
      },
      {
        svg: HandleBarIcon,
        text: "Handlebars",
      },
      {
        svg: MongoIcon,
        text: "MongoDB",
      },
      {
        svg: GoogleIcon,
        text: "Google API",
      },
    ],
    status: "Completed",
  },
  {
    title: "Github Finder",
    description: "A web application that allows users to search for GitHub profiles, repositories, and organizations with ease.",
    features: [
      "Search GitHub profiles by username, displaying details such as followers, and repositories",
      "Detailed repository view including description, issues, pull requests, and branches",
      "Ability to follow GitHub users directly from the platform",
      "Pagination for easy navigation through search results",
      "Responsive and intuitive user interface, optimized for both desktop and mobile",
      "Integrated with GitHub API for real-time data fetching and updates",
    ],
    image:
      "https://res.cloudinary.com/dpnbddror/image/upload/v1685812969/bg_main_df77us.jpg",
    link: "https://maskani-app.vercel.app",
    technologies: [
      {
        svg: ReactJsIcon,
        text: "React JS",
      },
      {
        svg: TailwindIcon,
        text: "Tailwind CSS",
      },
      {
        svg: GithubIcon,
        text: "Github APIs",
      },
    ],
    status: "Completed",
  },
];
