'use client'

import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { PDFDocumentProxy } from 'pdfjs-dist/types/src/display/api';
import { useState } from 'react';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
// ReactPDF.render(<MyDocument />, `${__dirname}/Kevin_Resume.pdf`);

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;


// Create Document Component
const DisplayResume = ({ pdfUrl } : { pdfUrl: string}) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  // const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState<string | null>(null);

  function onDocumentLoadSuccess({ numPages }: PDFDocumentProxy) {
    setNumPages(numPages);
  }

  function onDocumentLoadError(error: Error) {
    console.error('Failed to load PDF file:', error);
    setError('Failed to load PDF file.');
  }

  return (
      <Document
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onDocumentLoadError}
        
      >
        <Page pageNumber={1} className="mobile:[&_canvas]:!w-[300px] [&_canvas]:!h-[100%]"/>
      </Document>
  );
};


export default DisplayResume;