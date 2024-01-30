import React, { useState } from 'react'
function Count () {
    const [btn, setBtn] = useState(true)
    const [para, setPara] = useState(true)

    function handleSignIn() {
        setBtn(false)
        setPara(false)
    }
    function handleSignOut (){
        setBtn(true)
        setPara(true)
    }
    return (
        <div style={{width:"30%",margin:"auto"}}>
            {
                para ? (<p>please sign in</p>) : (<p>please sign out</p>)
            }
            {
                btn ? (<button onClick={handleSignIn}>sign in</button>) : (<button onClick={handleSignOut}>sign out</button>)
            }

        </div>
    )
}

export default Count