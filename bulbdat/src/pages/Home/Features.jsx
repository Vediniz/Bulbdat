export default function Features() {
    return (
        <div className="section features">           
            <div class="info">
                <div class="circleInfo">
                    <img src={require("../../assets/images/feat1.png")} alt="Lista"/>
                </div>
                <p>
                    Crie ambientes personalizados <br /> 
                    com o Bulbdat e <br /> 
                    controle sua iluminação <br /> 
                    de forma fácil e inteligente.
                </p>
            </div>
            <div class="info">
                <div class="circleInfo">
                    <img src={require("../../assets/images/feat2.png")} alt="Tela"/>
                </div>
                <p>
                    Tenha controle total <br /> 
                    sobre seu consumo de energia <br /> 
                    em cada cômodo da casa.
                </p>
            </div>
            <div class="info">
                <div class="circleInfo">
                    <img src={require("../../assets/images/feat3.png")} alt="Relogio"/>
                </div>
                <p>
                    O cadastro de dispositivos <br /> 
                    com o Bulbdat é <br /> 
                    a chave para um gerenciamento <br /> 
                    eficiente de energia.
                </p>
            </div>        
        </div>
    )
}