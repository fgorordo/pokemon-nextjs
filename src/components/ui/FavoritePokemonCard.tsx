import { useRouter } from "next/router";
import { Card, Grid } from "@nextui-org/react"
import { FC } from "react"

interface Props {
  id: number
}

export const FavoritePokemonCard: FC<Props> = ({id}) => {
  const router = useRouter()
  const handleFavoriteClick = () => {
    router.push(`/pokemon/${id}`)
  }

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id} onClick={handleFavoriteClick}>
      <Card isHoverable isPressable css={{ padding: 10, dropShadow:"none" }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          width={"100%"}
          height={140}
        />
      </Card>
    </Grid>
  );
};
