var clickItem = function (el){

	// Получаем заголовок записи
	var accardItem = el.closest(".accardeon_item")

	// Получаем все списки с конентом и скрываем их
	var arrContentList = document.getElementsByClassName("item_contentlist");

	changeStateitem(el)

	function changeStateitem(el){
		// Получаем список с контентом
		var contentList = el.closest(".accardeon_item").getElementsByClassName("item_contentlist")[0]
		// Получаем заголовок записи
		var titleItem = el.closest(".accardeon_item")
		// Получаем все списки контента всех элементоа
		var allContentLists = document.getElementsByClassName("item_contentlist");

		
		
		if (!contentList.classList.contains("active")) {

			// закрываем все открытые списки
			
			for (var i = 0; i < allContentLists.length; i++) {
		
				var currentContentList = arrContentList[i],
					currenttitleItem = arrContentList[i].closest(".accardeon_item"),
					currentBtnItem = arrContentList[i].closest(".accardeon_item").querySelectorAll(".btn_item");					
					
				if (currentContentList.classList.contains("active")) {

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

}