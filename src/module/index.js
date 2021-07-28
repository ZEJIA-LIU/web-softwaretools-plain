import baseurl from '../constant/url'
import axios from 'axios'

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
            .catch(err => { console.log(err) })
    })
}