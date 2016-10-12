var mainjs = (function(){
	
	var btnItem = document.getElementsByClassName("btn_item");

})();

var clickItem = function (el){

	
	
	// Получаем заголовок записи
	var accardItem = el.closest(".accardeon_item")

	// Получаем все списки с конентом и скрываем их
	var arrContentList = document.getElementsByClassName("item_contentlist");

	// пробегаемся по спискам с контентом и закрываем открытые
	/*for (var i = 0; i < arrContentList.length; i++) {
		
		var currentContentList = arrContentList[i];

		if (currentContentList.classList.contains("active")) {
			currentContentList.classList.remove("active");
			currentContentList.classList.add("close")
		}
		
	}*/

	// закрываем все кнокпи треугольники

	/*var arrBtnTriangle = document.getElementsByClassName("btn_item")
	for (var i = 0; i < arrBtnTriangle.length; i++) {
		var currentBtn = arrBtnTriangle[i]
		
		if (currentBtn.classList.contains("btn_triangle_active")) {
			currentBtn.classList.remove("btn_triangle_active");
			currentBtn.classList.add("btn_triangle");
		}
	}*/
	changeStateitem(el)

	function changeStateitem(el){
		// Получаем список с контентом
		var contentList = el.closest(".accardeon_item").getElementsByClassName("item_contentlist")[0]
		// Получаем заголовок записи
		var titleItem = el.closest(".accardeon_item")
		// Получаем все списки контента всех элементоа
		var allContentLists = document.getElementsByClassName("item_contentlist");

		
		
		//console.log(titleItem)
		
		if (!contentList.classList.contains("active")) {

			// закрываем все открытые списки
			
			for (var i = 0; i < allContentLists.length; i++) {
		
				var currentContentList = arrContentList[i],
					currenttitleItem = arrContentList[i].closest(".accardeon_item"),
					currentBtnItem = arrContentList[i].closest(".accardeon_item").querySelectorAll(".btn_item");


					
					
				if (currentContentList.classList.contains("active")) {
					console.log(currentBtnItem[0].classList)

					//закрываем списки
					currentContentList.classList.remove("active");
					currentContentList.classList.add("close")

					// меняем цвет заголовка
					currenttitleItem.classList.remove("active")
					
					//меняем кнопку треугольник
					currentBtnItem[0].classList.remove('btn_triangle_active')
					currentBtnItem[0].classList.add('btn_triangle')
				}
				
			}


			//Открываем список текущего элемента
			contentList.classList.remove("close")
			contentList.classList.add("active")

			// меняем цвет заголовка текущего элемента
			titleItem.classList.add("active")

			//меняем кнопку треугольник текущего элемента
			el.classList.remove('btn_triangle')
			el.classList.add('btn_triangle_active')
		}else{
			//Закрываем список
			contentList.classList.remove("active")
			contentList.classList.add("close")

			// меняем цвет заголовка
			titleItem.classList.remove("active")


			//меняем кнопку треугольник
			el.classList.remove('btn_triangle_active')
			el.classList.add('btn_triangle')
			
		}
	}
	// закрываем все списки
	/*var arraccardItem = document.getElementsByClassName("accardeon_item");

	for (var i = 0; i < arraccardItem.length; i++) {
		var currItem = arraccardItem[i];
		
		if (currItem.classList.contains("active")) {
			currItem.classList.remove("active")
			contentel.classList.add("active")
		}else{ 
			contentel.classList.add("active")
		}
	}*/

	//Открываем - закрываем список с контентом
	//contentel.classList.toggle('close');
	//contentel.classList.toggle('active');


	// меняем цвет заголовка
	//accardItem.classList.toggle('active')

	// Меняем кнопку-треугольник
	//el.classList.toggle('btn_triangle_active');
	//el.classList.toggle('btn_triangle');

}