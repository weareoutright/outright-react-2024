// scripts/generateIndex.js
const fs = require("fs");
const path = require("path");

// Define the directory containing the files and the output path for the index file
const assetsDir = path.join(__dirname, "..");
const outputPath = path.join(assetsDir, "index.js");

// Get all .js files in the assets directory
const files = fs.readdirSync(assetsDir).filter((file) => file.endsWith(".js"));

// Start generating the content for the index.js file
let content = `// Auto-generated file. Do not edit manually.\n\nconst PROJECT_SLUGS = {\n`;

files.forEach((file) => {
  // Generate a valid JavaScript object key by replacing dashes and removing .js extension
  const moduleName = file.replace(/-|\./g, "_").replace(/\.js$/, "");

  // Add an import statement for each file and structure for slug property
  content += `  ${moduleName}: (() => {
    const mod = require('./${file}');
    return {
      slug: mod.slug
    };
  })(),\n`;
});

// Close the object and add the export statement
content += `};\n\nmodule.exports = PROJECT_SLUGS;\n`;

// Write the content to index.js
fs.writeFileSync(outputPath, content, "utf8");
console.log("index.js file generated successfully!");
