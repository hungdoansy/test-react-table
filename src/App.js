import "./styles.css";
import Spreadsheet from "./Spreadsheet";

const Item = ({ key, value }) => {
  console.log("key", key);
  return <span>{value}</span>;
};

const List = () => {
  return [1, 2, 3, 4].map((v) => <Item key={v} value={v} />);
};

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Spreadsheet />
      <List />
    </div>
  );
}
