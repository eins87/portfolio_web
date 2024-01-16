import AboutMe from "@/components/AboutMe";
import Heading from "@/components/AboutMe/heading";

function About() {
  return (
    <section className="flex flex-col">
      <Heading />
      <div className="flex flex-col items-center justify-center w-full">
        <AboutMe />
      </div>
    </section>
  )
}

export default About