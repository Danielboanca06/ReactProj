import sendVerification from "./SendVerification";
import { useNavigate} from "react-router-dom";
import { FormEvent, useReducer } from "react";

interface Errors {
  fullName?: string;
  password?: string;
  email?: string;
}

function reducer(state: InitialStateType, action: Actions): InitialStateType{
  switch(action.type){
    case "loading":
      return {...state, isLoading: action.value};
    case "fullName":
      return  {...state, fullName: action.value};
    case "email":
      return  {...state, email: action.value};
    case "phoneNumber":
      return  {...state, phoneNumber: action.value};
    case "errors":
      return  {...state, errors: action.value};
    case "hovered":
      return  {...state, isHovered: action.value};
    default:
      return state
    }
}

type Actions = 
  {type: "loading", value: boolean,} 
  | {type: "fullName", value:string}
  | {type: "email", value: string}
  | {type: "phoneNumber", value: string}
  | {type: "errors", value: object}
  | {type: "hovered", value: boolean}
 

type InitialStateType ={
  isLoading:boolean,
  fullName:string,
  email:string,
  phoneNumber:string,
  errors:any,
  isHovered:boolean
}

const initialState = {
  isLoading:false,
  fullName:"",
  email:"",
  phoneNumber:"",
  errors:{},
  isHovered:false
}
export const useForm = ({date, time}) => {
  const [{  isLoading, fullName, email, phoneNumber, errors, isHovered}, dispatch] = useReducer(reducer, initialState) 
  
  

  const handleMouse = (value: boolean) => {
    dispatch({type: "hovered", value})
  };


  const nav = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors: Errors = {};

    if (fullName.trim() === "") {
      errors.fullName = "Full Name is required";
    }

    if (email.trim() === "") {
      errors.email = "Email is required";
    } else if (!email.includes("@") || !email.includes(".")) {
      errors.email = "Invalid email format";
    }

    dispatch({type:'errors', value: errors });
    function generateAuthToken() {
      const token = Math.random().toString(36).substring(2) + Date.now();
      return token;
      }
      
      const authToken = generateAuthToken();
      console.log(authToken);


    if (Object.keys(errors).length === 0) {
      console.log("Form submitted successfully");
      dispatch({type: "hovered", value: true})
    
      const userData = {
        Name: fullName,
        details : {
          email: email,
          phoneNumber: phoneNumber,
          private :{
            authToken: authToken,
          },
          appointmentDetails:{
            time,date,
          }
        }
      };
      localStorage.setItem("userData", JSON.stringify(userData));
    
   sendVerification()
    nav('/verification')
  }
  };
  return {isLoading, handleSubmit, errors, fullName, dispatch, email, phoneNumber, handleMouse, isHovered,}
}