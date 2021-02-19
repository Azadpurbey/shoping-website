import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegistrationScreen from './screens/RegistrationScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route exact path='/order/:id' component={OrderScreen} />
          <Route exact path='/shipping' component={ShippingScreen} />
          <Route exact path='/payment' component={PaymentScreen} />
          <Route exact path='/placeOrder' component={PlaceOrderScreen} />
          <Route exact path='/login' component={LoginScreen} />
          <Route exact path='/register' component={RegistrationScreen} />
          <Route exact path='/profile' component={ProfileScreen} />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route exact path='/admin/userlist' component={UserListScreen} />
          <Route exact path='/admin/user/:id/edit' component={UserEditScreen} />
          <Route exact path='/' component={HomeScreen} />
        </Container>
      </main>

      <Footer />
    </Router>
  )
}

export default App
