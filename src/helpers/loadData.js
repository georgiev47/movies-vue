const loadData = async (apiLink) => {
    let data = null

    try {
        const result = await fetch(apiLink)

        if(!result.ok) {
            throw Error('Error while fetching the data')
        }

        data = await result.json()
        
    } catch (error) {
        console.log(error.message)
    }

    return data
}

export default loadData;