type CardProps = {
  title: string;
  info: string;
  icon: string;
};

export function Card({ title, info, icon }: CardProps) {
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