import React from 'react';
import './App.css';
import projectAmic from './img/amic.png';
import projectFirebrand_1 from './img/firebrand1.png';
import projectFirebrand_2 from './img/firebrand2.png';
import projectJramchurch from './img/jram.church.png';
import projectMvr4 from './img/mvr4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faLaravel, faReact, faHtml5, faCss3, faJsSquare, faWordpress, faJoomla, faAdobe, faWindows, faLinux, faApple } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="container-fluid p-0">
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <div className="w-100">
          <h1 className="mb-0">Ronel
            <span className="text-primary">Canaria</span>
          </h1>
          <div className="subheading mb-5">189 Blk 12 Lot 2A Phase 10 Ricarte St. Bahayang Pagasa Subd. Imus, Cavite<br />
            <a href="mailto:canaria97@gmail.com">canaria97@gmail.com</a>
          </div>
          <p className="lead mb-5">Making all things possible!</p>
          <div className="social-icons">
            <a href={'https://www.linkedin.com/in/ronelcanaria'} target={'_blank'}>
              <i><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></i>
            </a>
            <a href={'https://www.facebook.com/Glimpse07.MasterRon'} target={'_blank'}>
              <i><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></i>
            </a>
          </div>
        </div>
      </section>

      <hr className="m-0"></hr>

      <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Web Developer</h3>
              <div className="subheading mb-3">HUPER International<br />Ortigas Center, Pasig City, Metro Manila</div>
              <p>Event Organizing Company that handles, organized, and manages concerts, conferences, trainings and more, both local and international.</p>
              <li>Developed and maintain websites and microsites depends on the client requirements.</li>
              <li>Developed Project management software.</li>
              <li>Manages sales and inventory if needed for the project.</li>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2018 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Assistant Web Developer (Project Based)</h3>
              <div className="subheading mb-3">The Good Chronicle Corporation<br />Ortigas Center, Pasig City, Metro Manila</div>
              
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2017</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">INTERNSHIP</h3>
              <div className="subheading mb-3">Office of the President - Commission of Filipinos Overseas<br />Quirino Ave. Paco Manila, Metro Manila</div>
              
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2016</span>
            </div>
          </div>

        </div>

      </section>

      <hr className="m-0"></hr>

      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Pamantasan ng Lungsod ng Maynila <br /><small>(University of the City of Manila)</small></h3>
              <div className="subheading mb-3">Bachelor of Science in Computer Studies Major in Computer Science</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2018</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">General Emilio Aguinaldo Nat'l High School - Annex</h3>
              <div className="subheading mb-3">Secondary School</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2013</span>
            </div>
          </div>

        </div>
      </section>

      <hr className="m-0"></hr>

      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
        <div className="w-100">
          <h2 className="mb-5">Technical Skills</h2>
          <div className="subheading mb-3">Programming Languages &amp; Tools</div>

          <p className="subheading">I. WEB DEVELOPMENT</p>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i><FontAwesomeIcon icon={faLaravel}></FontAwesomeIcon></i>
            </li>
            <li className="list-inline-item">
              <i><FontAwesomeIcon icon={faReact}></FontAwesomeIcon></i>
            </li>
            <li className="list-inline-item">
              <i><FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon></i>
            </li>
            <li className="list-inline-item">
              <i><FontAwesomeIcon icon={faCss3}></FontAwesomeIcon></i>
            </li>
            <li className="list-inline-item">
              <i><FontAwesomeIcon icon={faJsSquare}></FontAwesomeIcon></i>
            </li>
            <li className="list-inline-item">
              <i><FontAwesomeIcon icon={faWordpress}></FontAwesomeIcon></i>
            </li>
            <li className="list-inline-item">
              <i><FontAwesomeIcon icon={faJoomla}></FontAwesomeIcon></i>
            </li>
          </ul>
          <li>Laravel PHP</li>
          <li>React JS</li>
          <li>HTML5</li>
          <li>CSS</li>
          <li>JS</li>
          <li>Wordpress</li>
          <li>Joomla</li>
          <li>C#</li>

          <p className="subheading" style={{ paddingTop: "20px" }}>II. GRAPHIC DESIGN</p>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i><FontAwesomeIcon icon={faAdobe}></FontAwesomeIcon></i>
            </li>
          </ul>
          <li>Photoshop CC 2017-2019</li>
          <li>Illustrator CC 2017-2019</li>
          <li>Premiere Pro CC 2017-2019</li>
          <li>After Effects CC 2017-2019</li>

          <p className="subheading" style={{ paddingTop: "20px" }}>III. OPERATING SYSTEM</p>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i><FontAwesomeIcon icon={faWindows}></FontAwesomeIcon></i>
            </li>
            <li className="list-inline-item">
              <i><FontAwesomeIcon icon={faLinux}></FontAwesomeIcon></i>
            </li>
            <li className="list-inline-item">
              <i><FontAwesomeIcon icon={faApple}></FontAwesomeIcon></i>
            </li>
          </ul>
          <li>Windows OS</li>
          <li>Linux OS</li>
          <li>Mac OS</li>
        </div>
      </section>

      <hr className="m-0"></hr>

      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="projects">
        <div className="w-100">
          <h2 className="mb-5">Projects Involved</h2>
            
                <h3 className="subheading">I. Million Volunteer Run 4</h3>
                <img src={projectMvr4} className="img-fluid" style={{ width: "50%" }} />
                <p style={{ paddingTop: "10px" }}>
                  <h5>Role and Responsibilities</h5>
                  <li>Website Updates and Management</li>
                  <li>Sales Reporting</li>
                  <li>Ticket Coordination</li>
                  <li>Inventory Management</li>
                </p>

                <h3>II. 2017 AMIC Annual Conference</h3>
                <img src={projectAmic} className="img-fluid" style={{ width: "50%", borderStyle: "solid", borderWidth: "1px" }} />
                <p style={{ paddingTop: "10px" }}>
                  <h5>Role and Responsibilities</h5>
                  <li>Website Updates and Management</li>
                  <li>Sales Reporting</li>
                  <li>ID and Certificates Design</li>
                </p>

                <h3>III. Firebrand PH</h3>
                <img src={projectFirebrand_1} className="img-fluid" style={{ width: "50%" }} />
                <hr />
                <img src={projectFirebrand_2} className="img-fluid" style={{ width: "50%", borderStyle: "solid", borderWidth: "1px" }} />
                <p style={{ paddingTop: "10px" }}>
                  <p>Link: <a href="https://firebrandph.com" target="_blank">https://firebrandph.com</a></p>
                  <h5>Role and Responsibilities</h5>
                  <li>Website Development</li>
                </p>

                <h3>IV. Jesus Rock of Ages Ministries</h3>
                <img src={projectJramchurch} className="img-fluid" style={{ width: "50%" }} />
                <p style={{ paddingTop: "10px" }}>
                  <p>Link: <a href="https://jram.church" target="_blank">https://jram.church</a></p>
                  <h5>Role and Responsibilities</h5>
                  <li>Website and Microsites Development</li>
                  <li>Management and Reporting</li>
                  <li>Visitors Statistics Reporting</li>
                </p>

                <h3>V. Jesus Global Youth Day PH</h3>
                <p style={{ paddingTop: "10px" }}>
                <p>Link: <a href="https://jesusglobalyouthday.ph" target="_blank">https://jesusglobalyouthday.ph</a></p>
                <h5>Role and Responsibilities</h5>
                  <li>Marketplace Development (link: <a href="https://jesusglobalyouthday.ph/marketplace" target="_blank">https://jesusglobalyouthday.ph/marketplace</a>)</li>
                  <li>Sales Report</li>
                  <li>Ticket Coordinator</li>
                  <li>Poster Editor/Designer</li>
                  <li>Video Editor/Designer</li>
                </p>

        </div>
      </section>

      <hr className="m-0"></hr>

    </div>
  );
}

export default App;
