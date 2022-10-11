import carrito from './carrito.jpg'
import './CartWidget.css'
function CartWidget() {
  return (
    <div>
        <a  href="">
          <img className='Carrito' src={carrito}  /> <span className='Contador'>0</span>
        </a>
    </div>
  )
}

export default CartWidget