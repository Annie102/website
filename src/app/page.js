// Component 1 -- IntroSection
function IntroSection() {
  return (
    <div className="flex flex-col md:flex-row justify-between">
      {/* Text Section */}
      <div className="max-w-xl text-center md:text-left mb-8 md:mb-0">
        <p className="text-gray-500 text-lg mb-2">Hello, It’s Annie Lin</p>
        <h1 className="text-4xl font-bold mb-4">
          I’m <span className="text-primary-main">UI UX Designer</span>
        </h1>
        <p className="text-gray-600 text-lg">
          My career goal is to make a meaningful impact on the world through UI/UX design.
        </p>
      </div>

      {/* Avatar Section */}
      <div className="w-60 h-60">
        <img
          src="/image/profile-pic.png"
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
  { name: "Figma", icon: "figma"},
  { name: "Sketch", icon: "sketch" },
  { name: "Adobe XD", icon: "xd" },
  { name: "Axure", icon: "axure" },
  { name: "Illustrator", icon: "ai" },
  { name: "Photoshop", icon: "ps" },
  { name: "HTML 5", icon: "html5" },
  { name: "Javascript", icon: "js" },
  { name: "Jquery", icon: "jquery" },
  { name: "CSS", icon: "css3" },
  { name: "SASS", icon: "sass" },
  { name: "Bootstrap", icon: "bootstrap4" },
  { name: "GitLab", icon: "gitlab" },
  { name: "GitHub", icon: "github" },
  { name: "Git", icon: "git" },
  { name: "MySQL", icon: "mysql" },
  { name: "VS Code", icon: "vscode" },
  { name: "Final Cut Pro", icon: "finalcutpro" },
];
export function SkillsSection() {
  return (
    <section className="">
      <h2 className="text-2xl font-bold mb-6">SKILLS</h2>
      <div className="flex flex-wrap gap-4">
        {skillItems.map((skillItem) => (
          <div
            key={skillItem.name}
            className="px-4 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700 flex items-center justify-center"
          >
            <img
             src={`/image/skill-icon/${skillItem.icon}.svg`}
             alt={skillItem.name}
             className="mr-3"
            />
            {skillItem.name}
          </div>
        ))}
      </div>
    </section>
  );
}

// About Me
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
        <h2 className="text-xl font-semibold text-gray-800 mb-6">ABOUT ME</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {traits.map(({ traitIcon, traitTitle, description }, index) => (
            <div key={index} className="flex gap-4 items-start">
              <img
             src={`/image/trait-icon/${traitIcon}.svg`}
             alt={traitTitle}
             className="mr-3"
            />
              <div>
                <h3 className="font-semibold text-gray-900">{traitTitle}:</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  

// main function（Home）
export default function Home() {
  return (
    <div className="bg-white max-w-5xl mx-auto px-4">
      <IntroSection />
      <SkillsSection />
      <AboutMeBlock />
    </div>
  );
}
