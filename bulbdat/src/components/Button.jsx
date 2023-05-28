import tw from "twin.macro";

export default function Button({children}, props) {
    return (
        <StyledButton onClick={props.onClick}>
            {children}
        </StyledButton>
    )
}

// Stylization

// Styled components
const StyledButton = tw.button`
    bg-bgYellow
    hover:bg-bgYellowDark
    hover:text-slate-100	
    m-2
    py-2
    w-40
    rounded-full
`;