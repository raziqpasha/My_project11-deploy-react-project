import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base : "/My_project11-deploy-react-project",
  plugins: [react()],
});
