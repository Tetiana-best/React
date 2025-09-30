	export const FilterProduct = ({ searchTerm, handleSearch }) => {
	return (
		<div className="mb-6 flex flex-col">
			<label
			htmlFor="filter"
			className="mb-2 text-sm font-medium text-lime-400 font-size"
			>
			Пошук по назві товару
			</label>

			<input
			type="search"
			id="filter"
			value={searchTerm}
			onChange={handleSearch}
			placeholder="Введіть назву товару..."
			className="w-[300px] rounded-xl border border-lime-400 bg-gray px-4 py-2 text-white 
							placeholder-gray-400 focus:border-lime-300 focus:outline-none 
							focus:ring-2 focus:ring-lime-500 transition"
			/>
		</div>
	)
	}

