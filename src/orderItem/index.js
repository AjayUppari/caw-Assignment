import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { MdDone } from 'react-icons/md'
import { RxCross2 } from 'react-icons/rx'
import { AiFillMinusCircle } from 'react-icons/ai'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import './index.css'

const OrderItem = (props) => {
    const onClickApproveOrder = () => {
        approveOrder(id)
    }

    const onClickUrgent = () => {
        urgentOrder(id)
    }

    const onClickMissing = () => {
        missingOrder(id)
    }

    const renderOrderStatus = (status) => {
        switch(status){
            case 'NONE':
                return null;
            case 'APPROVED':
                return <p className='approved statusItem'>Approved</p>
            case 'MISSING':
                return <p className='missing statusItem'>Missing</p>
            case 'URGENT_AND_MISSING':
                return <p className='urgent statusItem'>Missing-Urgent</p>
            default:
                return null;
        }
    }

    const getButtonsClassName = (status) => {
        switch(status){
            case 'APPROVED':
                return 'green'
            case 'MISSING':
                return 'orange'
            case 'URGENT_AND_MISSING':
                return 'red'
            default:
                return null;
        }
    }

    const { orderDetails, approveOrder, urgentOrder, missingOrder } = props
    const { id, quantity, status } = orderDetails

    return(
        <>
            <tr key={`key ${id}`}>
                <td className='productName'>
                  <img className='avocado' src='https://res.cloudinary.com/dymdlu50w/image/upload/v1698241015/Avocado_Hass_cvnqmd.jpg' alt='avocado' />
                  <p>Chicken Breast fillets, Boneless marinated, 6 Ounce Raw</p>
                </td>
                <td>
                    Hormel Black Labelmany
                </td>
                <td>$60.67 / 6+LB</td>
                <td>{`${quantity} x 6 * 1LB`}</td>
                <td>{`$${quantity * 600}`}</td>
                <td className='status'>
                    {
                        renderOrderStatus(status)
                    }
                    <button  onClick={onClickApproveOrder} type='button'><MdDone className='statusButton' /></button>
                    <div>
                      <Popup trigger=
                      {<button className={getButtonsClassName(status)} type='button'><RxCross2 className='statusButton' /></button>} 
                      modal nested>
                      {
                          close => (
                              <div className='modal'>
                                  <div className='content'>
                                      <div className='closeContainer'>
                                      <h1>Missing product</h1>
                                      <RxCross2 onClick={() => close()} />
                                      </div>
                                      <p>Is chicken breast fillets boneless... urgent?</p>
                                      <div className='buttonsContainer'>
                                        <button onClick={onClickUrgent} type='button'>Yes</button>
                                        <button onClick={onClickMissing} type='button'>No</button>
                                      </div>
                                  </div>
                                  <div>
                                  </div>
                              </div>
                          )
                      }
                      </Popup>
                    </div>
                    <div>
                      <Popup trigger=
                      {<button>Edit</button>} 
                      modal nested>
                      {
                          close => (
                              <div className='modal'>
                                  <div className='content'>
                                      <div className='closeContainer'>
                                      <h3>Chicken Breast Fillets, Boneless 6 Ounce Raw, Invivid...</h3>
                                      <RxCross2 className='modalClose' onClick={() => close()} />
                                      </div>
                                      <p>American Roland</p>
                                      <div className='editContainer'>
                                        <img className='editAvocado' src='https://res.cloudinary.com/dymdlu50w/image/upload/v1698241015/Avocado_Hass_cvnqmd.jpg' alt='avocado' />
                                        <div>
                                        <div className='editItem'>
                                            <p className='editItemheading'>Price ($)</p>
                                            <p className='editItemBorder'>9999.99</p>
                                            <p>/6*1LB</p>
                                        </div>
                                        <div className='editItem'>
                                            <p className='editItemheading'>Quantity</p>
                                            <div className='changeQuantity'>
                                                <AiFillMinusCircle className='changeNumber minus' />
                                                <p className='editItemBorder'>9998</p>
                                                <BsFillPlusCircleFill className='changeNumber' />
                                            </div>
                                            <p>x6*1LB</p>
                                        </div>
                                        <div className='editItem'>
                                            <p className='editItemheading'>Total</p>
                                            <p>$9,997,000.02</p>
                                        </div>
                                        </div>
                                      </div>
                                      <div className='reasonsContainer'>
                                            <h4>Choose reason <span>(optional)</span></h4>
                                            <ul>
                                                <li>
                                                    <button className='reason missingReason' type='button'>Missing product</button>
                                                </li>
                                                <li>
                                                    <button className='reason quantityReason'>Quantity is not the same</button>
                                                </li>
                                                <li>
                                                    <button className='reason quantityReason'>Price is not the same</button>
                                                </li>
                                                <li>
                                                    <button className='reason'>Other</button>
                                                </li>
                                            </ul>
                                      </div>
                                      <div className='popupSend'>
                                        <button onClick={() => close()} className='cancel' type='button'>Cancel</button>
                                        <button className='approveOrderButton' type='button'>Send</button>
                                      </div>
                                  </div>
                              </div>
                          )
                      }
                      </Popup>
                    </div>
                </td>
            </tr> 
        </>
    )
}

export default OrderItem