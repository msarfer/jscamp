import { useRouter } from '@/hooks/useRouter'

// eslint-disable-next-line no-unused-vars
export function Route({ path, component: Component }) {
	const { currentPath } = useRouter()

	if (currentPath !== path) return null

	return <Component />
}
