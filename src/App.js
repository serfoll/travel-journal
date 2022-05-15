import Header from "./components/header";
import data from "./data";
import Places from "./components/places";
import "./App.css";

const App = () => {
  const placeItems = data.map((t) => {
    return <Places place={t} key={t.id} />;
  });

  return (
    <div className="app">
      <Header />
      <section className="content-wrapper">{placeItems}</section>
    </div>
  );
};

export default App;
