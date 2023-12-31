import AboutMe from "@/components/AboutMe";

function About() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-5xl font-bold">About</h1>
        <p className="text-2xl font-light">About Me</p>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <AboutMe />
      </div>
    </section>
  )
}

export default About