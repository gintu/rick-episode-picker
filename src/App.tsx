import * as React from "react";
import "./styles.css";
import { store as Store } from "./store";

export default function App(): JSX.Element {
  let store = React.useContext(Store);
  return (
    <div className="App">
      <h1>Rick and Morty Episode Picker</h1>
      <h2>Pick your favorite episode</h2>
    </div>
  );
}
