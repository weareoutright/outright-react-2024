import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Define `__dirname` equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the directory containing the files and the output path for the index file
const assetsDir = path.join(__dirname, "..");
const outputPath = path.join(assetsDir, "index.js");

// Get all .js files in the assets directory
const files = fs.readdirSync(assetsDir).filter((file) => file.endsWith(".js"));

// Start generating the content for the index.js file with import statements
let content = `// Auto-generated file. Do not edit manually.\n\n`;

// Regular expression to extract `slug`, `exportName`, and `galleryThumbnail` from each file
function extractProperties(fileContent) {
  const slugMatch = fileContent.match(/slug:\s*["']([^"']+)["']/);
  const exportMatch = fileContent.match(/export\s+const\s+(\w+)/);
  const thumbnailMatch = fileContent.match(/galleryThumbnail:\s*(\w+)/); // Match variable name, not string

  const slug = slugMatch ? slugMatch[1] : null;
  const exportName = exportMatch ? exportMatch[1] : null;
  const galleryThumbnailName = thumbnailMatch ? thumbnailMatch[1] : null;

  return { slug, exportName, galleryThumbnailName };
}

// Track each module's import
const imports = [];

// Process each file to extract the properties and add the file path
for (const file of files) {
  const filePath = path.join(assetsDir, file);

  try {
    // Read the file content as a string
    const fileContent = fs.readFileSync(filePath, "utf8");

    // Extract the properties using the `extractProperties` function
    const { slug, exportName, galleryThumbnailName } =
      extractProperties(fileContent);
    console.log(
      "Extracted slug:",
      slug,
      "Export name:",
      exportName,
      "Gallery thumbnail:",
      galleryThumbnailName
    ); // Debugging line

    // Add an import statement for each module and gallery thumbnail
    if (slug && exportName) {
      imports.push(`import { ${exportName} } from "./${file}";`);
      if (galleryThumbnailName) {
        imports.push(
          `import ${galleryThumbnailName} from "./assets/${file.replace(
            ".js",
            ""
          )}/thumbnail.png";`
        );
      }
      content += `  "/our-work${slug}": { module: ${exportName}, filePath: "${file}", galleryThumbnail: ${galleryThumbnailName} },\n`;
    } else {
      console.warn(`Missing required properties in ${filePath}`);
    }
  } catch (error) {
    console.error("Error reading file:", filePath, error); // Log the error
  }
}

// Add the imports to the top of the content
content =
  `// Auto-generated file. Do not edit manually.\n\n${imports.join(
    "\n"
  )}\n\nconst PROJECT_SLUGS = {\n` + content;

// Close the object and add the export statement
content += `};\n\nexport default PROJECT_SLUGS;\n`;

// Write the content to index.js
fs.writeFileSync(outputPath, content, "utf8");
console.log("index.js file generated successfully!");
