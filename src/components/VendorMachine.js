import {useState,useEffect} from 'react'
import styled from 'styled-components'
import Machine from '../assets/vendor-machine.png';
import Itemid from './ItemId';
import Numpad from './Numpad';
import DisplayScreen from './DisplayScreen'
import Cancelbtn from './Cancelbtn';
import Products from './Products';
import Pushproduct from './Pushproduct';
const VendorMachine = ({data,setdata,coins,setcoins}) =>{
    const [id,setid] = useState('')
    const [buy,setbuy] = useState({cond:false})
    return(
        <Container>
            <Machine_img src={Machine} alt='Vendor-Machine'/>
            <DisplayScreen coins={coins}/>
            <Itemidwrapper>
                {data.map((item,index)=>(
                    <Itemid key={index} item = {item}/>
                ))}
            </Itemidwrapper>
            <ImgWrapper>
                {data.map((item,index)=>(
                    <Products key = {index} item = {item}/>
                ))}
            </ImgWrapper>
            <Numpad id={id} setid={setid} data={data} setdata={setdata} coins={coins} setcoins={setcoins} buy = {buy} setbuy={setbuy}/>
            <Cancelbtn setcoins={setcoins}/>
            <Pushproduct buy={buy}/>
        </Container>
    )
}

const Container = styled.div`
    height:750px;
    width:500px;
    position:relative;
`

const Machine_img = styled.img`
    width:100%;
    height:100%;
    position:relative;
`

const Itemidwrapper = styled.div`
    position:absolute;
    top: 111px;
    left: 38px;
    div:not(:first-child){
        margin-top: 31px;
    }
    z-index:1;
`
const ImgWrapper = styled.div`
    position:absolute;
    top: 52px;
    left: 27.5px;
    z-index:0;
    // div:first-child{
    //     margin-bottom:10px;
    // }
    div:not(:first-child){
        margin-top: 10px;
    }
`



export default VendorMachine

