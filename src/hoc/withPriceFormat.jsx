export default function withPriceFormat(WrapComponent, product) {

    product.price_text = new Intl.NumberFormat('vn').format(product.price)

    return <WrapComponent {...product} />
}