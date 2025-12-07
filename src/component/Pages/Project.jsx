import '../CSS/Project.css';
function Project() {
  const projectData = [
    {
      title: "Online Shopping",
      subtitle: "Shop",
      description:
      "A fully functional online shopping web application featuring product browsing, category filtering, cart management, and a complete checkout flow. Users can add/remove items, view order summaries, and track their purchase history. Built with a responsive front-end and a robust backend including authentication, APIs, and database integration.",
      
      tools: [
        "Java",
        "Springboot",
        "MySql",
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
      ],
      code: "https://github.com/Jana-2002-143/onlineshop",
      demo: "https://limitedonlineshop.netlify.app/",
      features: [
        "Efficient state management for cart system",
        "Error-free, optimized backend with structured REST APIs",
        "Clean component-based UI with reusable layout",
        "Backend built with REST API & database",
        "Product listing, search, and category filters",
        "Add to cart and remove from cart functionality",
        "Fully responsive UI for mobile and desktop",
      ],
    },
    {
      title: "Bus Reservation",
      subtitle: "BookBus",
      description:
      "The Bus Reservation System is a full-stack web application designed to make booking, managing, and tracking bus tickets simple and reliable. It allows users to search for buses, choose seats, confirm bookings, and view or cancel their tickets.",
      
      tools: [
        "Java",
        "Springboot",
        "MySql",
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
      ],
      code: "https://github.com/Jana-2002-143/BusReservation.git",
      demo: "https://limitedbusbooking.netlify.app",
      features: [
        "User-friendly interface for booking and viewing tickets",
        "Search buses by location, date, and route",
        "Real-time seat selection and availability updates",
        "Secure booking system with data validation",
        "Ticket cancellation with instant status update",
        "Admin controls for managing routes, buses, and booking records",
        "Fully responsive UI for mobile and desktop",
      ],
    },
    {
      title: "Tasty Kitchen",
      subtitle: "Order Favourite Food",
      description:
        "Designed and developed a responsive online food ordering platform inspired by Swiggy and Zomato. Includes intuitive navigation, menu sections, blog page, contact page, and a full reservation system.",
      tools: ["HTML", "CSS", "JavaScript", "ReactJS"],
      code: "https://github.com/Jana-2002-143/All-Food.git",
      demo: "https://all-food001.netlify.app/",
      features: [
        "Responsive design with seamless navigation",
        "Dynamic reservation form",
        "Elegant styling with hover effects",
        "Consistent branding across pages",
      ],
    },
    {
      title: "Dashboard Analysis",
      subtitle: "Corborate Details Page",
      description: "Built a professional corporate dashboard website.",
      tools: ["HTML", "CSS", "JavaScript", "ReactJS"],
      code: "https://github.com/Jana-2002-143/Newproject.git",
      demo: "https://dashboard-jana.netlify.app",
      features: [
        "Corporate Data",
        "Flexbox-based navigation",
        "charts for to use Details",
        "Clean presentation of Dashboard info",
      ],
    },
  ];

  return (
    <div className="Projects">
      <h1>Featured Projects</h1>
      <p className="projectsummary">
        A collection of projects showcasing my full-stack development skills and
        creativity
      </p>

      <div className="projects-container">
        {projectData.map((p, i) => (
          <div key={i} className="project-card">
            <div className="project-header">
              <h2>{p.title}</h2>
              <p className="project-sub">{p.subtitle}</p>
            </div>

            <p className="project-desc">{p.description}</p>

            <div className="project-tools">
              {p.tools.map((t, index) => (
                <span key={index} className="project-tool">
                  {t}
                </span>
              ))}
            </div>

            <div className="project-links">
              <a
                className="project-btn code"
                href={p.code}
                target="_blank"
                rel="noreferrer"
              >
                Code
              </a>
              <a
                className="project-btn demo"
                href={p.demo}
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>

            <div className="project-features">
              <h3>Key Features</h3>
              <ul>
                {p.features.map((f, index) => (
                  <li key={index}>{f}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
