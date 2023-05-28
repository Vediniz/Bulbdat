import tw from "twin.macro";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import { Link } from "react-router-dom";

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
        <StyledSignup>
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
                    <h1 className="text-2xl font-bold text-white mb-4">Cadastrar</h1>
                    <Input type="text" value={user.username} name="username" id="username" placeholder="Nome de Usuário" onChange={(e) =>setUser({ ...user, username: e.target.value })}/>
                    <Input type="email" value={user.email} name="email" id="email" placeholder="Email" onChange={(e) =>setUser({ ...user, email: e.target.value })}/>
                    <Input type="password" value={user.password} name="password" id="password" placeholder="Senha" onChange={(e) =>setUser({ ...user, password: e.target.value })}/>
                    <Button onClick={signup}>Cadastrar</Button>
                </Form>
            </StyledBody>
        </StyledSignup>       
    )
}

// Stylization

// Styled components

const StyledSignup = tw.div`
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