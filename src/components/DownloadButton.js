import React from 'react';
import { FaFilePdf } from "react-icons/fa";

const DownloadButton = () => {
    const handleDownload = () => {
        // Cambia 'nombre_archivo.pdf' por el nombre de tu archivo PDF en el repositorio
        const pdfUrl = 'https://raw.githubusercontent.com/DanielDGe/danieldge.github.io/main/src/assets/cv.pdf';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.setAttribute('download', 'mi_curriculum.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div>
            <button
                onClick={handleDownload}
                className="btn btn-outline-light">
                <FaFilePdf style={{ marginRight: '0.5rem' }}/>
                Descargar Currículum
            </button>
        </div>
    );
};

export default DownloadButton;
