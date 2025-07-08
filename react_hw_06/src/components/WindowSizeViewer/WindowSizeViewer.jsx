import { useState} from "react"
import styles from './UseWindowSize.module.scss'
import useWindowSize from './UseWindowSize.jsx'


export function Task() {
	return (
		<>
			<div className = "task">
				<h1 className = "task__title">Задача 3</h1>
				<ul> useWindowSize – розмір вікна браузера:
					<li>Створіть кастомний хук useWindowSize, який повертає поточну ширину та висоту вікна браузера. Він повинен оновлюватися при зміні розміру вікна</li>
					<li>Створіть компонент, який відображає поточні розміри вікна браузера (ширина x висота), використовуючи useWindowSize. На основі розмірів відображати іконки монітора, планшета або телефона.</li>
				</ul>
			</div>
		</>
	)
}

export default function WindowSize () {
	const { width, height } = useWindowSize()
	
	function showImage(width) {
		let imageSrc
		if(width < 600) imageSrc='/mobile.webp'
		else if(width < 1024) imageSrc='/tablet.webp'
		else imageSrc='/laptop.webp'

		return imageSrc
	}

	return (
				<>
					<div className={styles.result__container}>
						<div>Размер окна: {width} x {height}</div>
						<img src={showImage(width)} alt="Тип пристрою"></img>
				</div>
				</>
	)
}

export function WindowSizeViewer() {
	return (
		<>
			<Task />
			<WindowSize />
		</>
	)
}