import { readdirSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

// Define __dirname for ES module
const __dirname = dirname(fileURLToPath(import.meta.url));

// Define the directory containing the images
const imagesDir = join(__dirname, "../assets/bg-zoom"); // The directory where the images are located

// Define the output directory
const outputDir = join(__dirname, "../assets/bg-zoom");

// Read all files in the images directory
const files = readdirSync(imagesDir);

// Filter to include only .jpg files
const imageFiles = files.filter((file) => file.endsWith(".jpg"));

// Generate import statements and array entries for each image
const imports = imageFiles
  .map((file, index) => {
    const variableName = `bgZoom${index}`;
    return `import ${variableName} from './${file}';`;
  })
  .join("\n");

const imageArrayEntries = imageFiles
  .map((file, index) => {
    const key = file.replace("bg-zoom-", "").replace(".jpg", "");
    return `{ key: '${key}', src: bgZoom${index} }`;
  })
  .join(",\n  ");

// Create the content for the index.js file
const indexContent = `
// This file is auto-generated by generateBgZoomImageIndex.mjs

${imports}

const bgZoomImages = [
  ${imageArrayEntries}
];

export default bgZoomImages;
`;

// Ensure the output directory exists
if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

// Write the content to ../assets/bg-zoom/index.js
writeFileSync(join(outputDir, "index.js"), indexContent);

console.log(
  "index.js file generated successfully in ./app/zoom/assets/bg-zoom directory."
);
