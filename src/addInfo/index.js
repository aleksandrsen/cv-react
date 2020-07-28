import React from "react";

const AddInfo = props => {
    
    
    return (

  <section className="add-info">
      <div className="add-info-content">
          <div className="add-info-item">
              <div className="add-info-item-header">
                  <div className="icon-left">
                      <i className="fas fa-briefcase"/>
                  </div>
                  <div className="item-title">
                      <span className="title">Work experience</span>
                      <span className="round"/>
                      <span className="round"/>
                      <span className="round"/>
                  </div>
              </div>
              <div className="add-info-item-content">
                  <div className="sub-title">Front-end developer <span className="dates">Jan 2020 - nowadays</span>
                  </div>
                  <p className="description">
                      <a href="https:jobs.dou.ua/companies/toweriq/" className="ars" target="_blank">
                          Tower IQ
                          <i className="fas fa-external-link-alt"></i>.
                      </a>
                      I am working with web application using React, Redux, Redux-Forms, Redux-thunk, React DnD, svg,
                      PDF.old_js
                  </p>
              </div>
              <div className="add-info-item-content">
                  <div className="sub-title"> Repair technician - <span className="dates">Aug 2015 - Dec 2019</span>
                  </div>
                  <p className="description">
                      <a href="http:ars.atom.gov.ua/" className="ars" target="_blank">
                          OP "Atomremontservіs" DP NAEK "Energoatom"
                          <i className="fas fa-external-link-alt"></i>.
                      </a>
                      I was repairing different electric machines and engines at the all nuclear power stations in
                      our country.
                  </p>
              </div>
          </div>
 
          <div className="add-info-item">
              <div className="add-info-item-header">
                  <div className="icon-left">
                      <i className="fas fa-graduation-cap"/>
                  </div>
                  <div className="item-title">
                      <span className="title">Education</span>
                      <span className="round"/>
                      <span className="round"/>
                      <span className="round"/>
                  </div>
              </div>
              <div className="add-info-item-content">
                  <div className="sub-title">National University of Food Technologies - Master's Degree - <span
                      className="dates">Sep 2010 - Jun 2015</span></div>
                  <p className="description">
                      Obtained qualification of Master in Electrical Engineering Systems and Power Consumption.
                  </p>
              </div>
          </div>
 
          <div className="add-info-item">
              <div className="add-info-item-header">
                  <div className="icon-left">
                      <i className="fas fa-tools"/>
                  </div>
                  <div className="item-title">
                      <span className="title">Skills</span>
                      <span className="round"/>
                      <span className="round"/>
                      <span className="round"/>
                  </div>
              </div>
              <div className="add-info-item-content">
                  <p className="description">
                      English intermediate. Html, css, transition, transform, old_js, promise, fetch, events, sass,
                      gulp, webpack, git,
                      photoshop, avocode, jQuery, bootstrap, React, Redux, Redux-thunk, middleware,
                      Ant-design.
                  </p>
              </div>
          </div>
 
          <div className="add-info-item">
              <div className="add-info-item-header">
                  <div className="icon-left">
                      <i className="fas fa-graduation-cap"/>
                  </div>
                  <div className="item-title">
                      <span className="title">Hobbies</span>
                      <span className="round"/>
                      <span className="round"/>
                      <span className="round"/>
                  </div>
              </div>
              <div className="add-info-item-content hobby">
                  <div className="hobby-item">
                      <i className="fas fa-volleyball-ball/"/>
                  </div>
                  <div className="hobby-item">
                      <i className="fas fa-gamepad"/>
                  </div>
                  <div className="hobby-item">
                      <i className="fas fa-book-reader"/>
                  </div>
                  <div className="hobby-item">
                      <i className="fas fa-suitcase-rolling"/>
                  </div>
                  <div className="hobby-item">
                      <i className="fas fa-cogs"/>
                  </div>
              </div>
          </div>
 
          <div className="add-info-item">
              <div className="add-info-item-header">
                  <div className="icon-left">
                      <i className="fas fa-briefcase"/>
                  </div>
                  <div className="item-title">
                      <span className="title">My works</span>
                      <span className="round"/>
                      <span className="round"/>
                      <span className="round"/>
                  </div>
              </div>
 
              <div className="add-info-item-content projects">
                  <figure className="project-item">
                      <img src="img/semantic.png" className="preview-img" data-src="./img/preview-8.jpg"
                           alt="preview img"/>
                          <figcaption className="title">Tower IQ</figcaption>
                  </figure>
                  <figure className="project-item">
                      <img src="img/semantic.png" className="preview-img" data-src="./img/preview-8.jpg"
                           alt="preview img"/>
                          <figcaption className="title">React, Redux cocktails application</figcaption>
                          <a href="https:cocktails-shop.herokuapp.com/">View online <i
                              className="fas fa-external-link-alt"/></a>
                          <a href="https:github.com/aleksandrsen/cocktail-shop">Git repository <i
                              className="fas fa-external-link-alt"/></a>
                  </figure>
                  <figure className="project-item">
                      <img src="img/semantic.png" className="preview-img" data-src="./img/preview-7.jpg"
                           alt="preview img"/>
                          <figcaption className="title">React todo list</figcaption>
                          <a href="https:my-t0d0-list.herokuapp.com/">View online <i
                              className="fas fa-external-link-alt"/></a>
                          <a href="https:github.com/aleksandrsen/react-todo-list">Git repository <i
                              className="fas fa-external-link-alt"/></a>
                  </figure>
                  <figure className="project-item">
                      <img src="img/semantic.png" className="preview-img" data-src="./img/preview-6.jpg"
                           alt="preview img"/>
                          <figcaption className="title">Js news application</figcaption>
                          <a href="https:js-news-app.herokuapp.com/login">View online <i
                              className="fas fa-external-link-alt"/></a>
                          <a href="https:github.com/aleksandrsen/js-news-app">Git repository <i
                              className="fas fa-external-link-alt"/></a>
                  </figure>
                  <figure className="project-item">
                      <img src="img/semantic.png" className="preview-img" data-src="./img/preview-5.jpg"
                           alt="preview img"/>
                          <figcaption className="title">Js countries application</figcaption>
                          <a href="https:js-countries-app.herokuapp.com/">View online <i
                              className="fas fa-external-link-alt"/></a>
                          <a href="https:github.com/aleksandrsen/js-countries-app">Git repository <i
                              className="fas fa-external-link-alt"/></a>
                  </figure>
                  <figure className="project-item">
                      <img src="img/semantic.png" className="preview-img" data-src="./img/preview-4.jpg"
                           alt="preview img"/>
                          <figcaption className="title">Waxom landing page</figcaption>
                          <a href="https:aleksandrsen.github.io/waxom/">View online <i
                              className="fas fa-external-link-alt"/></a>
                          <a href="https:github.com/aleksandrsen/waxom-landing-page">Git repository <i
                              className="fas fa-external-link-alt"/></a>
                  </figure>
                  <figure className="project-item">
                      <img src="img/semantic.png" className="preview-img" data-src="./img/preview-3.jpg"
                           alt="preview img"/>
                          <figcaption className="title">Bouncy landing page</figcaption>
                          <a href="https:aleksandrsen.github.io/bouncy/">View online <i
                              className="fas fa-external-link-alt"/></a>
                          <a href="https:github.com/aleksandrsen/bouncy-landing-page">Git repository <i
                              className="fas fa-external-link-alt"/></a>
                  </figure>
                  <figure className="project-item">
                      <img src="img/semantic.png" className="preview-img" data-src="./img/preview-2.jpg"
                           alt="preview img"/>
                          <figcaption className="title">Meet brandi landing page</figcaption>
                          <a href="https:aleksandrsen.github.io/brandi/">View online <i
                              className="fas fa-external-link-alt"/></a>
                          <a href="https:github.com/aleksandrsen/brandi-landing-page">Git repository <i
                              className="fas fa-external-link-alt"/></a>
                  </figure>
                  <figure className="project-item">
                      <img src="img/semantic.png" className="preview-img" data-src="./img/preview-1.jpg"
                           alt="preview img"/>
                          <figcaption className="title">Thomas Rhythm landing page</figcaption>
                          <a href="https:aleksandrsen.github.io/thomas-rhythm/">View online <i
                              className="fas fa-external-link-alt"/></a>
                          <a href="https:github.com/aleksandrsen/thomas-rhythm-landing-page">Git repository <i
                              className="fas fa-external-link-alt"/></a>
                  </figure>
              </div>
                </div>
        </div>
     </section>
    )
}


export default AddInfo;
