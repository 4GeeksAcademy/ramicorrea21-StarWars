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
			people : [],
			character : {},
			favorites :[]
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
			getPeople : async () =>{
				let store = getStore()
				try {
					let response = await fetch('https://www.swapi.tech/api/people')
					let data = await response.json()
					let person = await data.results

					person.forEach(element => {
						fetch(element.url)
						.then(res => res.json())
						.then(data => {
							setStore({
								people : [...store.people, data.result]
							})
						})
					});
				} catch (error) {
					console.log(error)
				}
			},
			getCharacter : (id) =>{
				fetch(`https://www.swapi.tech/api/people/${id}`)
				.then(res => res.json())
				.then(data => {
					setStore({
						character : data.result
					})
				})
			},
			addToFav : (fav) =>{
				let store = getStore()
				setStore({
					favorites : [...favorites, fav]
				})
			}
		}
	};
};

export default getState;
