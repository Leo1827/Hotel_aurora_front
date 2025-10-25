export const formatMexicanCurrency = (number) => {
    const formatter = new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 0,
    })
    return formatter.format(number)
}
