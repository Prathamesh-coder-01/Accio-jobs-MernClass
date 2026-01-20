import { useState } from "react";
import ViewComponent from "./components/ViewComponent";


function App() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleComponent = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleComponent}>
        {isVisible ? "Hide" : "View"}
      </button>

      {isVisible && <ViewComponent />}
    </div>
  );
}

export default App;
