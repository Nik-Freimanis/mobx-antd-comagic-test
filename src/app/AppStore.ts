import { makeAutoObservable } from 'mobx';
import { nanoid } from 'nanoid';
import {faker} from "@faker-js/faker";

export type user = {id: string, firstName: string, lastName: string};
export type message = {id: string, value: string, to: user['id']};
class AppStore {
    public posts: {id: string, text: string, author: string, avatar: string, img: string, comments: {id: string, description: string}[]}[];
    public users: user[] = [];
    selectedFriend = null;
    public messages: message[] = [];
    public friendIds: string[] = [];



    constructor() {
        this.posts = [];
        makeAutoObservable(this)
    }


    addPost() {
        const avatar = faker.image.avatarGitHub()
        const text = faker.lorem.sentence();
        const img = `${faker.image.urlLoremFlickr()}?random=${Math.round(Math.random() * 1000)}`
        const author = faker.person.fullName()

        this.posts.unshift({id: nanoid(8), author, avatar, text, img, comments: []});
    }

    addUser() {
        const firstName = faker.person.firstName()
        const lastName = faker.person.lastName()

        this.users.unshift({id: nanoid(8), firstName, lastName})
    }

    generateUsers() {
        for (let i=0; i<10; i++) {
            this.users.push({id: nanoid(8), firstName: faker.person.firstName(), lastName: faker.person.lastName()})
        }
    }
    generatePosts() {
        for (let i=0; i<5; i++) {
            const avatar = faker.image.avatarGitHub()
            const text = faker.lorem.sentence();
            const img = `${faker.image.urlLoremFlickr()}?random=${Math.round(Math.random() * 1000)}`
            const author = faker.person.fullName()

            this.posts.unshift({id: nanoid(8), author, avatar, text, img, comments: []});
        }
    }

    // @ts-ignore
    setSelectedFriend(friend) {
        this.selectedFriend = friend;
    }

    getSelectedFriend() {
        return this.selectedFriend;
    }

    public addToFriends(userId: user['id']) {
        this.friendIds.push(userId);
    }

    public sendMessage(to: user['id'], content: string) {
        this.messages.push({id: nanoid(8), to, value: content});
    }


    public getMessagesByRecipientId(to: user['id']) {
        return this.messages.filter(item => item.to === to);
    }

    public unfriend(userId: user['id']) {
        this.friendIds = this.friendIds.filter(item => item !== userId)
    }

    public getUserListByFriendIds() {
        return this.users.filter(item => this.friendIds.includes(item.id));
    }

    addComment(postId:string, description: string) {
        this.posts[this.posts.findIndex(item => item.id === postId)].comments.push({id: nanoid(8), description})
    }

}

export default new AppStore()