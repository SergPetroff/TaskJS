(function(){
	//Получаем все кнопки
	var buttons = document.getElementsByClassName("btn_item")

	var changeState = function(e){
		// Получаем текущий блок
		var thisBtn = this;
		// Получаем заголовок записи
		var accardItem = thisBtn.parentElement.parentElement;
		// Получаем все вложенные списки с конентом 
		var allContentLists = document.getElementsByClassName("item_contentlist");

		// Получаем список с контентом текущего блока
		var contentList = accardItem.getElementsByClassName("item_contentlist")[0]

		if (!contentList.classList.contains("active")) {

			// закрываем все открытые списки
			
			for (var i = 0; i < allContentLists.length; i++) {
		
				var currentContentList = allContentLists[i],
					currenttitleItem = allContentLists[i].parentElement;
					currentBtnItem = allContentLists[i].parentElement.querySelectorAll(".btn_item");					
					
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
			accardItem.classList.add("active")

			//меняем кнопку треугольник текущего элемента
			thisBtn.classList.remove('btn_triangle')
			thisBtn.classList.add('btn_triangle_active')
		}else{
			//Закрываем список
			contentList.classList.remove("active")
			contentList.classList.add("close")

			// меняем цвет заголовка
			accardItem.classList.remove("active")


			//меняем кнопку треугольник
			thisBtn.classList.remove('btn_triangle_active')
			thisBtn.classList.add('btn_triangle')
			
		}

	}


	// присваиваем каждой кнопке событие
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click',changeState);
	}

})();



