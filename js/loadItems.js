$('document').ready(function(){
	loadKazanSmall();
	loadKazanBig();
	loadAfganBlack();
	loadAfganDouble();
	loadPolShum();
	loadLyagan();
	loadPhcak();
	loadOven();
});

function loadKazanSmall() {
	$.getJSON('/json/kazan_small.json', function(data){
		var item = "";
		for (var key in data){
			item += '<div class="market__small-item"><div class="market__small-column">';
			
				item += '<div class="market__small-img"><img src="' + data[key]['img1'] + '"></div>';
				item += '<div class="market__small-name">' + data[key]['name'] + '</div>';
				
				item += '<div class="market__small-desc"><ul>';
					item += '<li>' + data[key]['desc1'] + '</li>';
					item += '<li>' + data[key]['desc2'] + '</li>';
					item += '<li>' + data[key]['desc3'] + '</li>';
					item += '<li>' + data[key]['desc4'] + '</li>';
					item += '<li>' + data[key]['desc5'] + '</li>';
					item += '<li>' + data[key]['desc6'] + '</li>';
					item += '<li>' + data[key]['desc7'] + '</li>';
				item += '</div></ul>';
				
				item += '<div class="market__small-order">';
					item += '<div class="market__small-price">' + data[key]['price'] + '</div>';
					item += '<div class="market__small-btn"><button class="order-btn" onClick="openModal();">Заказать</button></div>';
				item += '</div>'
			
			item += '</div></div>'
		}
		$('#kazan_small').html(item);
	});
}

function loadKazanBig() {
	$.getJSON('/json/kazan_big.json', function(data){
		var item = "";
		for (var key in data){
			item += '<div class="market__big-item"><div class="market__big-column">';
			
				item += '<div class="market__big-img"><img src="' + data[key]['img'] + '"></div>';
				item += '<div class="market__big-name">' + data[key]['name'] + '</div>';
				
				item += '<div class="market__big-desc"><ul>';
					item += '<li>' + data[key]['desc1'] + '</li>';
					item += '<li>' + data[key]['desc2'] + '</li>';
					item += '<li>' + data[key]['desc3'] + '</li>';
					item += '<li>' + data[key]['desc4'] + '</li>';
					item += '<li>' + data[key]['desc5'] + '</li>';
					item += '<li>' + data[key]['desc6'] + '</li>';
					item += '<li>' + data[key]['desc7'] + '</li>';
				item += '</div></ul>';
				
				item += '<div class="market__big-order">';
					item += '<div class="market__big-price">' + data[key]['price'] + '</div>';
					item += '<div class="market__big-btn"><button class="order-btn" onClick="openModal();">Заказать</button></div>';
				item += '</div>'
			
			item += '</div></div>'
		}
		$('#kazan_big').html(item);
	});
}

function loadAfganBlack() {
	$.getJSON('/json/afgan_black.json', function(data){
		var item = "";
		for (var key in data){
			item += '<div class="market__big-item"><div class="market__big-column">';
			
				item += '<div class="market__big-img"><img src="' + data[key]['img'] + '"></div>';
				item += '<div class="market__big-name">' + data[key]['name'] + '</div>';
				
				item += '<div class="market__big-desc"><ul>';
					item += '<li>' + data[key]['desc1'] + '</li>';
					item += '<li>' + data[key]['desc2'] + '</li>';
					item += '<li>' + data[key]['desc3'] + '</li>';
					item += '<li>' + data[key]['desc4'] + '</li>';
					item += '<li>' + data[key]['desc5'] + '</li>';
					item += '<li>' + data[key]['desc6'] + '</li>';
				item += '</div></ul>';
				
				item += '<div class="market__big-order">';
					item += '<div class="market__big-price">' + data[key]['price'] + '</div>';
					item += '<div class="market__big-btn"><button class="order-btn" onClick="openModal();">Заказать</button></div>';
				item += '</div>'
			
			item += '</div></div>'
		}
		$('#afgan_black').html(item);
	});
}

function loadAfganDouble() {
	$.getJSON('/json/afgan_double.json', function(data){
		var item = "";
		for (var key in data){
			item += '<div class="market__big-item"><div class="market__big-column">';
			
				item += '<div class="market__big-img"><img src="' + data[key]['img'] + '"></div>';
				item += '<div class="market__big-name">' + data[key]['name'] + '</div>';
				
				item += '<div class="market__big-desc"><ul>';
					item += '<li>' + data[key]['desc1'] + '</li>';
					item += '<li>' + data[key]['desc2'] + '</li>';
					item += '<li>' + data[key]['desc3'] + '</li>';
					item += '<li>' + data[key]['desc4'] + '</li>';
					item += '<li>' + data[key]['desc5'] + '</li>';
					item += '<li>' + data[key]['desc6'] + '</li>';
				item += '</div></ul>';
				
				item += '<div class="market__big-order">';
					item += '<div class="market__big-price">' + data[key]['price'] + '</div>';
					item += '<div class="market__big-btn"><button class="order-btn" onClick="openModal();">Заказать</button></div>';
				item += '</div>'
			
			item += '</div></div>'
		}
		$('#afgan_double').html(item);
	});
}

function loadPolShum() {
	$.getJSON('/json/pol_shum.json', function(data){
		var item = "";
		for (var key in data){
			item += '<div class="market__big-item"><div class="market__big-column">';
			
				item += '<div class="market__big-img"><img src="' + data[key]['img'] + '"></div>';
				item += '<div class="market__big-name">' + data[key]['name'] + '</div>';
				
				item += '<div class="market__big-desc"><ul>';
					item += '<li>' + data[key]['desc1'] + '</li>';
					item += '<li>' + data[key]['desc2'] + '</li>';
					item += '<li>' + data[key]['desc3'] + '</li>';
					item += '<li>' + data[key]['desc4'] + '</li>';
					item += '<li>' + data[key]['desc5'] + '</li>';
					item += '<li>' + data[key]['desc6'] + '</li>';
				item += '</div></ul>';
				
				item += '<div class="market__big-order">';
					item += '<div class="market__big-price">' + data[key]['price'] + '</div>';
					item += '<div class="market__big-btn"><button class="order-btn" onClick="openModal();">Заказать</button></div>';
				item += '</div>'
			
			item += '</div></div>'
		}
		$('#pol_shum').html(item);
	});
}

function loadLyagan() {
	$.getJSON('/json/lyagan.json', function(data){
		var item = "";
		for (var key in data){
			item += '<div class="market__big-item"><div class="market__big-column">';
			
				item += '<div class="market__big-img"><img src="' + data[key]['img'] + '"></div>';
				item += '<div class="market__big-name">' + data[key]['name'] + '</div>';
				
				item += '<div class="market__big-desc"><ul>';
					item += '<li>' + data[key]['desc1'] + '</li>';
					item += '<li>' + data[key]['desc2'] + '</li>';
					item += '<li>' + data[key]['desc3'] + '</li>';
				item += '</div></ul>';
				
				item += '<div class="market__big-order">';
					item += '<div class="market__big-price">' + data[key]['price'] + '</div>';
					item += '<div class="market__big-btn"><button class="order-btn" onClick="openModal();">Заказать</button></div>';
				item += '</div>'
			
			item += '</div></div>'
		}
		$('#lyagan').html(item);
	});
}

function loadPhcak() {
	$.getJSON('/json/pchak.json', function(data){
		var item = "";
		for (var key in data){
			item += '<div class="market__big-item"><div class="market__big-column">';
			
				item += '<div class="market__big-img"><img src="' + data[key]['img'] + '"></div>';
				item += '<div class="market__big-name">' + data[key]['name'] + '</div>';
				
				item += '<div class="market__big-desc"><ul>';
					item += '<li>' + data[key]['desc1'] + '</li>';
					item += '<li>' + data[key]['desc2'] + '</li>';
					item += '<li>' + data[key]['desc3'] + '</li>';
					item += '<li>' + data[key]['desc4'] + '</li>';
					item += '<li>' + data[key]['desc5'] + '</li>';
					item += '<li>' + data[key]['desc6'] + '</li>';
				item += '</div></ul>';
				
				item += '<div class="market__big-order">';
					item += '<div class="market__big-price">' + data[key]['price'] + '</div>';
					item += '<div class="market__big-btn"><button class="order-btn" onClick="openModal();">Заказать</button></div>';
				item += '</div>'
			
			item += '</div></div>'
		}
		$('#pchak').html(item);
	});
}

function loadOven() {
	$.getJSON('/json/oven.json', function(data){
		var item = "";
		for (var key in data){
			item += '<div class="market__small-item"><div class="market__small-column">';
			
				item += '<div class="market__small-img"><img src="' + data[key]['img1'] + '"></div>';
				item += '<div class="market__small-name">' + data[key]['name'] + '</div>';
				
				item += '<div class="market__small-desc"><ul>';
					item += '<li>' + data[key]['desc1'] + '</li>';
					item += '<li>' + data[key]['desc2'] + '</li>';
					item += '<li>' + data[key]['desc3'] + '</li>';
					item += '<li>' + data[key]['desc4'] + '</li>';
				item += '</div></ul>';
				
				item += '<div class="market__small-order">';
					item += '<div class="market__small-price">' + data[key]['price'] + '</div>';
					item += '<div class="market__small-btn"><button class="order-btn" onClick="openModal();">Заказать</button></div>';
				item += '</div>'
			
			item += '</div></div>'
		}
		$('#oven').html(item);
	});
}