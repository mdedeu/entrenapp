import { Api } from './api.js'

export{FavouriteRoutine}

class FavouriteRoutine{

    static getUrl(slug) {
        return `${Api.baseUrl}/favourites${ slug ? `/${slug}` : ''}`
    }

    static async add(routineID, controller) {
        return await Api.post(FavouriteRoutine.getUrl(routineID), true, routineID, controller)
    }

    static async delete(routineID, controller) {
        return await Api.delete(FavouriteRoutine.getUrl(routineID), true, controller)
    }

    static async getAll(controller) {
        return await Api.get(FavouriteRoutine.getUrl(), true, controller)
    }


}

