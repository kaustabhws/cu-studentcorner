import React, { useState } from 'react';
import './Csit.css';
import MIDPF22 from './First/MIDPF22';
import ENDPF21 from './First/ENDPF21';
import ENDPF22 from './First/ENDPF22';
import MIDCSA22 from './First/MIDCSA22';
import ENDCSA21 from './First/ENDCSA21';
import ENDCSA22 from './First/ENDCSA22';
import MIDCNIT22 from './First/MIDCNIT22';
import ENDCNIT22 from './First/ENDCNIT22';


export default function Csit1() {
  const [selectedSubject, setSelectedSubject] = useState(null);

  const handleButtonClick = (subject) => {
    if (selectedSubject === subject) {
      setSelectedSubject(null);
    } else {
      setSelectedSubject(subject);
    }
  };

  const handleBackButton = () => {
    setSelectedSubject(null);
  };
  

  if (selectedSubject === 'MIDPF22') {
    return (
      <>
        <div>
            <button className='Btns' onClick={handleBackButton}>
              <div className='sign'>
                <svg viewBox='0 0 512 512'>
                  <polygon points='352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256' />
                </svg>
              </div>
              <div className='text'>Go back</div>
            </button>
          </div>
        <MIDPF22 />
      </>
    );
  }
  if (selectedSubject === 'ENDPF21') {
    return (
      <>
        <div>
            <button className='Btns' onClick={handleBackButton}>
              <div className='sign'>
                <svg viewBox='0 0 512 512'>
                  <polygon points='352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256' />
                </svg>
              </div>
              <div className='text'>Go back</div>
            </button>
          </div>
        <ENDPF21 />
      </>
    );
  }
  if (selectedSubject === 'ENDPF22') {
    return (
      <>
        <div>
            <button className='Btns' onClick={handleBackButton}>
              <div className='sign'>
                <svg viewBox='0 0 512 512'>
                  <polygon points='352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256' />
                </svg>
              </div>
              <div className='text'>Go back</div>
            </button>
          </div>
        <ENDPF22 />
      </>
    );
  }
  if (selectedSubject === 'MIDCSA22') {
    return (
      <>
        <div>
            <button className='Btns' onClick={handleBackButton}>
              <div className='sign'>
                <svg viewBox='0 0 512 512'>
                  <polygon points='352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256' />
                </svg>
              </div>
              <div className='text'>Go back</div>
            </button>
          </div>
        <MIDCSA22 />
      </>
    );
  }
  if (selectedSubject === 'ENDCSA21') {
    return (
      <>
        <div>
            <button className='Btns' onClick={handleBackButton}>
              <div className='sign'>
                <svg viewBox='0 0 512 512'>
                  <polygon points='352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256' />
                </svg>
              </div>
              <div className='text'>Go back</div>
            </button>
          </div>
        <ENDCSA21 />
      </>
    );
  }
  if (selectedSubject === 'ENDCSA22') {
    return (
      <>
        <div>
            <button className='Btns' onClick={handleBackButton}>
              <div className='sign'>
                <svg viewBox='0 0 512 512'>
                  <polygon points='352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256' />
                </svg>
              </div>
              <div className='text'>Go back</div>
            </button>
          </div>
        <ENDCSA22 />
      </>
    );
  }
  if (selectedSubject === 'MIDCNIT22') {
    return (
      <>
        <div>
            <button className='Btns' onClick={handleBackButton}>
              <div className='sign'>
                <svg viewBox='0 0 512 512'>
                  <polygon points='352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256' />
                </svg>
              </div>
              <div className='text'>Go back</div>
            </button>
          </div>
        <MIDCNIT22 />
      </>
    );
  }
  if (selectedSubject === 'ENDCNIT22') {
    return (
      <>
        <div>
            <button className='Btns' onClick={handleBackButton}>
              <div className='sign'>
                <svg viewBox='0 0 512 512'>
                  <polygon points='352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256' />
                </svg>
              </div>
              <div className='text'>Go back</div>
            </button>
          </div>
        <ENDCNIT22 />
      </>
    );
  }


  return (
    <>
      <div className="w3-col m6 w3-center card-wrapper">
        <div className="card">
          <div className="links">
            <h3>SELECT Subject</h3>
            <hr />
            <button
              className="linkBtn"
              onClick={() => handleButtonClick('Programming Fundamentals Using C/C++')}
            >
              Programming Fundamentals Using C/C++
            </button>
            {selectedSubject === 'Programming Fundamentals Using C/C++' && (
              <div className="buttonContainer">
                <button className="secBtn" onClick={() => setSelectedSubject('MIDPF22')}>Midsem 2022</button>
                <button className="secBtn" onClick={() => setSelectedSubject('ENDPF21')}>Endsem 2021</button>
                <button className="secBtn" onClick={() => setSelectedSubject('ENDPF22')}>Endsem 2022</button>
              </div>
            )}
            <button
              className="linkBtn"
              onClick={() => handleButtonClick('Computer System Architecture')}
            >
              Computer System Architecture
            </button>
            {selectedSubject === 'Computer System Architecture' && (
              <div className="buttonContainer">
                <button className="secBtn" onClick={() => setSelectedSubject('MIDCSA22')}>Midsem 2022</button>
                <button className="secBtn" onClick={() => setSelectedSubject('ENDCSA21')}>Endsem 2021</button>
                <button className="secBtn" onClick={() => setSelectedSubject('ENDCSA22')}>Endsem 2022</button>
              </div>
            )}
            <button
              className="linkBtn"
              onClick={() => handleButtonClick('Computer Network and Internet Technology')}
            >
              Computer Network and Internet Technology
            </button>
            {selectedSubject === 'Computer Network and Internet Technology' && (
              <div className="buttonContainer">
                <button className="secBtn" onClick={() => setSelectedSubject('MIDCNIT22')}>Midsem 2022</button>
                <button className="secBtn" onClick={() => setSelectedSubject('ENDCNIT22')}>Endsem 2022</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
