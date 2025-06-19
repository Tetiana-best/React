// Строгий режим
"use strict"

if (confirm('Почати тестування?')) {

	// Задача 1. Використовуючи один з АРІ https://github.com/public-apis/public-apis#animals
	// та функцію fetch організувати завантаження та відображення даних
	// Намагайтесь зробити це з використанням класів.Окремо клас для побудови розмітки.Окремо клас,
	// який буде робити запити і повертати результати.

	class RenderImage {
		constructor(src, cssObj) {
			this.src = src
			this.cssObj = cssObj
		}
		renderImage() {
			const imgEl = document.createElement('img')
			imgEl.setAttribute('src', this.src)
			return imgEl
		}
		renderContainerImage(containerSelector) {
			const container = document.createElement('div')
			container.className = this.cssObj.image
			container.append(this.renderImage())
			if (containerSelector) containerSelector.append(container)
		}
	}

	const cssObj = {
		image: 'image',
	}

	class GetImage {
		constructor(url, container, cssObj) {
			this.url = url
			this.container = document.querySelector(container);
			this.cssObj = cssObj
		}
		async getImage() {
			try {
				let response = await fetch(this.url)
				if (!response.ok) throw new Error("Помилка завантаження");
				const dataImg = await response.json()
				new RenderImage(dataImg.message, this.cssObj).renderContainerImage(this.container);
			}
			catch (error) {
				console.log(error.message);
			}
		}
	}


	const getImage1 = new GetImage('https://dog.ceo/api/breeds/image/random',
		'body',
		cssObj
	)
	getImage1.getImage()

}