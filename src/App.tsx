import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Badges from "./pages/Badges";
import Login from "./pages/Login";
import HomeOffers2 from "./pages/HomeOffers2";
import HomeOffers1 from "./pages/HomeOffers1";
import Offers from "./pages/Offers";
import Landing from "./pages/Landing";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/homeoffers2":
        title = "";
        metaDescription = "";
        break;
      case "/homeoffers1":
        title = "";
        metaDescription = "";
        break;
      case "/offers":
        title = "";
        metaDescription = "";
        break;
      case "/badges":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/homeoffers2" element={<HomeOffers2 />} />
      <Route path="/homeoffers1" element={<HomeOffers1 />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="/badges" element={<Badges />} />
    </Routes>
  );
}
export default App;
