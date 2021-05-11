import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoOutput from "./components/UI/Demo/DemoOutput";

function App() {
	const [showParagraph, setShowParagraph] = useState(false);

	const toggleParagraphHandler = useCallback(() => {
		setShowParagraph((prevState) => !prevState);
	},[]);

	return (
		<div className='app'>
			<h1>Hi there!</h1>
			<DemoOutput show={false} />
			<Button onClick={toggleParagraphHandler}>Toggle Parapraph</Button>
		</div>
	);
}

export default App;
