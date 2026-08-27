import LoginForm from "./LoginForm";


export const metadata = {
    title: "Login | LegalEase",
    description: "Sign in to your LegalEase account to hire or manage legal services.",
};

export default function LoginPage() {
    return (
        <main className="min-h-screen w-full bg-slate-50">
            <LoginForm />
        </main>
    );
}