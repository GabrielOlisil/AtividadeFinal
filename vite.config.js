import { defineConfig } from 'vite';
import path from 'path'
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({

    base: '/AtividadeFinal/ ',
    plugins: [
        tailwindcss()
    ],
    build: {
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'index.html'),
                colorir: path.resolve(__dirname, 'colorir.html')
            }
        }
    }
});