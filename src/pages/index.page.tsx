import { gql, useQuery } from "@apollo/client";
import type { NextPage } from "next";

const YARETARA = {
  display: "flex",
  height: "100vh",
  "justify-content": "center",
  "align-items": "center",
  "font-size": "150px",
};

const Home: NextPage = () => {
  const { data } = useQuery(gql`
    query pokemonGetDaze {
      pokemons(first: 10) {
        name
      }
    }
  `);

  console.log(data);

  return <div style={YARETARA}>やれたらやる</div>;
};

// eslint-disable-next-line import/no-default-export
export default Home;
