import tw from "twin.macro";

export default function Footer() {
    return(
        <StyledFooter>
            <p>Copyright &copy; 2023 Bulbdat. Todos os direitos reservados.</p>
        </StyledFooter>
    )
}

// Stylization

// Styled components
const StyledFooter = tw.footer`
    w-full
    flex
    justify-center
    text-base
    py-4
    bg-darkGreen
    text-white
`;