import { useLoaderData } from "react-router-dom";
import axios from "axios";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
import { useQuery } from "@tanstack/react-query";
import type { QueryClient } from "@tanstack/react-query";

type LandingLoaderData = {
  searchTerm: string;
};

type Drink = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strAlcoholic: string;
  strGlass: string;
};

type DrinksResponse = {
  drinks: Drink[] | null;
};

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const searchCocktailQuery = (searchTerm: string) => {
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: async () => {
      const term = searchTerm || "a";
      const response = await axios.get<DrinksResponse>(
        `${cocktailSearchUrl}${term}`
      );
      return response.data.drinks;
    },
  };
};

export const loader =
  (queryClient: QueryClient) =>
  async ({ request }: { request: Request }): Promise<LandingLoaderData> => {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get("search") || "a";
    await queryClient.ensureQueryData(searchCocktailQuery(searchTerm));
    return { searchTerm };
  };

const Landing = () => {
  const { searchTerm } = useLoaderData() as LandingLoaderData;
  const { data: drinks } = useQuery(searchCocktailQuery(searchTerm));

  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  );
};

export default Landing;

