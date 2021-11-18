import React, {useState, useEffect} from 'react'
import "./Cards.css"

export default function Cards() {

    const [clickOne, setClickOne] = useState("")
    const [basicImg, setBasicImg] = useState("https://1.bp.blogspot.com/-tsbx1yQwmc0/X1OTuKXYjLI/AAAAAAAB2_0/uohlhOeSbs8H0AKfBG5boZvW1Z-WBpr7QCLcBGAsYHQ/s1600/23-iphone-mobile-wallpapers-hd-%25D8%25AE%25D9%2584%25D9%2581%25D9%258A%25D8%25A7%25D8%25AA-%25D8%25A7%25D9%258A%25D9%2581%25D9%2588%25D9%2586-%25D8%25B5%25D9%2588%25D8%25B1-%25D8%25AE%25D9%2584%25D9%2581%25D9%258A%25D8%25A7%25D8%25AA-%25D9%2584%25D9%2584%25D9%2585%25D9%2588%25D8%25A8%25D8%25A7%25D9%258A%25D9%2584-%25D9%2584%25D9%2584%25D9%2587%25D8%25A7%25D8%25AA%25D9%2581-%25D9%2584%25D9%2584%25D8%25AC%25D9%2588%25D8%25A7%25D9%2584-%25D9%2584%25D9%2584%25D8%25A7%25D9%258A%25D9%2581%25D9%2588%25D9%2586.jpg")
    const [imgSrc, setImgSrc] = useState([basicImg, ""])
    const [clickOneID, setClickOneID] = useState("")
    const [count, setcount] = useState(0)
    const [losecount, setlosecount] = useState(0)

    const [cardsArray, setCardsArray] = useState([
        { id: 1, url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png", name: "c", toggle: false },
        { id: 2, url: "https://quocent.com/QUOCENT-CMS/userfiles/StaticBanner/1529923467_Javascript.png", name: "js", toggle: false },
        { id: 3, url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png", name: "c", toggle: false },
        { id: 4, url: "https://quocent.com/QUOCENT-CMS/userfiles/StaticBanner/1529923467_Javascript.png", name: "js", toggle: false },
        { id: 5, url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png", name: "p", toggle: false },
        { id: 8, url: "https://www.bairesdev.com/wp-content/uploads/2021/07/Csharp.svg", name: "c#", toggle: false },
        { id: 9, url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png", name: "p", toggle: false },
        { id: 12, url: "https://www.bairesdev.com/wp-content/uploads/2021/07/Csharp.svg", name: "c#", toggle: false },
    ]);

    const reStart = () => {
        setClickOne("")
    }


    const replaceImg = (elem, index) => {
        const id = elem.id;
        let newArr = JSON.parse(JSON.stringify(cardsArray))
        for (let i = 0; i < cardsArray.length; i++) {
            if (cardsArray[i].id == id) {
                if (cardsArray[i].toggle == true) {
                    newArr[i].toggle = false
                } else {
                    newArr[i].toggle = true
                }
            }
        }
        setCardsArray(newArr)
        
        if (clickOne == "") {
            setClickOne(elem.name)
            setClickOneID(elem.id)
            return;
        }

        if (clickOne !== elem.name) {
            let mylosecount = losecount + 1;
            setlosecount(mylosecount)
            setCardsArray(newArr)
            setTimeout(() => {
                const newArr = [...cardsArray]
                for (let i = 0; i < newArr.length; i++) {
                    
                    if (newArr[i].id === elem.id || newArr[i].id === clickOneID) {
                        newArr[i].toggle = false
                        setClickOne("")
                    }
                }
                setCardsArray(newArr)
            }, 700)
        }
        else {
            let mycount = count + 1;
            
            setcount(mycount);
            setClickOne("")
        }
        setCardsArray(newArr)
        console.log(newArr)
    }
    return (
        <div>
            <div style={{display:"flex" , justifyContent:"space-between",margin:"30px"} } className="result">
                <h1 className="test" > win : { count}</h1>
                <h1 className="test" >lose: { losecount}</h1>
            </div>
            <div className="container">
            
                {

                    cardsArray.map((elem,index)=>{
                        if(elem.toggle===true){
                        return <div onClick={()=>{replaceImg(elem, index)}} key={index}>
                        <img src={elem.url} alt="" />
                        </div>} else{
                            return <div onClick={()=>{replaceImg(elem, index)}} key={index}>
                            <img src={basicImg} alt="" />
                            </div>
                        }
                    })
                }

            </div>
        </div>
    )
            }