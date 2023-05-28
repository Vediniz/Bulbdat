import tw from "twin.macro";
import { Link } from "react-router-dom";

export default function NavBar(children) {
    return (
        <StyledNav>
            
        </StyledNav>
    )
}

// Stylization

// Styled components
const StyledNav = tw.nav`
    w-full
    flex
    justify-between
    items-center
    px-20
`;