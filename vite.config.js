//--- --- Vite --------------------------------------------------------------------------------------------------------
import { defineConfig } from 'vite'

//--- --- Plugins -----------------------------------------------------------------------------------------------------
import vue from '@vitejs/plugin-vue'

//--- --- Node --------------------------------------------------------------------------------------------------------
import { resolve } from "node:path";

export default defineConfig({
    plugins: [vue()],

    build: {
        lib: {
            entry: resolve(__dirname, "src/index.js"),
            name: "Vue3TableData",
            fileName: "vue3-table-data"
        },

        rollupOptions: {
            external: ["vue"],
            output: {
                globals: {
                    vue: "Vue",
                },
            },
        },
    },
})
