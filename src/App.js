
import VendorMachine from './components/VendorMachine';
const data = [
      [
        {'id':'11', 'item_name':'snickers','item_count':'3'},
        {'id':'12', 'item_name':'unknown','item_count':'0'},
        {'id':'13', 'item_name':'bomba','item_count':'3'},
        {'id':'14', 'item_name':'unknown','item_count':'0'},
        {'id':'15', 'item_name':'unknown','item_count':'0'},
      ],
      [
        {'id':'21', 'item_name':'unknown','item_count':'0'},
        {'id':'22', 'item_name':'mars','item_count':'3'},
        {'id':'23', 'item_name':'snickers','item_count':'3'},
        {'id':'24', 'item_name':'unknown','item_count':'0'},
        {'id':'25', 'item_name':'unknown','item_count':'0'},
      ],
      [
        {'id':'31', 'item_name':'unknown','item_count':'0'},
        {'id':'32', 'item_name':'unknown','item_count':'0'},
        {'id':'33', 'item_name':'bomba','item_count':'3'},
        {'id':'34', 'item_name':'snickers','item_count':'3'},
        {'id':'35', 'item_name':'unknown','item_count':'0'},
      ],
      [
        {'id':'41', 'item_name':'unknown','item_count':'0'},
        {'id':'42', 'item_name':'mars','item_count':'3'},
        {'id':'43', 'item_name':'unknown','item_count':'0'},
        {'id':'44', 'item_name':'unknown','item_count':'0'},
        {'id':'45', 'item_name':'unknown','item_count':'0'},
      ],
      [
        {'id':'51', 'item_name':'unknown','item_count':'0'},
        {'id':'52', 'item_name':'unknown','item_count':'0'},
        {'id':'53', 'item_name':'mars','item_count':'3'},
        {'id':'54', 'item_name':'unknown','item_count':'0'},
        {'id':'55', 'item_name':'unknown','item_count':'0'},
      ]
      
      
      
    ]
function App() {
  return (
    <div>
        <VendorMachine data={data}/>
    </div>
  );
}

export default App;
