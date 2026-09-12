// Author: Mario Aguilera Piceno
// File: Buttons.js
// Date: 02/20/2023
// Last Modified: 08/8/2026 

//Context Menu Disable:
document.oncontextmenu = function () { return false; }

// Attributes
var previous_ID = null;
var previous_ID_Project = null;
var previous_pic_elemID = null;

// Edit scroll history:
window.history.scrollRestoration = 'manual';

// Picture of the Day Prompt
function picOfDay(elemID, description, date, url, picNumber) {

    // Open or Close
    if (description && document.getElementById(elemID) !== null) {

        // Open Current Pic of Day
        previous_pic_elemID = elemID;
        let prompt = document.getElementById(elemID);
        prompt.innerHTML = 
        "<div style='width: 100%; height: 100%; text-align: center;'>" + 
        "<hr>" +
        "<h2 style='font-size: 2.8vw; color: rgb(255, 255, 255);'>Picture of the Day | #" + picNumber + "</h2>" +
        "<img onclick=\"window.open('Images/Calendar/" + url + "')\" src='Images/Calendar/" + url + "' style='cursor: pointer; aspect-ratio: 1/1; width: 50%; height: 50%; -webkit-user-drag: none;'>" +
        "<p style='font-size: 2.1vw; color: rgb(255, 255, 255);'>" + date + "</p>" +
        "<p style='font-size: 2.1vw; color: rgb(255, 255, 255);'>" + description + "</p>" + 
        "<button style='color: #ffffff; outline: none; background-color: rgba(119, 20, 20, 0); border-color: #ffffff; border-radius: 1%; text-align: center; font-size: 1vw; width: 80%; height: 5%;' id='Close' onclick=\"picOfDay('" + elemID + "')\">Close</button>" + 
        "<hr>" +
        "</div>";
        prompt.style.display = "block";
        prompt.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
        });
    } else if(document.getElementById(elemID) !== null) {

        // Close Current Pic of Day
        let prompt = document.getElementById(elemID);
        prompt.style.display = "none";
        prompt.replaceChildren();
        previous_pic_ID = null;
        
        // Scrool to Calendar
        let calendar = document.getElementById(elemID+"_Cal");
        calendar.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
        });
    }
}

// Insert Subpages
function innerPage(pageName) {
    // Check Page; Insert HTML data if page exists
    const div_ID = pageName + "_DIV";
    if (document.getElementById(div_ID) !== null) {
        let careerTextArea = document.getElementById(div_ID);
        fetch("./Pages/Projects/" + pageName + "/index.html")
        .then(response => response.text())
        .then(html => {
            careerTextArea.innerHTML = html;
        })
        .catch(error => {
            console.error("Error loading page:", error);
        });
    } else {
        console.log("Did not fetch: " + div_ID);
    }
}

// Insert Footer
function footer_insert() {
    // Check Page; Insert HTML data if page exists
    const div_ID = "Footer_Insert";
    if (document.getElementById(div_ID) !== null) {
        let careerTextArea = document.getElementById(div_ID);
        fetch("https://www.piceno.dev/content/insert/footer/index.html")
        .then(response => response.text())
        .then(html => {
            careerTextArea.innerHTML = html;
        })
        .catch(error => {
            console.error("Error loading page:", error);
        });
    } else {
        console.log("Did not fetch: " + div_ID);
    }
}

// Insert Header
function header_insert() {
    // Check Page; Insert HTML data if page exists
    const div_ID = "Header_Insert";
    if (document.getElementById(div_ID) !== null) {
        let careerTextArea = document.getElementById(div_ID);
        fetch("https://www.piceno.dev/content/insert/header/index.html")
        .then(response => response.text())
        .then(html => {
            careerTextArea.innerHTML = html;
        })
        .catch(error => {
            console.error("Error loading page:", error);
        });
    } else {
        console.log("Did not fetch: " + div_ID);
    }
}

// Insert SubPage Buttons
function subpage_buttons_insert() {
    // Check Page; Insert HTML data if page exists
    const div_ID = "Button_Projects_Container_SubPage";
    if (document.getElementById(div_ID) !== null) {
        let careerTextArea = document.getElementById(div_ID);
        fetch("https://www.piceno.dev/content/insert/subpage-buttons/index.html")
        .then(response => response.text())
        .then(html => {
            careerTextArea.innerHTML = html;
        })
        .catch(error => {
            console.error("Error loading page:", error);
        });
    } else {
        console.log("Did not fetch: " + div_ID);
    }
}

// Insert SubPage Buttons for Individual
function subpage_buttons_insert_individual() {
    // Check Page; Insert HTML data if page exists
    const div_ID = "Button_Projects_Container_SubPage_Mario";
    if (document.getElementById(div_ID) !== null) {
        let careerTextArea = document.getElementById(div_ID);
        fetch("https://www.piceno.dev/content/insert/subpage-buttons-mario/index.html")
        .then(response => response.text())
        .then(html => {
            careerTextArea.innerHTML = html;
        })
        .catch(error => {
            console.error("Error loading page:", error);
        });
    } else {
        console.log("Did not fetch: " + div_ID);
    }
}

//Handle Menu Buttons' Inputs 
function myFunction(typ3) {

    // Hide Previous Open Menus
    if (previous_ID !== null && typ3 !== previous_ID)
    {
        var x_previous = document.getElementById(previous_ID);
        x_previous.style.display = "none";
    }

    //Hide Previous visible project if not null
    if (previous_ID_Project !== null && typ3 !== previous_ID_Project)
    {
        var proj_previous = document.getElementById(previous_ID_Project);
        proj_previous.style.display = "none";
    }

    // Obtain Desired Menu
    var x = document.getElementById(typ3);
    previous_ID = typ3;

    // Open or Close Desired Menu
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
  }

//Handle Project Buttons' Inputs
function myFunctionProject(typ3) {

    // Hide Previous Project
    if (previous_ID_Project !== null && typ3 !== previous_ID_Project)
    {
        var x_previous = document.getElementById(previous_ID_Project);
        x_previous.style.display = "none";
    }

    // Find Element
    var x = document.getElementById(typ3);
    previous_ID_Project = typ3;

    // Show or Hide Desired Element
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}

// Handle GoTo Top and Close Buttons
function myFunctionTopClose(typ3) {
    if (typ3 === "Top") {
        window.scrollTo({top: 0, behavior: 'smooth'});
    } else {
        window.scrollTo({top: 0, behavior: 'smooth'});
        document.getElementById(typ3).style.display = "none";
    }
}

// Scroll to top after loading content.
function scroll_to_top(){
    window.scrollTo(0, 0)
}

// Run Functions
document.addEventListener('DOMContentLoaded', function() {
    //innerPage("Calendar");
    header_insert();
    footer_insert();
    subpage_buttons_insert();
    subpage_buttons_insert_individual();
    //innerPage("PDF-Dark-Mode");
    scroll_to_top();
});

// Dark Mode App:
let modifiedPdfBytes;
let originalPdfData = null;
let originalFileName = "";
let currentRenderId = 0;

// Theme definitions
const themes = {
    classic: {
        r: 0,
        g: 0,
        b: 0,
        name: 'Classic'
    },
    claude: {
        r: 42,
        g: 37,
        b: 34,
        name: 'Claude Warm'
    },
    chatgpt: {
        r: 52,
        g: 53,
        b: 65,
        name: 'ChatGPT Cool'
    },
    sepia: {
        r: 40,
        g: 35,
        b: 25,
        name: 'Sepia'
    },
    midnight: {
        r: 25,
        g: 30,
        b: 45,
        name: 'Midnight Blue'
    },
    forest: {
        r: 25,
        g: 35,
        b: 30,
        name: 'Forest Green'
    },
    original: {
        r: 255,
        g: 255,
        b: 255,
        name: 'Original'
    }
};

// Retrieve PDF JS's
/*
const pdfJsSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js";
const pdfWorkerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js";
const pdfLibSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.11.0/pdf-lib.min.js";
*/
const pdfJsSrc = "https://www.piceno.dev/PDFjs/pdf.min.js";
const pdfWorkerSrc = "https://www.piceno.dev/PDFjs/pdf.worker.min.js";
const pdfLibSrc = "https://www.piceno.dev/PDFjs/pdf-lib.min.js";
let pdfJsReadyPromise = null;
let pdfLibReadyPromise = null;

function loadPdfJs() {
    if (pdfJsReadyPromise) return pdfJsReadyPromise;

    pdfJsReadyPromise = new Promise((resolve, reject) => {
        const script = document.createElement("script");

        script.src = pdfJsSrc;
        script.crossOrigin = "anonymous";
        script.referrerPolicy = "no-referrer";

        script.onload = () => {
            pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorkerSrc;
            resolve();
        };

        script.onerror = error => {
            pdfJsReadyPromise = null;
            reject(error);
        };

        document.head.appendChild(script);
    });

    return pdfJsReadyPromise;
}

function loadPdfLib() {
    if (pdfLibReadyPromise) return pdfLibReadyPromise;

    pdfLibReadyPromise = new Promise((resolve, reject) => {
        const script = document.createElement("script");

        script.src = pdfLibSrc;
        script.crossOrigin = "anonymous";
        script.referrerPolicy = "no-referrer";

        script.onload = resolve;
        script.onerror = error => {
            pdfJsReadyPromise = null;
            reject(error);
        };

        document.head.appendChild(script);
    });

    return pdfLibReadyPromise;
}

// Wait for pdfLibraries
async function ensurePdfLibraries() {
    await Promise.all([
        loadPdfJs(),
        loadPdfLib()
    ]);
}

// Apply Theme
function applyThemeBackground(theme) {
    const container = document.getElementById('PDF-Dark-Mode_DIV');

    if (!container || !theme) {
        return;
    }

    container.style.backgroundColor =
        `rgb(${theme.r}, ${theme.g}, ${theme.b})`;
}

const selector = document.getElementById('themeSelector');

if (selector) {
    applyThemeBackground(themes[selector.value]);
}

async function handleFile_Downloadless(fileUrl, insert_location) {
    try {
        // Start both operations simultaneously.
        const fetchPromise = fetch(fileUrl);
        const pdfJsPromise = loadPdfJs();

        const [response] = await Promise.all([
            fetchPromise,
            pdfJsPromise
        ]);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const fileData = new Uint8Array(
            await response.arrayBuffer()
        );

        originalFileName = fileUrl
            .substring(fileUrl.lastIndexOf("/") + 1)
            .replace(/\.pdf$/i, "");

        originalPdfData = fileData;

        await renderPDF_Downloadless(
            fileData,
            insert_location
        );

    } catch (error) {
        console.error("Downloadless PDF error:", error);
    }
}


// Handle PDF File
function handleFile(file) {
    if (file.type !== "application/pdf") {
        console.error("Selected file is not a PDF.");
        return;
    }
    
    const isPdf = file.type === "application/pdf" || /\.pdf$/i.test(file.name);

    if (!isPdf) {
        console.error("Please select a PDF file.");
        return;
    }
    originalFileName = file.name.replace(/\.pdf$/i, '');
    const fileReader = new FileReader();
    
    fileReader.onload = async function () {
        try {
            const fileData = new Uint8Array(this.result);
        
            await ensurePdfLibraries();
        
            originalPdfData = fileData;
        
            const progressContainer = document.getElementById('progressContainer');
        
            const downloadBtn = document.getElementById('downloadBtn');
        
            if (progressContainer) {
                progressContainer.style.display = 'block';
            }
        
            if (downloadBtn) {
                downloadBtn.style.display = 'none';
            }
        
            await renderPDF(fileData);
        
        } catch (error) {
            console.error("Error processing PDF:", error);
        }
    };

    fileReader.readAsArrayBuffer(file);
}

// Handle File Change
function handleFileInputChange(event) {
    if (event.target.files.length > 0) {
        handleFile(event.target.files[0]);
    }
}

// Hangle Drag and Drop
function handleDragOver(event) {
    event.preventDefault();
}

// Handle Drag and Drop
function handleDrop(event) {
    event.preventDefault(); // Prevent default browser behavior
    if (event.dataTransfer.files.length > 0) {
        handleFile(event.dataTransfer.files[0]); // Your existing file handler
    }
}

// Change Theme
async function changeTheme() {
    const selectedTheme = document.getElementById('themeSelector').value;
    applyThemeBackground(themes[selectedTheme]);
    if (originalPdfData) {
        const progressContainer = document.getElementById('progressContainer');
        progressContainer.style.display = 'block';
        document.getElementById('downloadBtn').style.display = 'none';
        await renderPDF(originalPdfData);
    }
}

// Handle Fild Upload Button
async function handleFileUploadClick() {
    try {
        await ensurePdfLibraries();
    } catch (e) {
        console.error("Unable to load PDF libraries:", e);
    }
}


async function renderPDF_Downloadless(pdfData, divName) {
    const renderId = ++currentRenderId;

    try {
        const pdf = await pdfjsLib.getDocument({
            data: pdfData,
            disableAutoFetch: false,
            disableStream: false
        }).promise;

        const pdfContainer = document.getElementById(divName);

        if (!pdfContainer) {
            console.error("PDF container not found:", divName);
            return;
        }

        pdfContainer.replaceChildren();

        const totalPages = pdf.numPages;

        const CONCURRENCY = 3;
        const scale = 1;

        async function renderPage(pageNumber) {
            if (renderId !== currentRenderId) {
                return null;
            }

            const page = await pdf.getPage(pageNumber);

            const viewport = page.getViewport({
                scale: scale
            });

            const canvas = document.createElement("canvas");

            const ctx = canvas.getContext("2d", {
                alpha: false
            });

            canvas.width = viewport.width;
            canvas.height = viewport.height;

            canvas.style.cssText = `
                border: 1px solid white;
                margin-top: 10px;
                max-width: 100%;
                height: auto;
                display: block;
                margin-left: auto;
                margin-right: auto;
            `;

            await page.render({
                canvasContext: ctx,
                viewport: viewport
            }).promise;

            page.cleanup();

            return {
                pageNumber: pageNumber,
                canvas: canvas
            };
        }

        // Render pages in small batches.
        for (
            let start = 1;
            start <= totalPages;
            start += CONCURRENCY
        ) {
            if (renderId !== currentRenderId) {
                return;
            }

            const end = Math.min(
                start + CONCURRENCY - 1,
                totalPages
            );

            const results = await Promise.all(
                Array.from(
                    { length: end - start + 1 },
                    (_, index) => renderPage(start + index)
                )
            );

            if (renderId !== currentRenderId) {
                return;
            }

            // Keep pages in their correct order.
            results
                .filter(Boolean)
                .sort((a, b) => a.pageNumber - b.pageNumber)
                .forEach(result => {
                    pdfContainer.appendChild(result.canvas);
                });
        }

        console.log(
            `Rendered ${totalPages} PDF page(s).`
        );

    } catch (error) {
        console.error(
            "Error rendering PDF:",
            error
        );
    }
}


// Render PDF
async function renderPDF(pdfData) {
    const renderId = ++currentRenderId;
    const selectedTheme = document.getElementById('themeSelector').value;
    const theme = themes[selectedTheme];
    applyThemeBackground(theme);
    
    const pdf = await pdfjsLib.getDocument({ data: pdfData }).promise;

    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    const pdfContainer = document.getElementById('pdfContainer');
    const progressContainer = document.getElementById('progressContainer');
    
    if (!progressBar || !progressText || !pdfContainer || !progressContainer) {
        console.error("Required PDF elements are missing.");
    return;
    }

    modifiedPdfBytes = null;
    progressBar.style.width = '0';
    progressText.innerText = `0/${pdf.numPages}`;
    pdfContainer.replaceChildren();

    const CHUNK_SIZE = 50; // optional chunking for memory management
    const totalPages = pdf.numPages;
    const chunks = [];

    for (let chunkStart = 0; chunkStart < totalPages; chunkStart += CHUNK_SIZE) {
        if (renderId !== currentRenderId) return;

        const chunkDoc = await PDFLib.PDFDocument.create();
        const chunkEnd = Math.min(chunkStart + CHUNK_SIZE, totalPages);

        for (let i = chunkStart; i < chunkEnd; i++) {
            if (renderId !== currentRenderId) return;

            const page = await pdf.getPage(i + 1);
            const scale = window.devicePixelRatio > 1 ? 2 : 1.5;
            const viewport = page.getViewport({ scale });
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            canvas.width = viewport.width;
            canvas.height = viewport.height;
            canvas.style.border = "1px solid white";
            canvas.style.marginTop = "10px";

            await page.render({ canvasContext: ctx, viewport }).promise;

            // Apply dark mode pixel-wise to all pages
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;
            const bgR = theme.r;
            const bgG = theme.g;
            const bgB = theme.b;

            for (let j = 0; j < data.length; j += 4) {
                const r = data[j];
                const g = data[j + 1];
                const b = data[j + 2];
                const brightness = 0.299 * r + 0.587 * g + 0.114 * b;
                const factor = 1 - (brightness / 255);

                data[j]     = bgR + (255 - bgR) * factor;
                data[j + 1] = bgG + (255 - bgG) * factor;
                data[j + 2] = bgB + (255 - bgB) * factor;
            }
            ctx.putImageData(imageData, 0, 0);

            // Append **all pages** to DOM
            canvas.style.maxWidth = '100%';
            canvas.style.height = 'auto';
            pdfContainer.appendChild(canvas);

            // Convert canvas to PNG for PDF
            const imgBytes = await new Promise((resolve, reject) => {
                canvas.toBlob(async blob => {
                    if (!blob) {
                        reject(new Error("Failed to convert canvas to PNG."));
                        return;
                    }
            
                    resolve(await blob.arrayBuffer());
                }, 'image/png');
            });

            const jpgImage = await chunkDoc.embedPng(imgBytes);
            const newPage = chunkDoc.addPage([viewport.width, viewport.height]);
            newPage.drawImage(jpgImage, {
                x: 0,
                y: 0,
                width: viewport.width,
                height: viewport.height
            });

            page.cleanup();

            // Update progress
            const percent = ((i + 1) / totalPages) * 100;
            progressBar.style.width = `${percent}%`;
            progressText.innerText = `${i + 1}/${totalPages}`;
        }

        const chunkBytes = await chunkDoc.save();
        chunks.push(chunkBytes);
    }

    progressText.innerText = "Merging PDF chunks...";

    // Merge all chunks into final PDF
    const finalPdfDoc = await PDFLib.PDFDocument.create();
    for (let i = 0; i < chunks.length; i++) {
        if (renderId !== currentRenderId) return;
        const chunkDoc = await PDFLib.PDFDocument.load(chunks[i]);
        const copiedPages = await finalPdfDoc.copyPages(chunkDoc, chunkDoc.getPageIndices());
        copiedPages.forEach(page => finalPdfDoc.addPage(page));
        chunks[i] = null;
    }

    progressText.innerText = "Finalizing...";
    modifiedPdfBytes = await finalPdfDoc.save();

    if (renderId !== currentRenderId) return;
    progressContainer.style.display = 'none';
    triggerDownload();
}

function triggerDownload() {
    if (modifiedPdfBytes) {
        const selectedTheme = document.getElementById('themeSelector').value;
        const themeName = themes[selectedTheme].name
            .toLowerCase()
            .replace(/\s+/g, '_');

        const blob = new Blob([modifiedPdfBytes], {
            type: 'application/pdf'
        });

        // Create temporary object URL
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = `${originalFileName}_${themeName}_dark.pdf`;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Release the object URL after the download has started
        setTimeout(() => URL.revokeObjectURL(url), 1000);

        document.getElementById('downloadBtn').style.display = 'block';
    }
}

