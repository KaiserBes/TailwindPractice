import { MainSection } from "./components/main-section/main-section";
import { Wrapper } from "./components/wrapper";
import { Header } from "./components/header";

const App = () => {
  return (
    <Wrapper>
      <Header />
      <MainSection />
    </Wrapper>
  );
};

export default App;
