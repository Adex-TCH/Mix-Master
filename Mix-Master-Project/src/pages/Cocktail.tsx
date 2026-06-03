import { Link, Navigate, useLoaderData } from "react-router-dom";
import axios from "axios";
import Wrapper from "../assets/wrappers/CocktailPage";
import { useQuery } from "@tanstack/react-query";
import type { QueryClient } from "@tanstack/react-query";

type CocktailLoaderData = {
  id: string;
};

type SingleDrink = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strAlcoholic: string;
  strCategory: string;
  strGlass: string;
  strInstructions: string;
  [key: string]: unknown;
};

type SingleCocktailResponse = {
  drinks: SingleDrink[] | null;
};

const singleCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const singleCocktailQuery = (id: string) => {
  return {
    queryKey: ["cocktail", id],
    queryFn: async () => {
      const { data } = await axios.get<SingleCocktailResponse>(
        `${singleCocktailUrl}${id}`
      );
      return data;
    },
  };
};

export const loader =
  (queryClient: QueryClient) =>
  async ({ params }: { params: { id: string } }): Promise<CocktailLoaderData> => {
    const { id } = params;
    await queryClient.ensureQueryData(singleCocktailQuery(id));
    return { id };
  };

const Cocktail = () => {
  const { id } = useLoaderData() as CocktailLoaderData;
  const { data } = useQuery(singleCocktailQuery(id));

  if (!data || !data.drinks) return <Navigate to="/" />;

  const singleDrink = data.drinks[0];

  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;

  const validIngredients = Object.keys(singleDrink)
    .filter((key) => key.startsWith("strIngredient") && singleDrink[key] !== null)
    .map((key) => singleDrink[key] as string)
    .filter(Boolean);

  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          back home
        </Link>
        <h3>{name} </h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span> {name}
          </p>
          <p>
            <span className="drink-data">category :</span> {category}
          </p>
          <p>
            <span className="drink-data">info :</span> {info}
          </p>
          <p>
            <span className="drink-data">glass :</span> {glass}
          </p>
          <p>
            <span className="drink-data">ingredients:</span>
            {validIngredients.map((item, index) => {
              return (
                <span key={`${item}-${index}`} className="ing">
                  {item} {index < validIngredients.length - 1 ? "," : ""}
                </span>
              );
            })}
          </p>
          <p>
            <span className="drink-data">instructions :</span> {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cocktail;

