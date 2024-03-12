import video from "../../assets/video.mp4";
import homStyles from "./styles/Home.module.css";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div className={homStyles.main}>
      <video
        className={homStyles.video}
        src={video}
        autoPlay
        muted
        loop
      ></video>
      <div className={homStyles.content}>
        <h1>
          <span className="relative z-10 text-5xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-[#ff1744] to-[#ffff]  text-center font-sans font-bold">
            <Typewriter
              words={[
                "Reserve a Stadium",
                "Find Players to Join Your Team",
                "Rate Players",
                "Join our World ",
              ]}
              loop={10}
              cursor
              //   cursorStyle="⚽"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
          <span className="text-3xl md:text-4xl">⚽</span>
        </h1>
      </div>
    </div>
  );
};

export default Home;
