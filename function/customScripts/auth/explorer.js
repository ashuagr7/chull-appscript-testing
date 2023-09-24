import { TemplateEngine } from "../../utils/templateEngine.js";
import { explorerCardTemplate } from "../../../form/pages/templates/informative/cards/explorer/explorerCards.js";
// Function to retrieve all file references from local storage
function getAllFilesFromLocalStorage() {
    const files = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        // console.log(key);
        // const file = JSON.parse(localStorage.getItem(key));
       let file = {
            filename:key
        }
        files.push(file);
    }
    return files;
}

// Retrieve data from localStorage
const files = getAllFilesFromLocalStorage();
                console.log(files);
// Generate HTML using TemplateEngine
const explorerCardsHTML = TemplateEngine.convert(explorerCardTemplate, { files:files });
// const listDeskHTML = TemplateEngine.convert(listDeskTemplate, { files });
// const listMobHTML = TemplateEngine.convert(listMobTemplate, { files });

// Add the generated HTML to the DOM
const mainElement = document.querySelector('[data-router="content"]');
mainElement.innerHTML += explorerCardsHTML 