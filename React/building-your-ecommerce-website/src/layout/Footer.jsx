
import '../css/footer.scss';

const Footer = () => {
    return <>
        <div className="footer-wrapper">
            <span>The Generics</span>
            <ul>
                <li>
                    <a href="https://www.youtube.com">
                        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='55px' height='55px' viewBox='0 0 24 24'%3E%3Cpath fill='white' d='M23 9.71a8.5 8.5 0 0 0-.91-4.13a2.92 2.92 0 0 0-1.72-1A78.36 78.36 0 0 0 12 4.27a78.45 78.45 0 0 0-8.34.3a2.87 2.87 0 0 0-1.46.74c-.9.83-1 2.25-1.1 3.45a48.29 48.29 0 0 0 0 6.48a9.55 9.55 0 0 0 .3 2a3.14 3.14 0 0 0 .71 1.36a2.86 2.86 0 0 0 1.49.78a45.18 45.18 0 0 0 6.5.33c3.5.05 6.57 0 10.2-.28a2.88 2.88 0 0 0 1.53-.78a2.49 2.49 0 0 0 .61-1a10.58 10.58 0 0 0 .52-3.4c.04-.56.04-3.94.04-4.54M9.74 14.85V8.66l5.92 3.11c-1.66.92-3.85 1.96-5.92 3.08'/%3E%3C/svg%3E" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://spotify.com">
                        <img style={{height:'45px'}} src="https://prasadyash2411.github.io/ecom-website/img/Spotify%20Logo.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://facebook.com">
                        <img style={{height:'40px'}} src="https://prasadyash2411.github.io/ecom-website/img/Facebook%20Logo.png" alt="" />
                    </a>
                </li>
            </ul>
        </div>

    </>
}

export default Footer;