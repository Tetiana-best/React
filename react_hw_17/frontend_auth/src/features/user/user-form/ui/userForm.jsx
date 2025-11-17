import { roles } from "@/shared/config/roles"
import { frontRoutes } from "@/shared/config/routes/frontRoutes"
import { useNavigate } from "react-router"

export const UserForm = ({formData, handleChange, onSubmit, isLoading}) => {

	const navigate = useNavigate()

	return (
		<form
			onSubmit={onSubmit}
			className="max-w-lg mx-auto p-6 bg-black rounded-lg shadow">

			<h2 className="text-2xl font-semibold mb-4">Створення нового користувача</h2>

			<div className="mb-4">
				<label className="block mb-1 font-medium" htmlFor="name">Ім&apos;я</label>
				<input id="name" name="name" type="text" required disabled={isLoading}
					value={formData.name} onChange={handleChange} className="w-full p-2 border rounded"
					placeholder="Введіть ім'я"/>
			</div>

			<div className="mb-4">
				<label className="block mb-1 font-medium" htmlFor="email">Email</label>
				<input id="email" name="email" type="email" required disabled={isLoading}
					value={formData.email} onChange={handleChange}
					className="w-full p-2 border rounded" placeholder="Введіть email"/>
			</div>

			<div className="mb-4">
				<label className="block mb-1 font-medium" htmlFor="role">Роль</label>
				<select id="role" name="role"required disabled={isLoading}
					value={formData.role} onChange={handleChange}
					className="w-full p-2 border rounded bg-black">
						
					<option value={roles.user}>User</option>
					<option value={roles.manager}>Manager</option>
					<option value={roles.admin}>Admin</option>
					<option value={roles.guest}>Guest</option>
				</select>
			</div>

			<div className="flex gap-3">
				<button type="submit" disabled={isLoading}
					className="btn-adduser">
					{isLoading ? "Створюється..." : "Створити"}
				</button>

				<button
					type="button" onClick={() => navigate(frontRoutes.pages.UsersPage.navigationPath)}
					className="btn-delete">
					Скасувати
				</button>
			</div>
		</form>
	)
}
