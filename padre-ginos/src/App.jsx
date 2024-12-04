import { createRoot } from "react-dom";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order now</h1>
      <Pizza
        name="Pepperoni"
        description="pep, cheese, n stuff"
        image={"/public/pizzas/pepperoni.webp"}
      />
      <Pizza
        name="Hawaiian"
        description="Pineapple, n so much goin on here"
        image={"/public/pizzas/hawaiian.webp"}
      />
      <Pizza
        name="Americano"
        description="American pizza"
        image={"/public/pizzas/big_meat.webp"}
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
