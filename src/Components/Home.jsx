import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'
import { useEffect } from 'react';

function Home() {
    const [isHorizontal, setIsHorizontal] = useState(true);
    const [data, setData] = useState([]);
    const [searchKey, setSearchKey] = useState("");
    console.log(searchKey)

    async function fetchData() {
        try {
            const res = await fetch("https://mocki.io/v1/0934df88-6bf7-41fd-9e59-4fb7b8758093");
            const data = await res.json();
            console.log(data);
            setData(data.data)

        } catch (error) {
            console.log(error)

        }
    }


    useEffect(() => {
        fetchData();
    }, [])


    return (
        <div className='home'>
            <Navbar isHorizontal={isHorizontal} setIsHorizontal={setIsHorizontal} setSearchKey={setSearchKey} />
            <div className={isHorizontal ? 'fr1' : "fr2"}>
                {
                    data.length > 0 && data.map((obj) => {
                        return <div className={isHorizontal ? "horizontal" : "vertical"}>
                            <div className={isHorizontal ? "left1" : "left2"}>

                                <img src={obj.product_image
                                } alt="" className={isHorizontal ? "img1" : "img2"} />


                                <div className={isHorizontal ? "badge1" : "badge2"}> {obj.product_badge}</div>
                            </div>
                            <div className={isHorizontal ? "right1" : "right2"}>
                                <h3 className='title'>{obj.product_title
                                }</h3>

                                <div className=
                                    {(obj.product_variants[0].v1.toLocaleLowerCase().includes(searchKey.trim().toLocaleLowerCase()) && searchKey.length > 0) ? "highlight color-size" : "color-size"}>
                                    {obj.product_variants[0].v1.toUpperCase()}</div>



                                <div className=
                                    {(obj.product_variants[1].v2.toLocaleLowerCase().includes(searchKey.trim().toLocaleLowerCase()) && searchKey.length > 0) ? "highlight color-size" : "color-size"}>
                                    {obj.product_variants[1].v2.toUpperCase()}</div>

                                <div className=
                                    {(obj.product_variants[2].v3.toLocaleLowerCase().includes(searchKey.trim().toLocaleLowerCase()) && searchKey.length > 0) ? "highlight color-size" : "color-size"}>
                                    {obj.product_variants[2].v3.toUpperCase()}</div>


                            </div>

                        </div>
                    })
                }
            </div>


        </div>
    )
}

export default Home
