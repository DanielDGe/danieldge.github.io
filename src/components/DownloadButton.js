import React from 'react';

const DownloadButton = () => {
  const handleDownload = () => {
    // Cambia 'nombre_archivo.pdf' por el nombre de tu archivo PDF en el repositorio
    const pdfUrl = 'https://tuusuario.github.io/ruta/al/archivo/nombre_archivo.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.setAttribute('download', 'mi_curriculum.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload}>Descargar Currículum</button>
  );
};

export default DownloadButton;
