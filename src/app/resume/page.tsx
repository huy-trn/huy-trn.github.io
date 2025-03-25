'use client'

import { useState, useCallback } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import useResizeObserver from '../react-hooks/useResizeObserver';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const CV_URL = "/Developer_HuyTran.pdf"; // Public folder reference
const PDF_OPTIONS = {
    cMapUrl: '/cmaps/',
    standardFontDataUrl: '/standard_fonts/',
};

const Resume = () => {
    const [numPages, setNumPages] = useState<number>();
    const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);
    const [containerWidth, setContainerWidth] = useState<number>();

    const onResize = useCallback<ResizeObserverCallback>((entries) => {
        const [entry] = entries;

        if (entry) {
            setContainerWidth(entry.contentRect.width);
        }
    }, []);

    useResizeObserver(containerRef, {}, onResize);

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }): void => {
        setNumPages(numPages);
    }

    return (
        <section className="flex flex-col grow w-full h-full p-4" ref={setContainerRef} >
            {/* Display PDF using an embed element */}
            <Document file={CV_URL}
                options={PDF_OPTIONS}
                onLoadSuccess={onDocumentLoadSuccess}>
                {Array.from(new Array(numPages), (_el, index) => (
                    <Page
                        key={`page_${index + 1}`}
                        pageNumber={index + 1}
                        width={containerWidth}
                        className="mb-2"
                    />
                ))}
            </Document>
             {/* Download Link */}
             <a
                href={CV_URL}
                download="HuyTran_Resume.pdf"
                className="max-w-40 self-center mt-4 px-4 py-2 rounded-md transition border border-gray-300 text-gray-300 hover:border-blue-600 hover:text-blue-400"
            >
                Download CV
            </a>
        </section>
    );
};

export default Resume;
