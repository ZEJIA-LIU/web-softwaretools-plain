import { observable, action } from 'mobx';
import { categoryMap } from '../constant/category';
import { tagsMap } from '../constant/tags'
import { addPet } from '../module/index'
const defaultNewPet = {
    name: "",
    id: 4400,
    category: {
        id: 0,
        name: "",
    },
    photoUrls: [],
    tags: [
        { id: 0, name: "team4" }
    ],
    status: "available"

}

class NewPetStore {
    @observable
    id = defaultNewPet.id
    @observable
    name = defaultNewPet.name
    @observable
    category = defaultNewPet.category
    @observable
    tags = defaultNewPet.tags
    @observable
    photoUrls = defaultNewPet.photoUrls
    @observable
    status = defaultNewPet.status

    @action
    getId = () => {
        return this.id
    }
    @action
    getName = () => {
        return this.name
    }
    @action
    getCategory = () => {
        return this.category
    }
    @action
    getTags = () => {
        return this.tags
    }
    @action
    getPhotoUrls = () => {
        return this.photoUrls
    }
    @action
    getStatus = () => {
        return this.status
    }

    @action
    setId = (id) => {
        this.id = id
    }
    @action
    setName = (name) => {
        this.name = name
    }
    @action
    setCategory = (categoryName) => {
        const categoryId = categoryMap[categoryName]
        this.category = {
            id: categoryId,
            name: categoryName
        }
    }
    @action
    setTags = (newTagsArray) => {
        const completeNewArray = newTagsArray.map(name => { return { name, id: tagsMap[name] } })
        this.tags = defaultNewPet.tags.concat(completeNewArray)
    }
    @action
    setStatus = (newStatus) => {
        this.status = newStatus
    }

    @action resetNewPet = () => {
        this.id = defaultNewPet.id
        this.name = defaultNewPet.name
        this.category = defaultNewPet.category
        this.tags = defaultNewPet.tags
        this.photoUrls = defaultNewPet.photoUrls
        this.status = defaultNewPet.status
    }

    @action addNewPet = () => {
        const option = {
            id: this.id,
            category: this.category,
            photoUrls: this.photoUrls,
            tags: this.tags,
            name: this.name,
            status: this.status
        }
        return new Promise((resolve, reject) => {
            addPet(option)
                .then((res) => { resolve(res) })
                .catch((err) => { reject(err) })
        })
    }
}
export default NewPetStore;

