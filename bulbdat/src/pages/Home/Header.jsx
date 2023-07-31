import tw from "twin.macro";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

export default function Header() {
    return (
        <StyledHeader>
            <StyledNav>
                <Link to="/">
                    <h1 className="text-2xl font-bold">Bulbdat</h1>
                </Link>
                <div className="flex w-1/4">
                    <Link to="/login">
                        <Button>Entrar</Button>
                    </Link>
                    <Link to="/signup">
                        <Button>Cadastrar</Button>
                    </Link>
                </div>
            </StyledNav>
            <hr className="w-full border-black" />
        </StyledHeader>
    );
}

// Stylization

// Styled components
const StyledHeader = tw.header`
    w-full
    flex
    flex-col
`;

const StyledNav = tw.nav`
    w-full
    flex
    justify-between
    items-center
    px-20
`;
