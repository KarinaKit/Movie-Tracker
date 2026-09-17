import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://vbtozfihnjbzgczgxwhq.supabase.co";
const supabaseKey = "sb_publishable_GdyGQo8kdcU4tQEheSpadw_tlHh2AzM";
const supabase = createClient(supabaseUrl, supabaseKey);
console.log("signin.ts запустился");
//форма email/пароль
const form = document.querySelector('.input-log');
const emailInput = document.querySelector('.login');
const passwordInput = document.querySelector('.password');
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function isValidPassword(password) {
    return password.length >= 6;
}
form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = emailInput?.value.trim() || "";
    const password = passwordInput?.value.trim() || "";
    const emailError = document.querySelector('.email-txt-hide');
    const passwordError = document.querySelector('.password-txt-hide');
    if (!isValidEmail(email)) {
        emailError.style.display = 'block';
        return;
    }
    emailError.style.display = 'none';
    if (!isValidPassword(password)) {
        passwordError.style.display = 'block';
        return;
    }
    passwordError.style.display = 'none';
    // const email = emailInput?.value ?? "";
    // const password = passwordInput?.value ?? "";
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    });
    if (error) {
        console.log(error.message);
        return;
    }
    console.log("Форма отправлена");
    window.location.href = "./catalog.html";
});
//# sourceMappingURL=signin.js.map