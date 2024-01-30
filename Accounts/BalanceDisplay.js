
import { connect } from 'react-redux'

function BalanceDisplay({balance}) {
  return  <div style={{paddingLeft:"30px",fontSize:"25px"}}> {balance} </div>  
}
const amountShow=(state)=>{
  return{
    balance:state.account.balance,
  }
}
export default connect(amountShow ) (BalanceDisplay);