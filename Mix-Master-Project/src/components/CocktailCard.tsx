import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/CocktailCard";

type CocktailCardProps = {
  image: string;
  name: string;
  id: string;
  info: string;
  glass: string;
};

const CocktailCard = ({ image, name, id, info, glass }: CocktailCardProps) => {
  return (
    <Wrapper>
      <div className="img-container">
        <img src={image} alt={name} className="img" />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>

        <Link className="btn" to={`/cocktail/${id}`}>
          details
        </Link>
      </div>
    </Wrapper>
  );
};

export default CocktailCard;

