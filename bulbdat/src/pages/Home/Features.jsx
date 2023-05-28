import tw from "twin.macro";

export default function Features() {
    return (
        <StyledFeatures>           
            <StyledInfo>
                <StyledDivImg>
                    <img src={require("../../assets/images/feat1.png")} alt="Lista" className="w-auto h-full"/>
                </StyledDivImg>
                <StyledP>
                    Crie ambientes personalizados com o Bulbdat e controle sua iluminação de forma fácil e inteligente.
                </StyledP>
            </StyledInfo>
            <StyledInfo>
                <StyledDivImg>
                    <img src={require("../../assets/images/feat2.png")} alt="Tela" className="w-auto h-full"/>
                </StyledDivImg>
                <StyledP>
                    Tenha controle total sobre seu consumo de energia em cada cômodo da casa.
                </StyledP>
            </StyledInfo>
            <StyledInfo>
                <StyledDivImg>
                    <img src={require("../../assets/images/feat3.png")} alt="Relogio" className="w-auto h-full"/>
                </StyledDivImg>
                <StyledP>
                    O cadastro de dispositivos com o Bulbdat é a chave para um gerenciamento eficiente de energia.
                </StyledP>
            </StyledInfo>        
        </StyledFeatures>
    )
}

// Stylization

// Styled components
const StyledFeatures = tw.div`
    w-full
    h-96
    flex
    justify-around
`;

const StyledInfo = tw.div`
    w-1/3
    m-10
    p-5
    flex
    flex-col
    items-center
    justify-center
    bg-darkGreen
    rounded-3xl
    text-textWhite
`;

const StyledDivImg = tw.div`
    w-full 
    h-2/3
    flex
    justify-center
`;

const StyledP = tw.p`
    w-full
    text-center
    mt-5
`;