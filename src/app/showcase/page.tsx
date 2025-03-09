"use client";

import Link from "next/link";

const projects = [
  {
    title: "Chatbot AI",
    description: "An AI-powered chatbot that automates customer support.",
    link: "https://github.com/yourusername/chatbot-ai",
  },
  {
    title: "Automation Tool",
    description: "A workflow automation tool using LLMs to enhance productivity.",
    link: "https://github.com/yourusername/automation-tool",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with Next.js and Tailwind CSS.",
    link: "https://yourportfolio.com",
  },
];

const Showcase = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Showcase</h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
        A collection of my latest projects, leveraging LLMs, AI, and automation.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="p-6 border rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-blue-600">{project.title}</h2>
            <p className="text-gray-700 mt-2">{project.description}</p>
            <Link
              href={project.link}
              className="inline-block mt-4 text-blue-500 hover:underline"
              target="_blank"
            >
              View Project →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Showcase;
