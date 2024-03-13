import { cardsData } from "../constants";
import { Card } from "./Card";

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
