const ServiceCard = ({ title, description, image, delay }) => {
  return (
    <div className="col-lg-3 col-md-6">
      <div
        className="info-item bg-white border border-gray-200 rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg"
        data-delay={delay}
      >
        <div className="px-6 pt-6">
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
