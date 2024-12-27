import Examples from "./components/Examples";
import CoreConcepts from "./components/CoreConcepts";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
