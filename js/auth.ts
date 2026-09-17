import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vbtozfihnjbzgczgxwhq.supabase.co";
const supabaseKey = "sb_publishable_GdyGQo8kdcU4tQEheSpadw_tlHh2AzM";

const supabase = createClient(supabaseUrl, supabaseKey);

// кнопка войти
const loginButton = document.querySelector<HTMLButtonElement>("#login");

const { data: { session } } = await supabase.auth.getSession();

if (session) {
    loginButton!.textContent = "Выйти";
}

loginButton?.addEventListener("click", async () => {
    if (!session) {
        window.location.href = "./signin.html";
        return;
    }

    const { error } = await supabase.auth.signOut();

    if (error) {
        console.log(error.message);
        return;
    }

    window.location.href = "./signin.html";
});