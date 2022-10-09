import LogoUCB from "../images/logo_ucb_extension.jpeg";
import LogoFuturis from "../images/logo_futuris.jpeg";
import LogoMBACIBS from "../images/logo_mba.jpeg";
import LogoUAMESCOEX from "../images/logo_UAM - ESCOEX.jpeg";
import LogoISJA from "../images/logo_isjapostbac.jpeg";
import PicYSEN from "../images/pic_ysen.jpeg";

const Education = () => {

    return (
        <>
            <section id="home" className="main">

                <div className="container">
                    <div className="row">

                        <div className="col-lg-4 col-md-4">
                            <div className="card">
                                <a href="https://extension.berkeley.edu/" className="card-link" target="_blank" noreferrer="true">
                                    <img className="card-img" src={LogoUCB} alt="Card image cap" />
                                </a>
                                <div className="card-body">

                                    <h3>U.C. Berkeley Extension</h3>

                                    <p>
                                        Professional Program in Graphic Design
                                    </p>
                                    <p className="card-text"><small className="text-muted">2018 - 2020<br />San Francisco, CA - USA</small>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4">
                            <div className="card">
                                <a href="https://www.futuris.sn/" className="card-link" target="_blank" noreferrer="true">
                                    <img className="card-img" src={LogoFuturis} alt="Card image cap" />
                                </a>
                                <div className="card-body">

                                    <h3>Futuris Formations</h3>

                                    <p>
                                        Computer Graphics: Photoshop, Illustrator, InDesign
                                    </p>
                                    <p className="card-text"><small className="text-muted">January - March 2013<br />Dakar - SENEGAL</small>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-4 col-md-4">
                            <div className="card">
                                <a href="https://cibs.es/" className="card-link" target="_blank" noreferrer="true">
                                    <img className="card-img" src={LogoMBACIBS} alt="Card image cap" />
                                </a>
                                <div className="card-body">

                                    <h3>C.I. Business School</h3>

                                    <p>
                                        MBA in Executive Management & Administration of Companies
                                    </p>
                                    <p className="card-text"><small className="text-muted">2008 - 2009<br />Las Palmas de G. C. -
                                        SPAIN</small>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-4 col-md-4">
                            <div className="card">
                                <a href="https://www.universidadatlanticomedio.es/" className="card-link" target="_blank" noreferrer="true">
                                    <img className="card-img" src={LogoUAMESCOEX} alt="Card image cap" />
                                </a>
                                <div className="card-body">

                                    <h3>ESCOEX Business School - University of Wales</h3>

                                    <p>
                                        Higher diploma / BSC in International Trade and Marketing
                                    </p>
                                    <p className="card-text"><small className="text-muted">2004 - 2008<br />Las Palmas de G. C. -
                                        SPAIN</small>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-4 col-md-4">
                            <div className="card">
                                <a href="https://www.isjadakar.com/" className="card-link" target="_blank" noreferrer="true">
                                    <img className="card-img" src={LogoISJA} alt="Card image cap" />
                                </a>
                                <div className="card-body">

                                    <h3>Institution Sainte Jeanne d'Arc Postbac (ISJA)</h3>

                                    <p>
                                        French & National diploma of Higher Technician in International Trade
                                    </p>
                                    <p className="card-text"><small className="text-muted">2002 - 2004<br />Dakar - SENEGAL</small>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-4 col-md-4">
                            <div className="card">
                                <a href="https://sn.worldcombiz.com/Catalogue/dakar/%C3%A9cole/groupescolaireyallasuuren"
                                    className="card-link" target="_blank" noreferrer="true">
                                    <img className="card-img" src={PicYSEN} alt="Card image cap"/>
                                </a>
                                <div className="card-body">

                                    <h3>Yalla Suur En (YSEN)</h3>
                               
                               
                                    <p>
                                        High-school <br/>degree<br/>
                                       in<br/>
                                        literature
                                    </p>
                                    <p className="card-text"><small className="text-muted">2000 - 2001<br />Dakar - SENEGAL</small>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}
export default Education