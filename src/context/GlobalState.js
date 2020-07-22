 import React,{createContext,useReducer} from 'react'
import AppReducer from './AppReducer' ;
 //initial state

 const initialState = {
     transactions: [
         {id:1 , text:'flower',amount : -20} ,
         {id:2 , text:'salary',amount : 320} ,
         {id:3 , text:'book',amount : 10} ,
         {id:4 , text:'camera',amount : 160} ,
     ]
 }

 //create context
 export const GlobalContext = createContext(initialState) ;

 //create Provider component

 export const GlobalProvider  = ({children}) =>{
        const [state , dispatch] = useReducer(AppReducer , initialState) ;

        //Action 

     function deleteTransaction(id){
         dispatch({
             type:'DELETE_TRANSACTION' ,
             payload:id
         })
     }   
     function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION' ,
            payload:transaction
        })
    } 

        return (<GlobalContext.Provider value={{
            transactions:state.transactions ,
            deleteTransaction ,
            addTransaction

        }}>
            {children}
        </GlobalContext.Provider>)
 } 