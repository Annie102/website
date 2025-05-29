// Component 1 -- IntroSection
function IntroSection() {
    return (
      <div className="flex flex-col md:flex-row justify-between">
        {/* Text Section */}
        <div className="max-w-xl text-center md:text-left mb-8 md:mb-0">
          <p className="text-gray-500 text-lg mb-2">Hello, It’s Annie Lin</p>
          <h1 className="text-4xl font-bold mb-4">
            I’m <span className="text-black">UI UX Designer</span>
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
  // main function（Home）
  export default function Home() {
    return (
      <div className="bg-white max-w-5xl mx-auto px-4">
        <IntroSection />
      </div>
    );
  }