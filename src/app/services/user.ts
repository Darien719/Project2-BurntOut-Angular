import { Company } from "./company";
import { UserRole } from "./userRole";

export interface User {
    id : number;
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
    salt: string;
    userRole: UserRole;
    company: Company;
}