import { FC } from 'react';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <h1>WELCOME TO MY BLOG PAGE</h1>
      <h4>Contents</h4>
      <ul>
      About Me
      My Education and Certificates
      </ul>
      <h3>Who am I?</h3>
     <img src="https://media.licdn.com/dms/image/D4E03AQFuVtnnYZuQuA/profile-displayphoto-shrink_800_800/0/1699713041904?e=1708560000&v=beta&t=LzbXp75a8w1abzuDffxDCZwiuWhbrFYbmvHk0Vnr1tk" alt=""width="300" height="300" />
     <p>Hello, I am Sena Nur Güngez. I'm 22 years old. I am from Ankara. I am studying at 2 universities. One of them is Konya Food and Agriculture University Computer Engineering Department. The other one is Anadolu University WEB Design and Coding Department.</p>
       <p>I like to participate in various events, academies and programs due to my interest in software.I am currently attending the <strong><em> Meram Software Academy React JS Course</em></strong>, which is held in cooperation with Meram Gelişim Academi and Üretken Akademi.I am also continuing the <strong><em>Coding & Tech Istanbul Software Startup Program</em></strong>.</p>
        <p>My motto is, that you never know where or when what will happen, keep living and laughing</p>
        <h3> My Education</h3>
        <p>Konya Food and Agriculture University </p>
        <p>Anadolu University</p>
        <h3>My connections </h3>
        <ul>
        <li><a href="https://github.com/senanurg">Github</a></li>
        <li><a href="https://www.linkedin.com/in/sena-nur-g%C3%BCngez-13817b297">Linkedin</a></li>
        </ul>
        <h5> My Calculator Project:</h5>
     <a href="https://github.com/senanurg/AkademiProjeleri.git">Click for project codes </a>
     <h5> Sudoku Interface Project</h5>

<a href="https://github.com/senanurg/AkademiProje2.git">Click for project codes </a>
    </div>
  );
};
