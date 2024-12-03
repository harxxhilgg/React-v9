const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "The pepperoni pizza",
      description: "Some dope pizza yo",
    }),
    React.createElement(Pizza, {
      name: "Americano pizza",
      description: "French fries and hot dogs, wtf italy yo",
    }),
    React.createElement(Pizza, {
      name: "Hawaiian",
      description: "unnholy potato mesh, wtf is this"
    }),
  ]
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));