function ExportButton({ enabled, contractText, signatures }) {
  const [loading, setLoading] = React.useState(false);

  const generatePDF = async () => {
    if (!enabled) return;

    setLoading(true);

    try {
      const { jsPDF } = window.jspdf;
      const pdf = new jsPDF('p', 'mm', 'a4');

      // Add title
      pdf.setFontSize(16);
      pdf.setFont(undefined, 'bold');
      pdf.text('CONTRATO DE PRESTAÇÃO DE SERVIÇOS', 105, 20, { align: 'center' });

      // Add contract text
      pdf.setFontSize(11);
      pdf.setFont(undefined, 'normal');

      const textLines = pdf.splitTextToSize(contractText, 170);
      let yPosition = 30;

      textLines.forEach((line) => {
        // Check if we need a new page
        if (yPosition > 270) {
          pdf.addPage();
          yPosition = 20;
        }

        pdf.text(line, 20, yPosition);
        yPosition += 5;
      });

      // Add a new page for signatures
      pdf.addPage();

      // Add signatures table title
      pdf.setFontSize(14);
      pdf.setFont(undefined, 'bold');
      pdf.text('ASSINATURAS', 105, 20, { align: 'center' });

      // Set up signature table
      const tableStartY = 30;
      let currentY = tableStartY;

      // Table headers
      pdf.setFontSize(10);
      pdf.setTextColor(100);
      pdf.text('Nome Completo', 20, currentY);
      pdf.text('Data de Assinatura', 70, currentY);
      pdf.text('Turno de Trabalho', 120, currentY);
      pdf.text('Assinatura', 170, currentY);
      currentY += 2;

      // Draw header line
      pdf.setDrawColor(200);
      pdf.line(20, currentY, 190, currentY);
      currentY += 8;

      // Table rows
      pdf.setTextColor(0);
      pdf.setFontSize(9);

      signatures.filter((user) => user.signed).forEach((user) => {
        // Check if we need a new page
        if (currentY > 270) {
          pdf.addPage();
          currentY = 20;
        }

        pdf.text(user.name, 20, currentY);
        pdf.text(user.signatureDate, 70, currentY);
        pdf.text(user.turno, 120, currentY);

        // Add signature image
        try {
          pdf.addImage(user.signatureData, 'PNG', 170, currentY - 7, 20, 10);
        } catch (error) {
          console.error('Error adding signature image:', error);
        }

        currentY += 15;
        pdf.setDrawColor(240);
        pdf.line(20, currentY - 5, 190, currentY - 5);
      });

      // Save the PDF
      pdf.save('contrato_assinado.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Ocorreu um erro ao gerar o PDF. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-8 mb-4" data-id="6hpknaemx" data-path="components/ExportButton.js">
      <button
        className={`w-full py-3 px-4 flex items-center justify-center rounded-md transition ${
        enabled ?
        'bg-green-600 hover:bg-green-700 text-white' :
        'bg-gray-300 text-gray-500 cursor-not-allowed'}`
        }
        onClick={generatePDF}
        disabled={!enabled || loading} data-id="hfdtpj1bt" data-path="components/ExportButton.js">

        {loading ?
        <>
            <i className="fas fa-circle-notch fa-spin mr-2" data-id="h9ac6uj0m" data-path="components/ExportButton.js"></i>
            Gerando PDF...
          </> :

        <>
            <i className="fas fa-file-pdf mr-2" data-id="5ewbinlwq" data-path="components/ExportButton.js"></i>
            Exportar para PDF
          </>
        }
      </button>
      
      {!enabled &&
      <p className="text-sm text-gray-500 text-center mt-2" data-id="5u83zf486" data-path="components/ExportButton.js">
          <i className="fas fa-info-circle mr-1" data-id="opltorinn" data-path="components/ExportButton.js"></i>
          Todas as assinaturas são necessárias para exportar o contrato
        </p>
      }
    </div>);

}