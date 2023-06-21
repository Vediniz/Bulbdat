import tw from "twin.macro";
import Menu from "../../components/Menu";

export default function Board() {
    return (
        <StyledBoard>
            <Menu>

            </Menu>
            <StyledMain>
            </StyledMain>
        </StyledBoard>
    )
}

// Stylization

const StyledBoard = tw.div`
    flex
    w-full
    h-screen
`;

const StyledMain = tw.div`
    w-1/3
`;