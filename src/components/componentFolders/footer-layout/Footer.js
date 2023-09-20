import React from "react";
import map from '../../../assets/images/image/map.png';
import pin from '../../../assets/images/image/pin.png';
import phone from '../../../assets/images/image/phone.png';
import message from '../../../assets/images/image/message.png';
import logo from '../../../assets/images/image/logo.png';
import line from '../../../assets/images/image/Line.png';
import facebook from '../../../assets/images/image/facebook.png';
import instagram from '../../../assets/images/image/instagram.png';
import twiter from '../../../assets/images/image/twiter.png';
import whatsApp from '../../../assets/images/image/whatsApp.png';
import youtube from '../../../assets/images/image/youtube.png';
import gmail from '../../../assets/images/image/gmail.png';
import './Footer.css';

function Footer() {
    return (
        < div className="footer" >
            <section className="Box1" >

                <div className="Div1">
                    <div>
                        <h6 className="text">تابعنا على</h6>
                        <div className="Social">
                            <a href="/"> <img src={gmail} /></a>
                            <a href="/"><img src={instagram} /></a>
                            <a href="/"><img src={whatsApp} /></a>
                            <a href="/"><img src={youtube} /></a>
                            <a href="/"><img src={twiter} /></a>
                            <a href="/"><img src={facebook} /></a>
                        </div>
                    </div>
                    <div>
                        <img
                            src={map}
                            className="map" />
                        <img
                            src={pin}
                            className="pin" />
                    </div>
                </div>

                <div className="Div2">
                    <h6 className="com1">تواصل معنا </h6>
                    <div className="phone">
                        <h6 className="no">0592700722</h6>
                        <img src={phone} className="tele" />
                    </div>
                    <div className="com2" >
                        <h6 className="email">eng.mohammadalhabil@gmail.com</h6>
                        <img src={message} className="ee" />
                    </div>
                </div>

                <div className="Div3">
                    <h6 className="Services">خدماتنا</h6>
                    <h6 className="rrrr">
                        تنظيف المنازل
                        التنظيف التجاري
                        تنظيف السجاد
                        تنظيف النوافذ
                        تنظيف السيارات
                        تنظيف بعد البناء
                    </h6>
                </div>

                <div className="Div4">
                    <div className="title">
                        <img src={logo} className="yyy" />
                        <h6 className="iii">
                            <span className="c">كلين   </span>
                            <span className="s">ستيد   </span>
                        </h6>
                    </div>

                    <p className="pp">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص.</p>
                </div>
            </section>

            <section className="Box2">

                <img src={line} className="line" />
                <div>
                    <h6 className="txxt">جميع الحقوق محفوظة © 2022</h6>
                </div>
            </section>
        </div>
    );
}
export default Footer;