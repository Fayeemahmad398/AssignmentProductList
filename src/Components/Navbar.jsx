import React from 'react'
import { IoGridOutline } from "react-icons/io5";
import { CiBoxList } from "react-icons/ci";
function Navbar({ setIsHorizontal, setSearchKey, isHorizontal }) {

    return (
        <div className='header'>
            <h1>PLP</h1>
            <div className='searches-box'>
                <input type="text" onChange={(e) => { setSearchKey(e.target.value) }} placeholder='Type something to search' />
                <div className='icons' >
                    <div className={isHorizontal ? "active" : ""}>

                        <CiBoxList onClick={() => { setIsHorizontal(true) }} />
                    </div>
                    <div className={isHorizontal ? "" : "active"}>

                        <IoGridOutline onClick={() => { setIsHorizontal(false) }} className={isHorizontal ? "" : "active"} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Navbar
