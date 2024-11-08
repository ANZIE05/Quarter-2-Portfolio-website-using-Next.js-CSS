import Link from "next/link";

export default function FooterPage () {
    return (
      <footer className="footer">
        <div className="footer-text">
            <p>Copyright &copy; 2024 by Anzie | All Rights Reserved.</p>
        </div>

        <div className="footer-iconTop"></div>

        <Link className="link" href="#home">
        <i className='bx bx-up-arrow-alt'></i>
        </Link>
        </footer>

    );
}