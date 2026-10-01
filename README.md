# 🛠️ IT Workspace: Web Troubleshooting & DOM Analysis

> **About the project:** **IT Workspace** is a practical demonstration of web technology skills (HTML, CSS, JavaScript). As a candidate for an IT Support / L1/L2 Helpdesk position, this application showcases my understanding of DOM structure and browser network communication, enabling me to effectively troubleshoot client-side issues using developer tools.

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Troubleshooting](https://img.shields.io/badge/IT_Support-Troubleshooting-2088FF?style=for-the-badge)

## 🎯 Project Goal from an IT Support Perspective

While building and analyzing the **IT Workspace** repository (based on Vanilla JavaScript), I focused on developing core competencies essential for handling incidents at the first and second lines of support (L1/L2):

- **Understanding Frontend Architecture:** A deep knowledge of the relationships between `.html`, `.css`, and `.js` files allows me to quickly determine whether a user-reported issue is visual (frontend) or logical.
- **Chrome DevTools & Diagnostics:** The project serves as an environment to practice analyzing elements in the *Elements* tab, verifying errors in the *Console*, and tracking requests and load times in the *Network* tab.
- **External Scripts Analysis:** Implementing external libraries (e.g., `qrcode.js`) allows me to simulate and resolve issues related to loading external resources (CORS, 404 errors, firewall blocks).

## 🧩 Technologies and Structure

The application does not rely on complex frameworks, which promotes a full understanding of web fundamentals and browser operations.

- **Structure and Logic:** `index.html`, `app.js` (main application logic), `config.js`
- **Styles:** `styles.css`
- **External Tools (Vendor):** Analysis and integration of third-party libraries (`vendor/qrcode.js`) without using package managers.
- **Optimization (Root files):** `favicon.svg`, no reliance on a build server (e.g., the `.nojekyll` file enforcing clean hosting on GitHub Pages).

## 💡 Translation to Helpdesk Operations

**Incident Report:** *"A user claims that the code generation button in our internal system is not working."*

Thanks to the practice with the **IT Workspace** repository, my diagnostic process looks like this:
1. I open Chrome DevTools in the reporting user's browser.
2. I verify if the DOM structure loaded correctly (whether the required element/ID exists on the page).
3. I check the Console for `ReferenceError` messages or blocked resources from the `vendor/` directory.
4. I create a precise ticket for the development team (L3) with the exact location of the bug in the `app.js` file, which drastically reduces the resolution time (SLA).
