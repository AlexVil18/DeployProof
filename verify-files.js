const fs = require('fs');
const path = require('path');

const requiredFiles = [
  'index.html',
  'front-end/css/nav.css',
  'front-end/css/Footer.css',
  'front-end/css/index.css',
  'front-end/css/floating-cart.css',
  'front-end/js/loadNavbar.js',
  'front-end/js/loadFooter.js',
  'front-end/js/indexProductos.js',
  'front-end/js/floating-cart.js',
  'front-end/components/nav.html',
  'front-end/components/footer.html'
];

let missingFiles = [];

requiredFiles.forEach(file => {
  if (!fs.existsSync(path.join(__dirname, file))) {
    missingFiles.push(file);
  }
});

if (missingFiles.length > 0) {
  console.error('Missing files:', missingFiles);
  process.exit(1);
} else {
  console.log('All required files are present');
}