document.addEventListener("DOMContentLoaded", function () {
  // Fetch JSON data (you can replace this with your JSON URL)
  const jsonData = {
    sections: [
      {
        title: "Personal Information",
        type: "personal_information",
        content: {
          fullname: "Facundo J Gonzalez",
          cv_link: "https://cv.gonzalezfj.com/",
          web_link: "https://gonzalezfj.com/",
          title: "Platform Engineering Lead @ taringa! | K8s, GCP.",
        },
      },
      {
        title: "Education",
        type: "education",
        content: [
          {
            institution:
              "National University of San Juan (UNSJ - Universidad Nacional de San Juan)",
            state: "San Juan, Argentina",
            degree: "Degree in Computer Science",
            start_date: "2009",
            end_date: "2018",
            gpa: "8.85 out of 10",
          },
        ],
      },
      {
        title: "Experience",
        type: "experience",
        content: [
          {
            company: "Taringa!",
            location: "Remote",
            positions: [
              {
                position: "Platform Engineering Lead",
                start_date: "June 2023",
                end_date: "Present",
                summary:
                  "As Taringa's Platform Engineering Lead, I designed and managed scalable cloud infrastructure, led the development of internal tools, collaborated across teams for application deployment, forged strategic partnerships, managed networked application environments, and established CI/CD pipelines for efficient software delivery.              ",
                highlights: [
                  "Designed and implemented scalable and reliable cloud architecture to enhance organizational infrastructure.",
                  "Led the development of internal tools dedicated to infrastructure management, monitoring, and scalability.",
                  "Collaborated extensively with mobile, backend, data, and product teams, contributing to the architectural deployment of algorithms, offering operational support for both new and existing applications, and effectively diagnosing production issues.",
                  "Actively sought out and developed new technological partnerships to benefit the company's strategy and business",
                  "Assumed responsibility for the design and implementation of continuous integration and deployment (CI/CD) pipelines to improve application development and release processes.",
                ],
              },
            ],
          },
          {
            company: "IOV Labs",
            location: "Remote",
            positions: [
              {
                position: "Technical Lead",
                start_date: "September 2022",
                end_date: "May 2023",
                summary:
                  "In my role as a technical leader, I foster team collaboration, define and monitor project metrics, ensure scalable architecture, craft technical proposals, and maintain updated documentation for effective knowledge sharing.",
                highlights: [
                  "As a technical leader, my focus is on facilitating communication and collaboration among team members. I ensure everyone is aligned with project objectives and has a clear understanding of their roles and responsibilities. I work to identify and resolve any issues that may hinder project progress.",
                  "I defined and monitored relevant project metrics and use this information to guide decision-making. I also use these metrics to assess team progress and provide valuable and constructive feedback.",
                  "I work closely with the technical leadership team and development teams to ensure that the architecture is scalable, flexible, and compliant with business requirements and industry standards.",
                  "I write technical proposals and effectively communicate them to the development team.",
                  "I ensure that documentation is up-to-date and available to the entire team, ensuring that knowledge is shared and preserved.",
                ],
              },

              {
                position: "Sr Backend Developer",
                start_date: "April 2022",
                end_date: "August 2022",
                summary:
                  "As a Senior Backend Developer, I led the implementation and optimization of a high-traffic API using NodeJS and a large amount data in a graph database. Furthermore, I played a fundamental role in designing and developing a cutting-edge Gamification System that incorporated NFT rewards and an on-ramp mechanism using MercadoPago.",
                highlights: [
                  "Implemented and optimized a high traffic API with microservices in NodeJS, Docker, SocketIO, RabbitMQ, and Redis",
                  "Managed and developed solutions in a graph database, and an event log in ElasticSearch with many TB of data",
                  "Kubernetes, Cloudflare, and GCP management",
                  "Designed and Developed a Gamification System with rewards in NFTs and MercadoPago integration backed with microservices in NestJS, RedLock, BullQueue and BigQuery",
                ],
              },

              {
                position: "Ssr FullStack Developer",
                start_date: "October 2020",
                end_date: "March 2022",
                summary:
                  "As a FullStack Developer I actively participate in the design and implementation of new solutions and manintenance of existing ones. This involved creating efficient image upload and serving solution, designing on-demand Quality Assurance (QA) environments, improving search capabilities, and implementing automatic service scaling for improved performance",
                highlights: [
                  "Developed a system for images to upload with TUS protocol and serving using imgproxy.",
                  "Designed and implemented ephemeral on demand QA environments using technologies such as Docker, Kubernetes, Kustomize, Jenkins, Bash, and Cloudflare Dynamic DNS.",
                  "Implemented Redis Search to enable image searching using Google Vision metadata.",
                  "Implemented automatic scaling of services in Kubernetes using HPA (Horizontal Pod Autoscaling). Managed observability with tools like NewRelic, Grafana, and Google Cloud Monitoring.",
                ],
              },
              {
                position: "Software Engineer Contractor (Web Performance)",
                start_date: "April 2020",
                end_date: "September 2022",
                summary:
                  "Enhanced front-end performance using optimization techniques and tools, improved scalability through auto-scaling and caching, and accelerated server-side rendering. Led development with NextJS and AMP, established performance benchmarks, and streamlined CI/CD pipelines",
                highlights: [
                  "Front-end performance optimization techniques and tools such as Webpack Bundle Analyzer and Lighthouse",
                  "Improved scalability defining autoscaling and load balacing strategies as well as implementing caching techniques in the CDN and the application layer. Going from ",
                  "Improved the Server Side rendering loading times using techniques such as granular code splitting with Webpack and lazy loading with loadable components from 20se to 7sec",
                  "Lead a new development using NextJS as the main framework building views that loads directly from the edge using ISG (Incremental Static Generation) and SSR (Server Side Rendering) techniques",
                  "Established a baseline performance budget for the application and monitored it using Lighthouse CI and custom dashboard",
                  "Improved the CI/CD pipeline in Jenkins from 40min to 12min",
                ],
              },
            ],
          },
          {
            company: "Provincial Legislature of San Juan",
            location: "San Juan, Argentina",
            positions: [
              {
                position: "Technical Lead",
                start_date: "2016",
                end_date: "2020",
                summary:
                  "Managed projects, implemented CI/CD, and handled infrastructure configuration.",
                highlights: [
                  "Managed projects and monitored progress and established deadlines.",
                  "Implemented CI/CD using GitLab with Kubernetes linux and Windows Server runners.",
                  "Configured a new data center working side by side with the dell support team, Deployed a Kubernetes with Rancher over a vSphere cluster, Cold storage with Dell Data Domain, and Hot storage in Dell EMC.",
                ],
              },
            ],
          },
          {
            company: "Provincial Legislature of San Juan",
            location: "San Juan, Argentina",
            positions: [
              {
                position: "Fullstack Developer",
                start_date: "2014",
                end_date: "2016",
                summary:
                  "Developed various systems, including the Income Tax system and integrated systems for San Juan's Legal Digest.",
                highlights: [
                  "Developed the Income Tax system using Angular, SQL Server, and C# .NET Core.",
                  "Created an attendance control system with a React-based UI on Raspberry Pi and ZKTECO kiosk, backed by a NodeJS orchestrator and MySQL.",
                  "Built integrated systems for San Juan's Legal Digest, including a multi-tenant Angular consultation website with a NodeJS backend, Elasticsearch-based search engine with Redis caching, a Go-based backoffice, PosgreSQL, and NextJS. Developed an offline-first mobile app using Ionic and Sqlite FTS.",
                ],
              },
            ],
          },
          {
            company: "TravelPaq",
            location: "San Juan, Argentina",
            positions: [
              {
                position: "Freelance",
                start_date: "2017",
                end_date: "2019",
                summary:
                  "Developed a multi-gateway payment SDK and a search API for tour packages.",
                highlights: [
                  "Developed a multi-gateway payment SDK in React, transpiled to portable JavaScript, and created a playground with checkout examples in React, Angular, and Vanilla JS.",
                  "Built a REST API for bank promotion by gateway/merchant, integrating MercadoPago, PayU, TodoPago JS SDKs.",
                  "Developed a search API for tour packages using Java 11, Maven, Hibernate, MySQL, and AWS S3.",
                ],
              },
            ],
          },
          {
            company: "National University of San Juan",
            location: "San Juan, Argentina",
            positions: [
              {
                position: "Fullstack Developer",
                start_date: "2015",
                end_date: "2016",
                summary:
                  "Contributed to the development of the Integrated Information Security System (SIIS).",
                highlights: [
                  "Contributed to the development of the Integrated Information Security System (SIIS), a project aimed at controlling and communicating with all police stations in the province. Utilized AngularJS and CakePHP.",
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  // Function to create sections based on the JSON data
  function createSections(data) {
    const resume = document.getElementById("resume");

    data.sections.forEach((section) => {
      const sectionDiv = document.createElement("div");
      sectionDiv.classList.add("section");

      const sectionTitle = document.createElement("h2");
      sectionTitle.textContent = section.title;

      sectionDiv.appendChild(sectionTitle);

      if (section.type === "personal_information") {
        // Create and add personal information
        const personalInfo = document.createElement("div");
        personalInfo.classList.add("personal-info");
        personalInfo.innerHTML = `
                    <p><strong>CV Link:</strong> <a href="${section.content.cv_link}" target="_blank">${section.content.cv_link}</a></p>
                    <p><strong>Web Link:</strong> <a href="${section.content.web_link}" target="_blank">${section.content.web_link}</a></p>
                    <p><strong>Title:</strong> ${section.content.title}</p>
                `;
        sectionDiv.appendChild(personalInfo);
      } else if (section.type === "education") {
        // Create and add education details
        section.content.forEach((edu) => {
          const education = document.createElement("div");
          education.classList.add("education");
          education.innerHTML = `
                        <p><strong>Institution:</strong> ${edu.institution}</p>
                        <p><strong>Location:</strong> ${edu.state}</p>
                        <p><strong>Degree:</strong> ${edu.degree}</p>
                        <p><strong>Start Date:</strong> ${edu.start_date}</p>
                        <p><strong>End Date:</strong> ${edu.end_date}</p>
                        <p><strong>GPA:</strong> ${edu.gpa}</p>
                    `;
          sectionDiv.appendChild(education);
        });
      } else if (section.type === "experience") {
        // Create and add work experience details
        section.content.forEach((experience) => {
          const exp = document.createElement("div");
          exp.classList.add("experience");

          const expHeader = document.createElement("div");
          expHeader.classList.add("exp-header");
          expHeader.innerHTML = `
                        <h3>${experience.company}</h3>
                        <p><strong>Location:</strong> ${experience.location}</p>
                    `;
          exp.appendChild(expHeader);

          experience.positions.forEach((position) => {
            const positionDiv = document.createElement("div");
            positionDiv.classList.add("position");

            const positionTitle = document.createElement("h4");
            positionTitle.textContent = position.position;

            const positionDetails = document.createElement("div");
            positionDetails.classList.add("position-details");
            positionDetails.innerHTML = `
                            <p><strong>Start Date:</strong> ${
                              position.start_date
                            }</p>
                            <p><strong>End Date:</strong> ${
                              position.end_date
                            }</p>
                            <p><strong>Summary:</strong> ${position.summary}</p>
                            <ul>
                                ${position.highlights
                                  .map((highlight) => `<li>${highlight}</li>`)
                                  .join("")}
                            </ul>
                        `;

            positionDiv.appendChild(positionTitle);
            positionDiv.appendChild(positionDetails);

            exp.appendChild(positionDiv);
          });

          sectionDiv.appendChild(exp);
        });
      }

      resume?.appendChild(sectionDiv);
    });
  }

  // Call the function to create sections with JSON data
  createSections(jsonData);
});

const darkModeToggleBtn = document.getElementById("dark-mode-toggle");
let theme = localStorage.getItem("theme");
if (theme === "dark") enableDarkMode();
darkModeToggleBtn?.addEventListener("click", () => {
  theme = localStorage.getItem("theme");
  if (theme === "dark") {
    enableLightMode();
  } else {
    enableDarkMode();
  }
});
function enableDarkMode() {
  if (darkModeToggleBtn) darkModeToggleBtn.style.fill = "white";
  localStorage.setItem("theme", "dark");
  document.body.classList.toggle("latex-dark");
}
function enableLightMode() {
  if (darkModeToggleBtn) darkModeToggleBtn.style.fill = "#444";
  localStorage.setItem("theme", "light");
  document.body.classList.toggle("latex-dark");
}
window
  .matchMedia("(prefers-color-scheme:dark)")
  .addListener((e) => (e.matches ? enableDarkMode() : enableLightMode()));
