import Link from "next/link";

const projects = [
  {
    title: "#2 Contributor at Repomix",
    description:
      "📦 Repomix (formerly Repopack) is a powerful tool that packs your entire repository into a single, AI-friendly file. Perfect for when you need to feed your codebase to Large Language Models (LLMs) or other AI tools like Claude, ChatGPT, DeepSeek, Perplexity, Gemini, Gemma, Llama, Grok, and more.",
    link: "https://repomix.com",
    image: "/repomix.png",
  },
];

const Showcase = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 border border-gray-700 rounded-xl shadow-lg hover:shadow-xl transition bg-gray-800"
          >
            {/* Image */}
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
            )}
            <h2 className="text-xl font-semibold text-blue-400">
              {project.title}
            </h2>
            <p className="text-gray-300 mt-2">{project.description}</p>
            {project.link && (
              <Link
                href={project.link}
                className="inline-block mt-4 text-blue-500 hover:underline"
                target="_blank"
              >
                View Project →
              </Link>
            )}
          </div>
        ))}

        {/* More is coming card */}
        <div className="p-6 border border-dashed border-gray-600 rounded-xl shadow-lg text-center bg-gray-800 flex flex-col justify-center items-center">
          <h2 className="text-xl font-semibold text-gray-400">More is coming...</h2>
          <p className="text-gray-500 mt-2">
            My work is a constant evolution, a pursuit of innovation and mastery.
            Stay tuned—there’s so much more I have yet to build.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
