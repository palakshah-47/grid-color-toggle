import "./styles.css";
import { GridComponent } from "./GridComponent";

export default function App() {
  return (
    <div className="App">
      <GridComponent rows={4} columns={4} />
    </div>
  );
}
