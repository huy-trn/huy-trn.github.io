const Resume = () => {
    const cvUrl = "/Developer_HuyTran.pdf"; // Public folder reference

    return (
        <section className="h-full w-full">
            {/* Display PDF using an embed element */}
            <div className="w-full h-full border border-gray-700 rounded-lg overflow-hidden">
                <embed 
                    src={cvUrl} 
                    type="application/pdf" 
                    className="w-full h-full"
                />
            </div>
        </section>
    );
};

export default Resume;
