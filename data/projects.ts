export type Project = {
  slug: string;
  title: string;
  category: string;
  image: string;
  image_big?: string;
  client?: string;
  year?: string;
  projectType?: string;
  background?: string;
  challenge?: string;
  keyFindings?: {
    label: string;
    description: string;
  }[];
  findingImages?: string[];
  findingLabels?: {
    flow?: string;   // label sous la 1ère image
    audit?: string;  // label sous la 2ème image
  };
  keyResults?: {
    label: string;
    description: string;
  }[];
  wireframesImages?: string[];
  prototypeType?: "image" | "video";
  prototypeVideo?: string; // chemin vers la vidéo
  prototypeImages?: string[];
   wireframesLabel?: string;
  prototypeLabel?: string;
};

export const projects: Project[] = [
  {
    slug: "momo",
    title: "MOMO Algorithm Reconstruction",
    category: "Reconstruction of MoMo's journey",
    image: "/ressourses/momo.png",
    image_big: "/ressourses/momo_grand.png",
    client: "MTN",
    year: "2024",
    projectType: "UX/UI",
    background: "By analyzing existing applications in Benin such as MTN MoMo, the goal was to identify inconsistencies in user flows and explore how these systems could be redesigned to improve usability.",
    challenge: "This project was developed during a workshop on algorithms and user experience at design school. The objective was to understand how algorithmic structures influence user flows in digital services.",
    keyFindings: [
      { label: "Algorithmic logic and UX", description: "Many digital services rely on algorithmic structures that are not always aligned with intuitive user behavior." },
      { label: "User flow inconsistencies", description: "Certain navigation steps created friction or unnecessary complexity in the interaction process." },
      { label: "Interaction efficiency", description: "Simplifying decision paths could significantly improve the speed and clarity of the user experience." },
    ],
    findingImages: ["/ressourses/momo_flow.png", "/ressourses/momo_audit.png"],
    keyResults: [
      { label: "Reconstructed user flows", description: "The project proposed redesigned flows that better align algorithmic logic with user expectations." },
      { label: "Improved interaction logic", description: "The interaction structure was optimized to reduce unnecessary steps." },
      { label: "UX-centered algorithm perspective", description: "The project highlighted how algorithms should support rather than complicate user experience." },
    ],
    wireframesImages: ["/ressourses/momo_wireframes.png"],
    prototypeImages: ["/ressourses/momo_prototype.png"],
    wireframesLabel: "Wireframes",
  },
  {
    slug: "medi-reminder",
    title: "Medi Reminder",
    category: "Mobile App",
    image: "/ressourses/medi_reminder.png",
    image_big: "/ressourses/medi_reminder_grand.png",
    client: "None",
    year: "2024",
    projectType: "UX/UI",
    background: "Medi Reminder is a digital health project designed to help patients remember to take their medication on time.",
    challenge: "Medication adherence is a major challenge for many patients, especially elderly individuals or people managing multiple treatments.",
    keyFindings: [
      { label: "Forgetfulness", description: "Many patients forget to take their medication regularly." },
      { label: "Lack of monitoring", description: "Caregivers often have no way to know if medication has been taken." },
      { label: "Need for simple reminders", description: "Users require clear and reliable reminder systems integrated into their daily routines." },
    ],
    findingImages: ["/ressourses/medi_reminder_flow.png"],
    keyResults: [
        { label: "Smart reminder system", description: "The application sends notifications before medication time." },
        { label: "Connected smart box", description: "If medication is not taken, the system sends a notification to a trusted contact." },
        { label: "Improved medication adherence", description: "The solution helps patients follow their treatment more consistently." },
    ],
    wireframesImages: ["/ressourses/medi_reminder_wireframes.png"],
    prototypeType: "video",
    prototypeVideo: "/ressourses/medi_reminder_demo.mov",
    wireframesLabel: "Some pages of the application",
  },
  {
    slug: "secure-box",
    title: "Secure Box from Secure Destination",
    category: "Born for locker",
    image: "/ressourses/secure_box.png",
    image_big: "/ressourses/secure_box_grand.png",
    client: "Secure Destination",
    year: "2024",
    projectType: "UX/UI",
    background: "Secure Box is a smart locker service designed to provide flexible and affordable storage solutions in Benin. The project focused on designing clear and intuitive interfaces that allow users to easily interact with the system. The goal was to create a seamless experience that minimizes cognitive load and makes the service accessible to a wide range of users.",
    challenge: "The main challenge was to design interfaces that remain simple and understandable while supporting a complete storage interaction system. The experience needed to guide users naturally through each step of the process without creating confusion or unnecessary mental effort.",
    keyFindings: [
        { label: "Cognitive load", description: "Complex interfaces can quickly overwhelm users, especially when interacting with physical systems such as smart lockers. Reducing the amount of information and simplifying actions was essential."},
        { label: "Interaction clarity", description: "Users need clear and immediate feedback when interacting with the system. Each action must be understandable and predictable to avoid hesitation."},
        { label: "Accessibility", description: "The interface had to be usable by a diverse range of users, including people unfamiliar with digital services. Simplicity and clarity were therefore central to the design process."},
    ],
    findingImages: ["/ressourses/secure_box_flow.png"],
    keyResults: [
        { label: "Intuitive interaction flow", description: "A clear interaction structure was designed to guide users smoothly through the storage process."},
        { label: "Clear visual hierarchy", description: "The interface emphasizes essential actions and information, helping users quickly understand what to do at each step."},
        { label: "Reduced cognitive effort", description: "The final design focuses on simplicity, allowing users to interact with the system easily and confidently."},
    ],
    wireframesImages: ["/ressourses/secure_box_wireframes.png"],
    wireframesLabel: "Wireframes",
  },
  {
    slug: "beyond-the-gate",
    title: "Beyond The Gate",
    category: "Immersive Experiences",
    image: "/ressourses/beyond_the_gate.png",
    image_big: "/ressourses/beyond_the_gate_grand.png",
    client: "Personal",
    year: "2024",
    projectType: "UX/UI",
    background: "Beyond the Gate is an interactive UI project that reinterprets the memorial journey of Ouidah 92. The project aims to transform historical memory into an immersive digital experience.",
    challenge: "The challenge was to design an interface capable of conveying the emotional and historical depth of the site while creating an engaging and interactive experience for visitors.",
    keyFindings: [
        { label: "Memory and interaction", description: "Traditional storytelling formats often limit how users engage with historical narratives."},
        { label: "Emotional engagement", description: "Interfaces can play a key role in creating a deeper emotional connection with historical content."},
        { label: "Interactive exploration", description: "Users engage more deeply when they can actively explore historical narratives."},
    ],
    findingImages: ["/ressourses/beyond_the_gate_flow.png", "/ressourses/beyond_the_gate_audit.png"],
    findingLabels: {
        flow: "Moodboard/DA of site",
        audit: "Historical Monuments generated with AI",
    },
    keyResults: [
        { label: "Immersive interface design", description: "An interactive UI was designed to allow users to explore the memorial journey in a dynamic way."},
        { label: "Enhanced storytelling", description: "The project transforms historical memory into an engaging digital narrative."},
        { label: "International exhibition", description: "The project will be presented at the São Paulo Biennale in Brazil."},
    ],
    prototypeType: "video",
    prototypeVideo: "/ressourses/beyond_the_gate_demo.mov",
  },
];