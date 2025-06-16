import BlockWrapper from "./components/block.js";


// Component 1 -- IntroSection
function IntroBlock() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center">
      {/* Text Section */}
      <div className="max-w-xl text-center md:text-left mb-8 md:mb-0">
        <p className="primary-gray-700 text-xl mb-2">Hello, It’s Annie Lin</p>
        <h1 className="text-6xl font-medium mb-4">
          I’m <span className="text-primary-main font-bold">UI UX Designer</span>
        </h1>
        <p className="primary-gray-700 text-xl">
          My career goal is to make a meaningful impact on the world through UI/UX design.
        </p>
      </div>

      {/* Avatar Section */}
      <div className="w-60 h-60">
        <img
          src="./image/profile-pic.png"
          alt="Annie Lin"
          width={240}
          height={240}
          className="rounded-lg object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
// Component 2 -- SkillsBubble
const skillItems = [
  { name: "Figma", icon: "figma", level: "Advanced"},
  { name: "Sketch", icon: "sketch", level: "Advanced" },
  { name: "Adobe XD", icon: "xd", level: "Advanced" },
  { name: "Axure", icon: "axure", level: "Advanced" },
  { name: "Illustrator", icon: "ai", level: "Advanced" },
  { name: "Photoshop", icon: "ps", level: "Intermediate" },
  { name: "HTML 5", icon: "html5", level: "Advanced" },
  { name: "React", icon: "react", level: "Advanced" },
  { name: "Javascript", icon: "js", level: "Intermediate" },
  { name: "Jquery", icon: "jquery", level: "Advanced" },
  { name: "CSS", icon: "css3", level: "Advanced" },
  { name: "SASS", icon: "sass", level: "Advanced" },
  { name: "Tailwind CSS", icon: "tailwindcss", level: "Intermediate" },
  { name: "Bootstrap", icon: "bootstrap4", level: "Advanced" },
  { name: "GitLab", icon: "gitlab", level: "Intermediate" },
  { name: "GitHub", icon: "github", level: "Advanced" },
  { name: "Git", icon: "git", level: "Advanced" },
  { name: "MySQL", icon: "mysql", level: "Advanced" },
  { name: "VS Code", icon: "vscode", level: "Advanced" },
  { name: "Final Cut Pro", icon: "finalcutpro", level: "Advanced" },
];
export function SkillBlock() {
  return (
    <section className="">
      <h2 className="primary-gray-700 text-2xl font-regular mb-6">SKILLS</h2>
      <div className="flex flex-wrap gap-4">
        {skillItems.map((skillItem) => (
          <div
            key={skillItem.name}
            className="relative group p-[20px] py-3 border border-primary-gray-200 rounded-full text-base font-medium text-primary-gray-700 tracking-[0.72px] flex items-center justify-center"
          >
            {/* Tooltip */}
            <span
              className="absolute left-1/2 translate-x-[-50%] bottom-full translate-y-[2px] px-2 py-1 text-xs font-semibold text-primary-gray-0 bg-primary-main
                         opacity-0 group-hover:opacity-100 transition-transform duration-200"
            >
              {skillItem.level}
            </span>

            {/* Icon + Name */}
            <img
             src={`./image/skill-icon/${skillItem.icon}.svg`}
             alt={skillItem.name}
             className="mr-3 w-6 h-6"
            />
            {skillItem.name}
          </div>
        ))}
      </div>
    </section>
  );
}

// Component 3 -- About Me
export function AboutMeBlock() {
    const traits = [
      {
        traitIcon: "people",
        traitTitle: "Bridging Teams",
        description:
          "Strong in cross-functional communication, aligning design, product, and engineering teams efficiently.",
      },
      {
        traitIcon: "setting",
        traitTitle: "Engineering Mindset",
        description:
          "Approaches design with structured logic and a focus on practical problem-solving.",
      },
      {
        traitIcon: "flash",
        traitTitle: "Self-Starter",
        description:
          "Independently acquired front-end skills and applied them proactively in past projects.",
      },
      {
        traitIcon: "eye",
        traitTitle: "Detail-Oriented",
        description:
          "Catches missing elements others may miss, enhancing the clarity and completeness of each project.",
      },
      {
        traitIcon: "book",
        traitTitle: "Adaptable Learner",
        description:
          "Quick to absorb new tools and ideas, and flexible in fast-changing environments.",
      },
      {
        traitIcon: "global",
        traitTitle: "Global Perspective",
        description:
          "With multilingual skills and studying abroad experience, supports effective communication across cultures.",
      },
      {
        traitIcon: "medal-star",
        traitTitle: "Disciplined Excellence",
        description:
          "Highly disciplined with excellent self-management, ensuring consistent performance under pressure.",
      },
      {
        traitIcon: "colors-square",
        traitTitle: "Aesthetic Vision",
        description:
          "Maintains a high design standard with a strong eye for visual harmony and consistency.",
      },
    ];
  
    return (
      <section className="mt-16">
        <h2 className="primary-gray-700 text-2xl font-regular mb-6">ABOUT ME</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {traits.map(({ traitIcon, traitTitle, description }, index) => (
            <div key={index} className="flex gap-4 items-start">
              <img
             src={`./image/trait-icon/${traitIcon}.svg`}
             alt={traitTitle}
             className="mr-3"
            />
              <div>
                <h3 className="text-primary-gray-700 text-base font-semibold">{traitTitle}:</h3>
                <p className="text-primary-gray-500 text-base font-extralight leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  const experiences = [
    {
      companyLogo: "Fundswap", 
      companyName: "好好證券 Fundswap",
      position: "Web Designer, UI UX Designer",
      date: "Nov, 2024 – May, 2025",
      jobDescription: [
        "Apply the design files to the website via WordPress.",
        "Develop wireframes, mockups, and prototypes to illustrate design concepts and flows.",
        "Collaborate with product managers, developers, and other stakeholders to define design requirements and ensure alignment with project goals.",
        "Ensure designs are responsive, accessible, and optimized for multiple devices and screen sizes.",
        "Create marketing images to be used in advertisements or on Facebook.",
      ],
    },
    {
      companyLogo: "BlockChain Security",
      companyName: "區塊科技 BlockChain Security",
      position: "UI UX Designer",
      date: "Apr, 2022 – Jun, 2024",
      jobDescription: [
        "Participate in early project discussions, sketched wireframes with PM, and created mid-fidelity wireframes.",
        "Create UI flows to ensure smooth transitions, clear logic, and a seamless user experience.",
        "Use Figma to design for various platforms (Web, App, Chrome extension), following system guidelines.",
        "Ensure designs are responsive, accessible, and optimized for multiple devices and screen sizes.",
        "Update the images used on Facebook, and adjust the brand mascot’s actions according to the post content.",
      ],
    },
  ];
  
  export function ExperienceBlock() {
    return (
      <section className="mt-16">
        <h2 className="primary-gray-700 text-2xl font-regular mb-6">EXPERIENCE</h2>
        <div className="border-l border-primary-gray-200 pl-6 space-y-10">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-6">
              {/* Timeline circle */}
              <div className="absolute -left-[36px] top-1.5 w-[22px] h-[30px] bg-white border-1 border-primary-gray-200 rounded-full" />
  
              {/* Content */}
              <div className="flex items-center gap-3 mb-2">
                <img
                  src={`./image/company-icon/${exp.companyLogo}.svg`}
                  alt={exp.companyLogo}
                  className="w-6 h-6 object-contain mt-1"
                />
                <h3 className="text-2xl font-semibold text-gray-900">
                  <span className="font-bold">{exp.companyName}</span>
                </h3>
              </div>
  
              <p className="text-primary-gray-700 text-base font-semibold mb-3">{exp.position}</p>
              <p className="text-primary-gray-400 text-base font-normal mb-3">{exp.date}</p>
  
              <ol className="list-decimal pl-5 space-y-1 text-primary-gray-700 text-base font-medium leading-relaxed">
                {exp.jobDescription.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  const projects = [
    {
      type: "PORTFOLIO 2021 - 2025",
      title: "UI UX Design",
      subtitle: "PROJECT TILL 2025",
      image: "/image/portfolio-cover/portfolio-cover.png", // 請放在 public 資料夾
      buttonText: "See Full Project",
      link: "#", // 可以連到詳細作品頁
    },
    {
      type: "SIDE PROJECT",
      title: "TRAVAIL",
      subtitle: "個人與多人工作空間租借平台",
      tags: "UX, UI, UR, Branding",
      image: "/image/portfolio-cover/travail.png",
      buttonText: "See Full Project",
      link: "#",
    },
  ];




// main function（Home）
export default function Home() {
  return (
    <div className="bg-white max-w-5xl mx-auto px-4">
      <BlockWrapper>
        <IntroBlock />
      </BlockWrapper>
      <BlockWrapper>
        <SkillBlock />
      </BlockWrapper>
      <BlockWrapper>
        <AboutMeBlock />
      </BlockWrapper>
      <BlockWrapper>
        <ExperienceBlock />
      </BlockWrapper>
    </div>
  );
}

