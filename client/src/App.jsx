import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import agentImg from './assets/react.svg'

const SpeakerIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-volume-up" viewBox="0 0 16 16">
      <path d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z"/>
      <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z"/>
      <path d="M10.025 8a4.5 4.5 0 0 1-1.318 3.182L8 10.475A3.5 3.5 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.5 4.5 0 0 1 10.025 8M7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11"/>
    </svg>
  )
}

const YesOrNoBtns = (props) => {
  return (
    <div className="main-chat--msg-sender chat-buttons">
      <button className="main-chat--button" onClick={() => {
        props.setAnswers({ ...answers, a1: 'Yes', })
      }}>Yes</button>
      <button className="main-chat--button" onClick={() => {
        props.setAnswers({ ...answers, a1: 'No',})
      }}>No</button>
    </div>
  )
}

const AgentThumb = (props) => {
  return (
    <div className="main-chat--msg-sender">
      <img src={agentImg} alt="Agent" />
    </div>
  )
}

const userBlocks = [
  { user: "User 1", answer: "Yes" },
  { user: "User 2", answer: "Yes" },
  { user: "User 3", answer: "Yes" },
];
const blocks = {
  agentBlock1:[
    { chat: "Hi &#128075;", order: 1}, 
    { chat: "I'm Greg from Vocal Seek.", order: 2},
    { chat: "Quick question right now if a potential customer says hey Google, hey Alexa, or hey Siri and asks I am looking for (your type of business) near me are you showing up? &#128512;", order: 3},
    { chat: "buttons", order: 4 }
  ],
  agentBlock2:[
    { chat: "Okay, let me ask you two quick questions.", order: 1},
    { chat: "Do you own a business? Tap Yes or No.", order: 2},
    { chat: "buttons", order: 3 }
  ]
}

function App() {
  const [viteLogo, setViteLogo] = useState(null);
  const [answers, setAnswers] = useState({
    a1: "Yes",
    a2: "Yes",
    a3: "Yes",
    telephone: 6098330703,
  });

  const date = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Scroll to bottom of chat
  const scrollToBottom = () => {
    // Get page position of lowest chat element

    // scroll to bottom of chat
    
  }

  useEffect(() => {
    //scroll window to below header
    const headerHeight = document.querySelector('.main-header').offsetHeight
    window.scrollTo(0, headerHeight)

  }, []);

  return (
    <div id="app">

      <header className="main-header">
        <div className="header-content">
          {viteLogo ? <img className="navbar-logo" src={viteLogo} /> :
          <div className="navbar-brand">
            <SpeakerIcon />            
            <span>Voice Search Optimization</span>  
          </div>}
        </div>
      </header>

      <main id="main" className="main-body">
        <div className="main-body--title">
          <p className="main-body--warning">
            <span className="warning-text">Warning:</span> Enrollment <span>closes on {date} at midnight.</span>
          </p>
          <h2 id="main-description">Unlock This secret feature to be one of the top local companies for your services on Google, Alexa, and Apple Siri.</h2>
        </div>

        <div className="main-body--description-online">
          <div className="main-body--online-title">
            <div id="online-indicator"></div>
            <span>" Greg is Online. "</span>
          </div>
        </div>

        <div className="main-chat">
          <div className="agent-block">
            <div className="agent-thumb">
              <img src={agentImg} alt="agent" />
            </div>
            <div className="agent-chat">
              <div className="main-chat--msg-sender"> Hi &#128075;</div>
              <div className="main-chat--msg-sender"> I'm Greg from Vocal Seek.</div>
              <div className="main-chat--msg-sender"> Quick question right now if a potential customer says hey Google, hey Alexa, or hey Siri and asks I am looking for (your type of business) near me are you showing up? &#128512;</div>
              <YesOrNoBtns 
                setAnswers={setAnswers}
                answers={answers}
              />
              {/* <div className="main-chat--msg-sender chat-buttons">
                <button className="main-chat--button" onClick={() => {
                  setAnswers({ ...answers, a1: 'Yes', })
                }}>Yes</button>
                <button className="main-chat--button" onClick={() => {
                  setAnswers({ ...answers, a1: 'No',})
                }}>No</button>
              </div> */}
            </div>
          </div>
          
          <div className="user-block">
            <div className="user-chat">
              <div className="main-chat--msg-user">{answers?.a1 && answers?.a1}</div>
            </div>
          </div>
                
          <div className="agent-block">
            <div className="agent-thumb">
              <img src={agentImg} alt="agent" />
            </div>
            <div className="agent-chat">
              <div className="main-chat--msg-sender">Okay, let me ask you two quick questions.</div>
              <div className="main-chat--msg-sender">Do you own a business? Tap Yes or No.</div>
              <div className="main-chat--msg-sender chat-buttons">
                <button className="main-chat--button" onClick={() => {
                  setAnswers({ ...answers, a2: 'Yes', })
                }}>Yes</button>
                <button className="main-chat--button" onClick={() => {
                  setAnswers({ ...answers, a2: 'No',})
                }}>No</button>
              </div>
            </div>
          </div>
          
          <div className="user-block">
            <div className="user-chat">
              <div className="main-chat--msg-user">{answers?.a2 && answers?.a2}</div>
            </div>
          </div>
          
          <div className="agent-block">
            <div className="agent-chat">
              <div className="main-chat--msg-sender">Are you able to handle more local calls from potential customers?</div>
              <div className="main-chat--msg-sender chat-buttons">
                <button className="main-chat--button" onClick={() => {
                  setAnswers({ ...answers, a2: 'Yes', })
                }}>Yes</button>
                <button className="main-chat--button" onClick={() => {
                  setAnswers({ ...answers, a2: 'No',})
                }}>No</button>
              </div>
            </div>
          </div>

          <div className="user-block">
            <div className="user-chat">
              <div className="main-chat--msg-user">{answers?.a3 && answers?.a3}</div>
            </div>
          </div>
          
          <div className="agent-block">
            <div className="agent-chat">
              <div className="main-chat--msg-sender">&#127881; Congratulations! &#127873;</div>
              <div className="main-chat--msg-sender">Your're Pre-Qualified for the early access to the VOICE SEARCH System.</div>
              <div className="main-chat--msg-sender">This system allows you to register your business on Google, Alexa, and Siri so you can recieve calls when customers are searching.</div>
              <div className="main-chat--msg-sender">Tap This Number below as we are only registering 5 businesses in your local area.</div>
            </div>
          </div>

          <div className="user-block">
            <div className="user-chat">
              <div className="main-chat--msg-user">
                <a className="main-chat--msg-user-telephone" href="tel:(609) 833-0703">(609) 833-0703</a>
              </div>
            </div>
          </div>

        </div>

      </main>
    </div>
  )
}

export default App
