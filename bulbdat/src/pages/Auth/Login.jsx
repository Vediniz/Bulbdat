import tw from "twin.macro";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import { Link } from "react-router-dom";

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
        <StyledLogin>
            {/* <div className="img">
                <img src={require("../../assets/images/loginSign.png")} alt="Smartphone" />
            </div>
            <div className="form">
                <h1>Login</h1>
                <input type="text" value={user.username} name="username" id="username" placeholder="Usuário" onChange={(e)=>setUser({...user, username:e.target.value})}/>
                <input type="password" value={user.password} name="password" id="password" placeholder="Senha" onChange={(e)=>setUser({...user, password:e.target.value})}/>
                <button onClick={login}>Entrar</button>
            </div> */}
            <Link to="/" className="w-full px-20 py-3">
                <h1 className="text-2xl font-bold">Bulbdat</h1>
            </Link>
            <hr className="w-full border-black" />
            <StyledBody>
                <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                <StyledImg>
                    <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_bph802nj.json"  background="transparent"  speed="1"  loop autoplay></lottie-player>
                </StyledImg>

                <Form>
                    <h1 className="text-2xl font-bold text-white mb-4">Login</h1>
                    <Input type="text" value={user.username} name="username" id="username" placeholder="Usuário" onChange={(e)=>setUser({...user, username:e.target.value})}/>
                    <Input type="password" value={user.password} name="password" id="password" placeholder="Senha" onChange={(e)=>setUser({...user, password:e.target.value})}/>
                    <Button onClick={login}>Entrar</Button>
                    <Button>
                        <Link to="/signup">Cadastrar</Link>
                    </Button>
                </Form>
            </StyledBody>
        </StyledLogin>
    )
}

// Stylization

// Styled components

const StyledLogin = tw.div`
    w-full
    h-screen
    flex
    flex-col
`;

const StyledBody = tw.div`
    w-full
    h-5/6
    p-20
    flex
    justify-around
    items-center
`;

const StyledImg = tw.div`
    h-full
    w-auto
`;