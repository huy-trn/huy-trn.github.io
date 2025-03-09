import Link from "next/link";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
    return (
        <section className="container mx-auto px-6 py-12 text-gray-100">
            <h1 className="text-3xl font-bold text-center mb-6">Contact</h1>
            <p className="text-center text-gray-400 max-w-2xl mx-auto mb-8">
                Feel free to reach out via email or connect with me on social media.
            </p>

            <div className="max-w-lg mx-auto bg-gray-900 border border-blue-600 p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                    <Mail className="text-blue-500" />
                    <Link
                        href="mailto:tranquochuy645@gmail.com"
                        target="_blank"
                        className="text-blue-400 hover:underline"
                    >
                        tranquochuy645@gmail.com
                    </Link>
                </div>

                <div className="flex items-center space-x-4 mb-4">
                    <Github className="text-blue-500" />
                    <Link
                        href="https://github.com/huy-trn"
                        target="_blank"
                        className="text-blue-400 hover:underline"
                    >
                        github.com/huy-trn
                    </Link>
                </div>

                <div className="flex items-center space-x-4">
                    <Linkedin className="text-blue-500" />
                    <Link
                        href="https://www.linkedin.com/in/huy-tran-036a7b2a9/"
                        target="_blank"
                        className="text-blue-400 hover:underline"
                    >
                        www.linkedin.com/in/huy-tran-036a7b2a9
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Contact;
