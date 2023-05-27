import { useParams } from "react-router-dom";

const designData = [
  {
    id: 1,
    name: "web design",
    title:
      "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
    projects: [
      {
        id: 1,
        name: "express",
        image: "/assets/web-design/desktop/image-express.jpg",
        text: "A multi-carrier shipping website for ecoomerce businesses",
      },
      {
        id: 2,
        name: "transfer",
        image: "/assets/web-design/desktop/image-transfer.jpg",
        text: "Site for low-cost money transfers and sending money withing seconds",
      },
      {
        id: 3,
        name: "photon",
        image: "/assets/web-design/desktop/image-photon.jpg",
        text: "A state-of-the-art music player with high-resolution audio and DSP effects",
      },
      {
        id: 4,
        name: "builder",
        image: "/assets/web-design/desktop/image-builder.jpg",
        text: "Connects users with local contractors based on their location",
      },
      {
        id: 5,
        name: "blogr",
        image: "/assets/web-design/desktop/image-blogr.jpg",
        text: "Blogr is a platform for creating an online blog or publication",
      },
      {
        id: 6,
        name: "camp",
        image: "/assets/web-design/desktop/image-camp.jpg",
        text: "Get expert training in coding, data, design, and digital marketing",
      },
    ],
  },
  {
    id: 2,
    name: "app design",
    title:
      "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.",
    projects: [
      {
        id: 1,
        name: "airfilter",
        image: "/assets/app-design/desktop/image-airfilter.jpg",
        text: "Solving the problem of poor indoor air quality by filtering the air",
      },
      {
        id: 2,
        name: "eyecam",
        image: "/assets/app-design/desktop/image-eyecam.jpg",
        text: "Product that lets you edit your favorite photos and videos at any time",
      },
      {
        id: 3,
        name: "faceit",
        image: "/assets/app-design/desktop/image-faceit.jpg",
        text: "Get to meet your favorite internet superstar with the faceit app",
      },
      {
        id: 4,
        name: "todo",
        image: "/assets/app-design/desktop/image-todo.jpg",
        text: "A todo app that features cloud sync with light and dark mode",
      },
      {
        id: 5,
        name: "loopstudios",
        image: "/assets/app-design/desktop/image-loopstudios.jpg",
        text: "A VR experience app made for Loopstudios",
      },
    ],
  },
  {
    id: 3,
    name: "graphic design",
    title:
      "We deliver eye-catching branding materials that are tailored to meet your business objectives.",
    projects: [
      {
        id: 1,
        name: "tim brown",
        image: "/assets/graphic-design/desktop/image-change.jpg",
        text: "A book cover designed for Tim Brown’s new release, ‘Change’",
      },
      {
        id: 2,
        name: "boxed water",
        image: "/assets/graphic-design/desktop/image-boxed-water.jpg",
        text: "A simple packaging concept made for Boxed Water",
      },
      {
        id: 3,
        name: "science!",
        image: "/assets/graphic-design/desktop/image-science.jpg",
        text: "A poster made in collaboration with the Federal Art Project",
      },
    ],
  },
];

function Design() {
  const { designId } = useParams();

  console.log(designId);

  return <div>Design</div>;
}

export default Design;
