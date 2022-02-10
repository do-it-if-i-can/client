import { gql, useQuery } from "@apollo/client";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const { data } = useQuery(gql`
    query pokemonGetDaze {
      pokemons(first: 10) {
        name
      }
    }
  `);

  console.log(data);

  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-9xl font-bold">やれたらやる</h1>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;
