
import VendorMachine from './components/VendorMachine';
import Coins from './components/Coins';
import styled from 'styled-components';
import {useState} from 'react'

function App() {
  const [data,setdata] = useState([
    [
      {'id':'11', 'item_name':'snickers','item_count':'3','price':'220'},
      {'id':'12', 'item_name':null,'item_count':'0','price':null},
      {'id':'13', 'item_name':'bomba','item_count':'3','price':'315'},
      {'id':'14', 'item_name':null,'item_count':'0','price':null},
      {'id':'15', 'item_name':null,'item_count':'0','price':null},
    ],
    [
      {'id':'21', 'item_name':null,'item_count':'0','price':null},
      {'id':'22', 'item_name':'mars','item_count':'3','price':'190'},
      {'id':'23', 'item_name':'snickers','item_count':'3','price':'220'},
      {'id':'24', 'item_name':null,'item_count':'0','price':null},
      {'id':'25', 'item_name':null,'item_count':'0','price':null},
    ],
    [
      {'id':'31', 'item_name':null,'item_count':'0','price':null},
      {'id':'32', 'item_name':null,'item_count':'0','price':null},
      {'id':'33', 'item_name':'bomba','item_count':'3','price':'315'},
      {'id':'34', 'item_name':'snickers','item_count':'3','price':'220'},
      {'id':'35', 'item_name':null,'item_count':'0','price':null},
    ],
    [
      {'id':'41', 'item_name':null,'item_count':'0','price':null},
      {'id':'42', 'item_name':'mars','item_count':'3','price':'190'},
      {'id':'43', 'item_name':null,'item_count':'0','price':null},
      {'id':'44', 'item_name':null,'item_count':'0','price':null},
      {'id':'45', 'item_name':null,'item_count':'0','price':null},
    ],
    [
      {'id':'51', 'item_name':null,'item_count':'0','price':null},
      {'id':'52', 'item_name':null,'item_count':'0','price':null},
      {'id':'53', 'item_name':'mars','item_count':'3','price':'190'},
      {'id':'54', 'item_name':null,'item_count':'0','price':null},
      {'id':'55', 'item_name':null,'item_count':'0','price':null},
    ]
  ])
  const [coins,setcoins] = useState(0)
  return (
    <Container>
        <VendorMachine data={data} setdata = {setdata} coins={coins} setcoins={setcoins}/>
        <Coins setcoins={setcoins} coins={coins}/>
    </Container>
  );
}
const Container = styled.div`
  display:flex;
  margin:auto;
  justify-content:center;
  
`
export default App;
