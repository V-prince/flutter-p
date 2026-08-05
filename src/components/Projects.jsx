import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useState } from 'react';
import { fetchProjects } from '../Services/FirebaseService';




const Projects = () => {


  const [projects, SetProject] = useState([]);


  const projectDataFetch = async () => {
    const data = await fetchProjects()
    SetProject(data)
  }

  const groupedProjects = [];

  for (let i = 0; i < projects.length; i += 2) {
    groupedProjects.push(projects.slice(i, i + 2));
  }

  console.log(groupedProjects)

  useEffect(() => {
    projectDataFetch()
  }, [])

  return (
    <section className="py-section-gap-mobile md:py-section-gap-desktop transition-all duration-1000 opacity-100 translate-y-0" id="projects">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="font-headline-lg text-headline-lg text-white mb-4">Featured Work</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Case studies of apps that solve real problems with elegant engineering solutions.
          </p>
        </div>

      </div>

      <div className="w-full  px-4 sm:px-6 lg:px-10 py-10">
        <Swiper
          pagination={{
            type: 'fraction',
          }}
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={30}
          className="w-full relative"
        >

          {
            groupedProjects.map((group, index) => (

              <div className="flex md:flex-col gap-8 mb-5">
                <SwiperSlide key={index}>
                  {group.map((project, index) => (
                    <div key={index} className="glass-card  rounded-3xl mb-5  group">
                      <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 !== 0 ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""
                        }`}>
                        <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                          <div className="flex flex-wrap gap-2 mb-6">
                            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                              {project.appCategory}
                            </span>
                          </div>

                          <h3 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
                            {project.appName}
                          </h3>

                          <p className="mt-6 text-gray-400 text-base lg:text-lg leading-7">
                            {project.appDescription}
                          </p>


                          <div className="flex flex-wrap gap-2 mt-5">
                            {project?.technologies?.map((tech) => (
                              <span key={tech} className="px-3 py-1 bg-white/5 rounded-lg font-label-caps text-label-caps text-on-surface-variant">{tech}</span>
                            ))}
                          </div>

                          <div className='flex gap-x-5'>

                            <button className="mt-8 w-fit px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition">
                              <a href={project.androidAppLink} target='_blank'> Android</a>
                            </button>

                            {project.iosAppLink && <button className="mt-8 w-fit px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition">
                              <a href={project.iosAppLink} target='_blank'>ios</a>
                            </button>}


                          </div>

                        </div>

                        <div className="bg-zinc-900 rounded-3xl p-6 sm:p-10">
                          <Swiper
                            modules={[Autoplay]}
                            slidesPerView={1}
                            spaceBetween={10}
                            className="h-[350px] sm:h-[350px] md:h-[500px]"
                            loop={true}
                            autoplay={{
                              delay: 1000,
                              disableOnInteraction: false,
                            }}

                          >
                            {project?.appImages?.map((img, index) => (
                              <SwiperSlide
                                key={`p-${index}`}
                                className="flex items-center justify-center h-full rounded-2xl"
                              >
                                <img
                                  src={img}
                                  alt={`Project ${index + 1}`}
                                  className="h-[280px] sm:h-[300px] md:h-[450px] w-auto object-contain rounded-2xl shadow-xl transition duration-300 hover:scale-105"
                                />
                              </SwiperSlide>
                            ))}
                          </Swiper>
                        </div>

                      </div>
                    </div>
                  ))}
                </SwiperSlide>
              </div>
            ))
          }
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
