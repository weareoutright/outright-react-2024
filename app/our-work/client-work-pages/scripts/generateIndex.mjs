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

// Use a regular expression to extract the `slug` and export name from each file
function extractSlugAndExportName(fileContent) {
  const slugMatch = fileContent.match(/slug:\s*["']([^"']+)["']/);
  const exportMatch = fileContent.match(/export\s+const\s+(\w+)/);
  const slug = slugMatch ? slugMatch[1] : null;
  const exportName = exportMatch ? exportMatch[1] : null;
  return { slug, exportName };
}

// Track each module's import
const imports = [];

// Process each file to extract the slug and add the file path
for (const file of files) {
  const filePath = path.join(assetsDir, file);

  try {
    // Read the file content as a string
    const fileContent = fs.readFileSync(filePath, "utf8");

    // Extract the slug and export name using the `extractSlugAndExportName` function
    const { slug, exportName } = extractSlugAndExportName(fileContent);
    console.log("Extracted slug:", slug, "Export name:", exportName); // Debugging line

    // Add an import statement for each module using the specific export name
    if (slug && exportName) {
      imports.push(`import { ${exportName} } from "./${file}";`);
      content += `  "/our-work${slug}": { module: ${exportName}, filePath: "${file}" },\n`;
    } else {
      console.warn(`No slug or export name found in ${filePath}`);
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
