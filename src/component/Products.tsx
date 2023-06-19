import css from './products.module.css'
export interface IProducts {
  products: Array<any>
}

export function ProductsList(props: IProducts) {
  const { products } = props
  return (
    <div>
      <h2 className={css.pColor}> Products list ({products.length}) </h2>
      <div>list</div>
    </div>
  )
}
