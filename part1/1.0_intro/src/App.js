import React, { useState } from "react"; //import useState function

const App =()=>{
    const [value, setValue] = useState(10)
    return(
        <div>
            {value}
            <button>reset to zero</button>
        </div>
    )
}




export default App