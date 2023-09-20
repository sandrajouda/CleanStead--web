import React from "react";
import './Body.css';
import light from '../../../assets/images/image/light.png';
import person from '../../../assets/images/image/person.png';


function Body() {
    return (
        <section>
            < div className='body'>
                <div className="person">
                    <img
                        src={person}
                        title="person"
                    />
                </div>
                <div >
                    <div className="Box1">
                        <img
                            src={light}
                            className="light"
                        />
                        <p className="title1">من نحن</p>
                    </div>

                    <div className="Box2" >
                        <p className="txt">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
                            إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية</p>

                    </div>
                    < div className="Box3">
                        <button className="butt2" >تواصل معنا</button>

                    </div>
                </div>
            </div>
        </section>

    );
}
export default Body;