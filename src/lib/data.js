
export const getData = async () => {
    const res = await fetch('https://big-budget-shop-wdsp.vercel.app/data.json', {
        cache: 'no-store'
    })
    return res.json()

}