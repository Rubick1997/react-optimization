import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoOutput from "./components/UI/Demo/DemoOutput";

function App() {
	const [showParagraph, setShowParagraph] = useState(false);
	const [allowToggle, setAlowToggle] = useState(false);

	const toggleParagraphHandler = useCallback(() => {
		if (allowToggle) {
			setShowParagraph((prevState) => !prevState);
		}
	}, [allowToggle]);

	const allowToggleHandler = () => {
		setAlowToggle(true);
	};

	return (
		<div className='app'>
			<h1>Hi there!</h1>
			<DemoOutput show={showParagraph} />
			<Button onClick={allowToggleHandler}>Allow Toggling</Button>
			<Button onClick={toggleParagraphHandler}>Toggle Parapraph</Button>
		</div>
	);
}

export default App;
