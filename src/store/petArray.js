import { observable, action, makeObservable, runInAction } from 'mobx';
import { deletePet } from '../module/index'
class ArrayStore {
    constructor() {
        makeObservable(this, {
            curArray: observable,
            add: action,
            changeStatus: action,
            delete: action
        })
    }
    curArray = []

    add = (pet) => {
        const id = pet.id
        const exit = this.curArray.filter(pet => pet.id === id).length > 0
        if (!exit) {
            this.curArray.push(pet)
        }
    }


    changeStatus = (id, status) => {
        let index = -1
        for (let i = 0; i < this.curArray.length; i++) {
            if (this.curArray[i].id.toString() === id) {
                index = i
                break
            }
        }
        if (index !== -1) {
            this.curArray[index].status = status
        }
    }


    delete(id) {
        return new Promise((resolve, reject) => {
            deletePet(id)
                .then(res => {
                    runInAction(() => {
                        this.curArray = this.curArray.filter(pet => pet.id !== id)
                        resolve(`delete success ${res}`)
                    })
                })
                .catch(err => {
                    reject(`delete fail ${err}`)
                })
        })
    }

}

export default ArrayStore