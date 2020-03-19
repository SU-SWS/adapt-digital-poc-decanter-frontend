import React from "react"
import {graphql, Link} from "gatsby";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import DOMPurify from 'dompurify';

// Example for rich text document:  Note that this is matching intro correctly
//     const document = {
//         nodeType: 'document',
//         content: [
//             {
//                 nodeType: 'paragraph',
//                 content: [
//                     {
//                         nodeType: 'text',
//                         value: 'Hello world!',
//                         marks: [],
//                     },
//                 ],
//             },
//         ],
//     };
const moment = require("moment-timezone")
moment().utcOffset(-480); // (-240, -120, -60, 0, 60, 120, 240, etc.)

const GradAlumniDay = ({ data, location }) => {

    const event = data.allContentfulEvent.edges
    const siteBranding = data.allContentfulSiteBrandIdentity.edges
    const sessions = data.allContentfulEventSession.edges


    // const people = sessions.node


    return (
        <main>
            <section className="su-masthead ">
            {/*<section className="su-masthead su-masthead--dark">*/}
                <a href="#main-content" className="su-skiplinks ">Skip to main content</a>
                <div className="su-brand-bar">
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

                            {siteBranding.map(({ node }) => {
                                return (
                                    <div className="alumni-logo">
                                        {/*  Putting placeholder hard-coded alt tag until
                                        graphql/gatsby can pull the new alt tag field from contentful
                                        - delay in being able to access the field. */}
                                        <img src={node.mastheadLogo.file.url + '?w=325'} alt="Stanford Alumni Logo"></img>
                                    </div>
                                )
                            })}


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
            {event.map(({ node }) => {
                return (
                    <div className="grad-alumni-banner">
                        {/*  Need to check documentation and get this image working and referencing correctly */}
                        <img src={node.hero.file.url + '?w=960'} alt={node.heroAltText}></img>
                    </div>
                )
            })}
            {/* end of event loop through*/}
            <div class="page-container grad-alumni-day">
                {event.map(({ node }) => {
                    return (
                        <div className="grad-alumni-day--intro">

                            <article class="event-info--wrapper" key={node.eventTitle}>
                                <h1 class="event-title su-type-b ">{node.eventTitle}</h1>
                                <div className="grad-alumni-day--date event-date su-intro-text">Saturday {node.eventStartDate} | Stanford University</div>
                                {/* <div className="su-big-paragraph event-intro--richtext" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(documentToHtmlString(node.intro)) }}> */}
                                </div>
                                <a class="su-button" href={node.button ? node.button.buttonUrl : "/"}>{node.button ? node.button.buttonText : "Click Here"}</a>

                            </article>

                            <div class="event-top-card-info">
                                {/*Top Card info */}
                                <h2 class=" su-type-b">{node.eventCardsTop ? node.eventCardsTop[0].cardHeader : "no card title"}</h2>

                                <div class="event-card--links-section">
                                    {node.eventCardsTop.map(({ cardTopNode }) => {
                                        // this map is being really funky.. idk why
                                        const links = []
                                        // if(cardTopNode) { // for some reason this breaks everything, even though it would be good to check

                                            for (const [index, value] of node.eventCardsTop.entries()) {
                                                for (const [linkIndex, linkValue] of value.cardLinks.entries()) {
                                                // Loop through the node's link references
                                                    links.push(
                                                        <div class="event-card--link">
                                                            <a href={linkValue.buttonUrl}>{linkValue.buttonText}</a>
                                                        </div>
                                                    )
                                                }
                                            }

                                        return (
                                            <div class="event-card--links-list">
                                                {links}
                                            </div>
                                        )
                                    })[0]}

                                </div>
                            </div>

                        </div>

                    )
                })}
                {/* end of event loop through*/}


                {sessions.map(({ node }) => {
                    const people = []
                    if(node.sessionPeople !== null) {
                        for (const [index, value] of node.sessionPeople.entries()) {

                            // if presentation title exists, do layout 2
                            if(value.presentationTitle !== null) {
                                people.push(
                                    <div class="session-person">
                                        <div className="person-image circle-image">
                                            <img src={value.personImage.file.url + "?w=200"} alt={value.personImage.description}/>
                                        </div>
                                        <div className="session-person--text-content">
                                            <div className="su-type-d presentation-title">{value.presentationTitle}</div>
                                            <div className="su-big-paragraph"><span className="person--display-name">{value.personDisplayName ? value.personDisplayName: "TBD"}</span>, {value.personClassYear ? value.personClassYear + "," : ""} {value.personTitle ? value.personTitle: ""}</div>
                                        </div>
                                    </div>
                                )
                            } else {
                                // else do layout 1 with all person info, no lecture title, but yes include person biography
                                people.push(
                                    <div class="session-person">
                                        <div class="person-image circle-image">
                                            <img src={value.personImage.file.url + "?w=200"} alt={value.personImage.description}/>
                                        </div>
                                        <div class="session-person--text-content">
                                            <h4 className="su-type-d"><span class="person--display-name">{value.personDisplayName ? value.personDisplayName: "TBD"}</span>, {value.personClassYear ? value.personClassYear + "," : ""} {value.personTitle ? value.personTitle: ""}</h4>
                                            {/* <div class="su-big-paragraph" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(documentToHtmlString(value.personBiography)) }}></div> */}
                                        </div>
                                    </div>
                                )
                            }

                        }
                    }

                    return (

                        <article class="event-session--wrapper" key={node.sessionTitle}>
                            <header>
                                <h3 class="session-title su-type-c">{node.sessionStartTime}-{node.sessionEndTime} {node.sessionTitle}</h3>
                                {/* <div className="session-description su-subheading" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(documentToHtmlString(node.sessionDescriptionText)) }}></div> */}
                            </header>
                            <div class="session-people">
                                {people}
                            </div>
                        </article>
                    )
                })}

            </div>

                {event.map(({ node }) => {

                    const priceItems = []
                    const quotes = []
                    if(node.eventPricing !== null) {
                        for (const [index, value] of node.eventPricing.entries()) {
                            priceItems.push(
                                <article className="su-card">
                                    <section className="su-card__contents">
                                        <h3 class="su-type-c">{value.productName}</h3>
                                        <p className="su-small-paragraph">{ value.productDescription.productDescription}</p>
                                        <div className="product--price">{"$" + value.productPrice}</div>
                                        <div className="product--price-type su-small-paragraph">{value.productPriceType}</div>
                                    </section>
                                </article>
                            )
                        }
                    }

                    if(node.quotes !== null) {
                        for (const [index, value] of node.quotes.entries()) {
                            quotes.push(
                                <article className="event-quote">
                                    <h4 class="su-type-c text-centered event-quote--text">{value.testimonialText.testimonialText}</h4>
                                    <div className="su-small-paragraph text-centered">{value.testimonialAuthor}</div>
                                </article>
                            )
                        }
                    }

                    return (

                        <div>
                            <section class="event-pricing--wrapper" key={node.eventPricing ? node.eventPricing[0].productName : "Event Pricing"}>
                                <div class="event-pricing--inner-wrapper text-centered">
                                    <header>
                                        <h2 class="event-pricing--heading su-type-b">Pricing</h2>
                                    </header>
                                    <div className="price-items--wrapper">
                                        {priceItems}
                                    </div>
                                </div>
                            </section>

                            <section class="bottom-page-section constrained-width">

                                < article className = "event-video--wrapper text-centered"  key="Video Section">

                                    <div class="watch-video-label su-intro-text text-centered">Watch</div>
                                    <h3 class="video-title-label su-type-b">{node.video ?  node.video.title : ""}</h3>

                                    <iframe width="460" height="260"
                                            src={node.videoPlaybackUrl ? node.videoPlaybackUrl : ""}>
                                    </iframe>

                                </article>

                                < article className = "event-quote--wrapper"  key="Quote Section">
                                    {quotes}

                                </article>


                            </section>
                        </div>
                    )
                })}


            <div className="su-local-footer ">
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
  allContentfulSiteBrandIdentity {
    edges {
      node {
        mastheadLogo {
          file {
            url
          }
        }
      }
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
          nodeType
          content {
            nodeType
            content {
              nodeType
              value
              marks {
                type
              }
              
            }
          }
        }
        button {
          buttonText
          buttonUrl
        }
        eventStartDate(formatString: "MMMM Do, YYYY")
        eventEndDate(formatString: "MMMM Do, YYYY h:mm")
        eventCardsTop {
          cardTitle
          cardHeader
          cardBody {
            content {
              content {
                value
              }
            }
          }
          cardLinks {
            buttonText
            buttonUrl
          }
        }
        eventPricing {
          productName
          productPrice 
          productPriceType
          productDescription {
            productDescription  
          }
        }
        videoPlaybackUrl
        video {
          title
          description
          file {
            url
          }
        }
        quotes {
          testimonialAuthor
          testimonialText {
            testimonialText 
          }
          
        }
        
      }
    }
  }
  allContentfulEventSession( sort: {fields: sessionStartTime, order: ASC}) {
    totalCount
    edges {
      node {
        sessionTitle
        sessionStartTime(formatString: "h:mm")
        sessionEndTime(formatString: "h:mm a")
        sessionDescriptionText {
          nodeType
          content {
            nodeType
            content {
              nodeType
              value
              marks {
                type
              }
            }
          }
        }
        sessionPeople {
          presentationTitle
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
          personBiography  {
            nodeType
            content {
              nodeType
              content {
                nodeType
                value
                marks {
                  type
                }
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


// marks {   // for some reason, not available on session Description field
//   type
// }