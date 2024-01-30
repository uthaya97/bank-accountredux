import{configureStore} from '@reduxjs/toolkit'
import AccountSlice from './Accounts/AccountSlice'
import CustomerSlice from './Customer/CustomerSlice'
const Store = configureStore({
   reducer:{
    account:AccountSlice,
    customer:CustomerSlice,
   }

})
export default Store
