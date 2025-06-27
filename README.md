# Modern Portfolio Website for Luke Ponga

**View Live:** [lukeponga-dev.github.io](https://lukeponga-dev.github.io/)

A modern, responsive, single-page portfolio website showcasing Luke Ponga's skills, projects, and professional experience as a software developer specializing in IoT and AI. This project is built with clean HTML5, CSS3, and JavaScript, and is fully customizable.

## Features

* **Modern UI/UX Design**: A clean, professional aesthetic with smooth transitions and a focus on readability.
* **Fully Responsive**: The layout seamlessly adapts to all device sizes, from mobile phones to desktop screens.
* **Dark/Light Mode Toggle**: Users can switch between a light and dark theme, with their preference saved in their browser for future visits.
* **Interactive Elements**: Features engaging hover effects on cards and a dynamic navigation bar that changes style upon scrolling.
* **Project Showcase**: A dedicated grid to highlight key projects, complete with images, descriptions, technology tags, and links.
* **Organized Skill Display**: Skills are categorized into Development, Technical, and Soft Skills for clarity.
* **Timeline for Education**: A clean, visual timeline to display educational qualifications and certifications.

## Technologies Used

* **Frontend**:
    * HTML5
    * CSS3 (with Custom Variables for easy theming)
    * JavaScript (ES6+)
* **Frameworks & Libraries**:
    * Bootstrap 5
    * Bootstrap Icons
* **Fonts**:
    * Google Fonts (Poppins and Inter)

## Project Structure
```
portfolio/
├── index.html  # The main (an   only) HTML file
├── styles.css # Custom CSS styles and theme variables
├── script.js  # JavaScript for interactivity (dark mode, scroll effects)
├── images/   # Folder for project screenshots and profile images
│   ├── new-zealand-website-screenshot.jpg
│   ├── doctors-appointments-screenshot.jpg
│   └── ...
└── certificates/  # Folder for certificate images
└── certificate.png
```
## Getting Started

To get a local copy up and running, follow these simple steps.

* **Clone the repository**:
    ```bash
    git clone [https://github.com/lukeponga-dev/lukeponga-dev.github.io](https://github.com/lukeponga-dev/lukeponga-dev.github.io)
    ```
   

* **Navigate to the project directory**:
    ```bash
    cd lukeponga-dev.github.io
    ```
   

* **Open `index.html` in your browser**:
    Simply open the file to view the website locally. No special servers are needed.

## Customization Guide

This project was designed to be easily customized.

### 1. Update Content
All text content, including the "About Me" section, project descriptions, and contact information, can be edited directly in the `index.html` file.

### 2. Change Theme Colors
You can easily change the entire website's color scheme by modifying the CSS variables at the top of the `styles.css` file.

```css
/* ==== 1. Root Variables ==== */
:root {
  --primary: #4361ee;      /* Main accent color for buttons, links, and highlights */
  --primary-dark: #3a56d4;  /* A darker shade for hover effects */
  --secondary: #7209b7;    /* A secondary accent color */
  --light: #f8fafc;        /* Light background color */
  --dark: #0f172a;         /* Dark mode background color */
  --text-light: #e2e8f0;   /* Text color for dark mode */
  --text-dark: #1f2937;    /* Text color for light mode */
  /* ... and more */
}
```

### 3. Add or Modify a Project
To add a new project to the "Featured Projects" section, copy and paste the following HTML block inside the ```<div class="row g-4">``` container in index.html. Replace the placeholder content with your project's details.
```
<div class="col-md-6 col-lg-4">
  <div class="project-card">
    <img src="images/your-project-image.jpg" class="card-img-top" alt="Your Project Name">
    <div class="card-body">
      <h3 class="project-card-title">Your Project Name</h3>
      <p class="project-card-description">A brief description of your project and its purpose.</p>
      <div class="tech-tags">
        <span class="badge">Technology 1</span>
        <span class="badge">Technology 2</span>
      </div>
    </div>
    <div class="card-footer">
      <a href="#" class="btn btn-primary">Live Demo</a>
      <a href="#" class="btn btn-outline-secondary">Source Code</a>
    </div>
  </div>
</div>
```
## Deployment
This is a static website, making deployment incredibly simple.
GitHub Pages (Recommended)
 * Commit and push all your changes to the main branch of your GitHub repository.
 * Go to your repository's Settings tab.
 * In the left sidebar, click on Pages.
 * Under "Build and deployment", select Deploy from a branch.
 * Set the branch to main and the folder to / (root).
 * Click Save. Your site will be live at https://<your-username>.github.io/<your-repo-name>/ in a few minutes.
## License
This project is licensed under the MIT License. See the LICENSE file for details.
## Contact
Luke Ponga
* LinkedIn: linkedin.com/in/lukeponga
* GitHub: github.com/lukeponga-dev

```
graph TD
    A[Portfolio Website] --> B[About Section]
    A --> C[Skills Section]
    A --> D[Projects Section]
    A --> E[Education & Certificates]
    A --> F[Contact Section]
    D --> G[Project 1]
    D --> H[Project 2]
    D --> I[Project 3]
```
