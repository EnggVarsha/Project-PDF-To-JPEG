# PDF → JPEG Converter Web Application

## Overview
This project is a simple and efficient **web application** built using **HTML, CSS, and JavaScript** that converts PDF files into JPEG images.  
It supports **multi-page PDFs**, **password-protected PDFs**, and provides options to save images individually or as a single ZIP file.

---

## ✨ Features
- 📂 **Upload PDFs** (single or multiple files)
- 🔐 **Password-protected PDF support** (prompt for password if required)
- 🖼️ **Convert each page into JPEG** with sequential naming (`Page0001.jpeg`, `Page0002.jpeg`, …)
- 📑 **Multi-page support** — handles PDFs with hundreds or thousands of pages
- 💾 **Save Options**:
  - Save each page individually
  - Save all pages together in a ZIP file
- 🎨 **Modern UI Design** with gradient background, gallery preview, and progress updates
- ⚡ **Client-side only** — runs directly in the browser, no backend required

---

## 🛠️ Tech Stack
- **Frontend:** HTML, CSS, JavaScript
- **Libraries Used:**
  - [PDF.js](https://mozilla.github.io/pdf.js/) — render PDF pages in the browser
  - [FileSaver.js](https://github.com/eligrey/FileSaver.js/) — save files locally
  - [JSZip](https://stuk.github.io/jszip/) — create ZIP archives

---

## 🚀 How to Use
1. Open the application in your browser (`index.html`).
2. Upload one or more PDF files.
3. Click **Convert** to process the PDF(s).
4. Preview the converted JPEGs in the gallery.
5. Choose **Save as Images** or **Save as ZIP** from the dropdown.
6. Click **Save** to download your files.

---

## 📂 Deliverables
- JPEG files for each page of the PDF(s).
- Organized naming structure (`Page0001.jpeg`, `Page0002.jpeg`, etc.).
- Optionally, a single compressed ZIP folder containing all images.

---

## 🔑 Example Use Cases
- Converting large documents into image format for easy sharing.
- Preparing exam papers, assignments, or reports as JPEGs.
- Handling password-protected PDFs quickly and securely.
- Bulk conversion of multiple PDFs into organized image sets.

---

## 👩‍💻 Author
**Varsha**  
A full-stack developer passionate about building practical web tools for workflow automation and document processing.

---
