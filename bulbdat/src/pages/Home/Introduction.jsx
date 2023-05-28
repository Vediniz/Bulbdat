import tw from "twin.macro";

export default function Introduction() {
    return (
        <StyledIntroduction>           
            <StyledH1>
                Controle <br /> 
                seus gastos <br /> 
                de energia <br /> 
                com Bulbdat!
            </StyledH1>
            <img src={require("../../assets/images/1.png")} alt="Pessoa" className="w-2/6 h-auto z-40"/>
            <StyledBackgroundImg />       
        </StyledIntroduction>
    )
}

// Stylization

// Styled components
const StyledIntroduction = tw.div`
    w-full
    flex
    justify-around
    items-center
    text-center
    py-20
    h-4/5
`;

// Styled Background Image
const StyledBackgroundImg = tw.div`
    bg-bgYellow
    w-3/6
    h-2/4
    absolute
    right-0
    rounded-s-3xl	
`;

// Styled H1
const StyledH1 = tw.h1`
    text-5xl
    font-bold
    text-darkGreen
`;