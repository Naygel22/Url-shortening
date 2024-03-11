type CardProps = {
  title: string;
  info: string;
  icon: string;
};
const cardsData = [
  {
    title: "Brand Recognition",
    info: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
    icon: "./images/icon-brand-recognition.svg",
  },
  {
    title: "Detailed Records",
    info: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    icon: "./images/icon-detailed-records.svg",
  },
  {
    title: "Fully Customizable",
    info: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    icon: "./images/icon-fully-customizable.svg",
  },
];

function Card({ title, info, icon }: CardProps) {
  return (
    <div className="card">
      <div className="cardIcon">
        <img src={icon} alt={title} />
      </div>
      <div className="cardTitle">{title}</div>
      <div className="cardInfo">{info}</div>
    </div>
  );
}

export function AdvancedStatistics() {
  return (
    <div className="advancedStatistics">
      <h1 className="advancedStatisticsTitle">Advanced Statistics</h1>
      <p className="advancedStatisticsText">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <div className="advancedStatisticsCards">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
}
