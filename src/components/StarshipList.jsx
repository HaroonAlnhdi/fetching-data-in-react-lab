
import StarshipCard from './StarshipCard';

const StarshipList = ({ starships }) => {
  if (!Array.isArray(starships)) {
    return null; // or handle the error in some other way
  }

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