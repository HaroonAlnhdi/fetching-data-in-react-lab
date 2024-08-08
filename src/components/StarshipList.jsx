
import StarshipCard from './StarshipCard';

const StarshipList = ({ starships }) => {
  return (
    <section>
      <h2>Starships ({starships.length})</h2>
      <ul>
        {starships.map((starship, index) => (
          <StarshipCard key={index} starship={starship} />
        ))}
      </ul>
    </section>
  );
};

export default StarshipList;