var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,

	user: "root",
	password: "eastview32",
	database: "bamazon"

});

connection.connect(function(err) {
	if (err) throw err;
	console.log("connected as id " + connection.threadId);

	connection.query("SELECT * FROM products", function(err, result, fields) {
		if (err) throw err;
		//console.log(result);
		//console.log(result[1]);
		// console.log(result[3].product_name +"  |  "+ result[4].product_name +"\n" +result[5].product_name +"  |  "+result[6].product_name);
		

		for(var i = 0; i<result.length; i++){
			console.log(result[i].item_id+ "  |  " +result[i].product_name+ "  |  " +result[i].department_name+ "  |  " +result[i].price+ "  |  " +result[i].stock_quantity);
		}

		customerOrder();

			function customerOrder() {
				inquirer
				.prompt({
					name: "item_id",
					message: "What is the product id you are looking for?"
				})
					.then(function(answers) {
					var itemId = parseInt(answers.item_id);

					//check to see if the number entered is available 
						
						console.log("\n" +result[itemId].item_id+ "  |  " +result[itemId].product_name+ "  |  " +result[itemId].department_name+ "  |  " +result[itemId].price+ "  |  " +result[itemId].stock_quantity);
						// if (itemId === 1) {
						// 	console.log("ID is 1");
						// 	buyProduct();
						// }else{
						// 	console.log("Ooopps, that is an invalid ID, please try again");
						// }
						console.log("\n" +"The price for that item is: $" +result[itemId].price+"\n");
						buyProduct();

					})

			}


	});




});


function buyProduct() {
	//ask about # of units
	
	connection.query("SELECT * FROM products", function(err, result, fields) {
		if (err) throw err;
		//console.log(result);
		// console.log(result[1]);
		// // console.log(result[3].product_name +"  |  "+ result[4].product_name +"\n" +result[5].product_name +"  |  "+result[6].product_name);
		// customerOrder();
	});


	inquirer
	.prompt({
		name: "quantity",
		message: "How many units would you like to buy?"
	})
	.then(function(answers) {
		var quantity = parseInt(answers.quantity);
		//var total = quantity*result[itemId].price;

		//check to see if the number entered is available 
		if (quantity == 3) {
			console.log("Your total is: $90");
		}else{
			console.log("\n"+"Ooopps, looks like there isn't that many left in inventory, there's only 10 units available"+"\n");
			buyProduct();
			
		}


	});

}



//Check database to ensure there is enough units available
//If there isn't enough return phrase "insufficient quantity"

//If there is enough inventory, update SQL database to reflect new quantity available
//Show total cost of purchase(item price * quantity)