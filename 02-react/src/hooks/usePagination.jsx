export function usePagination({ currentPage, totalPages, onPageChange }) {
	const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

	const isFirstPage = currentPage === 1
	const isLastPage = currentPage === totalPages

	const handlePrevClick = (event) => {
		event.preventDefault()
		if (isFirstPage === false) {
			onPageChange(currentPage - 1)
		}
	}

	const handleNextClick = (event) => {
		event.preventDefault()
		if (isLastPage === false) {
			onPageChange(currentPage + 1)
		}
	}

	const handleChangePage = (event) => {
		event.preventDefault()
		const page = Number(event.target.dataset.page)

		if (page !== currentPage) {
			onPageChange(page)
		}
	}

	return {
		pages,
		isFirstPage,
		isLastPage,
		handlePrevClick,
		handleNextClick,
		handleChangePage,
	}
}
