import React from "react"
import {graphql, Link} from "gatsby";
import {rhythm} from "../utils/typography";

const GradAlumniDay = ({ data, location }) => {

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
                <div class="grad-alumni-day--intro">
                <h1>Grad Alumni Day</h1>
                <p>Saturday, March 7, 2020 | Stanford University</p>
                <p>Return to campus for a day planned just for Stanford graduate alumni.
                    You'll get inspired with thought-provoking micro lectures, faculty talks and
                    conversations with fellow grad alumni before winding down at an evening wine reception
                    with hearty hors d'oeuvres.</p>
                <button value="decanter" name="register-button" className="su-button" type="button">Register
                </button>
                </div>

                <h2>See what's in store</h2>
                <p>Present list of sessions here (title, description, etc)</p>

                {sessions.map(({ node }) => {
                    return (

                        <article key={node.sessionTitle}>
                            <header>

                                <h3>{node.sessionStartTime}-{node.sessionEndTime} {node.sessionTitle}</h3>
                                <div>[Session Description Goes Here.]</div>
                            </header>
                            {/*<h3>{node.sessionPeople.personDisplayName}</h3>*/}
                            <div class="session-people">
                                <div>[Person information Goes Here.]</div>


                                <h3>{node.sessionPeople ? node.sessionPeople[0].personDisplayName : "no people"}</h3>
                                <div>{node.sessionPeople ? node.sessionPeople[0].presentationTitle : "no people"}</div>
                                <div>{node.sessionPeople ? node.sessionPeople[0].personTitle : "no people"}</div>
                                <div>{node.sessionPeople ? node.sessionPeople[0].personClassYear : "no people"}</div>
                                {/*var personImage == {node.sessionPeople ? node.sessionPeople[0].personImage.file.url : "no people"}</div>*/}
                                <div>{node.sessionPeople ? node.sessionPeople[0].personImage.file.url : "no people"}</div>




                            </div>
                        </article>
                    )
                })}

            </div>

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
  allContentfulEvent(sort: {fields: [eventStartDate], order: ASC}) {
    edges {
      node {
        id
        eventTitle
        eventStartDate(formatString: "MMMM Do, YYYY h:mm")
        eventEndDate(formatString: "MMMM Do, YYYY h:mm")
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
