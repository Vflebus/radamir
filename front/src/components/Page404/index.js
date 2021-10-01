import "./style.scss"

import image404 from "../../assets/images/404.webp"

const Page404 = () => {
    return (
        <div>
            {/* <Menu /> */}
            <div className="page404">
                <img src={image404} alt="404" className="image404"/>
                <p>Oups ! Cette page n'existe pas. Ou plus. Elle s'est peut-être perdue.</p>
            </div>
        </div>
    )
}

export default Page404;