import { Container, Text } from "@nextui-org/react";
import Image from "next/image";

export const FavoritesES = () => {
    return (
        <Container
            css={{
                display: "flex",
                flexDirection: "column",
                height: "calc(100vh - 100px)",
                alignItems: "center",
                justifyContent: "center",
                alignSelf: "center",
                gap: "4rem"
            }}
        >
            <Text h1 size={48} weight="light">No existen favoritos, agrega algunos pokémons</Text>
            <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg"
                alt="Pokemon Squirtle"
                width={200}
                height={200}
                style={{ opacity: "0.8" }}
            />
        </Container>
    )
}
