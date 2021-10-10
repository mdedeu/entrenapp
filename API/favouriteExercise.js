import { Api } from './api.js'

export{FavouriteExercise}

class FavouriteExercise{

    static getUrl(slug) {
        return `${Api.baseUrl}/favourites${ slug ? `/${slug}` : ''}`
    }

    static async add(exerciseID, controller) {
        return await Api.post(FavouriteExercise.getUrl(exerciseID), true, exerciseID, controller)
    }

    static async delete(exerciseID, controller) {
        return await Api.delete(FavouriteExercise.getUrl(exerciseID), true, controller)
    }

    static async getAll(controller) {
        return await Api.get(FavouriteExercise.getUrl(), true, controller)
    }


}

