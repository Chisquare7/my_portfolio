import { useContext } from "react";
import About from "./components/about/about";
import Contact from "./components/contact/Contact";
import Index from "./components/index/index";
import ProductList from "./components/productList/productList";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";

const App = () => {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;
	return (
		<div
			style={{
				backgroundColor: darkMode ? "#222" : "white",
				color: darkMode && "white",
			}}
		>
			<Toggle />
			<div className="appContainer">
				<div className="appSection"><Index /></div>
				<div className="appSection"><About /></div>
				<div className="appSection"><ProductList /></div>
				<div className="appSection"><Contact /></div>
			</div>
			{/* <div><Index /></div>
			<div><About /></div>
			<div><ProductList /></div>
			<div><Contact /></div> */}
		</div>
	);
};

export default App;
