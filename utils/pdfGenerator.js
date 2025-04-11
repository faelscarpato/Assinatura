// Utility functions for PDF generation
function formatDate(date) {
  if (!date) return '';

  if (typeof date === 'string') {
    // If already formatted, return as is
    if (date.includes('/')) return date;

    // Try to parse the string to a date
    date = new Date(date);
  }

  return date.toLocaleDateString('pt-BR');
}

function getCurrentDateTime() {
  const now = new Date();
  return {
    formattedDate: now.toLocaleDateString('pt-BR'),
    formattedTime: now.toLocaleTimeString('pt-BR')
  };
}

// Centralize text management for consistent styling
function getTextLines(pdf, text, maxWidth) {
  return pdf.splitTextToSize(text, maxWidth);
}

// Function to add a centered title to PDF
function addCenteredTitle(pdf, text, y, fontSize = 16) {
  pdf.setFontSize(fontSize);
  pdf.setFont(undefined, 'bold');
  const pageWidth = pdf.internal.pageSize.getWidth();
  pdf.text(text, pageWidth / 2, y, { align: 'center' });
  return y + fontSize / 2;
}

// Function to add multi-line text to PDF with pagination
function addText(pdf, text, startX, startY, maxWidth, fontSize = 11, lineHeight = 7) {
  pdf.setFontSize(fontSize);
  pdf.setFont(undefined, 'normal');

  const textLines = getTextLines(pdf, text, maxWidth);
  let currentY = startY;
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 20;

  textLines.forEach((line) => {
    // Check if we need a new page
    if (currentY > pageHeight - margin) {
      pdf.addPage();
      currentY = margin;
    }

    pdf.text(line, startX, currentY);
    currentY += lineHeight;
  });

  return currentY;
}

// Function to add signature table
function addSignatureTable(pdf, signatures, startY) {
  if (!signatures || signatures.length === 0) return startY;

  const pageWidth = pdf.internal.pageSize.getWidth();
  const margin = 20;
  const tableWidth = pageWidth - 2 * margin;

  // Table header
  pdf.setFontSize(12);
  pdf.setFont(undefined, 'bold');
  pdf.setTextColor(60, 60, 60);

  let currentY = startY + 10;
  const colWidths = [tableWidth * 0.25, tableWidth * 0.25, tableWidth * 0.2, tableWidth * 0.3];

  // Header row
  pdf.text('Nome Completo', margin, currentY);
  pdf.text('Data de Assinatura', margin + colWidths[0], currentY);
  pdf.text('Turno', margin + colWidths[0] + colWidths[1], currentY);
  pdf.text('Assinatura', margin + colWidths[0] + colWidths[1] + colWidths[2], currentY);

  currentY += 5;
  pdf.setDrawColor(200);
  pdf.line(margin, currentY, pageWidth - margin, currentY);
  currentY += 10;

  // Reset text properties for data rows
  pdf.setFontSize(10);
  pdf.setFont(undefined, 'normal');
  pdf.setTextColor(0, 0, 0);

  // Data rows
  signatures.forEach((user) => {
    if (user.signed) {
      // Check if we need a new page
      if (currentY > pdf.internal.pageSize.getHeight() - 30) {
        pdf.addPage();
        currentY = 30;
      }

      pdf.text(user.name, margin, currentY);
      pdf.text(formatDate(user.signatureDate), margin + colWidths[0], currentY);
      pdf.text(user.turno, margin + colWidths[0] + colWidths[1], currentY);

      // Add signature image
      if (user.signatureData) {
        try {
          pdf.addImage(
            user.signatureData,
            'PNG',
            margin + colWidths[0] + colWidths[1] + colWidths[2],
            currentY - 10,
            colWidths[3] * 0.7,
            15
          );
        } catch (error) {
          console.error('Error adding signature image:', error);
        }
      }

      currentY += 20;
      pdf.setDrawColor(240);
      pdf.line(margin, currentY - 5, pageWidth - margin, currentY - 5);
    }
  });

  return currentY;
}