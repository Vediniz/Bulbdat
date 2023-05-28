import tw from "twin.macro";

export default function Form(props) {
    return (
        <StyledForm>
            {props.children}
        </StyledForm>
    )
}

// Stylization

// Styled components
const StyledForm = tw.div`
    flex
    flex-col
    items-center
    justify-around
    w-1/3
    h-5/6
    bg-darkGreen
    rounded-2xl
    py-5
`;