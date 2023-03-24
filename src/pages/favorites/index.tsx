import { useEffect, useState } from "react";
import { Layout } from "@/components/layouts";
import { FavoritesES, FavoritesList } from "@/components/ui";
import { localFavorites } from "@/utils";
import { Card, Grid } from "@nextui-org/react";


const FavoritesPage = () => {

  const [favoritesPokemon, setFavoritesPokemon] = useState<number[]>([]);
  useEffect(() => {
    setFavoritesPokemon(localFavorites.pokemons())
  }, []);
  

  return (
    <Layout title="Pokémon - Favoritos">
      {
        favoritesPokemon.length === 0
        ? ( <FavoritesES /> )
        : ( <FavoritesList pokemons={favoritesPokemon}/> )
      }
    </Layout>
  )
}

export default FavoritesPage;