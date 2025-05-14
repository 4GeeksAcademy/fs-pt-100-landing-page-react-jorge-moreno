import React from "react";
import MyNavbar from "./MyNavbar";
import MyFooter from "./MyFooter";
import MyCard from "./MyCard";
import MyJumbotron from "./MyJumbotron";

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<MyNavbar />
			<MyJumbotron/>
			<MyCard/>
			<MyFooter/>
		
		</div>
	);
};

export default Home;