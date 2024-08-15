export interface User {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    dob: string;
}

export type UserPayload = Omit<User, '_id'>;
export type PartialUserPayload = Partial<User>;
