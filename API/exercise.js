import { Api } from './api.js'

export { ExerciseApi, Exercise }

class ExerciseApi{

    static getUrl(slug) {
        return `${Api.baseUrl}/exercises${ slug ? `/${slug}` : ''}`
    }

    static async add(exercise, controller) {
        return await Api.post(ExerciseApi.getUrl(), true, exercise, controller)
    }

    static async modify(exercise, controller) {
        return await Api.put(ExerciseApi.getUrl(exercise.id), true, exercise, controller)
    }

    static async delete(id, controller) {
        return await Api.delete(ExerciseApi.getUrl(id), true, controller)
    }

    static async get(id, controller) {
        return await Api.get(ExerciseApi.getUrl(id),true,  controller)
    }

    static async getAll(controller) {
        return await Api.get(ExerciseApi.getUrl(), true, controller)
    }
}



class Exercise{
    constructor(id, name, detail,type,metadata) {
        if (id) {
            this.id = id;
        }
        this.name = name;
        this.detail = detail;
        this.type = type;
        this.metadata = metadata;
    }

}
