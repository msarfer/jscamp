import { useState } from 'react'

import jobsData from '@/data.json'

const RESULT_PER_PAGE = 4

export function useFilters() {
	const [filters, setFilters] = useState({
		technology: '',
		location: '',
		experienceLevel: '',
	})
	const [textToFilter, setTextToFilter] = useState('')

	const jobsFilteredByFilters = jobsData.filter((job) => {
		return (
			filters.technology === '' || job.data.technology === filters.technology
		)
	})

	const jobsWithTextFilter =
		textToFilter === ''
			? jobsFilteredByFilters
			: jobsFilteredByFilters.filter((job) => {
					return job.titulo.toLowerCase().includes(textToFilter.toLowerCase())
			  })

	const [currentPage, setCurrentPage] = useState(1)

	const totalPages = Math.ceil(jobsWithTextFilter.length / RESULT_PER_PAGE)

	const pagedResults = jobsWithTextFilter.slice(
		(currentPage - 1) * RESULT_PER_PAGE,
		currentPage * RESULT_PER_PAGE,
	)

	const handlePageChange = (page) => {
		setCurrentPage(page)
	}

	const handleSearch = (filters) => {
		setFilters(filters)
		handlePageChange(1)
	}

	const handleTextFilter = (newTextToFilter) => {
		setTextToFilter(newTextToFilter)
		handlePageChange(1)
	}

	return {
		currentPage,
		totalPages,
		jobsWithTextFilter,
		pagedResults,
		handleSearch,
		handleTextFilter,
		handlePageChange,
	}
}
