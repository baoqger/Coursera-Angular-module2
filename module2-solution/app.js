(function(){
	function ToBuyController(ShoppingListCheckOffService){
		var tobuy = this;
		tobuy.items = ShoppingListCheckOffService.getToBuyItem();
		
		tobuy.click = function(index){
			ShoppingListCheckOffService.migrateItem(index);
		};
	}
	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	
	function AlreadyBoughtController(ShoppingListCheckOffService){
		var bought = this;
		bought.items = ShoppingListCheckOffService.getBoughtItem();
	}
	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	
	function ShoppingListCheckOffService(){
		var checkoff = this;
		var toBuyItem = [
						{ name: "cookies", quantity: 10 },
						{ name: "apples", quantity: 6 },
						{ name: "cakes", quantity: 5 },
						{ name: "oranges", quantity: 3 },
						{ name: "ice cream", quantity: 4 },
					];
		var boughtItem = [];
		checkoff.getToBuyItem = function(){
			return toBuyItem;
		}
		checkoff.getBoughtItem = function(){
			return boughtItem;
		}
		checkoff.migrateItem = function(index){
			var migrateone = toBuyItem[index];
			toBuyItem.splice(index,1);
			boughtItem.push(migrateone);
		}
	}

	angular
		.module('ShoppingListCheckOff',[])
		.controller('ToBuyController', ToBuyController)
		.controller('AlreadyBoughtController',AlreadyBoughtController)
		.service('ShoppingListCheckOffService',ShoppingListCheckOffService);
})();