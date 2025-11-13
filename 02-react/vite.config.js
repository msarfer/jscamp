import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path, { __dirname } from 'node:path'
// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
})
