import tw from "twin.macro";

export default function Input(props) {
    return (
        <StyledInput 
            type={props.type}
            value={props.value}
            name={props.name}
            id={props.id}
            placeholder={props.placeholder}
            onChange={props.onChange}
        />
    )
}

// Stylization

// Styled components
const StyledInput = tw.input`
    mb-4
    w-3/4
    h-12
    px-4
    rounded-2xl
    focus:outline-none
`;