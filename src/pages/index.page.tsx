import type { NextPage } from "next";

const YARETARA = {
  display: "flex",
  height: "100vh",
  "justify-content": "center",
  "align-items": "center",
  "font-size": "150px",
};

const Home: NextPage = () => {
  return <div style={YARETARA}>やれたらやる</div>;
};

// eslint-disable-next-line import/no-default-export
export default Home;
