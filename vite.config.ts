
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import dotenv from "dotenv";

// Load environment variables from .env files
dotenv.config();

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
  // With dotenv loaded, process.env should now contain your .env variables
  define: {
    'import.meta.env.VITE_AIRTABLE_API_KEY': JSON.stringify(process.env.VITE_AIRTABLE_API_KEY || ''),
    'import.meta.env.VITE_AIRTABLE_BASE_ID': JSON.stringify(process.env.VITE_AIRTABLE_BASE_ID || ''),
    'import.meta.env.VITE_AIRTABLE_TABLE_NAME': JSON.stringify(process.env.VITE_AIRTABLE_TABLE_NAME || ''),
  },
}));
