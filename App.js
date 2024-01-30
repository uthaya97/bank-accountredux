
import AccountOperations from './Accounts/AccountOperations';
import './AccountOperations.css'
import BalanceDisplay from './Accounts/BalanceDisplay';
import CreateCustomer from './Customer/CreateCustomer';
import './CreateCustomer.css'
import Customer from './Customer/Customer';


function App() {
  return (
   <div>
      {/* <CreateCustomer/>
      <Customer/> */}
      <AccountOperations/>
      <BalanceDisplay/>
      
   </div>
  );
}

export default App;
