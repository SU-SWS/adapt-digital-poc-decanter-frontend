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
            <div class="page-container grad-alumni-day">
                {event.map(({ node }) => {
                    return (
                        <div className="grad-alumni-day--intro">

                        <article class="event-session--wrapper" key={node.eventTitle}>
                            <header>

                                <h1 class={"event-title"}>{node.eventTitle}</h1>
                                {/*<div>[Rich Text - Session Description Goes Here.]</div>*/}
                            </header>

                            <div className="grad-alumni-day--date event-date">Saturday {node.eventStartDate} | Stanford University</div>
                            {/*<p>{node.intro.content.content.value}</p>*/}
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

                {/*<p class="grad-alumni-day--date">Saturday, March 7, 2020 | Stanford University</p>*/}




                <h2>See what's in store</h2>
                <p>Present list of sessions here (title, description, etc)</p>

                {sessions.map(({ node }) => {
                    return (

                        <article class="event-session--wrapper" key={node.sessionTitle}>
                            <header>

                                <h3 class={"session-title"}>{node.sessionStartTime}-{node.sessionEndTime} {node.sessionTitle}</h3>
                                <div>[Rich Text - Session Description Goes Here.]</div>
                            </header>
                            {/*<h3>{node.sessionPeople.personDisplayName}</h3>*/}
                            <div class="session-people">

                                {/*<h3>{node.sessionPeople ? node.sessionPeople[0].personDisplayName : "no people"}</h3>*/}
                                <h3>{node.sessionPeople ? node.sessionPeople[0].personDisplayName : ""}</h3>
                                <div>{node.sessionPeople ? node.sessionPeople[0].presentationTitle : ""}</div>
                                <div>{node.sessionPeople ? node.sessionPeople[0].personTitle : ""}</div>
                                <div>{node.sessionPeople ? node.sessionPeople[0].personClassYear : ""}</div>
                                {/*var personImage == {node.sessionPeople ? node.sessionPeople[0].personImage.file.url : "no people"}</div>*/}
                                <div>{node.sessionPeople ? 'File url to render next: https:' + node.sessionPeople[0].personImage.file.url : ""}</div>
                                {/*<img source={node.sessionPeople ? 'https:' + node.sessionPeople[0].personImage.file.url : ""}>*/}
                                {/*    <img src={ require( node.sessionPeople ? 'https:' + node.sessionPeople[0].personImage.file.url ) } />*/}
                                <div>{node.sessionPeople ? "File alt tag description: " + node.sessionPeople[0].personImage.description : ""}</div>






                            </div>
                        </article>
                    )
                })}

            </div>

                {event.map(({ node }) => {
                    return (

                        <div>
                            <article class="event-pricing--wrapper" key={node.eventPricing ? node.eventPricing[0].productName : "Event Pricing"}>
                                    <header>

                                        <h2 class={"event-pricing"}>Pricing</h2>
                                        {/*<div>[Rich Text - Session Description Goes Here.]</div>*/}
                                    </header>
                                    <h3>{node.eventPricing ? node.eventPricing[0].productName : ""}</h3>
                                    {/* add Rich text Pricing Description*/}
                                    <p>Rich text pricing description goes here.</p>
                                    <div>{node.eventPricing ? "$" + node.eventPricing[0].productPrice : ""}</div>
                                    {/* event > product > title*/}
                                    {/* event > product > description*/}
                                    {/* event > product > price*/}
                                    {/* event > product > whatever field contains 'regular price' text*/}

                                    {/*<h3>{node.eventCardsTop ? node.eventCardsTop[0].cardBody.content.content.value : "no card body"}</h3>*/}
                                    {/*<h3>{node.sessionPeople ? node.sessionPeople[0].personDisplayName : ""}</h3>*/}


                            </article>
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


                        </div>
                    )
                })}

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