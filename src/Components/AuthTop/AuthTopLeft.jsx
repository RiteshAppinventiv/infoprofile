import "./AuthTopLeft.css"
import infoprofile_logo from "./../../Assets/assets/web_app/infoprofile_logo.svg"
import arrowsvg from "./../../Assets/assets/web_app/arrowsvg.svg"
import app_store from "./../../Assets/assets/web_app/app_store.svg"
import google_play from "./../../Assets/assets/web_app/google_play.svg"

const AuthTopLeft = () => {
    return (
        <div className="AuthTopLeft">
            {/* <img src={landing_a1} alt="" /> */}
            <div className="AuthTopLeft-center">
                <div className="AuthTopLeft-center-1">
                    <img className="AuthTopLeft-icon" src={infoprofile_logo} alt="" />
                </div>
                <div className="AuthTopLeft-center-2">
                    <div className="AuthTopLeft-center-p1">Meet your best</div>
                    <div className="AuthTopLeft-center-p1 blue">Connections</div>
                    <p>Build fast, easy & lifelong professional connections.</p>
                    <div className="AuthTopLeft-center-store-div">
                        <img className="AuthTopLeft-center-store" src={app_store} alt="" />
                        <img className="AuthTopLeft-center-store" src={google_play} alt="" />
                    </div>
                </div>
                <div className="AuthTopLeft-center-3">
                    <img src={arrowsvg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default AuthTopLeft