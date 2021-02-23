import React, { Component } from 'react';



class SignUp extends Component {
    render() {
        return (
            <div>
                <div id="register_bg">
                <div id="register">
                    <aside>
                        <figure>
                            {/* <a href="index.html"><img src="img/logo_sticky.svg" style={{ width:"140", height:"35" }} alt="" /></a> */}
                        </figure>
                        <div className="access_social">
                            <a href="#0" className="social_bt facebook">Register with Facebook</a>
                            <a href="#0" className="social_bt google">Register with Google</a>
                        </div>
                        <div className="divider"><span>Or</span></div>
                        {/* <form autocomplete="off"> */}
                        <form>
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="Name" />
                                <i className="icon_pencil-edit"></i>
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="Last Name" />
                                <i className="icon_pencil-edit"></i>
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="email" placeholder="Email" />
                                <i className="icon_mail_alt"></i>
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="password" id="password1" placeholder="Password" />
                                <i className="icon_lock_alt"></i>
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="password" id="password2" placeholder="Confirm Password" />
                                <i className="icon_lock_alt"></i>
                            </div>
                            <div id="pass-info" className="clearfix"></div>
                            <a href="#0" className="btn_1 gradient full-width">Register Now!</a>
                            <div className="text-center mt-2"><small>Already have an acccount? <strong><a href="#0">Sign In</a></strong></small></div>
                        </form>
                        <div className="copy">© 2020 FooYes</div>
                    </aside>
                </div>
                {/* <!-- /login --> */}
                </div>
            </div>

        )
    }

}
export default SignUp;