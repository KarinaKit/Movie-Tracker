import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://vbtozfihnjbzgczgxwhq.supabase.co";
const supabaseKey = "sb_publishable_GdyGQo8kdcU4tQEheSpadw_tlHh2AzM";
const supabase = createClient(supabaseUrl, supabaseKey);
//форма регистрации 
const form = document.querySelector(".signup-form");
//поиск повторнго поля
const confirmPasswordInput = document.querySelector(".confirm-password");
//поиск двух полей
const emailInput = document.querySelector(".login");
const passwordInput = document.querySelector(".password");
console.log("form:", form);
console.log("email:", emailInput);
console.log("password:", passwordInput);
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
    const { data, error } = await supabase.auth.signUp({
        email,
        password
    });
    if (error) {
        console.log(error.message);
        return;
    }
    console.log("Регистрация упешна");
    window.location.href = "./catalog.html";
});
//# sourceMappingURL=signup.js.map