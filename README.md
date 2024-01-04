<div align="center">
  <h3><b>Canvas LMS API Integration</b></h3>
</div>

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
  -  - [🚀 Live Demo](#screenshots)
- [💻 Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Install](#install)
  - [Usage](#usage)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [❓ FAQ (OPTIONAL)](#faq)
- [📝 License](#license)

## 📖 Canvas LMS API Integration <a name="about-project"></a>

**Canvas LMS API Integration** is a web application that integrates with the Canvas LMS API to display course information. The application retrieves data from Canvas and presents it on a user-friendly web page.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://reactjs.org/">React.js</a></li>
    <li><a href="https://reactjs.org/">Redux Toolkit</a></li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://expressjs.com/">Express.js</a></li>
  </ul>
</details>



### Key Features <a name="key-features"></a>

- **Canvas API Integration:** Connects with the Canvas LMS API to fetch and display course information.
- **User-Friendly Interface:** Provides a simple and intuitive web interface for easy navigation.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🚀 Live Demo <a name="live-demo"></a>

- [Live Demo Link](https://zoni.onrender.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🎨Images of Interface <a name="screenshots"></a>
### Home page
![VIew](https://github.com/CobbyElsonfx/courses-webapp/assets/109095646/008dbe36-9a96-4089-9bbe-c8887776b64f)


 ### Courses
![course area](https://github.com/CobbyElsonfx/courses-webapp/assets/109095646/6b3faea0-f2c1-4b16-87f0-1b2b772c4448)

### Modules
![modules](https://github.com/CobbyElsonfx/courses-webapp/assets/109095646/a08833c8-52ad-4516-ba22-073cd6d071dc)

### Mobile View

![Uploading mobile.PNG…]()



## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

Make sure you have the following prerequisites installed on your machine:

- [Node.js](https://nodejs.org/) (v14.0.0 or newer)
- [npm](https://www.npmjs.com/) (v6.0.0 or newer)

### Setup

1. Clone the repository to your local machine:
```
   git clone https://github.com/CobbyElsonfx/courses-webapp.git
```
<p>The project is made up of two main root directories called backed and webapp <br/> with file structures as illustrated below</p>

```
backend/
|-- node_modules/
|-- server.js
|-- package-lock.json
|-- package.json
|-- .gitignore
```

```
webapp/
|-- node_modules/
|-- public/
|-- src/
|   |-- assets/
|   |-- components/
|   |-- pages/
|   |-- redux/
|   |-- services/
|   |-- views/
|   |-- App.jsx
|   |-- main.jsx
|   |-- index.css
|-- .env
|-- .babelrc
|-- .eslintrc.json
|-- .stylintrc.json
|-- index.html
|-- package.json
|-- .gitignore
|-- postcss.config.js
|-- tailwind.config.js
|-- vite.config.js
```


### Install
#### To install the backend
1.Navigate to Backend Directory:
   
 ```
   cd backend
```
2. Install Dependencies:
 ```
   npm install
```
3. Start the app
 ```
   npm run start
```
#### To install the Front End
1.Navigate to Webapp Directory:
   
 ```
   cd webapp
```
2. Install Dependencies:
 ```
   npm install
```
3. Create a .env file in the webapp directory and define the necessary environment variables, such as the API endpoint authorisation token
 ```
  VITE_REACT_APP_API_TOKEN =""
```

4. Start the app
 ```
  npm run dev
```


<!-- Provide information on running tests -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👥 Authors <a name="authors"></a>

👤 **Author1**

- GitHub: [@githubhandle](https://github.com/githubhandle)
- Twitter: [@twitterhandle](https://twitter.com/twitterhandle)
- LinkedIn: [LinkedIn](https://linkedin.com/in/linkedinhandle)

👤 **Author2**

- GitHub: [@githubhandle](https://github.com/githubhandle)
- Twitter: [@twitterhandle](https://twitter.com/twitterhandle)
- LinkedIn: [LinkedIn](https://linkedin.com/in/linkedinhandle)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🔭 Future Features <a name="future-features"></a>

- [ ] **Implement additional Canvas LMS API endpoints for more data retrieval.**
- [ ] **Enhance the user interface with more interactive features.**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⭐️ Show your support <a name="support"></a>

If you like this project...

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🙏 Acknowledgements <a name="acknowledgements"></a>

I would like to thank...

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ❓ FAQ (OPTIONAL) <a name="faq"></a>

- **[Question_1]**
  - [Answer_1]

- **[Question_2]**
  - [Answer_2]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.
