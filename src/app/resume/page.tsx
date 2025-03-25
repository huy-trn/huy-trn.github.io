const Resume = () => {
    const cvUrl = "/Developer_HuyTran.pdf"; // Public folder reference

    return (
        <section className="flex grow w-full h-full p-4">
            {/* Display PDF using an embed element */}
            <embed 
                    src={cvUrl} 
                    type="application/pdf" 
                    className="grow bg-white overflow-scroll"
                />
        </section>
    );
};

export default Resume;
