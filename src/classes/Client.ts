import Experience from "./Experience";
import Formation from "./Formation";

export default interface Client {
    name: string;
    email: string;
    website?: string;
    phone: string;
    address: string;
    experiences: Experience[];
    skills: string[];
    formations: Formation[];
    hobbies: string[];
}