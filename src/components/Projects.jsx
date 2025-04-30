import React from "react";
import employeeMSImage from "../assets/employee-ms.png";
import bookMSImage from "../assets/admin-dashboard.png";

const projects = [
  {
    id: 1,
    name: "UKM Literasi",
    technologies: "Corporate Social Responsibility",
    image: "src/assets/CSR1.png",
  },
  {
    id: 2,
    name: "HIMA Sistem Informasi",
    technologies: "Pengabdian Masyarakat",
    image: "src/assets/Pengmas.png",
  },
  {
    id: 3,
    name: "UKM Literasi",
    technologies: "Divisi Kreatif",
    image: "src/assets/KreatifUKMLiterasi.jpeg",
  },
];

const Projects = () => {
  const doubledProjects = [...projects, ...projects]; // Infinite loop effect

  return (
    <div className="text-white py-20 " id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-black text-center mb-12">My Experience</h2>

        <div className="relative overflow-hidden group">
          <div className="flex w-max animate-scroll-x group-hover:[animation-play-state:paused] gap-10">
            {doubledProjects.map((project, index) => (
              <div
                key={index}
                className="relative w-[380px] h-[260px] flex-shrink-0 rounded-3xl overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-105 group/card"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />

                {/* Overlay appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <h3 className="text-xl font-bold">{project.name}</h3>
                    <p className="text-sm">{project.technologies}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
