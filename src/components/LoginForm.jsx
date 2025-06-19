import { useState } from "react"

export function Task() {
	return (
		<>
			<div className="task">
				<h1>Задача 1</h1>
				<p>Вводимо логіна і пароль. Якщо логін вірний відображаємо смайл. Якщо ні, то:<br/>
					1. якщо логін = Іван – колір повідомлення про помилку синій<br/>
					2. якщо хтось інший, то колір повідомлення червоний.</p>
			</div>
		</>
	)
}
export default function Login() {
	const[login, setLogin] = useState('')
	const[password, setPassword] = useState('')
	const [message, setMessage] = useState('')
	const [messageColor, setMessageColor] = useState('')
	const [image, SetImage] = useState(null)

	const users = [
		{ id:1, login: 'admin', password: '123456' },
		{ id:2,login: 'user1', password: 'pass2025' },
		{ id:3,login: 'user2', password: 'pass2024' }
	]

	function handlerLogin(event) {
		setLogin(event.target.value)
		setMessage('')
	}
	function handlerPassword(event) {
		setPassword(event.target.value)
		setMessage('')
	}
	function findUserData() {
		return users.find((user) => user.login.toLowerCase() === login.toLowerCase() && user.password.toLowerCase() === password.toLowerCase())
	}
	function isLoginPasswordCorrect() {
		if (!login || !password){
			setMessage('Введіть логін і пароль.')
			setMessageColor('white')
		} 
		else if (findUserData()) SetImage (<img src="./img/smile.png" />)
		else setMessage('Невірний логін або пароль')

		if (login === 'Ivan')setMessageColor('blue')
		else setMessageColor('red')
	}
	return ( 
		<>
		<div className="render-body">
			<div className='result'>
				<label>
					Login :{' '}
				<input type="text" value={login} onChange={handlerLogin}/>
				</label>
				<label>
					Password :{' '}
				<input type="password" value={password} onChange={handlerPassword}/>
				</label>
				<button onClick={isLoginPasswordCorrect}>Go</button>
				<ul>Існуючі паролі:
						{users.map((user) => (<li key={user.id}>{user.login} — {user.password}</li>
						))}
					</ul>
			</div>
			<div className='result'>
				<p style={{color: messageColor}}>{message}</p>
				<p> {image}</p>
				</div>
			</div>
		</>
		)
}

export function LoginForm() {
	return (
		<>
			<Task />
			<Login />
		</>
	)
}
