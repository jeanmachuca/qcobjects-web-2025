### Setting Up and Using `qcobjects-web-2025`

#### Prerequisites
- Node.js and npm installed on your machine.
- Basic understanding of JavaScript, TypeScript, HTML, and CSS.

#### Step 1: Clone the Repository
First, clone the repository (if you haven't already) and navigate to the project directory:
```bash
git clone https://github.com/jeanmachuca/qcobjects-web-2025.git
cd qcobjects-web-2025
```

#### Step 2: Install Dependencies
Install the necessary dependencies listed in the `package.json` file:
```bash
npm install
```

#### Step 3: Project Structure
Ensure your project structure looks something like this:
```
qcobjects-web-2025/
├── src/
│   ├── css/
│   │   └── tailwind-source.css
│   ├── img/
│   ├── js/
│   ├── scss/
│   ├── templates/
│   └── index.html
├── browser/
├── package.json
└── ...
```

#### Step 4: Build the Project
To build the project, you can use the following npm scripts:

1. **Build SASS**:
   ```bash
   npm run build:sass
   ```
   This command compiles your SCSS files into CSS.

2. **Build Tailwind CSS**:
   ```bash
   npm run build:tailwind
   ```
   This command processes your Tailwind CSS source file.

3. **Minify CSS**:
   ```bash
   npm run minify:css
   ```
   This command minifies your CSS files using `esbuild`.

4. **Build for Browser**:
   ```bash
   npm run build:browser
   ```
   This command runs all the build steps, including copying necessary files to the `browser` directory and bundling JavaScript files.

#### Step 5: Development Mode
To start the project in development mode with file watching, use:
```bash
npm run start:dev
```
This will watch for changes in the `src` directory and rebuild the project as needed.

#### Step 6: Start the Server
To start the server and serve your project, use:
```bash
npm run start
```
This command builds the project and starts the `qcobjects-http-server`.

#### Additional Notes
- **File Watching**: The `npm-watch` package is configured to watch for changes in the `src` directory with specific extensions (`ts`, `html`, `css`). It will trigger the `start` script when changes are detected.
- **Legacy Watch**: The `legacyWatch` option is enabled for compatibility with older file systems.
