(window["webpackJsonpprofile-page"]=window["webpackJsonpprofile-page"]||[]).push([[0],{13:function(e,n,t){e.exports=t(23)},23:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),i=t(8),r=t.n(i),s=t(1),c=t(2),l={white:"#ffffff",platinum:"#e5e5e5",dustyGray:"#5E747F",codGray:"#333333",black:"#000000",yankeesBlue:"#00558B",carrotOrange:"#F09B1A",highlightYellow:"#fdf2b2",red:"#f27474"},d={xl:"80px",lg:"40px",md:"20px",sm:"10px",xs:"5px",maxWidth:"1024px"};function u(){var e=Object(s.a)(["\n    @media "," {\n      ","\n    }\n  "]);return u=function(){return e},e}function m(){var e=Object(s.a)(["\n    @media "," {\n      ","\n    }\n  "]);return m=function(){return e},e}var p=1023,h={small:"(max-width: ".concat(p,"px)"),large:"(min-width: ".concat(p+1,"px)")},g={small:function(){return Object(c.b)(m(),h.small,c.b.apply(void 0,arguments))},large:function(){return Object(c.b)(u(),h.large,c.b.apply(void 0,arguments))}},f="\n  font-family: 'Montserrat', sans-serif;\n  font-size: 16px;\n  line-height: 20px;\n  color: ".concat(l.codGray,";\n"),v={jumbo:f+"\n    font-size: 36px;\n    line-height: 60px;\n    font-weight: 700;\n    color: ".concat(l.yankeesBlue,";\n  "),header:f+"\n    font-size: 22px;\n    line-height: 24px;\n    font-weight: 600;\n    color: ".concat(l.yankeesBlue,";\n    text-transform: uppercase;\n    padding-bottom: ").concat(d.sm,";\n    margin-bottom: ").concat(d.sm,";\n  "),regular:f,label:f+"\n    font-size: 14px;\n    opacity: .8;\n    line-height: 18px;\n    font-weight: 400;\n    color: ".concat(l.dustyGray,";\n  "),small:f+"\n    font-size: 14px;\n    line-height: 18px;\n    margin: 5px 0px;\n    font-weight: 400;\n  "},b={colors:l,typography:v,dimensions:d,media:g},y=t(3);function w(){var e=Object(s.a)(["\n  ",";\n  margin-bottom: ",";\n"]);return w=function(){return e},e}function k(){var e=Object(s.a)(["\n  ",";\n"]);return k=function(){return e},e}function S(){var e=Object(s.a)(["\n    margin-bottom: ",";\n  "]);return S=function(){return e},e}function x(){var e=Object(s.a)(["\n  background-image: url(",");\n  background-size: cover;\n  background-position: center;\n  height: 200px;\n  width: 200px;\n  margin-right: ",";\n  border-radius: 5px;\n\n  ","\n"]);return x=function(){return e},e}function D(){var e=Object(s.a)(["\n    flex-direction: column;\n    align-items: center;\n    text-align: left;\n  "]);return D=function(){return e},e}function j(){var e=Object(s.a)(["\n  display: flex;\n  flex: 1;\n  padding-bottom: ",";\n  border-bottom: 1px solid ",";\n  margin-bottom: ",";\n\n  ","\n"]);return j=function(){return e},e}var E=function(){return console.log(y),o.a.createElement(O,{className:"profile-bio"},o.a.createElement("div",null,o.a.createElement(C,{photo:y.basics.picture})),o.a.createElement("div",null,o.a.createElement(A,{className:"name"},y.basics.name),o.a.createElement(T,{className:"headline"},y.basics.label),o.a.createElement("div",{className:"summary"},y.basics.summary)))},O=c.c.header(j(),b.dimensions.lg,b.colors.platinum,b.dimensions.lg,b.media.small(D())),C=c.c.div(x(),function(e){return e.photo},b.dimensions.md,b.media.small(S(),b.dimensions.md)),A=c.c.div(k(),b.typography.jumbo),T=c.c.div(w(),b.typography.label,b.dimensions.md);function R(){var e=Object(s.a)(["\n  ",";\n"]);return R=function(){return e},e}function N(){var e=Object(s.a)(["\n  height: 20px;\n  width: 20px;\n  margin: "," "," "," 0;\n"]);return N=function(){return e},e}function B(){var e=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  ",";\n\n  &:visited {\n    ",";\n  }\n"]);return B=function(){return e},e}function W(){var e=Object(s.a)(["\n  ",";\n"]);return W=function(){return e},e}function I(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 0 {styles.dimensions.md};\n"]);return I=function(){return e},e}var L=function(){return o.a.createElement(z,{className:"profile-links"},o.a.createElement(M,null,"Find me Online"),y.basics.profiles.map(function(e){return o.a.createElement(P,{href:e.url,target:"_blank"},o.a.createElement(F,{src:e.icon,color:e.iconColor}),o.a.createElement(J,null,e.username))}))},z=c.c.header(I()),M=c.c.div(W(),b.typography.header),P=c.c.a(B(),b.typography.regular,b.typography.regular),F=c.c.img(N(),b.dimensions.xs,b.dimensions.sm,b.dimensions.xs),J=c.c.div(R(),b.typography.small),Q=function(e){return e.slice(0,4)};function G(){var e=Object(s.a)(["\n  ",";\n"]);return G=function(){return e},e}function V(){var e=Object(s.a)(["\n  ",";\n  margin-top: ",";\n"]);return V=function(){return e},e}function H(){var e=Object(s.a)(["\n  ",";\n"]);return H=function(){return e},e}function U(){var e=Object(s.a)(["\n  margin-bottom: ",";\n"]);return U=function(){return e},e}var K=function(){return o.a.createElement(_,{className:"education-container"},y.education.map(function(e){return o.a.createElement("div",null,o.a.createElement(Y,null,"Education"),o.a.createElement("div",{className:"education-degree"},e.studyType," in ",e.area),o.a.createElement(X,{className:"education-institution"},"@ ",e.institution),o.a.createElement(Z,{className:"education-start"},Q(e.startDate)," - ",Q(e.endDate)))}))},_=c.c.div(U(),b.dimensions.lg),Y=c.c.div(H(),b.typography.header),X=c.c.div(V(),b.typography.label,b.dimensions.sm),Z=c.c.div(G(),b.typography.label);function q(){var e=Object(s.a)(["\n\n"]);return q=function(){return e},e}function $(){var e=Object(s.a)(["\n  color: ",";\n  font-weight: 500;\n"]);return $=function(){return e},e}function ee(){var e=Object(s.a)(["\n  margin-bottom: 0;\n"]);return ee=function(){return e},e}function ne(){var e=Object(s.a)([""]);return ne=function(){return e},e}function te(){var e=Object(s.a)(["\n  margin-top: ",";\n  text-align: justify;\n"]);return te=function(){return e},e}function ae(){var e=Object(s.a)(["\n  margin-left: ",";\n  margin-bottom: ",";\n  ",";\n"]);return ae=function(){return e},e}function oe(){var e=Object(s.a)(["\n    margin-left: ",";\n  "]);return oe=function(){return e},e}function ie(){var e=Object(s.a)(["\n  ","\n"]);return ie=function(){return e},e}function re(){var e=Object(s.a)(["\n  font-weight: 700;\n"]);return re=function(){return e},e}function se(){var e=Object(s.a)(["\n    display: flex;\n    flex-direction: column;\n  "]);return se=function(){return e},e}function ce(){var e=Object(s.a)(["\n  ","\n"]);return ce=function(){return e},e}function le(){var e=Object(s.a)(["\n  padding: ",";\n  border: 1px solid ",";\n  margin-bottom: ",";\n"]);return le=function(){return e},e}function de(){var e=Object(s.a)(["\n  ",";\n"]);return de=function(){return e},e}function ue(){var e=Object(s.a)(["\n    margin-right: ",";\n  "]);return ue=function(){return e},e}function me(){var e=Object(s.a)(["\n  ","\n"]);return me=function(){return e},e}var pe=function(){return o.a.createElement(he,{className:"work-container"},o.a.createElement(ge,null,"Work Experience"),y.work.map(function(e){return o.a.createElement(fe,null,o.a.createElement(ve,null,o.a.createElement(be,{className:"work-position"},e.position),o.a.createElement(ye,{href:e.website||"#",target:"_blank",className:"work-company"},"@ ",e.company)),o.a.createElement(ke,null,e.summary),o.a.createElement(Se,null,e.highlights&&e.highlights.map(function(e){return o.a.createElement("div",null,"- ",e)})),o.a.createElement(xe,null,o.a.createElement(De,null,"Technologies: "),o.a.createElement(je,null,e.technologies)))}))},he=c.c.div(me(),b.media.large(ue(),b.dimensions.lg)),ge=c.c.div(de(),b.typography.header),fe=c.c.div(le(),b.dimensions.md,b.colors.platinum,b.dimensions.md),ve=c.c.div(ce(),b.media.small(se())),be=c.c.span(re()),ye=c.c.a(ie(),b.media.large(oe(),b.dimensions.xs)),we=c.c.div(ae(),b.dimensions.sm,b.dimensions.sm,b.typography.label),ke=Object(c.c)(we)(te(),b.dimensions.sm),Se=Object(c.c)(we)(ne()),xe=Object(c.c)(we)(ee()),De=c.c.span($(),b.colors.codGray),je=c.c.span(q());function Ee(){var e=Object(s.a)(["\n  flex: 7;\n"]);return Ee=function(){return e},e}function Oe(){var e=Object(s.a)(["\n  flex: 2;\n  font-weight: 700;\n"]);return Oe=function(){return e},e}function Ce(){var e=Object(s.a)(["\n  background-color: white;\n  width: 16px;\n  height: 16px;\n  position: absolute;\n  left: -18px;\n  top: 17px;\n  border: 5px solid ",";\n  border-radius: 50%;\n"]);return Ce=function(){return e},e}function Ae(){var e=Object(s.a)(["\n  padding: ",";\n  border-left: 10px solid ",";\n  display: flex;\n  position: relative;\n  flex: ",";\n"]);return Ae=function(){return e},e}function Te(){var e=Object(s.a)(["\n  ",";\n"]);return Te=function(){return e},e}function Re(){var e=Object(s.a)(["\n    margin-right: ",";\n  "]);return Re=function(){return e},e}function Ne(){var e=Object(s.a)(["\n  margin-bottom: ",";\n\n  ","\n\n  flex: 2;\n  display: flex;\n  flex-direction: column;\n"]);return Ne=function(){return e},e}var Be=function(){return o.a.createElement(We,{className:"career-container"},o.a.createElement(Ie,null,"Career Overview"),y.career.reverse().map(function(e){return o.a.createElement(Le,{size:e.size},o.a.createElement(ze,null),o.a.createElement(Me,null,e.date),o.a.createElement(Pe,null,e.description))}))},We=c.c.div(Ne(),b.dimensions.lg,b.media.large(Re(),b.dimensions.lg)),Ie=c.c.div(Te(),b.typography.header),Le=c.c.div(Ae(),b.dimensions.md,b.colors.platinum,function(e){return e.size}),ze=c.c.div(Ce(),b.colors.yankeesBlue),Me=c.c.div(Oe()),Pe=c.c.div(Ee());function Fe(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n"]);return Fe=function(){return e},e}function Je(){var e=Object(s.a)(["\n    flex-direction: column;\n  "]);return Je=function(){return e},e}function Qe(){var e=Object(s.a)(["\n  display: flex;\n  flex: 1;\n\n  ","\n"]);return Qe=function(){return e},e}function Ge(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return Ge=function(){return e},e}function Ve(){var e=Object(s.a)(["\n    width: 100%;\n    box-sizing: border-box;\n  "]);return Ve=function(){return e},e}function He(){var e=Object(s.a)(["\n  width: ",";\n  padding: "," ",";\n  display: flex;\n  flex-direction: column;\n\n  ","\n"]);return He=function(){return e},e}function Ue(){var e=Object(s.a)(["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n"]);return Ue=function(){return e},e}var Ke=c.c.div(Ue()),_e=c.c.div(He(),b.dimensions.maxWidth,b.dimensions.lg,b.dimensions.md,b.media.small(Ve())),Ye=c.c.div(Ge()),Xe=c.c.div(Qe(),b.media.small(Je())),Ze=c.c.div(Fe());function qe(){var e=Object(s.a)(["\n  body {\n    margin: 0;\n    ",";\n  }\n\n  a {\n    text-decoration: none;\n    \n    ",";\n\n    &:visited {\n      ",";\n    }\n\n    &:hover {\n      opacity: 0.7;\n    }\n  }\n"]);return qe=function(){return e},e}var $e=Object(c.a)(qe(),v.regular,v.regular,v.regular);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.Fragment,null,o.a.createElement($e,null),o.a.createElement(function(){return o.a.createElement(Ke,{className:"profile"},o.a.createElement(_e,{className:"profile-container"},o.a.createElement(E,null),o.a.createElement(Ye,{className:"body"},o.a.createElement(Xe,{className:"career-and-profile-links"},o.a.createElement(Be,null),o.a.createElement(Ze,{className:"right-sidebar"},o.a.createElement(K,null),o.a.createElement(L,null))),o.a.createElement(pe,null))))},null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},3:function(e){e.exports=JSON.parse('{"basics":{"name":"Caio Kinzel Filho","label":"Software Engineer | Tech Lead | Agile Consultant","picture":"http://www.gravatar.com/avatar/82c169bc19ec0a21b7fbcd2043fd4ad2.png?s=200","email":"caiokf@gmail.com","phone":"","summary":"Software developer and agilist with 14+ years of experience building applications from startups to large enterprises. Focused on writing good and maintainable code on dynamic teams while trying so solve the real problems.","location":{"address":"","postalCode":"","city":"Porto Alegre","countryCode":"BR","region":"Rio Grande do Sul, Brazil"},"profiles":[{"network":"Email","username":"caiokf@gmail.com","url":"mailto:caiokf@gmail.com","icon":"https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/gmail.svg","iconColor":"#D14836"},{"network":"Toptal Profile","username":"toptal.com/resume/caio-kinzel-filho","url":"https://www.toptal.com/resume/caio-kinzel-filho","icon":"https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/toptal.svg","iconColor":"#3863A0"},{"network":"GitHub","username":"caiokf","url":"https://github.com/caiokf","icon":"https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg","iconColor":"#181717"},{"network":"LinkedIn","username":"/caiokf","url":"https://www.linkedin.com/in/caiokf/","icon":"https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg","iconColor":"#0077B5"},{"network":"Codewars","username":"caiokf","url":"https://www.codewars.com/users/caiokf","icon":"https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/codewars.svg","iconColor":"#AD2C27"},{"network":"Codepen","username":"caiokf","url":"https://codepen.io/caiokf/","icon":"https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/codepen.svg","iconColor":"#000000"},{"network":"HackerRank","username":"caiokf","url":"https://www.hackerrank.com/caiokf","icon":"https://cdn4.iconfinder.com/data/icons/logos-and-brands-1/512/160_Hackerrank_logo_logos-512.png","iconColor":"#2BBD5D"}]},"languages":[{"language":"Portuguese","fluency":"Native Speaker"},{"language":"English","fluency":"Fluent"},{"language":"Spanish","fluency":"Intermediate"}],"work":[{"company":"SelectQuote","via":"Toptal","position":"Senior Full-stack Developer","startDate":"2019-03-25","endDate":"2019-06-21","summary":"","highlights":["Add functionality to C# and Node.js projects.","Create A/B Testing variants of customer facing pages.","Work on system migration to a new platform."],"technologies":"Node.js, C#, Web Api, SQL"},{"company":"Run The Call","position":"Lead Front-end Engineer","startDate":"2017-08-25","endDate":"2019-01-20","summary":"","highlights":["Restructured the app and migrate it from Angular to React.","Created js-side styleguides.","Created an app-wide component library.","Fixed defects and get the app ready for production."],"technologies":"React.js, Redux, Redux-saga, styled-components"},{"company":"Scribe Intelligence","via":"Toptal","position":"Technical Lead","startDate":"2018-06-11","endDate":"2018-08-24","summary":"","highlights":["Architected and implemented a backend migration to Event Sourcing.","Redesigned the React frontend.","Improved performance of the application for the rendering of large datasets.","Mentoring of junior developers."],"technologies":"Node.js, React, Event Sourcing, Streaming, AWS, ElasticSearch, MongoDB"},{"company":"Cryptocurrency Chatbot Startup","position":"Chatbot Developer","startDate":"2017-10-10","endDate":"2017-10-17","summary":"","highlights":["Created a chatbot prototype for cryptocurrency trading using tools for classification and natural language processing.","Implemented chatbot memory for session support.","Created a SPA in React for interacting with the chatbot."],"technologies":"Node.js, Chatbots, Natural Language Processing, Natural Brain, React, Redux"},{"company":"Ethereum Marketplace Startup","position":"Full-stack Developer","startDate":"2017-10-20","endDate":"2017-11-25","summary":"","highlights":["Developed ethereum smart contracts for a digital markplace\'s payments and escrow.","Built a back-end in Node.js, MongoDB, and GraphQL.","Created a front-end in React to integrate with GraphQL using Apollo.","Implemented the authentication system with Auth0 in React."],"technologies":"Node.js, React, Redux, Redux-saga, Ethereum Smart Contracts, Solidity, GraphQL, Apollo, MongoDB"},{"company":"Redizoo","via":"Toptal","position":"Senior Front-end Developer","startDate":"2017-10-30","endDate":"2017-11-03","summary":"","highlights":["Created a front-end React app to integrate with a C# Web API back-end."],"technologies":"React, Redux, Styled Components, C#, Web API"},{"company":"Scribevo","via":"Toptal","position":"Senior Backend Engineer","startDate":"2017-11-20","endDate":"2017-12-07","summary":"","highlights":["Optimized the performance of a streaming back-end for speech recognition by 20x.","Built the foundation for a test-driven development workflow.","Decreased the operational costs of the application pipeline by improving third-party integration points."],"technologies":"Node.js, Streaming, PostgreSQL, AWS, Docker, IBM Watson"},{"company":"Clinova","position":"Lead React Native Developer","startDate":"2017-11-20","endDate":"2017-12-07","summary":"","highlights":["Led a small team in the development of a React Native app.","Designed and architected the application from specs to deployment.","Set up tests and deployment infrastructure.","Prepared the application for internationalization and copywriting."],"technologies":"React Native, Redux, Styled Components, iOS, Android, Fastlane, MongoDB, Node.js, Express"},{"company":"University at Buffalo\u2014SUNY","via":"Toptal","position":"Senior React Developer","startDate":"2017-04-24","endDate":"2017-07-23","summary":"","highlights":["Developed a React application for music notation editing.","Created a back-end application to handle simple APIs endpoints.","Set up tests and deployment infrastructure.","Prepared the application for internationalization and copywriting."],"technologies":"React, Redux, Redux-saga, Immutable, Reselect, Enzyme, VexFlow, MongoDB, Node.js"},{"company":"Run The Call","via":"Toptal","position":"Senior Frontend Developer","startDate":"2017-01-13","endDate":"2017-03-30","summary":"","highlights":["Set up continuous integration.","Built the foundation for unit tests and automated acceptance tests.","Prepared the app for initial release.","Stabilized and added features to the frontend."],"technologies":"JavaScript, AngularJS, Angular Material, GraphQL, Docker, Kubernetes, Google Cloud, Node.js"},{"company":"MustWin | Zenefits","via":"Toptal","position":"Senior Frontend Developer","startDate":"2017-08-22","endDate":"2017-10-08","summary":"","highlights":["Added React/Redux to the existing application.","Implemented responsive web views using React.js and Sass under a tight deadline.","Maintained and extended the existing Django framework and models.","Stabilized and added features to the frontend."],"technologies":"ReactJS, Redux, Python, Django, Responsive Design, Sass"},{"company":"MustWin | Cisco","via":"Toptal","position":"Senior Fullstack Developer","startDate":"2016-08-21","endDate":"2016-04-04","summary":"","highlights":["Worked as a JavaScript frontend developer on an AngularJS code base.","Set up a unit testing framework for frontend application.","Created a data metrics pipeline using InfluxDB, Docker, Grafana, and Kafka."],"technologies":"JavaScript, AngularJS, Grafana, Docker, InfluxDB, Kafka, Restangular, UI Router, Grunt, D3.js"},{"company":"Rackspace","via":"ThoughtWorks","position":"Lead Consultant","startDate":"2013-11-20","endDate":"2015-02-01","summary":"","highlights":["Worked on a continuous delivery pipeline with multiple deploys a day.","Created a dashboard for managing cloud servers, databases, and other resources","Developed a module for the management of automatic scaling of cloud servers and nodes.","Created a pipeline with thousands of tests backing the deployment process from commit to production deploy."],"technologies":"JavaScript, Google Closure, Cassandra, Node.js, React"},{"company":"Johannesburg Stock Exchange","via":"ThoughtWorks","position":"Technical Lead","startDate":"2013-02-01","endDate":"2013-11-01","summary":"","highlights":["Implemented a pilot Agile project to be further followed by multiple teams within the organization.","Provided guidance for the client\'s technical leads on processes and tools.","Built an internal tool to remove manual workload for an important department.","Trained client developers and testers on automated functional tests.","Helped the business with project inception and minimal viable product specifications."],"technologies":"C#, ASP.NET MVC, SQL Server, NHibernate, JavaScript, AngularJS"},{"company":"Vision Critical","via":"ThoughtWorks","position":"Senior Web Developer","startDate":"2012-05-01","endDate":"2014-11-01","summary":"","highlights":["Built a platform for customized survey creation.","Created a continuous delivery pipeline.","Implemented a polyglot persistence on MongoDB and SQL Server.","Worked on a RESTful API for back-end services.","Designed a functional testing suite to be used by developers and testers."],"technologies":"C#, ASP.NET MVC, JavaScript, SQL Server, MongoDB"},{"company":"Measured Progress","via":"ThoughtWorks","position":"Technical Lead","startDate":"2010-08-01","endDate":"2011-11-01","summary":"","highlights":["Built a rich client web application to manage custom student assessments.","Introduced continuous integration, testing, and Agile processes to the project as a pilot to the organization.","Developed a testing framework for a higher integration between business analysts and developers.","Worked on a rich WYSIWYG editor with custom functions and math formulas.","Designed the application from iteration 0 to a succesful platform."],"technologies":"C#, ASP.NET MVC, NHibernate, JavaScript, SQL Server"},{"company":"World\u2019s Largest Apparel Retailer","via":"ThoughtWorks","position":"Senior Web Developer","startDate":"2010-02-15","endDate":"2012-08-01","summary":"","highlights":["Worked on a large-scale enterprise e-commerce with multi-continent distributed teams..","Developed a plan to reduce technical debt.","Worked on global payment processing and order fullfillment."],"technologies":"Java, Spring, XML, XSLT, e-commerce, Agile, Scrum"},{"company":"TOTVS","position":"Senior Web Developer","website":"http://totvs.com","startDate":"2009-09-01","endDate":"2010-02-01","summary":"This software factory works in the field of hospital management systems inside a large Enterprise of ERP systems. The product is used on some of the largest hospitals in Brazil, managing most of their processes and integrating with ERP systems, built using ASP.NET WebForms, AJAX  and COM+ technologies, with Oracle and MS SQL Server databases. The project had 15+ years old and was maintained by 50 developers using RUP methodologies. I worked as a developer and helped in the transition from old VCS to Subversion and advocated the use of Continuous Integration and unit testing practices that was later adopted by the company","technologies":["C#, MSSQL, Oracle","Large enterprise multi-tenant software","Microsoft Workflow Foundation experience"]},{"company":"Farm\xe1cias Aguiar / HOS","position":"Technical Lead","website":"http://hos.com.br","startDate":"2007-02-01","endDate":"2009-09-01","summary":"A software design house working in the field of pharmaceutical software systems. Initially I developed a few independent systems in C#, motivating the company to migrate their products from VB6. The team consisted of 12 developers and QAs who only had experience with Visual Basic 6 and manual testing experiences, together with a few product owners and business analysts shared between this project\'s and another teams. I provided training for the developers and QA team, on Agile  methodologies, Object-Oriented Design, C# and automated tests for smart client platforms, designed a Continuous Integration environment and started the project architecture and kick-off using Windows  Forms, WCF and ALT.NET stack.","technologies":["C#, Visual Basic, MSSQL, Firebird","Full project life-cycle experience","Working closely with business experts","Migration from VB6 to .NET technologies","Onboarding team members onto Agile practices"]},{"company":"Conceito Web","position":"Freelancer Web Developer","website":"http://conceitoweb.com.br","startDate":"2007-09-01","endDate":"2008-02-01","summary":"This digital design company was hired to build an e-commerce portal solution for a large client. This project consisted on a concept they called \\"virtual shopping center\\", where users could buy an e-commerce store on-line  and customize it. This solution was a greenfield application, though it needed to integrate with some systems and had some restrictions on the programming language, with certain architectural decisions required by the client. I was brought in to design the solution architecture and the development kick-off of the project working with a Product Owner, a Project Manager, and 7 Application/Database developers through the completion of the project. This project was develop in VB.NET and ASP.NET WebForms technology in a mix of Waterfall and Iterative methodologies, with the a closed-scope defined prior to the start of the project and a very short  deadline.","technologies":"VB.NET, MSSQL, E-commerce multi-tiered application"},{"company":"Solon Tavares Technical State School","position":"Trainer","website":"http://solontavares.com/","startDate":"2006-05-01","endDate":"2007-11-01","summary":"Part time trainer on this state-run technical school, teaching subjects on the course of Software Development and Analysis. Among some of the subjects taught are: Software  Development, Systems Analysis, Object-Oriented Programming and Design, and Data Structures and Algorithms.","technologies":"Formal teaching experience"},{"company":"Zeta Inform\xe1tica","position":"Developer","website":"http://zeta.com.br","startDate":"2005-11-01","endDate":"2006-07-01","summary":"In-house developed ERP system. As a developer, I worked on some of the application modules in Clarion language, with Topspeed database.","technologies":"Clarion, Topspeed"},{"company":"Server Inform\xe1tica","position":"Developer","website":"http://www.serverinformatica.com.br","startDate":"2005-01-01","endDate":"2005-06-01","summary":"ServerObras is the main product of this company, and it\'s focused on the construction sector for architecture and engineering contractors, used by the some of the largest construction companies in Brazil. As a developer on this project, I worked with Visual Basic 6 and ASP.","technologies":"Visual Basic 6, Classic ASP, MSSQL"}],"career":[{"date":"2004 - 2007","description":"University and Internships","size":4},{"date":"2007 - 2010","description":"Finished university and started working as a Senior Developer","size":4},{"date":"2010 - 2015","description":"Worked as an agile consultant on ThoughtWorks. Many different projects and technology stacks","size":6},{"date":"2015 - current","description":"Working as an independent contractor as well as through Toptal","size":5}],"skills":[{"name":"Web Development","keywords":["HTML5","Javascript","REACT JS","Angular","CSS/Less/SASS"]},{"name":"Server-side Development","keywords":["C#","Node.js","NOSQL databases"]},{"name":"Agile practices","keywords":["Responsive development practices and processes","Continuous Delivery","Test automation","Kanban"]}],"education":[{"institution":"UERGS","area":"Digital Systems Engineering","studyType":"Bachelor","startDate":"2003-02-01","endDate":"2008-12-01"}]}')}},[[13,1,2]]]);
//# sourceMappingURL=main.ed59db0a.chunk.js.map