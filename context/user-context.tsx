import { createContext } from "react";

const defaultUser = {
    firstName: 'Samantha',
    LastName: 'Claus',
    MiddleInitial: 'C',
    phone: '5555555555',
    email: 'SClaus@yopmail.com',
    password: 'password123!',
    races: [],
}

export const UserContext = createContext(defaultUser);