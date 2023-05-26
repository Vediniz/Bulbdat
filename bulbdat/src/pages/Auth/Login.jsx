import { useState } from "react"
import {useDispatch} from "react-redux"
import axios from "axios"
import { HideLoading, ShowLoading } from "../../redux/rootSlice";

export default function Login(){

    const [user, setUser] = useState({
        username:"",
        password:"",
        email:"",
    });
    const dispatch = useDispatch();
    const login = async()=>{
        try {
            dispatch(ShowLoading());
            const response = await axios.post(
                "/auth/login",
                user
            );
            const {success, data} = response.data;
            if(success){
                window.location.href = "/"
                console.log(response.data.message)
            }
            else{
                console.log(response.data.message)
            }
            dispatch(HideLoading());
        } catch (error) {
            console.log(error.message)
            dispatch(HideLoading())
        }
    }


    return(
        <div className="loginView">
            <div className="img">
                <img src={require("../../assets/images/loginSign.png")} alt="Smartphone" />
            </div>
            <div className="form">
                <h1>Login</h1>
                <input type="text" value={user.username} name="username" id="username" placeholder="Usuário" onChange={(e)=>setUser({...user, username:e.target.value})}/>
                <input type="password" value={user.password} name="password" id="password" placeholder="Senha" onChange={(e)=>setUser({...user, password:e.target.value})}/>
                <button onClick={login}>Entrar</button>
            </div>
        </div>
    )
}