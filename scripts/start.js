const fs = require('fs');
    const path = require('path');
    const jsdom = require('jsdom');

    // Function to read and display HTML files
    function viewHtmlFile(filePath) {
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        const dom = new jsdom.JSDOM(data);
        const style = `
          body {
            background-color: #f0f0f0;
            font-family: Arial, sans-serif;
          }
          h1 {
            color: #00698f;
          }
          p {
            color: #333;
          }
        `;
        const styleSheet = dom.window.document.createElement('style');
        styleSheet.innerHTML = style;
        dom.window.document.head.appendChild(styleSheet);
        console.log(dom.window.document.documentElement.outerHTML);
      });
    }

    // Function to search for directories
    function searchDirectories(directoryPath, searchQuery) {
      fs.readdir(directoryPath, (err, files) => {
        if (err) {
          console.error(err);
          return;
        }
        files.forEach((file) => {
          const filePath = path.join(directoryPath, file);
          fs.stat(filePath, (err, stats) => {
            if (err) {
              console.error(err);
              return;
            }
            if (stats.isDirectory() && file.includes(searchQuery)) {
              console.log(`Found directory: ${filePath}`);
            }
          });
        });
      });
    }

    // Example usage
    const htmlFilePath = './example.html';
    viewHtmlFile(htmlFilePath);

    const directoryPath = './';
    const searchQuery = 'example';
    searchDirectories(directoryPath, searchQuery);
