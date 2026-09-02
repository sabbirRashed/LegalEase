
import UserUpdateForm from "./UserUpdateForm";
import { getUserSession } from "@/lib/core/session";


const UpdateProfilePage = async() => {
    const user = await getUserSession();


    return (
        <div className="w-11/12 max-w-7xl mx-auto mt-15 md:mt-20">
           <UserUpdateForm user={user} />
        </div>
    );
};

export default UpdateProfilePage;