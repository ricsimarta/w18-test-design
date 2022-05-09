const beers = {
	id: "beers",
	logo: "Best Beers",
	button: "details",
	cards: [
		{
			title: "Mango Bay",
			sub: "Mad Scientist Beer",
			text: "Pale Ale - American"
		},
		{
			title: "Távoli Galaxis",
			sub: "Rothbeer Brewery",
			text: "IPA - American"
		},
		{
			title: "Flying Rabbit AIPA",
			sub: "MONYO Brewing Co.",
			text: "IPA - American"
		},
		{
			title: "Liquid Cocaine",
			sub: "Mad Scientist Beer",
			text: "IPA - Imperial"
		},
		{
			title: "Organic Chocolate Stout",
			sub: "Samuel Smith Old Brewery",
			text: "Stout - English"
		},
		{
			title: "Bracia",
			sub: "Thornbridge Brewery",
			text: "Strong Ale - English"
		},
		{
			title: "Oatmeal Stout",
			sub: "Samuel Smith Old Brewery",
			text: "Stout - Oatmeal"
		},
		{
			title: "Black Tokyo Horizon",
			sub: "BrewDog",
			text: "Stout - American Imperial"
		},
		{
			title: "Vintage Ale",
			sub: "Fuller's",
			text: "Old Ale"
		},
		{
			title: "All the Leaves are Brown",
			sub: "Tempest Brewing Company",
			text: "Brown Ale - American"
		},
	]
}
console.log(beers);

const loadEvent = () => {
	const rootElement = document.getElementById('root');

	const headerContent = `
		<header>${beers.logo}<span class="material-icons md-36">menu</span></header>
	`;

	let mainContent = "";

	beers.cards.map((beer, index) => {
		mainContent += `
			<div class="card">
				<div class="number">${index + 1}</div>
				<p class="title">${beer.title}</p>
				<p class="sub">${beer.sub}</p>
				<p class="text">${beer.text}</p>
				<button>${beers.button}<span class="material-icons md-36">arrow_forward</span></button>
			</div>
		`;
	});

	rootElement.insertAdjacentHTML("beforeend", headerContent);
	rootElement.insertAdjacentHTML("beforeend", `<div class="container">${mainContent}</div>`);
}

window.addEventListener('load', loadEvent);