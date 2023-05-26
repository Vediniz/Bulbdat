import Header from './Header';
import Introduction from './Introduction';
import Features from './Features';
import Calculator from './Calculator';
import Footer from './Footer';

export default function Home() {
    return (
        <div className='body'>
            <Header />
            <main>
                <Introduction />
                <Features />
                <Calculator />  
            </main>
            <Footer />
        </div>
    )
}