const FeatureCard = ({ icon, iconColor, bgColor, title, description, index }) => {
  const delay = (index ?? 0) * 100; 

  return (
    <div
      className="flex flex-col items-center p-6 bg-white rounded-3xl shadow-soft-lg h-full"
      data-aos="fade-up"
      data-aos-delay={String(delay)}
    >
      <div className={`w-14 h-14 ${bgColor} rounded-full flex items-center justify-center`}>
        <i className={`${icon} ${iconColor} text-3xl`}></i>
      </div>
      <h4 className={`${iconColor} text-lg font-semibold mt-4`}>{title}</h4>
      <p className="text-gray-600 text-sm mt-2 flex-grow">{description}</p>
    </div>
  );
};

export default FeatureCard;
