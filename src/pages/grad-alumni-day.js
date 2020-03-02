import React from "react"
import {graphql, Link} from "gatsby";
import {rhythm} from "../utils/typography";

const GradAlumniDay = ({ data, location }) => {

    const event = data.allContentfulEvent.edges
    const sessions = data.allContentfulEventSession.edges


    // const people = sessions.node


    return (
        <main>
            <section className="su-masthead ">
            {/*<section className="su-masthead su-masthead--dark">*/}
                <a href="#main-content" className="su-skiplinks ">Skip to main content</a>
                <div className="su-brand-bar [ modifier_class ]">
                    <div className="su-brand-bar__container">
                        {/*<a className="su-brand-bar__logo" href="https://stanford.edu">Stanford University</a>*/}
                        <Link style={{boxShadow: `none`}} to="https://stanford.edu">
                            Stanford University Test
                        </Link>
                    </div>
                </div>
                <section>
                    <div className="su-lockup su-lockup--option-l">
                        <a href="https://decanter.stanford.edu">
                            <div className="su-lockup__cell1">
                                <div className="su-lockup__wordmark-wrapper">
                                    <span className="su-lockup__wordmark">Stanford</span>
                                </div>
                            </div>
                            <div className="su-lockup__cell2">
                                <span className="su-lockup__line1  su-handwriting ad-logo">alumni</span>
                            </div>
                        </a>
                    </div>
                    <div className="su-site-search " role="search">
                        <form action="https://www.stanford.edu/search" method="get" accept-charset="UTF-8">
                            <label className="su-site-search__sr-label" htmlFor="search-field">Search this site</label>
                            <input type="text" id="search-field" name="search-field" className="su-site-search__input"
                                   placeholder="Search this site" maxLength="128"/>
                            <button type="submit" name="search" className="su-site-search__submit su-sr-only-text"
                                    aria-label="Search">Submit Search
                            </button>
                        </form>
                    </div>
                    <nav className="su-main-nav no-js  su-main-nav--mobile-search" aria-label="main menu">
                    {/*<nav className="su-main-nav no-js su-main-nav--dark su-main-nav--mobile-search" aria-label="main menu">*/}
                        <button className="su-main-nav__toggle su-main-nav__toggle--right" aria-expanded="false">Menu
                        </button>
                        <ul className="su-main-nav__menu-lv1">
                            <li className=" ">
                                <a href="/">Home</a>
                            </li>
                            <li className=" ">
                                <a href="https://stackoverflow.com/" target="_blank" rel="external">Admission & Academics</a>
                            </li>
                            <li className=" ">
                                <a href="https://stackoverflow.com/" target="_blank" rel="external">Research & Impact</a>
                            </li>
                            <li className=" ">
                                <a href="https://stackoverflow.com/" target="_blank" rel="external">People</a>
                            </li>
                            <li className=" ">
                                <a href="https://stackoverflow.com/" target="_blank" rel="external">Our Culture</a>
                            </li>
                            <li className=" ">
                                <a href="https://stackoverflow.com/" target="_blank" rel="external">Get Involved</a>
                            </li>
                        </ul>
                        {/*<div className="su-site-search " role="search">*/}
                        {/*    <form action="" method="" accept-charset="UTF-8">*/}
                        {/*        <label className="su-site-search__sr-label" htmlFor="search-field">Search this site</label>*/}
                        {/*        <input type="text" id="search-field" name="search-field" className="su-site-search__input"*/}
                        {/*               placeholder="Search this site" maxLength="128"/>*/}
                        {/*        <button type="submit" name="search" className="su-site-search__submit su-sr-only-text"*/}
                        {/*                aria-label="Search">Submit Search*/}
                        {/*        </button>*/}
                        {/*    </form>*/}
                        {/*</div>*/}
                    </nav>
                </section>
            </section>
            <div class="grad-alumni-banner">
                {/*  Need to check documentation and get this image working and referencing correctly */}
                {/*<img source={node.hero.file.url} alt_tag={node.heroAltText}></img>*/}

            </div>
            <div class="page-container grad-alumni-day">
                {event.map(({ node }) => {
                    return (
                        <div className="grad-alumni-day--intro">

                            <article class="event-session--wrapper" key={node.eventTitle}>
                                <header>
                                    <h1 class="event-title">{node.eventTitle}</h1>
                                </header>

                                <div className="grad-alumni-day--date event-date">Saturday {node.eventStartDate} | Stanford University</div>
                                <div>{node.intro.content.content ? node.intro.content.content.value : "Rich text goes here - doesn't work yet"}</div>
                                <p>STATIC TEXT FOR NOW (Need to update to pull from contentful:) Return to campus for a day planned just for Stanford graduate alumni.
                                    You'll get inspired with thought-provoking micro lectures, faculty talks and
                                    conversations with fellow grad alumni before winding down at an evening wine reception
                                    with hearty hors d'oeuvres.</p>
                                {/* This works but we don't care about the card title:*/}
                                {/*<h3>{node.eventCardsTop ? node.eventCardsTop[0].cardTitle : "no card title"}</h3>*/}
                                {/* This doesn't work yet: */}
                                {/*<h3>{node.eventCardsTop ? node.eventCardsTop[0].cardBody.content.content.value : "no card body"}</h3>*/}
                                    {/*<h3>{node.sessionPeople ? node.sessionPeople[0].personDisplayName : ""}</h3>*/}

                                {/*   button should pull from the card later */}
                                <button value="decanter" name="register-button" className="su-button" type="button">STATIC TEMP Register
                                </button>

                            </article>

                        </div>

                    )
                })}


                <h2>See what's in store</h2>
                <p>Present list of sessions here (title, description, etc)</p>

                {sessions.map(({ node }) => {
                    const people = []
                    if(node.sessionPeople !== null) {
                        for (const [index, value] of node.sessionPeople.entries()) {
                            people.push(
                                <div class="session-person">
                                    <h3>{value.personDisplayName}</h3>
                                    <div>{value.presentationTitle}</div>
                                    <div>{value.personTitle}</div>
                                    <div>{value.personClassYear + "'"}</div>
                                    {/*var personImage == {node.sessionPeople ? node.sessionPeople[0].personImage.file.url : "no people"}</div>*/}
                                    <div>{'File url to render next: https:' + value.personImage.file.url}</div>
                                    {/*<img source={node.sessionPeople ? 'https:' + node.sessionPeople[0].personImage.file.url : ""}>*/}
                                    {/*    <img src={ require( node.sessionPeople ? 'https:' + node.sessionPeople[0].personImage.file.url ) } />*/}
                                    <div>{"File alt tag description: " + value.personImage.description}</div>
                                </div>
                            )
                        }
                    }

                    return (

                        <article class="event-session--wrapper" key={node.sessionTitle}>
                            <header>

                                <h3 class={"session-title"}>{node.sessionStartTime}-{node.sessionEndTime} {node.sessionTitle}</h3>
                                <div>[Rich Text - Session Description Goes Here.]</div>
                            </header>
                            {/*<h3>{node.sessionPeople.personDisplayName}</h3>*/}
                            <div class="session-people">

                                {people}

                            </div>
                        </article>
                    )
                })}

            </div>

                {event.map(({ node }) => {

                    const priceItems = []
                    if(node.eventPricing !== null) {
                        for (const [index, value] of node.eventPricing.entries()) {
                            priceItems.push(
                                <article className="su-card [ modifier_class ]">
                                    <section className="su-card__contents">
                                        <h2>{value.productName}</h2>
                                        <p>Rich text pricing description goes here.</p>
                                        <div className="product--price">{"$" + value.productPrice}</div>
                                        <div className="product--price-type">{value.productPriceType}</div>
                                    </section>
                                </article>
                            )
                        }
                    }

                    return (

                        <div>
                            <section class="event-pricing--wrapper" key={node.eventPricing ? node.eventPricing[0].productName : "Event Pricing"}>
                                <div class="event-pricing--inner-wrapper text-centered">
                                    <header>
                                        <h2 class={"event-pricing"}>Pricing</h2>
                                    </header>
                                    <div className="price-items--wrapper">
                                        {priceItems}
                                    </div>
                                </div>
                            </section>

                            <section class="bottom-page-section constrained-width">

                                < article className = "event-video--wrapper text-centered"  key="Video Section">

                                    <div class="watch-video-label">Watch</div>
                                    <h3 class="video-title-label">Video Title: {node.video ?  node.video.title : "Video Title"}</h3>

                                    <div>Video url: {node.video ? "https:" + node.video.file.url : "Video Url"}</div>
                                    <div>Rich Text - Video description goes here later</div>
                                    {/*// {node.video.description}*/}
                                </article>

                                < article className = "event-quote--wrapper"  key="Quote Section">

                                    <h4 class="text-centered">Rich text - Quote testimonialText field goes here</h4>

                                    <div className="text-centered">- Quote Author goes here</div>

                                    {/*<div>Quote Author: {node.quotes ? "https:" + node.quotes[0].testimonialAuthor : "Quote Author"}</div>*/}

                                </article>


                            </section>
                        </div>
                    )
                })}


            <div className="su-local-footer [ modifier_class ]">
                <header className="su-local-footer__header">
                    <div className="su-lockup su-lockup--option-a">
                        <div className="su-lockup__cell1">
                            <div className="su-lockup__wordmark-wrapper">
                                <span className="su-lockup__wordmark">Stanford</span>
                            </div>
                        </div>
                        <div className="su-lockup__cell2">
                            <span className="su-lockup__line1">Engineering</span>
                        </div>
                    </div>
                    <a href="/login" className="su-link su-link--internal">Web Login</a>
                </header>
                <section className="su-local-footer__columns">
                    <div className="su-local-footer__cell1">
                        <address className="su-local-footer__address">
                            <strong>Shriram Center | Chemical Engineering</strong>
                            <br/>
                            443 Via Ortega | Room 129
                            <br/>
                            Stanford, CA 94305
                            <br/>
                            <a href="tel:+16507234906">650-723-4906</a>
                            <br/>
                        </address>
                        <ul className="su-local-footer__action-links">
                            <li>
                                <a href="#">Visit</a>
                            </li>
                            <li>
                                <a href="#">Campus Map</a>
                            </li>
                            <li>
                                <a href="#">Contact Us</a>
                            </li>
                        </ul>
                        <ul className="su-local-footer__social-links">
                            <li>
                                <a href="#" className="su-local-footer__social-facebook">
                                    <i aria-hidden="true"></i>
                                    <span>Facebook</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="su-local-footer__social-linkedin">
                                    <i aria-hidden="true"></i>
                                    <span>LinkedIn</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="su-local-footer__social-twitter">
                                    <i aria-hidden="true"></i>
                                    <span>Twitter</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="su-local-footer__social-instagram">
                                    <i aria-hidden="true"></i>
                                    <span>Instagram</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="su-local-footer__social-youtube">
                                    <i aria-hidden="true"></i>
                                    <span>Youtube</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="su-local-footer__cell2">
                        <nav aria-label="footer primary nav">
                            <h2 className="su-local-footer__list-heading">Links to</h2>
                            <ul className="su-local-footer__primary-links">
                                <li>
                                    <a href="#">Stanford Engineering Magazine</a>
                                </li>
                                <li>
                                    <a href="#">Open Faculty Positions</a>
                                </li>
                                <li>
                                    <a href="#">News</a>
                                </li>
                                <li>
                                    <a href="#">Events</a>
                                </li>
                                <li>
                                    <a href="#">Colloquium</a>
                                </li>
                                <li>
                                    <a href="#">Give</a>
                                </li>
                            </ul>
                        </nav>
                        <nav aria-label="footer secondary nav">
                            <h2 className="su-local-footer__list-heading">Resources for</h2>
                            <ul className="su-local-footer__secondary-links">
                                <li>
                                    <a href="#">Current Graduate Students</a>
                                </li>
                                <li>
                                    <a href="#">Current Undergraduate Students</a>
                                </li>
                                <li>
                                    <a href="#">Faculty & Staff</a>
                                </li>
                                <li>
                                    <a href="#">Alumni</a>
                                </li>
                                <li>
                                    <a href="#">Intranet</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="su-local-footer__cell3">
                        <div className="su-signup-form [ modifier_class ]">
                            <h2 className="su-local-footer__list-heading">Sign up for our email.</h2>
                            <p>Your source for engineering research and ideas</p>
                            <form action="/" method="post">
                                <input type="email" id="su-email" aria-label="email address" name="su-email"
                                       placeholder="email address" required=""/>
                                <input type="submit" id="su-submit" name="su-submit" value="Sign-up"/>
                            </form>
                        </div>
                    </div>
                </section>
            </div>

            <section className="su-global-footer [ modifier_class ]">
                <div className="su-global-footer__container">
                    <div className="su-global-footer__brand">
                        <a className="su-logo [ modifier_class ]" href="https://www.stanford.edu">
                            Stanford
                            <br/>
                            University
                        </a>
                    </div>
                    <div className="su-global-footer__content">
                        <nav aria-label="global footer menu">
                            <ul className="su-global-footer__menu su-global-footer__menu--global">
                                <li>
                                    <a href="https://www.stanford.edu">Stanford Home</a>
                                </li>
                                <li>
                                    <a href="https://visit.stanford.edu/plan/">Maps &amp; Directions</a>
                                </li>
                                <li>
                                    <a href="https://www.stanford.edu/search/">Search Stanford</a>
                                </li>
                                <li>
                                    <a href="https://emergency.stanford.edu">Emergency Info</a>
                                </li>
                            </ul>
                            <ul className="su-global-footer__menu su-global-footer__menu--policy">
                                <li>
                                    <a href="https://www.stanford.edu/site/terms/" title="Terms of use for sites">Terms
                                        of Use</a>
                                </li>
                                <li>
                                    <a href="https://www.stanford.edu/site/privacy/"
                                       title="Privacy and cookie policy">Privacy</a>
                                </li>
                                <li>
                                    <a href="https://uit.stanford.edu/security/copyright-infringement"
                                       title="Report alleged copyright infringement">Copyright</a>
                                </li>
                                <li>
                                    <a href="https://adminguide.stanford.edu/chapter-1/subchapter-5/policy-1-5-4"
                                       title="Ownership and use of Stanford trademarks and images">Trademarks</a>
                                </li>
                                <li>
                                    <a href="http://exploredegrees.stanford.edu/nonacademicregulations/nondiscrimination/"
                                       title="Non-discrimination policy">Non-Discrimination</a>
                                </li>
                                <li>
                                    <a href="https://www.stanford.edu/site/accessibility"
                                       title="Report web accessibility issues">Accessibility</a>
                                </li>
                            </ul>
                        </nav>
                        <div className="su-global-footer__copyright">
                            <span>&copy; Stanford University.</span>
                            <span>&nbsp; Stanford, California 94305.</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default GradAlumniDay


export const pageQuery = graphql`
query GradAlumniData {
  site {
    siteMetadata {
      title
    }
  }
  allContentfulEvent(filter: {id: {eq: "712f2cb1-31de-5232-83f8-0c50210b9de2"}}) {
    edges {
      node {
        id
        hero {
          file {
            url
          }
        }
        heroAltText
        eventTitle
        intro {
          content {
            content {
              value
            }
          }
        }
        eventStartDate(formatString: "MMMM Do, YYYY")
        eventEndDate(formatString: "MMMM Do, YYYY h:mm")
        eventCardsTop {
          cardTitle
          cardBody {
            content {
              content {
                value
              }
            }
          }
        }
        eventPricing {
          productName
          productPrice 
          productPriceType
        }
        video {
          title
          description
          file {
            url
          }
        }

      }
    }
  }
  allContentfulEventSession(filter: {event: {elemMatch: {id: {eq: "712f2cb1-31de-5232-83f8-0c50210b9de2"}}}}, sort: {fields: sessionStartTime}) {
    totalCount
    edges {
      node {
        sessionTitle
        sessionStartTime(formatString: "h:mm")
        sessionEndTime(formatString: "h:mm a")
        sessionDescription {
          content {
            content {
              value
            }
          }
        }
        sessionPeople {
          personDisplayName
          personTitle
          personClassYear
          personImage {
            file {
              url
              fileName
              contentType
            }
            description
            title
          }
          personBiography {
            content {
              content {
                value
              }
            }
          }
        }
      }
    }
  }
}


`


// quotes {
//   testimonialTitle
//   testimonialAuthor
// }