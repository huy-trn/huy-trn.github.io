    const Footer = () => {
        return (
            <footer className="w-screen md:fixed md:left-0 md:bottom-0 text-white text-center py-4">
                <p className="text-sm text-gray-400">
                    Designed & developed by <a
                        href="https://github.com/huy-trn/huy-trn.github.io"
                        className="hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Huy Tran</a>
                </p>
                <p className="text-sm text-gray-400">
                    <a
                        href="https://www.flaticon.com/free-icons/computer"
                        title="computer icons"
                        className="hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Computer icons created by Freepik - Flaticon
                    </a>
                </p>
            </footer>
        );
    };

    export default Footer;
