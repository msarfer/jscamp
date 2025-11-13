import { useState } from 'react'

export function useSearchForm({
	idTechnology,
	idLocation,
	idExperienceLevel,
	onTextFilter,
	onSearch,
}) {
	const [searchText, setSearchText] = useState('')

	const handleSubmit = (event) => {
		event.preventDefault()

		const formData = new FormData(event.currentTarget)

		const filters = {
			technology: formData.get(idTechnology),
			location: formData.get(idLocation),
			experienceLevel: formData.get(idExperienceLevel),
		}

		onSearch(filters)
	}

	const handleTextChange = (event) => {
		const text = event.target.value
		setSearchText(text)
		onTextFilter(text)
	}

	return {
		searchText,
		handleTextChange,
		handleSubmit,
	}
}
