import {useState} from 'react'
import styled from 'styled-components'
import Machine from '../assets/vendor-machine.png';
import Itemid from './ItemId';
import Numpad from './Numpad';
import DisplayScreen from './DisplayScreen'
import Cancelbtn from './Cancelbtn';
const VendorMachine = ({data}) =>{
    const [ids,setids] = useState([])
    return(
        <Container>
            <Machine_img src={Machine} alt='Vendor-Machine'/>
            <DisplayScreen/>
            <Itemid/>
            <Numpad/>
            <Cancelbtn/>
        </Container>
    )
}

const Container = styled.div`
    height:750px;
    width:500px;
    margin:auto;
    position:relative;
`

const Machine_img = styled.img`
    width:100%;
    height:100%;
    position:relative;
`



export default VendorMachine

