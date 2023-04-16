const priceFormate = (price) => {
    let IntDollar = new Intl.NumberFormat('en-US', {
        style : 'currency',
        currency : 'USD',
    })
    return IntDollar.format(price / 100)
}

export default priceFormate