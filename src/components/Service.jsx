import React, { useEffect, useRef, useState } from "react";

const portfolios = [
  {
    id: 1,
    title: "Data Cleaning",
    description: "Handling missing values, outliers, and inconsistent formats using Python and SQL.",
    image: "src/assets/datacleaning1.png",
  },
  {
    id: 2,
    title: "Exploratory Data Analysis",
    description: "Uncovering trends and insights using Pandas, Seaborn, and Matplotlib.",
    image: "src/assets/ExploratoryDataAnalysis.png",
  },
  {
    id: 3,
    title: "Dashboard Development",
    description: "Creating interactive dashboards using Tableau and Power BI.",
    image: "src/assets/DashboardDevelopment1.png",
  },
  {
    id: 4,
    title: "Statistical Analysis",
    description: "Running hypothesis testing and correlation analysis for business insights.",
    image: "src/assets/StatisticalAnalysis.png",
  },
  {
    id: 5,
    title: "Predictive Modeling",
    description: "Building regression and classification models using Scikit-learn.",
    image: "src/assets/PredictiveModeling.png",
  },
  {
    id: 6,
    title: "Reporting & Storytelling",
    description: "Translating data into business decisions through compelling visuals and narratives.",
    image: "src/assets/Reporting&Storytelling.png",
  },
];

const rotationAngles = ["-12deg", "-6deg", "0deg", "0deg", "6deg", "12deg"];

const Service = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div ref={sectionRef} className="py-20 text-black text-center" id="service">
      <h2 className="text-4xl font-bold mb-16">My Portfolio</h2>
      <div className="flex justify-center gap-6 flex-wrap md:flex-nowrap">
        {portfolios.map((item, index) => (
          <div
            key={item.id}
            className={`w-64 h-96 p-4 rounded-xl transform transition-opacity transition-transform duration-700 ease-in-out overflow-hidden
              ${visible ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-95 rotate-6"}
              bg-gray-800 hover:scale-105 hover:shadow-xl`}
            style={{
              rotate: visible ? rotationAngles[index] : "10deg",
              transitionDelay: `${index * 150}ms`, // 🌊 efek wave muncul
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              {item.title}
            </h3>
            <p className="text-gray-300 text-sm mt-2">{item.description}</p>
            <a href="#" className="text-green-400 mt-4 inline-block hover:text-blue-400">
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
