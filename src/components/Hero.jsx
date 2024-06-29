import { motion } from "framer-motion";
import { styles } from "../styles";
import { ReactTyped } from "react-typed";
import { programming} from "../assets";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h2 className={`${styles.heroHeadText} text-white`}>
            Hello there!<br /> I am <span className="text-[#915EFF]">Ibrahim Wani</span>
          </h2>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <ReactTyped
              strings={[
                "Software Engineer",
                "Tech Enthusiast",
                "LLM Researcher",
                "Problem Solver",
                "Machine Learning Engineer",
                "Full Stack Developer",
                "MLOps"
              ]}
              typeSpeed={100}
              backSpeed={60}
              loop
              className="text-[#54309a]"
            />
          </p>
        </div>
      </div>

      <div className="absolute inset-0 top-[120px] w-full h-full flex justify-center items-center">
        <img
          src={programming}
          alt="Programming"
          className="max-w-full max-h-full object-contain"
          style={{ width: "55%", height: "50%" }}
        />
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
