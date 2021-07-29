import { observable, action } from 'mobx';

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

}

export default ArrayStore