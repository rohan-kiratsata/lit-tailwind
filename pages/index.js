export default function Home() {
  return (
    <>
      {/* Hero Section - Home */}
      <div className="hero-section flex flex-wrap">
        {/* Heading Content */}
        <div className="flex flex-col text-center justify-center w-full py-40">
          <div>
            <h1 className="text-5xl">LitTailwindUI</h1>
            <p className="text-base mb-5 font-semibold">Free Ready-to-use TailwindCSS Components</p>
            <p>LitTailwindUI is a library of Free & Open Source TailwindCSS components.
              <br />No dependencies are required, just copy and paste Tailwind CSS code into your project.</p>
          </div>
        </div>
      </div>
    </>
  )
}
