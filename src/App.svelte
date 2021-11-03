<script>

const header = [' #', 'Coin', 'Price', 'Price Change', '24hr Valume']
let coins = [];
let filterCoins = [];

const loadCoin = async () => {

	const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_
	cap_desc&per_page=100&page=1&sparkline=false`)
	const data = await res.json()

	coins = data;
	filterCoins = coins;
}
loadCoin();

const searchCoin = (event) => {
	const {value} = event.target;
	filterCoins = coins.filter( coin => coin.name.toLowerCase().includes(value.toLowerCase())  );

};

</script>

<main>
	<div class="container">
		<h2> GeckoCoin API</h2>
	</div>	
	<div class="container">
		<div class="row">
			
			<input type="text" 
			class="form-control 
			bg-dark text-white border-0 my-4"
			placeholder="Busca ..."
			on:keyup={ (ev) => searchCoin(ev) }>

			<table class="table table-dark">
				<thead>
					<tr>
					{#each header as head }
						<th>
							{head}
						</th>	
					{/each}
					</tr>
				</thead>
				<tbody>
					{#each filterCoins as coin, i }
						<tr>
							<td>{i + 1}</td>
							<td>
								<img src={coin.image} alt="coin" width="5%">
								<span>{coin.name}</span>
								<span class="text-muted text-uppercase">{coin.symbol}</span>
							</td>
							<td>${coin.current_price.toLocaleString()}</td>
							<td class={coin.price_change_24h > 0 ? 'text-success': 'text-danger'}>
								{coin.price_change_24h}</td>
							<td>${coin.total_volume.toLocaleString()}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>

</main>

<style>
	h2{
		color: #ccc
	}
</style>