import Header from './Header';
import Introduction from './Introduction';
import Features from './Features';
import Calculator from './Calculator';
import Footer from './Footer';

import tw from 'twin.macro';

export default function Home() {
    return (
        <div>
            <Header />
            <StyledMain>
                <Introduction />
                <Features />
                <Calculator />  
            </StyledMain>
            <Footer />
        </div>
    )
}

// Stylization

// Styled components
const StyledMain = tw.main`
    w-full
`;