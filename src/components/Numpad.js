import styled from 'styled-components'
import {useEffect} from 'react'

const Numpad = ({id,setid,data,setdata,coins,setcoins,buy,setbuy}) => {
    const numhandler = (e) => {
        setid(id+e.target.id)
    }
    const clearhandler = () => {
        setid('')
    }
    const okhandler = () => {
        console.log(id)
        const arr = data.map((i)=>i.filter((filtered)=>{
            console.log('ok')
            if(filtered.id === id &&  filtered.price <= coins && filtered.item_count!=0 ){
                filtered['item_count'] = Number(filtered.item_count)-1
                setcoins(coins-filtered.price)
                setid('')
                setbuy({cond:true,product:filtered.item_name})

                const time = setTimeout(() => {
                    setbuy(false)
                    console.log('in set',buy)
                }, 3000);
                
            }
            return data
        }))
        setdata(arr)
        console.log('coins',coins)
    }
  
    

    return(
        <Numpad_wrapper>
            <Num id='1' onClick={numhandler}>1</Num>
            <Num id='2' onClick={numhandler}>2</Num>
            <Num id='3' onClick={numhandler}>3</Num><br/>
            <Num id='4' onClick={numhandler}>4</Num>
            <Num id='5' onClick={numhandler}>5</Num>
            <Num id='6' onClick={numhandler}>6</Num><br/>
            <Num id='7' onClick={numhandler}>7</Num>
            <Num id='8' onClick={numhandler}>8</Num>
            <Num id='9' onClick={numhandler}>9</Num><br/>
            <Num onClick={clearhandler}>C</Num>
            <Num id='0' onClick={numhandler}>0</Num>
            <Num onClick={okhandler}>OK</Num>
        </Numpad_wrapper>
    )
}
const Numpad_wrapper = styled.div`
    position:absolute;
    top:230px;
    right:41px;
`
const Num = styled.div`
    color:black;
    background-color:#e6e5e3;
    border-radius:50%;
    height: 13px;
    width: 13px;
    font-size: 12px;
    padding: 5px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin:2px;
    cursor:pointer;
    &:active{
        background-color:red;
    }
    &:last-child:active{
        background-color:green;
    }
`


export default Numpad