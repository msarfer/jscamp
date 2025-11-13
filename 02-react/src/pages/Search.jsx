import { JobListings } from '@/components/JobListings.jsx'
import { Pagination } from '@/components/Pagination.jsx'
import { SearchFormSection } from '@/components/SearchFormSection.jsx'
import { useJobs } from '@/hooks/useJobs'

export default function SearchPage() {
	const {
		jobs,
		loading,
		error,
		total,
		currentPage,
		totalPages,
		handleSearch,
		handleTextFilter,
		handlePageChange,
	} = useJobs()

	const title = loading
		? `Cargando... - DevJobs`
		: `Resultados: ${total}, Página ${currentPage} - DevJobs`

	return (
		<main>
			<title>{title}</title>
			<SearchFormSection
				onSearch={handleSearch}
				onTextFilter={handleTextFilter}
			/>

			<section>
				{loading ? (
					<p>Cargando ofertas de empleo...</p>
				) : error ? (
					<p>Error al cargar las ofertas de empleo.</p>
				) : (
					<JobListings jobs={jobs} />
				)}
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					onPageChange={handlePageChange}
				/>
			</section>
		</main>
	)
}
