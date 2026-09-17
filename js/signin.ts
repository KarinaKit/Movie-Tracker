import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vbtozfihnjbzgczgxwhq.supabase.co";
const supabaseKey = "sb_publishable_GdyGQo8kdcU4tQEheSpadw_tlHh2AzM";

const supabase = createClient(supabaseUrl, supabaseKey);
console.log("signin.ts запустился");

//форма email/пароль
const form = document.querySelector<HTMLFormElement>('.input-log');
const emailInput = document.querySelector<HTMLInputElement>('.login');
const passwordInput = document.querySelector<HTMLInputElement>('.password');

function isValidEmail(email: string): boolean{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPassword(password: string): boolean {
    return password.length >= 6;
}

form?.addEventListener("submit", async (event: SubmitEvent) => {
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

    // const email = emailInput?.value ?? "";
    // const password = passwordInput?.value ?? "";

    const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
    });

    if (error) {
    passwordError!.style.display = 'block';
    return;
    }

    console.log("Форма отправлена");

    window.location.href = "./index.html";
});