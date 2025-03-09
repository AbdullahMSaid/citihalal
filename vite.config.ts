
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Define a default .env file that can be overridden
  define: {
    // Make sure to stringify values
    'import.meta.env.VITE_AIRTABLE_API_KEY': JSON.stringify(process.env.VITE_AIRTABLE_API_KEY || ''),
    'import.meta.env.VITE_AIRTABLE_BASE_ID': JSON.stringify(process.env.VITE_AIRTABLE_BASE_ID || ''),
    'import.meta.env.VITE_AIRTABLE_TABLE_NAME': JSON.stringify(process.env.VITE_AIRTABLE_TABLE_NAME || ''),
  },
}));
