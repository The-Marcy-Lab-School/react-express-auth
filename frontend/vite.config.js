// vite.config.js

export default defineConfig({
  build: {
    outDir: path.join(__dirname, '..', 'public'),
    emptyOutDir: true,
  },
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://0.0.0.0:3000',
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
    host: '0.0.0.0', 
    port: 3001,      
  },
});
