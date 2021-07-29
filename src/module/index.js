import baseurl from '../constant/url'
import axios from 'axios'
import { judgeTeam4Data } from '../util/index'
export const findByStatus = (status) => {
    return new Promise((resolve, reject) => {
        axios.get(`${baseurl}/findByStatus?status=${status}`)
            .then(res => { resolve(res.data) })
            .catch(error => { reject(error) })
    })
}

export const addPet = (options) => {
    return new Promise((resolve, reject) => {
        axios.post(baseurl, options)
            .then(res => { resolve(res) })
            .catch(error => { reject(error) })
    })
}

export const findById = (id) => {
    return new Promise((resolve, reject) => {
        axios.get(`${baseurl}/${id}`)
            .then(res => { resolve(res) })
            .catch(error => { reject(error) })
    })
}

export const changeStats = (id, newStatus) => {
    return new Promise((resolve, reject) => {
        axios.post(`${baseurl}/${id}`,
            `status=${newStatus}`,
            { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
            .then(res => { resolve(res) })
            .catch(error => { reject(error) })
    })
}

export const deletePet = (id) => {
    return new Promise((resolve, reject) => {
        axios.delete(`${baseurl}/${id}`)
            .then(res => { resolve(res) })
            .catch(err => { reject(err) })
    })
}
export const findAll = () => {
    return new Promise((resolve, reject) => {
        findByStatus("available")
            .then(res => {
                const availableArray = res.filter(item => judgeTeam4Data(item) === true)
                findByStatus("sold").then(
                    res => {
                        const soldArray = res.filter(item => judgeTeam4Data(item) === true)
                        findByStatus("pending").then(res => {
                            const pendingArray = res.filter(item => judgeTeam4Data(item) === true)
                            const resArray = availableArray.concat(soldArray).concat(pendingArray)
                            resolve(resArray)
                        }).catch(error => {
                            reject('获取pending数据失败，报错 ' + error)
                        })
                    }
                )
                    .catch(error => {
                        reject('获取sold数据失败，报错 ' + error)
                    })
            }).catch(error => {
                reject('获取ava数据失败，报错 ' + error)
            })
    })
}