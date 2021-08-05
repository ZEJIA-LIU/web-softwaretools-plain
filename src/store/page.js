import { observable, action, makeObservable } from 'mobx';

class ArrayStore {
    constructor() {
        makeObservable(this, {
            pageState: observable,
            setPageState: action
        })
    }
    pageState = 0

    setPageState = (newState) => {
        this.pageState = newState
    }

}

export default ArrayStore