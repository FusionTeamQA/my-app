import image1 from "../../assets/image/portfolio/1_thumb@2x.jpg"
import image2 from "../../assets/image/portfolio/2_thumb@2x.jpg"
import image3 from "../../assets/image/portfolio/3_thumb@2x.jpg"
import image5 from "../../assets/image/portfolio/5_thumb@2x.jpg"
import image6 from "../../assets/image/portfolio/6_thumb@2x.jpg"

function Portfolio() {
    return (
        <>
<section class="o-section  t-section  ">

                <div class="o-section__header-bg  t-section__header"></div>
                <div class="o-section__content-bg  t-section__content"></div>

                <div class="o-container">
                    <div class="o-section__container">

                        <header class="o-section__header  t-section__header">
                            <div class="o-content">
                                <h2 class="o-section__heading">
                                    Portfolio
                                </h2>
                                <div class="o-content__body  o-section__description">
                                    Here it gets interesting.
                                </div>
                            </div>
                        </header>

                        <div class="o-section__content  t-section__content  o-section__full-bottom-space">
                            
                            <div class="o-grid  o-grid--gallery">

                                <div class="o-grid__col-sm-6">
                                    <a class="c-image-overlay  t-image-overlay  js-lightbox" data-lightbox-hidpi="" title="" data-lightbox-gallery="portfolio" data-title="Musée du Louvre">
                                        <img src={image1} alt="" class="dense-image dense-ready"></img>
                                        <div class="c-image-overlay__content">
                                            <h3>
                                                SitterTree
                                            </h3>
                                            <hr className="c-deco-line  t-primary-color-line"></hr>
                                            <p>iOS app - For hiring sitter and creating work families</p>
                                        </div>
                                    </a>
                                </div>

                                <div class="o-grid__col-sm-6">
                                    <a class="c-image-overlay  t-image-overlay  js-lightbox" data-lightbox-hidpi="" title="" data-lightbox-gallery="portfolio" data-title="Tunnel Effect">
                                    <img src={image2} alt="" class="dense-image dense-ready"></img>
                                        <div class="c-image-overlay__content">
                                            <h3>
                                                Village
                                            </h3>
                                            <hr className="c-deco-line  t-primary-color-line"></hr>
                                            <p>A social network for residents of German villages that allows you to share news / create interest groups / offer products and services / post administrative information for residents</p>
                                        </div>
                                    </a>
                                </div>

                                <div class="o-grid__col-sm-6">
                                    <a class="c-image-overlay  t-image-overlay  js-lightbox"  data-lightbox-hidpi="" title="" data-lightbox-gallery="portfolio" data-title="New York, New York">
                                    <img src={image3} alt="" class="dense-image dense-ready"></img>
                                        <div class="c-image-overlay__content">
                                            <h3>
                                                MyContainer
                                            </h3>
                                            <hr className="c-deco-line  t-primary-color-line"></hr>
                                            <p>A mobile application designed to work with crypto currency </p>
                                        </div>
                                    </a>
                                </div>
                                <div class="o-grid__col-sm-6">
                                    <a class="c-image-overlay  t-image-overlay  js-lightbox"  data-lightbox-hidpi="" title="" data-lightbox-gallery="portfolio" data-title="Reaching the Clouds">
                                    <img src={image6} alt="" class="dense-image dense-ready"></img>
                                        <div class="c-image-overlay__content">
                                            <h3>
                                                Brinc
                                            </h3>
                                            <hr className="c-deco-line  t-primary-color-line"></hr>
                                            <p>
                                                Fusce lacinia arcu et nulla. Nulla vitae mauris non felis mollis faucibus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                            </p>
                                        </div>
                                    </a>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            </section>
            </>           
         )
            }
          export default Portfolio;

