import { useEffect } from 'react'

import { JobListings } from '@/components/JobListings.jsx'
import { Pagination } from '@/components/Pagination.jsx'
import { SearchFormSection } from '@/components/SearchFormSection.jsx'
import { useFilters } from '@/hooks/useFilters'

export default function SearchPage() {
	const {
		currentPage,
		totalPages,
		jobsWithTextFilter,
		pagedResults,
		handleSearch,
		handleTextFilter,
		handlePageChange,
	} = useFilters()

	useEffect(() => {
		document.title = `Resultados: ${jobsWithTextFilter.length}, Página ${currentPage} - DevJobs`
	}, [currentPage, jobsWithTextFilter])

	return (
		<main>
			<SearchFormSection
				onSearch={handleSearch}
				onTextFilter={handleTextFilter}
			/>

			<section>
				<JobListings jobs={pagedResults} />
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					onPageChange={handlePageChange}
				/>
			</section>
		</main>
	)
}
