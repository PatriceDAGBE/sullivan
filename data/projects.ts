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
  keyResults?: {
    label: string;
    description: string;
  }[];
  wireframesImages?: string[];
  prototypeImages?: string[];
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
    prototypeImages: ["/ressourses/medi_reminder_prototype.png"],
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
    background: "",
    challenge: "",
    keyFindings: [],
    keyResults: [],
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
    background: "",
    challenge: "",
    keyFindings: [],
    keyResults: [],
  },
];