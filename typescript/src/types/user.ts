import { UUID } from "../utils/globalTypes";

// user List
interface UserListItem {
    uuid: UUID;
    email: string;
    username: string;
    first_name: string | null;
    last_name: string | null;
    birthday: string | null;
    profile_image: string | null;
    language: string | null;
}
export type UserListResponseData = UserListItem[];

// user Add | Edit
export interface UserAddRequestData {
    username: string;
    primary_email?: string | null;
    first_name: string;
    last_name: string;
    birthday: string;
    profile_image?: string;
    language: string;
}
