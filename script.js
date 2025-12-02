let convertedImages = []; // store blobs for saving later

document.getElementById("convertBtn").addEventListener("click", async () => {
  const files = document.getElementById("pdfUpload").files;
  if (!files.length) return alert("Please upload at least one PDF!");

  convertedImages = [];
  document.getElementById("output").innerHTML = "";
  document.getElementById("progress").innerText = "";
  document.getElementById("saveBtn").disabled = true;

  for (const file of files) {
    const reader = new FileReader();
    reader.onload = async function() {
      const pdfData = new Uint8Array(this.result);
      let pdf;

      try {
        pdf = await pdfjsLib.getDocument({ data: pdfData }).promise;
      } catch (err) {
        if (err.name === "PasswordException") {
          const password = prompt(`PDF "${file.name}" is password-protected. Enter password:`);
          if (!password) return alert("Password required to open this PDF.");
          pdf = await pdfjsLib.getDocument({ data: pdfData, password: password }).promise;
        } else {
          alert("Error opening PDF: " + err.message);
          return;
        }
      }

      document.getElementById("progress").innerText = `Converting ${pdf.numPages} pages from ${file.name}...`;

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: 2 });

        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        await page.render({ canvasContext: context, viewport }).promise;

        canvas.toBlob(blob => {
          const filename = `${file.name.replace(".pdf","")}_page${String(i).padStart(4,"0")}.jpeg`;
          convertedImages.push({ name: filename, blob });

          const img = document.createElement("img");
          img.src = URL.createObjectURL(blob);
          document.getElementById("output").appendChild(img);
        }, "image/jpeg", 1.0);
      }
    };
    reader.readAsArrayBuffer(file);
  }

  document.getElementById("progress").innerText = "✅ All PDFs converted!";
  document.getElementById("saveBtn").disabled = false;
});

// Save button logic stays the same (normal vs zip)
document.getElementById("saveBtn").addEventListener("click", async () => {
  if (convertedImages.length === 0) {
    return alert("No images to save. Please convert PDFs first!");
  }

  const option = document.getElementById("saveOption").value;

  if (option === "normal") {
    for (const img of convertedImages) {
      await new Promise(resolve => {
        setTimeout(() => {
          saveAs(img.blob, img.name);
          resolve();
        }, 500);
      });
    }
  } else if (option === "zip") {
    const zip = new JSZip();
    convertedImages.forEach(img => zip.file(img.name, img.blob));
    const content = await zip.generateAsync({ type: "blob" });
    saveAs(content, "converted_pages.zip");
  }
});
