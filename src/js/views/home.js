import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Characters } from "./characters";
import { Planets } from "./planets";

export const Home = () => (
	<div className="container text-center mt-5">
		
		<div className="mt-4 ">
			<Characters/>
		</div>

		<div className="mt-4 ">
			<Planets/>
		</div>	
			
			
		
	</div>
);
