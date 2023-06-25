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
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { polygonMumbai } from 'wagmi/chains'
const chains = [polygonMumbai]
const projectId = 'YOUR_PROJECT_ID'
const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 2, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

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
    <>
      <WagmiConfig config={wagmiConfig}>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/homeoffers2" element={<HomeOffers2 />} />
      <Route path="/homeoffers1" element={<HomeOffers1 />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="/badges" element={<Badges />} />
    </Routes>
    </WagmiConfig>
    <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
}
export default App;
