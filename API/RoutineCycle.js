import { Api } from './api.js'

export { RoutineCycleApi }

class RoutineCycleApi{

    static getUrl(routineID,cycleID) {
        return `${Api.baseUrl}/routines${ routineID ? `/${routineID}` : ''}/cycles${ cycleID ? `/${cycleID}` : ''}`
    }

    static async add(info, controller) {
        return await Api.post(RoutineCycleApi.getUrl(info.id), true, info.routineCycle, controller)
    }

    static async modify(info, controller) {
        return await Api.put(RoutineCycleApi.getUrl(info.id,info.routineCycle.id), true, info.routineCycle, controller)
    }

    static async delete(info, controller) {
        return await Api.delete(RoutineCycleApi.getUrl(info.id,info.routineCycle.id), true, controller)
    }

    static async get(info, controller) {
        return await Api.get(RoutineCycleApi.getUrl(info.id,info.routineCycle.id),true,  controller)
    }

    static async getAll(info,controller) {
        return await Api.get(RoutineCycleApi.getUrl(info.id), true, controller)
    }

}
