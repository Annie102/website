const projects = [
    {
      type: "PORTFOLIO 2021 - 2025",
      title: "UI UX Design",
      subtitle: "PROJECT TILL 2025",
      highlight: "Portfolio", // 將大字也資料化
      buttonText: "See Full Project",
      link: "#",
    },
    {
      type: "SIDE PROJECT",
      title: "TRAVAIL",
      subtitle: "個人與多人工作空間租借平台",
      tags: "UX, UI, UR, Branding",
      image: "travailmockup", 
      logo: "travaillogo",
      buttonText: "See Full Project",
      link: "#",
    },
  ];
  
  export function PortfolioWrapper() {
    return (
      <section className="max-w-5xl mx-auto px-4 py-16 space-y-20">
        {projects.map((project, idx) => (
          <div key={idx} className="flex flex-col items-center gap-6">
            <div className="w-full text-sm text-gray-500 font-medium uppercase">
              {project.type}
            </div>
  
            {/* 區塊內容 */}
            <div className="relative w-full bg-gray-100 flex flex-col items-center text-center justify-center h-[355px] overflow-hidden pt-6">
              {idx === 0 ? (
                <>
                  {/* 標題區塊 */}
                  <div className="relative z-10">
                    <h2 className="text-5xl font-semibold text-gray-900 mb-1">
                      {project.title}
                    </h2>
                    <p className="text-gray-500 text-sm mb-6">{project.subtitle}</p>
                  </div>
  
                  {/* 紫色大字背景 */}
                  <h1 className="absolute bottom-[-60px] text-[270px] font-bold text-[#5B4FFF] leading-none relative z-0 pointer-events-none">
                    {project.highlight}
                  </h1>
                </>
              ) : (
                <div className="flex flex-col md:flex-row justify-center items-center gap-6 w-full relative z-10">
                  <div className="w-full md:w-5/12 flex justify-center items-center">
                    <img
                      src={`/image/portfolio-pics/${project.image}.svg`}
                      alt={project.title}
                      className="w-[160px] object-contain"
                    />
                  </div>
                  <div className="w-full md:w-7/12 text-left md:text-right md:justify-end items-center">
                    <div className="flex justify-end">
                      <img 
                        src={`/image/portfolio-pics/${project.logo}.svg`}
                        alt={project.title}
                        className="mr-3"
                      />
                    </div>
                    <p className="text-green-600 font-medium">{project.subtitle}</p>
                    <p className="text-sm text-gray-500 mt-1">{project.tags}</p>
                  </div>
                </div>
              )}
            </div>
  
            {/* CTA 按鈕 */}
            <a
              href={project.link}
              className="text-lg px-6 py-3 border border-primary-gray-700 
              hover:border-primary-main hover:text-primary-main 
              focus:border-primary-main focus:text-primary-main 
              transition"
            >
              {project.buttonText}
            </a>
          </div>
        ))}
      </section>
    );
  }
  
  // main function（Home）
  export default function Home() {
    return (
      <div className="bg-white max-w-5xl mx-auto px-4">
        <PortfolioWrapper />
      </div>
    );
  }