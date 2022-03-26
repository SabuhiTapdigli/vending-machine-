
import styled from 'styled-components'
import display_bg from '../assets/display-bg.png'
const DisplayScreen = ({coins}) => {
    return(
        <Display_Bg>
            <img src={display_bg} ald='Display'/>
            <span>{coins}</span>
        </Display_Bg>
    )
}

const Display_Bg = styled.div`
    
    position:absolute;
    top:57px;
    right:38px;
    img{
        height:50px;
    }
    span{
        position:absolute;
        top:13px;
        right:35px;
        font-size:25px;
        color:red
    }
`

export default DisplayScreen