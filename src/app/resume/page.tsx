const Resume = () => {
    const cvUrl = "/Developer_HuyTran.pdf"; // Public folder reference

    return (
        <section className="flex grow w-full h-full md:p-0 p-4 bg-white">
            {/* Display PDF using an embed element */}
            <embed 
                    src={cvUrl} 
                    type="application/pdf" 
                    className="w-full grow"
                />
        </section>
    );
};

export default Resume;
