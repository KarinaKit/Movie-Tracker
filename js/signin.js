import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://vbtozfihnjbzgczgxwhq.supabase.co";
const supabaseKey = "sb_publishable_GdyGQo8kdcU4tQEheSpadw_tlHh2AzM";
const supabase = createClient(supabaseUrl, supabaseKey);
//форма email/пароль
const form = document.querySelector('.input-log');
const emailInput = document.querySelector('.login');
const passwordInput = document.querySelector('.password');
//кнопки вход/регистрация
const loginButton = document.querySelector('.logIn');
const signUpButton = document.querySelector('.signUp');
form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const button = event.submitter;
    const email = emailInput?.value ?? "";
    const password = passwordInput?.value ?? "";
    if (button === signUpButton) {
        const { data, error } = await supabase.auth.signUp({
            email,
            password
        });
        if (error) {
            console.log(error.message);
            return;
        }
        console.log("Регистрация успешна");
        return;
    }
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    });
    if (error) {
        console.log(error.message);
        return;
    }
    console.log("Форма отправлена");
});
//# sourceMappingURL=signin.js.map