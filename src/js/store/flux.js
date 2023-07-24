const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			// To be updated with action ""
			characterStarWars: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			// Fetching StarWars API (characters)
			fetchCharacterStarWars: () =>{
				fetch('https://www.swapi.tech/api/people')
				.then(response => response.json())
				.then(data => {setStore({characterStarWars: data.results})}).catch(err => err)
			},

			// Fetching StarWars API (planets)
			fetchPlanetsStarWars: () =>{
				fetch('https://www.swapi.tech/api/planets')
				.then(response => response.json())
				.then(data => {setStore({planetsStarWars: data.results})}).catch(err => err)
			},
			
		}
	};
};

export default getState;
