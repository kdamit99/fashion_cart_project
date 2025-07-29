type FashionCardProps = {
  image: string;
  title: string;
  highlight: string;
};

const FashionCard = ({ image, title, highlight }: FashionCardProps) => {
  return (
    <div className="p-1 bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 border border-teal-100">
      <img
        src={image}
        alt={title}
        className="w-full h-96 object-cover rounded-2xl bg-teal-50"
      />
      <div className="p-3 space-y-1">
        <h3 className="text-base font-semibold text-teal-900">{title}</h3>
        <p className="text-sm text-teal-500">{highlight}</p>
      </div>
    </div>
  );
};

export { FashionCard };
