
export const getData = async () => {
    const res = await fetch('http://localhost:3000/data.json', {
        cache: 'no-store'
    })
    return res.json()

}