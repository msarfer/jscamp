import { useMemo, useEffect, useState } from 'react'

const RESULT_PER_PAGE = 4

export function useJobs() {
	const [jobs, setJobs] = useState([])
	const [total, setTotal] = useState(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	const [filters, setFilters] = useState({
		technology: '',
		location: '',
		experienceLevel: '',
	})
	const [textToFilter, setTextToFilter] = useState('')
	const [currentPage, setCurrentPage] = useState(1)

	useEffect(() => {
		const fetchJobs = async () => {
			try {
				setLoading(true)

				const params = new URLSearchParams()
				if (textToFilter) params.append('text', textToFilter)
				if (filters.technology) params.append('technology', filters.technology)
				if (filters.location) params.append('type', filters.location)
				if (filters.experienceLevel)
					params.set('level', filters.experienceLevel)

				const offset = (currentPage - 1) * RESULT_PER_PAGE
				params.set('limit', RESULT_PER_PAGE)
				params.set('offset', offset)

				const queryParams = params.toString()

				const response = await fetch(
					`https://jscamp-api.vercel.app/api/jobs?${queryParams}`,
				)
				const json = await response.json()

				setJobs(json.data)
				setTotal(json.total)
			} catch (err) {
				console.error('Error fetching jobs:', err)
				setError(err)
			} finally {
				setLoading(false)
			}
		}

		fetchJobs()
	}, [textToFilter, currentPage, filters])

	const totalPages = Math.ceil(total / RESULT_PER_PAGE)

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
		jobs,
		loading,
		error,
		total,
		currentPage,
		totalPages,
		handleSearch,
		handleTextFilter,
		handlePageChange,
	}
}
