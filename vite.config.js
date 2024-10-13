//--- --- Vite --------------------------------------------------------------------------------------------------------
import { defineConfig } from 'vite'

//--- --- Plugins -----------------------------------------------------------------------------------------------------
import vue from '@vitejs/plugin-vue'

//--- --- Node --------------------------------------------------------------------------------------------------------
import { resolve } from "node:path";

//this is the vite config file for the vue3-table-data package
export default defineConfig({
    plugins: [vue()],

    build: {
        minify: false,
        //minify: {
        //    minifyIdentifiers: false,
        //},
        lib: {
            //entry: resolve(__dirname, "src/index.js"),
            entry: './src/index.js',
            name: "Vue3TableData",
            //fileName: "vue3-table-data"
            fileName: (format) => `vue3-table-data.${format}.js`,
        },
        
        rollupOptions: {
            external: ["vue"],
            output: {
                //assetFileNames: 'styles/[name].[ext]',  // Ensures CSS files are placed in dist/styles
                globals: {
                    vue: "Vue",
                },
            },
        },
    },
})
