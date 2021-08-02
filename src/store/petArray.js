import { observable, action, runInAction } from 'mobx';
import resolve from 'resolve';
import { deletePet } from '../module/index'
class ArrayStore {
    @observable curArray = []
    @observable curIdArray = []
    @action
    add = (pet) => {
        const id = pet.id
        if (this.curIdArray.indexOf(id) === -1) {
            this.curIdArray.push(id)
            this.curArray.push(pet)
        }
    }

    @action
    changeStatus = (id, status) => {
        let index = -1
        console.log(this.curArray.length)
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

    @action
    delete(id) {
        return new Promise((resolve, reject) => {
            deletePet(id)
                .then(res => {
                    runInAction(() => {
                        this.curIdArray = this.curIdArray.filter(curId => curId !== id)
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