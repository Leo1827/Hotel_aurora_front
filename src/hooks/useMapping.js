import { useEffect, useState } from 'react'

export const useMapping = (
    funApiReq,
    initialValue = null,
    params = '',
    arrayDependencis = []
) => {
    const [data, setData] = useState(initialValue)

    useEffect(() => {
        funApiReq(params)
            .then((resp) => {
                const data = JSON.parse(resp)
                setData(data)
            })
            .catch((error) => {
                console.error(error)
            })
    }, arrayDependencis)
    return data
}
