import React from 'react';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Info from '../components/Info';
import About from '../components/About';
import Certificate from '../components/Certificate';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Skills from '../components/Skills';

const App = () => {
    return (
        <Main>
            <Sidebar>
                <About/>
            </Sidebar>
            <Info>
                <Education/>
                <Experience/>
                <Certificate/>
                <Skills/>
            </Info>
        </Main>
    );
}


export default App;