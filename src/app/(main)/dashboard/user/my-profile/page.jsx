import { redirect } from "next/navigation";
import UserProfileClient from "./UserProfileClient";
import { getUserSession } from "@/lib/core/session";

export default async function UserProfilePage() {
    const user = await getUserSession();

    if (!user) {
        redirect("/login");
    }

    const initialUser = {
        id: user.id,
        name: user.name ?? "",
        email: user.email ?? "",
        image: user.image ?? "",
        role: user.role ?? "user",
        emailVerified: user.emailVerified ?? false,
        phone: user.phone ?? "",
        gender: user.gender ?? "",
        location: user.location ?? "",
        bio: user.bio ?? "",
    };

    return <UserProfileClient initialUser={initialUser} />;
}