import React from "react";

import avatar from "../../Image/logo.jpg"
import vk from "../../Image/vk4.jpeg"
import git from "../../Image/imagesss.png"
import logo from "../../Image/logofusion.png"
import SwitchSelector from "react-switch-selector";


function Header() {
    return (
        <>
                        <a name="welcome"></a>
                <section class="o-section o-section--header  t-section  t-section--header">
                <div class="c-header">

                    <div class="o-section__header-bg  t-section__header"></div>
                    <div class="o-section__content-bg  t-section__content"></div>

                    <div class="o-container">
                        <div class="o-section__container">

                            <header class="o-section__header  c-header__header  t-section__header">
                                <div class="c-header__inner-header">
                                    <div class="c-header__avatar">
                                    <div class="a-header  c-avatar in-view" data-sr-id="2">
                                        <img className="avatar" src={avatar} alt="">
                                        </img>
                                        </div>
                                        </div>
                                </div>
                            </header>

                            <div class="o-section__content  c-header__content  t-section__content">
                                <div class="c-header__inner-content">

                                    <div class="c-header__top">
                                        <div>
                                        <div class="c-header__brand">
                                            <div class="c-brand">
                                                <h1 class="c-brand__title  t-title">
                                                    <span class="c-brand__sizer">
                                                        <span class="a-header  c-brand__first-word  t-title__first-word in-view" data-sr-id="3">
                                                            VLADISLAV
                                                        </span>
                                                        <span class="a-header  c-brand__second-word  t-title__second-word in-view" data-sr-id="4" >
                                                            CHERNYSHOV
                                                        </span>
                                                    </span>
                                                </h1>
                                                <h2 class="a-header  c-brand__sub-title  t-sub-title in-view" data-sr-id="5">
                                                    <span class="c-brand__sizer">
                                                    <b>QA Engineer</b>
                                                    </span>
                                                </h2>
                                            </div>
                                            </div>


                                        </div>

                                        <ul class="c-header__social-buttons  c-social-buttons">
                                            <li class="a-header in-view" data-sr-id="6">
                                                <a href="https://vk.com/ugraswim" target="_blank" class="c-social-button  t-social-button">
                                                <img className="image-logo" src={vk} alt="">
                                                    </img>
                                                    <i class="fab  fa-lg  fa-facebook-f in-view"></i>
                                                </a>
                                            </li>
                                            <li class="a-header in-view" data-sr-id="7">
                                                <a href="https://github.com" target="_blank" class="c-social-button  t-social-button">
                                                <img className="image-logo" src={git} alt="">
                                                    </img>
                                                    <i class="fab  fa-lg  fa-dribbble in-view"></i>
                                                </a>
                                            </li>
                                        </ul>

                                    </div>

                                    <div class="c-header__contact">

                                        <div class="o-grid">

                                            <div class="o-grid__col-md-3  o-grid__col-sm-6">
                                                <div class="a-header  o-content in-view" data-sr-id="10">
                                                    <div class="o-content__body">
                                                        <h4>Location</h4>
                                                        <address>
                                                            Taganrog, RU
                                                        </address>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="o-grid__col-md-3  o-grid__col-sm-6">
                                                <div class="a-header  o-content in-view" data-sr-id="11">
                                                    <div class="o-content__body">
                                                        <h4>Phone</h4>
                                                        <p>
                                                            +7 908 88 182 85
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="o-grid__col-md-3  o-grid__col-sm-6">
                                                <div class="a-header  o-content in-view" data-sr-id="12">
                                                    <div class="o-content__body">
                                                        <a href="#" target="_blank" class="t-link-container">
                                                            <h4>Web-site</h4>
                                                            <p>
                                                                <span class="t-link-container__item--blended">
                                                                    site.com
                                                                </span>
                                                            </p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="o-grid__col-md-3  o-grid__col-sm-6">
                                                <div class="a-header  o-content in-view" data-sr-id="13">
                                                    <div class="o-content__body">
                                                        <a href="#" target="_blank" class="t-link-container">
                                                            <h4>Email</h4>
                                                            <p>
                                                                <span class="t-link-container__item--blended">
                                                                    vladislav.chernyshov@fusion-tech.pro
                                                                </span>
                                                            </p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                    </div>

            </section>
            </>
 )
}
export default Header;
