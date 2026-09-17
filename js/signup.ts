import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vbtozfihnjbzgczgxwhq.supabase.co";
const supabaseKey = "sb_publishable_GdyGQo8kdcU4tQEheSpadw_tlHh2AzM";

const supabase = createClient(supabaseUrl, supabaseKey);

//форма регистрации 
const form = document.querySelector<HTMLFormElement>(".signup-form");


//поиск повторнго поля
const confirmPasswordInput = document.querySelector<HTMLInputElement>(".confirm-password");
//поиск двух полей
const emailInput = document.querySelector<HTMLInputElement>(".login");
const passwordInput = document.querySelector<HTMLInputElement>(".password");

console.log("form:", form);
console.log("email:", emailInput);
console.log("password:", passwordInput);

function isValidEmail(email: string): boolean{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPassword(password: string): boolean {
    return password.length >= 6;
}

form?.addEventListener("submit", async (event) => {
    event.preventDefault();


    const email = emailInput?.value.trim() || "";
    const password = passwordInput?.value.trim() || "";

    const emailError = document.querySelector<HTMLElement>('.email-txt-hide');
    const passwordError = document.querySelector<HTMLElement>('.password-txt-hide');

    if (!isValidEmail(email)) {
        emailError!.style.display = 'block'
        return;
    }
    emailError!.style.display = 'none';
    
    if (!isValidPassword(password)) {
        passwordError!.style.display = 'block';
        return;
    }
    passwordError!.style.display = 'none';

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