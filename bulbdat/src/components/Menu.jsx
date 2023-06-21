import tw from "twin.macro";

export default function Menu(props) {
    return (
        <StyledMenu>
            {props.children}
        </StyledMenu>
    )
}

// Stylization

const StyledMenu = tw.div`
    flex
    flex-col
    items-center
    justify-around
    w-full
    h-full
    p-4
`;