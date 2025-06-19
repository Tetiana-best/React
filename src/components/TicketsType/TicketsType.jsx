import { useState } from "react"
import styles from './TicketClass.module.scss'

export function Task() {
	return (
		<>
			<div className="task">
				<h1>Задача 2</h1>
				<p>З випадаючого списку вибираємо клас квитка у літаку. Якщо :<br/>
					1. бізнес -  виводимо елементи для вибору газети та коньяку (якщо вибрано коньяк, то запропонувати закуску (так/ні)), на фоні зображення бізнес кают <br/>
					2. економ – виводимо елементи для вибору типу пива і чипсів, на фоні хмарки.</p>
			</div>
		</>
	)
}
export default function Tickets() {
	const[ticketType, setTicketType] = useState('')
	const [businessChoice, setBusinessChoice] = useState('')
	const [economChoice, setEconomChoice] = useState('')
	const[newspaper, setNewspaper] = useState('')
	const[isCognac, setIsCognac] = useState('')
	const[snack, setSnack] = useState('')
	const[beer, setBeer] = useState('')
	const[chips, setChips] = useState('')


	function handlerTicketClass(event) {
		setTicketType(event.target.value)
		clearAll()
	}
	function clearAll() {
		setNewspaper('')
		setIsCognac('')
		setSnack('')
		setBeer('')
		setChips('')
		setBusinessChoice('')
		setEconomChoice('')
	}
	function getBackgroundClass() {
		let bg
		if (ticketType==='business'){
			bg = styles.bgBusiness
		}
		else if (ticketType==='economy')
			bg = styles.bgEconom
		else bg=''
		return bg
	}
	function renderTicketOptions() {
		let ticketOptions
		if (ticketType==='business'){
			ticketOptions = renderBusinessOptions()
		}
		else if (ticketType==='economy')
			ticketOptions = renderEconomOptions()
		else ticketOptions=''
		return ticketOptions
	}
	function handlerBusinessChoice(event) {
		setBusinessChoice(event.target.value)
		setNewspaper('')
		setIsCognac('')
		setSnack('')
	}
	function renderBusinessOptions() {
		return (
			<>
				<div>
					<label>Оберіть опцію:</label>
					<select value={businessChoice} onChange={handlerBusinessChoice}>
						<option value="">-- Оберіть --</option>
						<option value="newspaper">Газета</option>
						<option value="cognac">Коньяк</option>
					</select>
				</div>
	
				{businessChoice === 'newspaper' && (
					<div>
						<label>Газета:</label>
						<select value={newspaper} onChange={handlerNewspaper}>
							<option value="">-- Оберіть --</option>
							<option value="newspaper1">newspaper1</option>
							<option value="newspaper2">newspaper2</option>
						</select>
					</div>
				)}
	
				{businessChoice === 'cognac' && (
					<>
						<div>
							<label>Коньяк:</label>
							<select value={isCognac} onChange={handlerIsCognac}>
								<option value="">-- Оберіть --</option>
								<option value="cognac1">cognac1</option>
								<option value="cognac2">cognac2</option>
							</select>
						</div>
						{isCognac && renderSnack()}
					</>
				)}
			</>
		)
	}
	function handlerNewspaper(event) {
		setNewspaper(event.target.value)
	}
	function handlerIsCognac(event) {
		setIsCognac(event.target.value)
		if(!event.target.value) setSnack('')
	}
	function renderSnack() {
			return (
			<div>
				<label>Закуска:</label>
				<select value={snack} onChange={handlerSnack}>
					<option value="">-- Оберіть --</option>
					<option value="yes">Так</option>
					<option value="no">Ні</option>
				</select>
			</div>
			)
	}
	function handlerSnack(event) {
		setSnack(event.target.value)
	}
// ------------------------------------
function handlerEconomChoice(event) {
	setEconomChoice(event.target.value)
	setBeer('')
	setChips('')
}
function renderEconomOptions() {
	return (
		<>
			<div>
				<label>Оберіть опцію:</label>
				<select value={economChoice} onChange={handlerEconomChoice}>
					<option value="">-- Оберіть --</option>
					<option value="beer">Пиво</option>
					<option value="chips">Чипси</option>
				</select>
			</div>

			{economChoice === 'beer' && (
				<div>
					<label>Пиво:</label>
					<select value={beer} onChange={handlerBeer}>
						<option value="">-- Оберіть --</option>
						<option value="beer1">beer1</option>
						<option value="beer2">beer2</option>
					</select>
				</div>
			)}

			{economChoice === 'chips' && (
				<div>
					<label>Чипси:</label>
					<select value={chips} onChange={handlerChips}>
						<option value="">-- Оберіть --</option>
						<option value="chips1">chips1</option>
						<option value="chips2">chips2</option>
					</select>
				</div>
			)}
		</>
	)
}
	function handlerBeer(event) {
		setBeer(event.target.value)
	}
	function handlerChips(event) {
		setChips(event.target.value)
	}
// -----------------------------------------------

	return ( 
	<>
		<div className={`${getBackgroundClass()} ${styles.containerTickets}`}>
			<div>
				<label>Оберіть клас:</label>
				<select value={ticketType} onChange={handlerTicketClass}>
				<option value="">-- Оберіть --</option>
					<option value="business">Бізнес</option>
					<option value="economy">Економ</option>
				</select>
			</div>

			{ticketType && renderTicketOptions()}
		</div>
	</>
	)
}

export function TicketsType() {
	return (
		<>
			<Task />
			<Tickets />
		</>
	)
}
