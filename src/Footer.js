import React from 'react';


class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<footer>
            <div className={"footer-links"}>
                <div className={"footer-left"}>
                    <ul className={"footer-nav"}>
                        <li><a href="#">Termeni și condiții</a></li>
                        <li><a href="#">Cookies</a></li>
                        <li><a href="#">Protecția datelor</a></li>
                    </ul>
                </div>

                <div className={"footer-right"}>
                    <div className={"social-links"}>
                        <li> <a href="https://facebook.com" className="fa fa-facebook"></a></li>
                        <li><a href="https://youtube.com" className="fa fa-youtube"></a></li>
                        <li><a href="https://linkedin.com" className="fa fa-linkedin"></a></li>
                    </div>
                </div>
            </div>
            <div className={"content"}>
                <p>
                    This webpage was created for practice and to be added to my portofolio. No copyrights here.
                    This webpage was made using HTML5, CSS/SCSS, Responsive WebDesign, JavaScrip, ReactJS.
                </p>
                <p>
                    Build with love by <span>Raluca Ciocoiu</span> in the beautiful city of Bucharest, Romania, September 2019.
                </p>
            </div>
        </footer>)
    }
}

export default Footer;