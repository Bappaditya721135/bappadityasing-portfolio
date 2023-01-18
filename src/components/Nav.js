export default function Nav() {
    return (
        <nav className="nav-bar">
            <h4 className="nav-heading">my portfolio</h4>
            <ul className="nav-links">
                <a href="#">
                    <li className="about">About</li>
                </a>
                <a href="#">
                    <li className="projects">Projects</li>
                </a>
                <a href="#">
                    <li className="cotacts">Contacts</li>
                </a>
            </ul>
        </nav>
    );
}