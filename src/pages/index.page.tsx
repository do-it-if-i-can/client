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

  // eslint-disable-next-line react/jsx-handler-names
  return (
    <div style={YARETARA} onClick={() => console.log("aiko")}>
      やれたらやる
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;
