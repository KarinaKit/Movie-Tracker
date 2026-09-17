import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    base: "/Movie-Tracker/",

    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, "index.html"),
                playList: resolve(__dirname, "playList.html"),
                signin: resolve(__dirname, "signin.html"),
                signup: resolve(__dirname, "signup.html")
            }
        }
    },

    server: {
        open: "/index.html"
    }
});