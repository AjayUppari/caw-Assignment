import { Component, React } from 'react'
import {BsCart3, BsSearch, BsPrinter} from 'react-icons/bs'
import {AiOutlineRight} from 'react-icons/ai'


import OrderItem from '../src/orderItem'
import './App.css'


class App extends Component{
  state = {
    ordersList: [
      {
       imageUrl:'https://res.cloudinary.com/dymdlu50w/image/upload/v1698383484/Chicken-Biryani_a47iog.jpg',
       productName: 'Chicken Biryani',
       brand: 'Mehfil',
       price: 300,
       quantity: 2,
       status: 'NONE',
       id:1,
       isApproved: ''
     },
    {
       imageUrl: 'https://res.cloudinary.com/dymdlu50w/image/upload/v1698334157/fish_fry_xkynrv.jpg',
       productName: 'Fish fry',
       brand: 'Salmon',
       price: 400,
       quantity: 1,
       status: 'NONE',
       id:2,
       isApproved: ''
     },
     {
      imageUrl: 'https://res.cloudinary.com/dymdlu50w/image/upload/v1698241015/Avocado_Hass_cvnqmd.jpg',
      productName: 'Avocado',
      brand: 'Fresh Mart',
      price: 150,
      quantity: 5,
      status: 'NONE',
      id:3,
      isApproved: ''
    },
    {
      imageUrl: 'https://res.cloudinary.com/dymdlu50w/image/upload/v1698334769/Paneer-butter-masala-recipe-3-500x500_mxswyw.jpg',
      productName: 'Paneer Butter Masala',
      brand: 'Fresh Mart',
      price: 280,
      quantity: 1,
      status: 'NONE',
      id:4,
      isApproved: ''
    },
    {
      imageUrl: 'https://res.cloudinary.com/dymdlu50w/image/upload/v1698335127/manchuria_vy6qwg.jpg',
      productName: 'Manchuria',
      brand: 'Haldirams',
      price: 130,
      quantity: 3,
      status: 'NONE',
      id:5,
      isApproved: ''
    }
   ],
  }

  onClickApproveOrder = (orderItemId) => {
    const { ordersList } = this.state

    const newOrdersList = ordersList.map(eachItem => {
      if(eachItem.id === orderItemId){
        return({
          ...eachItem,
          status: 'APPROVED',
          isApproved: true
        })
      }
      else{
        return eachItem
      }
    })

    this.setState({
      ordersList: newOrdersList
    })
  }

  onClickUrgent = (orderItemId) => {
    const { ordersList } = this.state

    const newOrdersList = ordersList.map(eachItem => {
      if(eachItem.id === orderItemId){
        return({
          ...eachItem,
          status: 'URGENT_AND_MISSING'
        })
      }
      else{
        return eachItem
      }
    })

    this.setState({
      ordersList: newOrdersList
    })
  }

  onClickMissing = (orderItemId) => {
    const { ordersList } = this.state

    const newOrdersList = ordersList.map(eachItem => {
      if(eachItem.id === orderItemId){
        return({
          ...eachItem,
          status: 'MISSING'
        })
      }
      else{
        return eachItem
      }
    })

    this.setState({
      ordersList: newOrdersList
    })
  } 


  render(){
    const { ordersList } = this.state

    return(
      <div className='appContainer'>
        <nav className='navContainer'>
          <div className='navItems'>
          <p className='navItem logo'>Reeco</p>
          <p className='navItem'>Store</p>
          <p className='navItem'>orders</p>
          <p className='navItem'>Analytics</p>
          </div>
          <div className='navItems'>
            <BsCart3  className='cart' />
            <p>Hello,James</p>
          </div>
        </nav>
        <div className='orderContainer'>
          <div className='orderDetails'>
          <div>
          <div className='orders'>
          <span>Orders</span>
          <AiOutlineRight />
          <span>Order 32457ABC</span>
          </div>
          <h1>Order 32457ABC</h1>
          </div>
          
          </div>
          <div className='approveOrderContainer'>
              <button className='backButton' type='button'>Back</button>
              <button className='approveOrderButton' type='button'>Approve order</button>
            </div>
        </div>

        <div className='ordersListContainer'>
          <div className='topContainer'>
            <div className='opContainerItem'>
              <p className='smallHeading'>Supplier</p>
              <p className='bigHeading'>East coast fruits and vegetables</p>
            </div>
            <div className='vl' />
            <div className='opContainerItem'>
              <p className='smallHeading'>Shipping date</p>
              <p className='bigHeading'>Thu, Feb 10</p>
            </div>
            <div className='vl' />
            <div className='opContainerItem'>
              <p className='smallHeading'>Total</p>
              <p className='bigHeading'>$ 15,028.3</p>
            </div>
            <div className='vl' />
            <div className='opContainerItem'>
              <p className='smallHeading'>Category</p>
              <p className='bigHeading'>East coast fruits and vegetables</p>
            </div>
            <div className='vl' />
            <div className='opContainerItem'>
              <p className='smallHeading'>Department</p>
              <p className='bigHeading'>300-444-678</p>
            </div>
            <div className='vl' />
            <div className='opContainerItem'>
              <p className='smallHeading'>Status</p>
              <p className='bigHeading'>Awaiting your approvel</p>
            </div>
          </div>
          <div className='bottomContainer'>
            <div className='searchAndAddItem'>
            <div className='searchBar'>
              <input placeholder='Search...' type='search' />
              <BsSearch />
            </div>
            <div className='addItemContainer'>
              <button onClick={this.addOrderItem} className='backButton addItemButton' type='button'>Add item</button>
              <BsPrinter className='printer' />
            </div>
            </div>
            
            <table className='ordersTable'>
              <tr>
                <th className='productName'>Product name</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th className='status'>Status</th>
              </tr>
              {
                ordersList.map(eachItem => <OrderItem orderDetails={eachItem} approveOrder={this.onClickApproveOrder} urgentOrder={this.onClickUrgent} missingOrder={this.onClickMissing} /> )
              }
            </table>
          </div>
        </div>
        </div>
    )
  }
}

export default App