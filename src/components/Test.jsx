
import React, { useEffect } from 'react'
import { inject, observer } from 'mobx-react'
const Component = inject('pageStore')(({ pageStore }) => {
    useEffect(() => {
        console.log(pageStore)
    })
    return (
        <div>13456</div>
    )
})
export default Component