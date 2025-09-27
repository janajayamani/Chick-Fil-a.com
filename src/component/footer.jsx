import './footer.css';

//images
import You from './images/youtube.png';
import Inst from './images/insta.png';
import Face from './images/faceb.png';


function Footer() {
    return (
        <>
            <div className="sec1">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-7">
                            <table>
                                <ol>
                                    <th>Nutrition & Allergens</th>
                                    <th>Customer Support</th>
                                    <th>Legal</th>
                                    <th>Franchising</th>
                                </ol>

                                <div className='soc'>
                                <ol>
                                    <td>Company</td>
                                    <td>Term and Conditions of Use</td>
                                    <td>Privacy Policy</td>
                                </ol>

                                <ol>
                                    <td>California Privacy Notice</td>
                                    <td>Cookie and Internet-Based Advertising Policy</td>
                                    <td>Do Not Sell or Share my Personal Information</td>
                                </ol>

                                <ol>
                                    <td>Customer Health Data Notice</td>
                                    <td>Accessibility</td>
                                    <td>Supply Chain</td>
                                </ol>

                                <a>© 2025 CFA Properties, Inc. All rights reserved.</a>
                                </div>
                            </table>
                        </div>

                        <div className="col-md-5 hos">
                            <img src={Face} alt="" className='img-fluid'/>
                            <img src={Inst} alt="" className='img-fluid'/>
                            <img src={You} alt="" className='img-fluid'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;













