function Home() {
    return (
        <div>
            <section class="introduction">
                <h1>Controle <br /> seus gastos <br /> de energia <br /> com Bulbdat!</h1>
                <img src="../static/img/1.png" />
                <img src={require("../../assets/images/1.png")} alt=""/>
                <div class="backgroundImg"></div>
            </section>
            <section class="features">
                <div class="info">
                    <div class="circleInfo">
                        <img src="../static/img/feat1.png" />
                    </div>
                    <p>Crie ambientes personalizados <br /> com o Bulbdat e <br /> controle sua iluminação <br /> de forma fácil e inteligente.</p>
                </div>
                <div class="info">
                    <div class="circleInfo">
                        <img src="../static/img/feat2.png" />
                    </div>
                    <p>Tenha controle total <br /> sobre seu consumo de energia <br /> em cada cômodo da casa.</p>
                </div>
                <div class="info">
                    <div class="circleInfo">
                        <img src="../static/img/feat3.png" />
                    </div>
                    <p>O cadastro de dispositivos <br /> com o Bulbdat é <br /> a chave para um gerenciamento <br /> eficiente de energia.</p>
                </div>
            </section>
            <section class="calculator">
                <div>
                    <img src="../static/img/calc.png" />
                    <div class="backgroundImg"></div>
                </div>
                <h3>Economize na <br /> conta de luz com <br /> a calculadora de gastos <br /> de energia do Bulbdat, <br /> uma ferramenta <br /> simples e eficiente.</h3>
            </section>
        </div>
    )
}

export default Home;