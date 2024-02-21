import { makeAutoObservable } from 'mobx';
import { nanoid } from 'nanoid';
import {faker} from "@faker-js/faker";

export type user = {id: string, firstName: string, lastName: string};
export type message = {id: string, value: string, to: user['id']};
class AppStore {
    public posts: {id: string, text: string, author: string, comments: {id: string, description: string}[]}[];
    public users: user[]
    public messages: message[];
    public friendIds: string[];

    constructor() {
        this.posts = [];
        makeAutoObservable(this)
    }


    addPost() {
        const postText = faker.lorem.sentence();
        const postImg = faker.image.url();
        const postAuthor = faker.person.fullName()
        this.posts.push({id: nanoid(8), author: postAuthor, text: postText, comments: []});
    }

    public setUsers(users: user[]) {
        this.users = users
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