import Banner from "./components/Banner";
import Feature from "./components/Feature";
import Nav from "./components/Nav";
import Stat from "./components/Stat";

export default function Home() {
  return (
    <>
      <section >
        <Nav />
        <Banner />
        <Stat />
        <Feature />
      </section>
    </>
  );
}
