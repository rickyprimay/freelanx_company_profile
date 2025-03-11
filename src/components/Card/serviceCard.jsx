import React from "react";

const ServiceCard = ({ title, description, image, index }) => {
  const delay = index * 100; 

  return (
    <div
      className="col-lg-3 col-md-6 h-full"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="info-item bg-white border border-gray-200 rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg flex flex-col h-full">
        <div className="px-6 pt-6 flex-grow">
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <p className="text-gray-600 text-sm mt-1">{description}</p>
        </div>
        <div className="mt-4">
          <img className="rounded-b-2xl w-full object-cover" src={image} alt={title} />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
