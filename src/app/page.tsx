"use client";

import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center h-full p-20">
      <div className="flex flex-col items-center justify-center h-full text-center px-6 pt-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Hi, I&apos;m <span className="text-blue-300">Huy</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-500 mt-2">
          A young and passionate developer from Vietnam
        </h2>
        <div className="text-lg mt-10 text-gray-200 mt-4 max-w-2xl">
          <Typewriter
            options={{
              strings: [
                "I build intelligent applications powered by AI.",
                "Turning complex ideas into real-world solutions.",
                "Specialized in LLMs, RAG-based chatbots, and AI agents.",
                "Bridging human creativity with machine intelligence.",
                "Coding is not just my skill—it's my passion.",
                "Every line of code brings an idea to life."
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 25,
            }}
          />
        </div>
      </div>
      <div className="max-w-150 mt-10 flex flex-wrap gap-6 justify-center">
        <img
          className="w-16 h-16"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          alt="TypeScript"
        />
        <img
          className="w-16 h-16"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          alt="JavaScript"
        />
        <img
          className="w-16 h-16"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
          alt="Python"
        />
        <img
          className="w-16 h-16"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
          alt="C"
        />
        <img
          className="w-16 h-16"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"
          alt="Java"
        />
        <img
          className="w-16 h-16"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
          alt="Node.js"
        />
        <img
          className="w-16 h-16"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          alt="React.js"
        />
        <img
          className="w-16 h-16"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
          alt="Next.JS"
        />
        <img
          className="w-16 h-16"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
          alt="Docker"
        />
        <img
          className="w-16 h-16"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
          alt="Linux"
        />
        <img
          className="w-16 h-16"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
          alt="AWS"
        />
        <img
          className="w-16 h-16"
          src="https://raw.githubusercontent.com/langchain-ai/langchain/refs/heads/master/docs/static/img/logo-light.svg"
          alt="LangChain"
        />
      </div>
    </section>
  );
}
