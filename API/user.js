import { Api } from './api.js'

export { UserApi, Credentials }

class UserApi {
    static getUrl(slug) {
        return `${Api.baseUrl}/users${ slug ? `/${slug}` : ''}`
    }

    static async login(credentials, controller) {
        return await Api.post(UserApi.getUrl('login'), false, credentials, controller)
    }

    static async logout(controller) {
        await Api.post(UserApi.getUrl('logout'), true, controller)
    }

    static async get(controller) {
        return await Api.get(UserApi.getUrl('current'), true, controller)
    }

    static async add(data,controller){
        return await Api.post(UserApi.getUrl(),false,data,controller)
    }

    static async verify(data,controller){
        return await Api.post(`${UserApi.getUrl()}/verify_email`,false,data,controller)
    }
    static async updateUser(data,controller){
        return await Api.put(`${UserApi.getUrl()}/current`,true,data,controller)
    }



}

class Credentials {
    constructor(username, password) {
        this.username = username
        this.password = password
    }
}