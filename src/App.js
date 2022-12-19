import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Row from "./components/Row/Row";
import Nav from "./Nav/Nav";
import request from "./requests";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Row
        title="NETFLIX Orginals"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Movies" fetchUrl={request.fetchTredding} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Popular Movies" fetchUrl={request.fetchPopularMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="TopRated Movies" fetchUrl={request.fetchTopRateMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
      <Footer />
    </div>
  );
}

export default App;
