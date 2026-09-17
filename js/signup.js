import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://vbtozfihnjbzgczgxwhq.supabase.co";
const supabaseKey = "sb_publishable_GdyGQo8kdcU4tQEheSpadw_tlHh2AzM";
const supabase = createClient(supabaseUrl, supabaseKey);
//форма регистрации 
const form = document.querySelector(".signup-form");
//поиск повторнго поля
const confirmPasswordInput = document.querySelector(".confirm-password");
//поиск двух полей
const emailInput = document.querySelector(".email");
const passwordInput = document.querySelector(".password");
form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = emailInput?.value;
    const password = passwordInput?.value;
    const confirmPassword = confirmPasswordInput?.value;
    if (!email || !password || !confirmPassword) {
        return;
    }
    if (password !== confirmPassword) {
        console.log("Пароли не совпадают");
        return;
    }
    const { data, error } = await supabase.auth.signUp({
        email,
        password
    });
    if (error) {
        console.log(error.message);
        return;
    }
    console.log("Регистрация упешна");
});
//# sourceMappingURL=signup.js.map