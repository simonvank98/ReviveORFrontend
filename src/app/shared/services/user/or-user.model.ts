export interface ORUserModel {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    password_confirmation?: string;
    address1: string;
    address2: string;
    zipcode: string;
    city: string;
    province: string;
    country: string;
}
