import styled from 'styled-components'
import cancel_btn from '../assets/cancel-button.png'
const Cancelbtn = () => {
    return(
        <Cancel><img src={cancel_btn} alt='cancel-btn'/></Cancel>
    )
}

const Cancel = styled.div`
    position:absolute;
    top: 169px;
    right: 51px;
    img{
        height:29px;
    }
    cursor:pointer;
}
`
export default Cancelbtn 