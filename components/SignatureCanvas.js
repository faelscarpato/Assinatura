function SignatureCanvas({ onSave }) {
  const canvasRef = React.useRef(null);
  const signaturePadRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    signaturePadRef.current = new SignaturePad(canvas, {
      backgroundColor: 'rgb(255, 255, 255)',
      penColor: 'rgb(0, 0, 0)'
    });

    const resizeCanvas = () => {
      const ratio = Math.max(window.devicePixelRatio || 1, 1);
      canvas.width = canvas.offsetWidth * ratio;
      canvas.height = canvas.offsetHeight * ratio;
      canvas.getContext("2d").scale(ratio, ratio);
      signaturePadRef.current.clear(); // Otherwise the canvas gets wiped
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const handleClear = () => {
    signaturePadRef.current.clear();
  };

  const handleSave = () => {
    if (signaturePadRef.current.isEmpty()) {
      alert("Por favor, realize a assinatura antes de salvar.");
      return;
    }

    const signatureData = signaturePadRef.current.toDataURL();
    onSave(signatureData);
    signaturePadRef.current.clear();
  };

  return (
    <div className="mb-6" data-id="s2jyzgew5" data-path="components/SignatureCanvas.js">
      <div className="signature-pad-container mb-4" data-id="ju8wqjz1x" data-path="components/SignatureCanvas.js">
        <canvas ref={canvasRef} className="signature-pad" data-id="ocggq1r88" data-path="components/SignatureCanvas.js" />
        <button
          className="clear-btn px-2 py-1 bg-gray-200 text-gray-700 rounded-md text-sm hover:bg-gray-300"
          onClick={handleClear} data-id="yry76g7rr" data-path="components/SignatureCanvas.js">

          <i className="fas fa-eraser mr-1" data-id="b5e1jfknc" data-path="components/SignatureCanvas.js"></i>Limpar
        </button>
      </div>
      <div className="flex gap-4" data-id="ibl4s6aar" data-path="components/SignatureCanvas.js">
        <button
          className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-md transition duration-200"
          onClick={handleClear} data-id="raj97lcqi" data-path="components/SignatureCanvas.js">

          <i className="fas fa-times mr-2" data-id="sh78o9n4n" data-path="components/SignatureCanvas.js"></i>Cancelar
        </button>
        <button
          className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md transition duration-200"
          onClick={handleSave} data-id="ermgd60ld" data-path="components/SignatureCanvas.js">

          <i className="fas fa-check mr-2" data-id="so3i4l8rr" data-path="components/SignatureCanvas.js"></i>Salvar Assinatura
        </button>
      </div>
    </div>);

}