import { useRouter } from '@/hooks/useRouter'

export function Link({ href, children, ...restOfProps }) {
	const { navigateTo, currentPath } = useRouter()

	const isActiveLink = href === currentPath

	const style = isActiveLink ? { textDecoration: 'underline' } : {}

	const handleClick = (event) => {
		event.preventDefault()
		navigateTo(href)
	}

	return (
		<a href={href} style={style} {...restOfProps} onClick={handleClick}>
			{children}
		</a>
	)
}
