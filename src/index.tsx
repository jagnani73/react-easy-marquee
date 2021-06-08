import "./styles.css";

export interface AppProps {
  name?: string;
}

const App = ({ name }: AppProps) => {
  return <div>Hello, {name || "init"}</div>;
};

export default App;
