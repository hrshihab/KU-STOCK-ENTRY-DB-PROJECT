
import { useState } from "react";
import Axios from "axios";

function Items() {
  const [i_id, setI_id] = useState("");
  const [i_name, setI_name] = useState("");
  const [i_Quantity, setI_Quantity] = useState(0);
  const [i_Unit_price, setI_Unit_price] = useState(0);
  const [s_id,setS_id] = useState('');
  const [t_id,setT_id] = useState('');
  const [so_id,setSo_id] = useState('');
  const [dh_id,setDh_id] = useState('');
  const [entry_date,setEntry_date] = useState('');

  const [newQuantity,setNewQuantity] = useState(0);

  const [itemList ,setItemList] = useState([]);
  const [show,setShow] = useState(false);

  const [sid,setSid] = useState('');
  const [showId,setShowId] = useState('');
  const searchItem = () => {
    const res = itemList.find(id => id.i_id===sid )
    setShowId(res);
    console.log(showId.i_id);
    setShow(false);
  }
  //console.log(showId);
  const addItems = () => {
    Axios.post("http://localhost:3006/create", {
      i_id: i_id,
      i_name: i_name,
      i_Quantity: i_Quantity,
      i_Unit_price: i_Unit_price,
      s_id : s_id,
      t_id : t_id,
      so_id : so_id,
      dh_id : dh_id,
      entry_date : entry_date,

    }).then(() => {
      setItemList([
        ...itemList,
        {
        i_id: i_id,
        i_name: i_name,
        i_Quantity: i_Quantity,
        i_Unit_price: i_Unit_price,
        s_id : s_id,
        t_id : t_id,
        so_id : so_id,
        dh_id : dh_id,
        entry_date : entry_date,
          },
      ]);
    });
  };

  const getItems= () => {
    Axios.get("http://localhost:3006/items").then((response) => {
      setShow(true);
      setShowId('');
      setS_id('');
      setItemList(response.data);
    });
  };

  const updateItemQuantity = (i_id) => {
    Axios.put("http://localhost:3006/update", { i_Quantity: newQuantity, i_id: i_id }).then(
      (response) => {
        setItemList(
          itemList.map((val) => {
            return val.i_id === i_id
              ? {
                i_id: val.i_id,
                i_name: val.i_name,
                i_Quantity: newQuantity,
                i_Unit_price: val.i_Unit_price,
                s_id : val.s_id,
                t_id : val.t_id,
                so_id : val.so_id,
                dh_id : val.dh_id,
                entry_date : val.entry_date,
                }
              : val;
          })
        );
      }
    );
  };

  const deleteItem = (i_id) => {
    Axios.delete(`http://localhost:3006/delete/${i_id}`).then((response) => {
      setItemList(
        itemList.filter((val) => {
          return val.i_id !== i_id;
        })
      );
    });
  };
  const ascending = () => {}
  const descending = () => {}
  const highLow = () => {}

  return (
    <div className="Items grid mx-auto  text-white px-4 py-6 ">
      <div className="information grid grid-cols-3 gap-4 border border-gray-500  p-8 rounded-lg   ">
        <div className="Items     ">
        <label className="Items ">Item Id:</label>
        <input  className="Items  w-full pl-4 border rounded-lg border-gray-500"  type="text" onChange={(event) => {setI_id(event.target.value);}}/>
        </div>
        
        <div className="Items ">
        <label >Item name:</label>
        <input className=" pl-4 w-full  border rounded-lg border-gray-500" type="text"  onChange={(event) => {setI_name(event.target.value);  }}  />
        </div>
        
        <div className="Items     ">
        <label>Quantity:</label>
        <input className="w-full pl-4  border rounded-lg border-gray-500" type="number"  onChange={(event) => {setI_Quantity(event.target.value); }} />
        </div>
        
        <div className="Items     ">
        <label>Unit Price:</label>
        <input className="w-full pl-4 border rounded-lg border-gray-500" type="number"  onChange={(event) => { setI_Unit_price(event.target.value); }} />
        </div>
       
       <div className="Items     ">
       <label>Stuff ID :</label>
        <input className="w-full pl-4 border rounded-lg border-gray-500"   type="text"  onChange={(event) => {setS_id(event.target.value); }} />

       </div>
       <div className="Items     ">
       <label>T ID :</label>
        <input  className="w-full pl-4 border rounded-lg border-gray-500"  type="text"  onChange={(event) => {setT_id(event.target.value); }} />

       </div>
        <div className="Items     ">
        <label>SO ID :</label>
        <input  className="w-full pl-4 border rounded-lg border-gray-500"  type="text"  onChange={(event) => {setSo_id(event.target.value); }} />

        </div>
        
        <div className="Items     ">
        <label>DH ID :</label>
        <input  className="w-full pl-4 border rounded-lg border-gray-500"  type="text"  onChange={(event) => {setDh_id(event.target.value); }} />
        </div>
       
       <div className="Items     ">
       <label>Entry Date :</label>
        <input  className="w-full pl-4 border rounded-lg border-gray-500" type="text"  onChange={(event) => {setEntry_date(event.target.value); }} />
       </div>

       

      </div >
    
<div className="mx-auto p-4 ">
<button className=" border border-gray-500   p-2 mx-auto  rounded-lg mr-4" onClick={addItems}>Add Items</button>
      <button className="  border border-gray-500  p-2 rounded-lg mr-4" onClick={getItems}>Show All</button>
      <input className="px-4 h-10 w-1/3 mr-2 border rounded-lg border-gray-500" type="text" name="find" id="" onChange={(event) => {setSid(event.target.value);  }} placeholder=" Search id" />
      <button className="  border border-gray-500  p-2 rounded-lg " onClick={searchItem}>Search</button>
      <ul className="menu menu-horizontal bg-base-100 font-mono">

  <li tabIndex={0}>
    <span>Filter</span>
    <ul className="bg-base-100">
      <li><button onClick={ascending}>Ascending</button></li>
      <li><button onClick={descending}>Descending</button></li>
      <li><button onClick={highLow}>High to low</button></li>
    </ul>
  </li>
</ul>

</div>
      
   
      <div className="employees ">
     
       <div>
       <div className="itemDisplay grid grid-cols-11 gap-4 m-2 px-2 mt-4 ">
                <h3>Item Id</h3>
                <h3>Item name</h3>
                <h3>Quantity</h3>
                <h3>Unit_price</h3> 
                <h3>Stuff Id</h3>
                <h3>T_Id</h3>
                <h3>SO_Id</h3>
                <h3>DH_Id</h3>
                <h3> Modify_Quantity</h3>
             
              </div>
       </div>
       {
        sid && <div className="employee border border-gray-5000   mb-2 rounded-xl">
<div className="itemDisplay grid grid-cols-11 gap-4 m-2  p-1 ">
                 <h3> {showId.i_id}</h3>
                <h3> {showId.i_name}</h3>
                <h3> {showId.i_Quantity}</h3>
                <h3> {showId.i_Unit_price}</h3> 
                <h3> {showId.s_id}</h3>
                <h3> {showId.t_id}</h3>
                <h3> {showId.so_id}</h3>
                <h3> {showId.dh_id}</h3> 
              
                </div>
        </div>
       }

        { show &&
        itemList.map((val, key) => {
          return (
            <div className="employee border border-gray-5000   mb-2 rounded-xl">
              <div className="itemDisplay grid grid-cols-11 gap-4 m-2  p-1 ">
                <h3> {val.i_id}</h3>
                <h3> {val.i_name}</h3>
                <h3> {val.i_Quantity}</h3>
                <h3> {val.i_Unit_price}</h3> 
                <h3> {val.s_id}</h3>
                <h3> {val.t_id}</h3>
                <h3> {val.so_id}</h3>
                <h3> {val.dh_id}</h3>
                
                <input  type="text" className="rounded-lg px-2 border border-gray-500"
                  placeholder="value"
                  onChange={(event) => {
                    setNewQuantity(event.target.value);
                  }}
                />
                <button className="border border-gray-500 rounded-lg hover:bg-gray-800"
                  onClick={() => {
                    updateItemQuantity(val.i_id);
                  }}
                >
                  {" "}
                  Update
                </button>

                <button className="border border-gray-500 rounded-lg"
                  onClick={() => {
                    deleteItem(val.i_id);
                  }}
                >
                  Delete
                </button>
              </div>
                </div>
             
           
          );
        })}
      </div>
    </div>
  );
}

export default Items;
