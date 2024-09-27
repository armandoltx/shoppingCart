

export function CartItem({ product, removeFromCart, increaseQuantity, decreaseQuantity }) {
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
              onClick={() => decreaseQuantity(product.id)}
          >
              -
          </button>
              {product.quantity}
          <button
              type="button"
              className="btn btn-dark"
              onClick={() => increaseQuantity(product.id)}
          >
              +
          </button>
        </td>
        <td>
          <button
              className="btn btn-danger"
              type="button"
              onClick={() => removeFromCart(product.id)}
          >
              X
          </button>
        </td>
      </tr>
    </>
  )
}
