var type_choco = document.getElementById("variantchoco");
var number_choco = document.getElementById("quantchoco");

var cost_choco = 0;

type_choco.addEventListener("change", chocolate);
number_choco.addEventListener("change", chocolate);

function chocolate(){
	var type_choco = document.getElementById("variantchoco").value;
	var number_choco = document.getElementById("quantchoco").value;
	var rate_choco=0;
	var mrp_choco=0;
	if(type_choco=="0.5")
	{
		mrp_choco = 49;
		rate_choco = 47;
	}
	else if(type_choco=="1.0")
	{
		mrp_choco = 99;
		rate_choco = 95;
	}
	else if(type_choco=="2.0")
	{
		mrp_choco = 199;
		rate_choco = 190;
	}

	cost_choco = number_choco * rate_choco;

	renderHTML_choco(mrp_choco, rate_choco, cost_choco);
}

function renderHTML_choco(mrpchoco, ratechoco, costchoco){
	var mrpstring = " ";
	var opstring = " ";
	var coststring = " ";

	var mrp = document.getElementById("mrp_choco");
	var op = document.getElementById("our_price_choco");
	var price = document.getElementById("cost_choco");

	mrp.innerHTML = " ";
	op.innerHTML = " ";
	price.innerHTML = " ";

	mrpstring = 'MRP - <strike><i class="fa fa-inr" aria-hidden="true"></i> ' + mrpchoco + '</strike>';
	opstring = 'Our Price - <i class="fa fa-inr" aria-hidden="true"></i> ' + ratechoco;
	coststring = 'Cost - <i class="fa fa-inr" aria-hidden="true"></i> ' + costchoco;

	mrp.insertAdjacentHTML('beforeend',mrpstring);
	op.insertAdjacentHTML('beforeend',opstring);
	price.insertAdjacentHTML('beforeend',coststring);
}


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------


var type_kp = document.getElementById("variantkp");
var number_kp = document.getElementById("quantkp");

var cost_kp = 0;

type_kp.addEventListener("change", kp);
number_kp.addEventListener("change", kp);

function kp(){
	var type_kp = document.getElementById("variantkp").value;
	var number_kp = document.getElementById("quantkp").value;
	var rate_kp=0;
	var mrp_kp=0;
	if(type_kp=="0.5")
	{
		mrp_kp = 49;
		rate_kp = 45;
	}
	else if(type_kp=="1.0")
	{
		mrp_kp = 99;
		rate_kp = 90;
	}
	else if(type_kp=="2.0")
	{
		mrp_kp = 199;
		rate_kp = 180;
	}

	cost_kp = number_kp * rate_kp;

	renderHTML_kp(mrp_kp,rate_kp,cost_kp);
}

function renderHTML_kp(mrpkp, ratekp, costkp){
	var mrpstring = " ";
	var opstring = " ";
	var coststring = " ";

	var mrp = document.getElementById("mrp_kp");
	var op = document.getElementById("our_price_kp");
	var price = document.getElementById("cost_kp");

	mrp.innerHTML = " ";
	op.innerHTML = " ";
	price.innerHTML = " ";

	mrpstring = 'MRP - <strike><i class="fa fa-inr" aria-hidden="true"></i> ' + mrpkp + '</strike>';
	opstring = 'Our Price - <i class="fa fa-inr" aria-hidden="true"></i> ' + ratekp;
	coststring = 'Cost - <i class="fa fa-inr" aria-hidden="true"></i> ' + costkp;

	mrp.insertAdjacentHTML('beforeend',mrpstring);
	op.insertAdjacentHTML('beforeend',opstring);
	price.insertAdjacentHTML('beforeend',coststring);
}


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------


var chocobutton = document.getElementById("buttonchoco");
chocobutton.addEventListener("click", function(){
	var type_choco = document.getElementById("variantchoco").value;
	var number_choco = document.getElementById("quantchoco").value;
	var items_choco = document.getElementById("items");
	if(number_choco > 0)
	{
		var string = '<li><h7>&nbsp Sofit Chocolate Milk</h7><h6>&nbsp Tetrapack</h6> <h6>&nbsp Quantity : ' + number_choco + '</h6> <h6>&nbsp Variant : ' + type_choco + 'L </h6> <h7>&nbsp Cost : <i class="fa fa-inr" aria-hidden="true"></i>'+ cost_choco +' </h7></li> <hr>';
		items_choco.insertAdjacentHTML('beforeend',string);
		alert("Added To Cart. :-)");
	}
	else
		alert("Enter some quantity!!");
})



//-----------------------------------------------------------------------------------------------------------------------------------------------------------------



var kpbutton = document.getElementById("buttonkp");
kpbutton.addEventListener("click", function(){
	var type_kp = document.getElementById("variantkp").value;
	var number_kp = document.getElementById("quantkp").value;
	var items_kp = document.getElementById("items");
	if(number_kp > 0)
	{
		var string = '<li><h7>&nbsp Sofit Kesar Pista Milk</h7><h6>&nbsp Tetrapack</h6> <h6>&nbsp Quantity : ' + number_kp + '</h6> <h6>&nbsp Variant : ' + type_kp + 'L </h6> <h7>&nbsp Cost : <i class="fa fa-inr" aria-hidden="true"></i>'+ cost_kp +' </h7></li> <hr>';
		items_kp.insertAdjacentHTML('beforeend',string);
		alert("Added To Cart. :-)");
	}
	else
		alert("Enter some quantity!!");
})


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------





// var chocobutton = document.getElementById("buttonchoco");

// chocobutton.addEventListener("click", function() {
//   	var elem_choco = document.getElementById("animatechoco");
//   	var elem_cart = document.getElementById("cart");
//   	var top_pos = elem_choco.style.top;
//   	var right_pos = elem_choco.style.right;
//   	var bottom_pos = elem_choco.style.bottom;
//   	var left_pos = elem_choco.style.left;
//   	var cart_top = elem_cart.style.top;
//   	var cart_left = elem_cart.style.left;
//   	var id = setInterval(frame, 5);
//   	function frame() {
//     	if (top_pos==cart_top || left_pos==cart_left) {
//       		clearInterval(id);
//     	} 
//     	else {
//       		top_pos-=0.5;
//       		right_pos--;
//       		bottom_pos+=0.5;
//       		left_pos++;
//       		elem_choco.style.top = top_pos + 'px';
//       		elem_choco.style.right = right_pos + 'px';
//       		elem_choco.style.bottom = bottom_pos + 'px'; 
//       		elem_choco.style.left = left_pos + 'px'; 
//     	}
//   	}
// })