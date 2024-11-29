## Project Overview

`rembrand-pardo` is a modern website designed to showcase my software development skills, as well as my diverse professional experience. The site includes multiple pages, a responsive navigation bar, and fully customizable components, all built with cutting-edge web technologies.

With an Associate's degree in Business Management and a Bachelor's degree in Computer Science (emphasizing software and business management), I bring a unique blend of technical and managerial expertise. My experience spans roles such as Software Engineer, Project Manager, Product Manager, Business Manager, Quality Assurance Engineer, and Business Administrator.

This website highlights my skills in both software engineering and business management, demonstrating my capabilities in leading teams, ensuring software quality, and delivering impactful projects.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



## Table of Contents

1. [Project Overview](#project-overview)
2. [Project Structure](#project-structure)
3. [Installation](#installation)
4. [Running Locally](#running-locally)
5. [Building the Project](#building-the-project)
6. [Deploying to GitHub Pages](#deploying-to-github-pages)
7. [Customizing the App](#customizing-the-app)
8. [Troubleshooting](#troubleshooting)
9. [Useful Resources](#useful-resources)
10. [License](#license)

**Features:**
- Responsive design with mobile-friendly navigation
- Multi-page layout with React Router
- Deployed on GitHub Pages for easy access

## Project Structure

Here's a little overview of the project's folder structure:

```
rembrand-pardo.github.io/
├── .git/
├── node_modules/
├── public/
│   ├── 404.html
│   ├── structure.txt
│   ├── index.html
│   ├── manifest.json
│   ├── robots.txt
├── src/
│   ├── assets/
│   │   ├── filter_infographic.png
│   │   ├── infographic.jpg
│   │   ├── iphone_step1.jpg
│   │   ├── iphone_step2.jpg
│   │   ├── iphone_step3.jpg
│   │   ├── iphone_step4.jpg
│   │   ├── iphone_steps.jpg
│   │   ├── like_infographic.png
│   │   ├── list_infographic.png
│   │   ├── message_infographic.png
│   │   ├── nebula_logo.png
│   │   ├── nebula-galaxy.png
│   │   ├── nebula.ico
│   │   ├── nebula.jpg
│   │   ├── nebulaLogo.png
│   │   ├── nebulaqrcode.png
│   │   ├── search_infographic.png
│   │   ├── small-nebula-galaxy.jpg
│   ├── components/
│   │   ├── AboutPage.js
│   │   ├── ContactPage.js
│   │   ├── CookieConsent.js
│   │   ├── Footer.js
│   │   ├── HomePage.js
│   │   ├── HowToInstallPage.js
│   │   ├── Navbar.js
│   │   ├── NebulaBackground.js
│   │   ├── NotFound.js
│   │   ├── PolicyPage.js
│   ├── styles/
│   │   ├── AboutPage.css
│   │   ├── App.css
│   │   ├── ContactPage.css
│   │   ├── CookieConsent.css
│   │   ├── Footer.css
│   │   ├── HomePage.css
│   │   ├── HowToInstallPage.css
│   │   ├── index.css
│   │   ├── Navbar.css
│   │   ├── NebulaBackground.css
│   │   ├── PolicyPage.css
│   ├── App.test.js
│   ├── App.js
│   ├── firebaseConfig.js
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   ├── setupTests.js
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
```
## Running Locally

To preview the project on your local machine:

1. **Start the development server:**

   ```powershell
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000`. The app will automatically reload if you make changes to the code.

## Building the Project

Before deploying, you need to build the project. The build process compiles the React code and optimizes it for production.

1. **Run the build command:**

   ```powershell
   npm run build
   ```

2. This will create a `build` directory containing the optimized production-ready files. These files are what you will deploy to GitHub Pages.

## Deploying to GitHub Pages

Deploying to GitHub Pages involves a few steps:

1. **Set the `homepage` field in `package.json`:**

   The `homepage` field should be set to the URL where your app will be hosted:

   ```json
   "homepage": "https://rembrand-pardo.github.io"
   ```

2. **Build the project:**

   If you haven't already done so, run:

   ```powershell
   npm run build
   ```

3. **Deploy the project:**

   Run the following command to deploy the app to GitHub Pages:

   ```powershell
   npm run deploy
   ```

   This command will create or update the `gh-pages` branch in your repository and push the built files there. Your site should be live at `https://rembrand-pardo.github.io/`.

## Customizing the App

To tailor the app to your needs:

1. **Modify Components:**

   Update or add new components in the `src/components` directory.

2. **Update Styles:**

   Customize the appearance by editing the CSS files in the `src/styles` directory.

3. **Add New Pages:**

   To add a new page, create a new component, and update the routes in `App.js`.

4. **Update the Navbar:**

   Modify `Navbar.js` to include links to any new pages you've added.

## Workflow for Adding New Features

1. **Create a New Branch:**

   It’s best practice to create a new branch for each feature or bug fix. Run:

   ```powershell
   git checkout -b feature/your-feature-name
   ```

2. **Make Changes:**

   Develop your feature or fix issues.

3. **Commit and Push Changes:**

   After making changes, commit and push them to your repository:

   ```powershell
   git add .
   git commit -m "Describe your changes"
   git push origin feature/your-feature-name
   ```

4. **Merge Changes:**

   Once your feature is complete and tested, create a pull request on GitHub to merge it into the `main` branch.

5. **Build and Deploy:**

   Switch back to the `main` branch and pull the latest changes:

   ```powershell
   git checkout main
   git pull origin main
   ```

   Build and deploy the updated project:

   ```powershell
   npm run build
   npm run deploy
   ```

## Troubleshooting

Here are some common issues you might encounter and their solutions:

### 1. Blank Page after Deployment

- **Ensure the `homepage` field in `package.json` is correctly set.** This field tells React where your app will be hosted, ensuring that all assets are correctly linked.

- **Verify the paths in `index.html`.** Double-check that paths to assets like `favicon.ico`, `manifest.json`, and CSS/JS files are correctly prefixed with the appropriate URL.

### 2. 404 Error on GitHub Pages

- **Check the repository name and URL.** Ensure that the repository name is correct and that the `gh-pages` branch has been created.

- **Make sure the `gh-pages` branch is the deployment source.** Verify this in the repository settings on GitHub.

### 3. "Module not found" Errors

- **Check component imports.** Ensure that all components and stylesheets are imported correctly within your React components.

- **Confirm the folder structure.** Verify that all files are located where they should be, as per the project's folder structure.

### 4. Issues with GitHub Pages Deployment

- **Try a clean build and redeploy.** If the site isn’t deploying correctly, try removing the `build` directory and regenerating it:

  ```powershell
  Remove-Item -Recurse -Force build
  npm run build
  npm run deploy
  ```

## Useful Resources

Here are some resources to help you with development:

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Progressive Web Apps (PWA) Documentation](https://web.dev/progressive-web-apps/)
- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [gh-pages npm package](https://www.npmjs.com/package/gh-pages)

## License

This project is protected. You cannot use, modify, and distribute the code, images, designs or anythign on this site without written permission.

### Notes to get code running
Dependecies need to be installed. Some of the commands are:
   ```powershell
   npm install
   npm install firebase
   npm install axios
   ```
This is needed to update website and deploy
```git push; npm run build; npm run deploy```

Additionally, you need to make sure to add the .env with appropriate information in the root of the project