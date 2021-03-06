import {UserApi} from "../../../API/user";
import {Api} from "../../../API/api";

const SECURITY_TOKEN_KEY = 'security-token'

export default {
    namespaced: true,
    state: {
        token: null,
        user: null
    },
    getters: {
        isLoggedIn(state) {
            return state.token != null
        },
        getUser(state){
            if(state.token)
                return state.user
        }
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        },
        setToken(state, token) {
            state.token = token
        }
    },
    actions: {
        initialize({commit}) {
            const token = localStorage.getItem(SECURITY_TOKEN_KEY)
            if (token) {
                commit('setToken', token)
                Api.token = token
            }
        },
        updateToken({commit}, {token, rememberMe}) {
            if (rememberMe)
                localStorage.setItem(SECURITY_TOKEN_KEY, token)
            commit('setToken', token)
            Api.token = token
        },
        removeToken({commit}) {
            localStorage.removeItem(SECURITY_TOKEN_KEY)
            commit('setToken', null)
            Api.token = null
        },
        
        async login({dispatch},{credentials,rememberMe}){
            const result = await UserApi.login(credentials)
            dispatch('updateToken', { token: result.token, rememberMe })
        },

        async logout({dispatch, commit}) {
            await UserApi.logout()
            commit('setUser', null)
            dispatch('removeToken')
        },
        async getCurrentUser({state, commit}) {
            if (state.user)
                return state.user

            const result = await UserApi.get()
            commit('setUser', result)
        },
        async add(context,data){
            await UserApi.add(data)
        },
        async verify(context,data){
            return await UserApi.verify(data)
        },
        async updateUser({commit},data){
            await UserApi.updateUser(data)
            const result = await UserApi.get()
            commit('setUser', result)
        },
        async removeUser(data){
            await UserApi.removeUser(data)
        }

        },
}