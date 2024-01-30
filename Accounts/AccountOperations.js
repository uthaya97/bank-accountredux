import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deposit, payLoan, requestLoan, withdraw } from './AccountSlice'

const AccountOperations = () => {
    const [payShow, setPayShow] = useState(false)
    const [depositAmount, setDepositAmount] = useState("")
    const [withdrawAmount, setWithdrawAmount] = useState("")
    const [loanAmount, setLoanAmount] = useState("")
    const [loanPurpose, setLoanPurpose] = useState("")
    const [fullName, setFullName] = useState("")
    const [id, setId] = useState("")
    const [state,setState]=useState(false)

    const dispatch = useDispatch()

    const { loan: currentLoan,
        loanPurpose: currentLoanPurpose,
        balance } = useSelector((store) => store.account)

    const handleCreateCustomer = () => {
        if(!fullName)return
      setState(true);
    }


    const handleDeposit = () => {
        if (!depositAmount) return
        dispatch(deposit(depositAmount))
        setDepositAmount('')
    }
    const handleWithdraw = () => {
        if (!withdrawAmount) return
        dispatch(withdraw(withdrawAmount))
        setWithdrawAmount("")

    }
    const handleRequestLoan = () => {
        if (!loanAmount && !loanPurpose) return
        dispatch(requestLoan(loanAmount, loanPurpose))
        setLoanAmount("")
        setLoanPurpose("")
        setPayShow(true)
    }
    const handlePayloan = () => {
        alert("Conform Pay Loan")
        dispatch(payLoan())
        setPayShow(false)
    }
    return (
        <>
            <div className='create-container'>
                <h1>Create new customer</h1>
                <div>
                    <lable>Customer full name  </lable>
                    <input type='text' value={fullName} onChange={(e) => setFullName(e.target.value)}></input>
                </div>
                <div>
                    <lable>National ID  </lable>
                    <input type='number'value={id} onChange={(e) => setId(e.target.value)}></input>
                </div>
                <div>
                    <button onClick={handleCreateCustomer}>CREATE NEW CUSTOMER</button>
                </div>
            </div>
           {
            state ? ( <div className='AccountOperations'>
            <h2 style={{padding:"10px 0"}}> Hi 🖐 Welcome  {fullName} </h2>
                <h3>Your account operations</h3>
                <div>
                    <label>Deposit</label>
                    <input type='number' value={depositAmount}
                        onChange={(e) => setDepositAmount(+e.target.value)}></input>
                    <button onClick={handleDeposit}>DEPOSIT {depositAmount}</button>
                </div>
                <div>
                    <label>Withdraw</label>
                    <input type='number' value={withdrawAmount}
                        onChange={(e) => setWithdrawAmount(+e.target.value)}></input>
                    <button onClick={handleWithdraw}
                    >WITHDRAW {withdrawAmount}</button>
                </div>
                <div>
                    <label>Request loan</label>
                    <input type='number' placeholder='Loan amount' value={loanAmount}
                        onChange={(e) => setLoanAmount(+e.target.value)}></input>

                    <input type='text' placeholder='Loan purpose' value={loanPurpose} onChange={(e) => setLoanPurpose(e.target.value)}></input>


                    <button onClick={handleRequestLoan}>REQUEST LOAN</button>
                </div>
                {
                    payShow ? (<div>
                        <span>Pay back</span>
                        <button onClick={handlePayloan}>PAY LOAN </button>
                    </div>) : ('')
                }

            </div>):('')
           }
        </>

    )
}

export default AccountOperations