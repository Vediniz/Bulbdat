import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../../redux/rootSlice";
import axios from "axios";
import { useState } from "react";

export default function Signup(){

    const [user, setUser] = useState({
        username:"",
        password:"",
        email:"",
    });
    const dispatch = useDispatch();
    const signup = async() =>{
            try {
                dispatch(ShowLoading());
                const response = await axios.post(
                    "/auth/signup",
                    user,
                );
                const {success, data} = response.data;
                if(success){
                    window.location.href = "/login"
                    console.log(response.data.message)
                }
            } catch (error) {
                console.log(error.message)
                dispatch(HideLoading);
            }
        }
    

    return(
        <div className="signupView">
            <div className="img">
                <img src={require("../../assets/images/loginSign.png")} alt="Smartphone" />
            </div>
            <div className="form">
                <h1>Cadastrar</h1>
                <input type="text" value={user.username} name="username" id="username" placeholder="Nome de Usuário" onChange={(e) =>setUser({ ...user, username: e.target.value })}/>
                <input type="email" value={user.email} name="email" id="email" placeholder="Email" onChange={(e) =>setUser({ ...user, email: e.target.value })}/>
                <input type="password" value={user.password} name="password" id="password" placeholder="Senha" onChange={(e) =>setUser({ ...user, password: e.target.value })}/>
                <button onClick={signup}>Cadastrar</button>
            </div>
        </div>
    )
}