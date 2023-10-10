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
			favorites :[],
			planets : [],
			planetdetail : {},
			vehicles : [],
			vehicledetail : {}
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
							data.result = {
								...data.result, 
								nature : "details"
							}
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
				let isInFav = store.favorites.some((item) => item._id == fav._id )
				if(isInFav === false){
					setStore({
						favorites : [...store.favorites, fav]
					})
				}
					
				
			},
			deleteFav : (favdelete) =>{
				let store = getStore()
				let auxFav = store.favorites.filter((item) => item._id != favdelete)
				setStore({
					favorites : auxFav
				})
			},
			getPlanets : async() =>{
				let store = getStore()
				try {
					let response = await fetch('https://www.swapi.tech/api/planets')
					let data = await response.json()
					let planets = await data.results

					planets.forEach(element => {
						fetch(element.url)
						.then(res => res.json())
						.then(data => {
							data.result = {
								...data.result, 
								nature : "planets"
							}
							setStore({
								planets : [...store.planets, data.result]
							})
						})
					});
				} catch (error) {
					console.log(error)
				}
			},
			getPlanet : (id) =>{
				fetch(`https://www.swapi.tech/api/planets/${id}`)
				.then(res => res.json())
				.then(data => {
					setStore({
						planetdetail : data.result
					})
				})
			},
			getVehicles : async() =>{
				let store = getStore()
				try {
					let response = await fetch('https://www.swapi.tech/api/vehicles')
					let data = await response.json()
					let vehicles = await data.results

					vehicles.forEach(element => {
						fetch(element.url)
						.then(res => res.json())
						.then(data => {
							data.result = {
								...data.result, 
								nature : "vehicles"
							}
							setStore({
								vehicles : [...store.vehicles, data.result]
							})
						})
					});
				} catch (error) {
					console.log(error)
				}
			},
			getVehicle : (id) =>{
				fetch(`https://www.swapi.tech/api/vehicles/${id}`)
				.then(res => res.json())
				.then(data => {
					setStore({
						vehicledetail : data.result
					})
				})
			}
		}
	};
};

export default getState;
