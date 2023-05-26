import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className="header">
            <nav>
                <a href="#">Bulbdat</a>
                <div className="buttons">
                    <button>
                        <Link to="/login"><span>Login</span></Link>
                    </button>
                    <button>
                        <Link to="/signup"><span>Sign up</span></Link>
                    </button>
                </div>
            </nav>
        </div>
    )
}