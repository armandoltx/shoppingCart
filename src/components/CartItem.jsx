

export function CartItem({product}) {
  return (
    <>
      <tr>
        <td>
          <img
            className="img-fluid"
            src={`/img/${product.image}.jpg`}
            alt={product.name}
          />
        </td>
        <td>{product.name}</td>
        <td className="fw-bold">
                ${product.price}
        </td>
        <td className="flex align-items-start gap-4">
          <button
              type="button"
              className="btn btn-dark"
          >
              -
          </button>
              {product.quantity}
          <button
              type="button"
              className="btn btn-dark"
          >
              +
          </button>
        </td>
        <td>
          <button
              className="btn btn-danger"
              type="button"
          >
              X
          </button>
        </td>
      </tr>
    </>
  )
}
