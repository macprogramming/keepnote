import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useState,useEffect } from 'react';
import Card from "./Card";


// const getLocalItems = () =>{
//     let List = localStorage.getItem("List");

//     if(List){
//         return JSON.parse(localStorage.getItem('List'))
//     }else{
//         return [];
//     }
// }

const Form = () => {    
    const [InputValue, setInputValue] = useState({
        title:"",
        content: ""
    });
    const [NewInputItem, SetNewInputItem] = useState([]);
    
    const [showFrom , setShowForm] = useState(false);

    const [toggleButton, setToggleButton] = useState(false);

    const [isEditItem, setIsEditItem] = useState("")

    const AddNote = () => {
        setShowForm(true);
    }

    const inputFun = (event) => {
        const {value, name} = event.target;

        setInputValue((prevValue) => {            
            return{
                id:new Date().getTime().toString(),
                ...prevValue,
                [name]: value,
                color: fixedColor
            }
        });
    }

    let colors = ['#741ee57d', '#1e88e57d', '#f1055573','#8000807a','#0e921975','#ffa50082'];
    //let colorIndex  = 1;
    var fixedColor = colors[Math.floor(Math.random() * colors.length)]
    const addItem = () => {                
        if(InputValue.title == "" || InputValue.content == ""){
            alert("Please enter title & contents");
        }
        else if(InputValue && toggleButton){
            console.log(InputValue);
            SetNewInputItem(
                NewInputItem.map((elem) => {
                    console.log( "Elem : " + elem);
                    console.log( "isEditItem : " + isEditItem);
                    
                    if(elem.id === isEditItem){
                        console.log("updated");
                        //return{elem}
                        console.log( "title : " + InputValue.id);
                        //return {...elem, InputValue};
                        return{
                            id:elem.id,
                            color:elem.color,
                            title:InputValue.title,
                            content: InputValue.content
                        }
                    }
                    return elem;
                })
            )

            setToggleButton(false);
            setInputValue({
                title:"",
                content: ""
            })
            
            setIsEditItem(null)
        }
        else{
            //const allInputData = {id: new Date().getTime.toString(), name:InputValue}
            SetNewInputItem((oldItem) => {
                return[...oldItem, InputValue]
            })
            console.log(SetNewInputItem)
            //localStorage.setItem('List', JSON.stringify(SetNewInputItem))
            setInputValue({
                title:"",
                content: ""
            });
            setShowForm(true);
        }
        setShowForm(false);   
    }

    // const BtnEditItem = () => {

    // }

    const EditItem = (id) => {
        setShowForm(true); 
        //console.log(id);
        const newEditItem = NewInputItem.find((elem, index) => {
            // console.log("elem.id :" + elem.id)
            // console.log("index :" + index)
            // console.log("ID :" + id)
            return elem.id == id
            //return elem.id;
        });
        setToggleButton(true);
        //console.log(newEditItem);
        //setInputValue(newEditItem.title);
        setInputValue({
            title:newEditItem.title,
            content: newEditItem.content
        })
        
        setIsEditItem(newEditItem.id)
    }

    const DeleteItem = (id) => {   
        //console.log(id);   
        // SetNewInputItem((oldItem) => {
        //     return oldItem.filter((objOld, index) => {
        //         return index !== id;
        //     })
        // })
        const updatedItem = NewInputItem.filter((elem, ind) => {
            return elem.id !== id;
        });
        SetNewInputItem(updatedItem);
    }

    const RemoveAll = () => {
        SetNewInputItem([])
    }
    

    return(
        <>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-xs-12 col-sm-12" style={{marginTop:"90px"}}>
                        <button className="btn btn-sm btn-outline-warning" onClick={AddNote}><AddIcon />&nbsp;Add Note</button>
                        <button className="btn btn-sm btn-outline-danger" style={{float:"right"}} onClick={RemoveAll}><DeleteIcon />&nbsp;Remove All</button>                        
                    </div>
                    <div className="card col-12 col-sm-8 col-md-4" className={showFrom ? "" : "hide"}>
                        <form className="card-body">
                            <div className="mb-3">                
                                <input type="text" value={InputValue.title} name="title" onChange={inputFun} className="form-control" id="title" placeholder="Title" aria-describedby="emailHelp" />
                            </div>
                            <div className="">
                                <textarea onChange={inputFun} value={InputValue.content} name="content" className="form-control" placeholder="Content" id="content"></textarea>
                            </div>
                            {
                                toggleButton ? <Button type="button" onClick={addItem} className="btn_Add btn-sm btn-default float-right mt-2"><EditIcon /></Button> : <Button type="button" onClick={addItem} className="btn_Add btn-sm btn-default float-right mt-2"><AddIcon /></Button>
                            }                            
                        </form>
                    </div>
                </div>
                <div className="row scrollCard">                    
                    {NewInputItem.map((itemVal, index) => {                        
                        return(
                            <Card
                                key={index}
                                id={itemVal.id}
                                title={itemVal.title}
                                content={itemVal.content}
                                onSelect={DeleteItem}
                                onEdit={EditItem}
                                color={itemVal.color}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
}
export default Form;