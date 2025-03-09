import Chatbot from "./components/Chatbot";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center h-100 text-center px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-500">
        Welcome to My Portfolio
      </h1>
      <p className="text-lg text-gray-300 mt-4 max-w-2xl">
        Hi, I'm <span className="font-semibold text-white">Tran Quoc Huy</span>, a software developer 
        specializing in <span className="text-blue-400">LLM-powered applications</span>, 
        <span className="text-blue-400"> AI-driven development</span>, and <span className="text-blue-400">automation tools</span>.
      </p>
      <p className="mt-2 text-gray-400 max-w-lg">
        I build intelligent systems, optimize workflows, and create scalable web solutions. 
        Check out my <span className="text-blue-400">projects</span> or chat with my AI assistant to learn more!
      </p>
    </section>
  );
}
