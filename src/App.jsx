import { Footer } from "./components/pages/home-components";
import { Home } from "./pages";

export const App = () => {
  return (
    <>
      <div className="container">
        <Home />
      </div>
      <Footer />
    </>
  );
};