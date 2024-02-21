'use server'


import { nanoid } from 'nanoid';
import { faker } from '@faker-js/faker';

export async function getUserByLogin(login: string) {
    if (login === 'admin@comagic.dev')
        return {
        id: '21',
        password: 'comagic',
        email: 'admin@comagic.dev'
        }
    return null
}


export async function getUsersList() {
    return new Array(10).fill(0).map(() => ({
        id: nanoid(8),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName()
    }));
}