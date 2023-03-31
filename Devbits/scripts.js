const apiKey = 'YOUR_API_KEY';
const apiUrl = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=MSFT&apikey=${apiKey}`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const stockList = document.getElementById('stock-list');
        const price = data['Global Quote']['05. price'];

        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>Microsoft Corporation</span>
            <span>${price}</span>
            <button>Buy</button>
            <button>Sell</button>
        `;

        stockList.appendChild(listItem);
    })
    .catch(error => console.error(error));
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

		$(document).ready(function(){
			// Get the user's remaining money from the server
			$.ajax({
				url: 'get_money.php',
				method: 'GET',
				success: function(data){
					$('#money').text(data);
				}
			});

			// Load the user's portfolio from the server
			$.ajax({
				url: 'get_portfolio.php',
				method: 'GET',
				success: function(data){
					var portfolio = JSON.parse(data);
					portfolio.forEach(function(item){
						// Create a row for the portfolio item
						var row = $('<tr></tr>');
						row.append('<td>' + item.name + '</td>');
						row.append('<td>' + item.quantity + '</td>');
						row.append('<td>' + item.value + '</td>');
						row.append('<td><button onclick="sell(' + item.id + ')">Sell</button></td>');
						$('#portfolio').append(row);
					});
				}
			});
		});

		function sell(itemId){
			// Show a confirmation dialog before selling
			if(confirm('Are you sure you want to sell this item?')){
				// Sell the item using AJAX
				$.ajax({
					url: 'sell_item.php',
					method: 'POST',
					data: {itemId: itemId},
					success: function(data){
						alert('Item sold successfully!');
						// Reload the page to update the portfolio and money
						location.reload();
					}
				});
			}
		}
      
        const box = document.querySelector(".box");

        box.addEventListener("mouseover", () => {
          box.style.animation = "none";
        });
        
        box.addEventListener("mouseout", () => {
          box.style.animation = "move 1s ease-in-out infinite";
        });
        