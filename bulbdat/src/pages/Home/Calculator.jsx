import tw from "twin.macro";

export default function Calculator() {
    return (
        <StyledCalculator>
                <img src={require("../../assets/images/calc.png")} alt="Calculadora" className="w-2/6 h-auto z-40"/>
                <StyledBackgroundImg />
                <StyledH1>
                    Economize na <br /> 
                    conta de luz com <br /> 
                    a calculadora de gastos <br /> 
                    de energia do Bulbdat, <br /> 
                    uma ferramenta <br /> 
                    simples e eficiente.
                </StyledH1>
        </StyledCalculator>
    )
}


// Stylization

// Styled components
const StyledCalculator = tw.div`
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
    left-0
    rounded-e-3xl	
`;

// Styled H1
const StyledH1 = tw.h1`
    text-3xl
    font-bold
    text-darkGreen
`;