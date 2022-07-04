import React, { useEffect } from 'react'
import './bot.scss'
import $ from 'jquery'

const Bot = () => {
  var msgerForm = $(".msger-inputarea");
  var msgerBtn = $(".msger-send-btn");
  var msgerInput = $(".msger-input");
  var msgerChat = $(".msger-chat");
  var session = JSON.parse(localStorage.getItem('session'))

  var BOT_MSGS = [
    "¡Hola! ¿Qué tal estás?",
    "Ohh, no logro entender lo que tratas de decirme, ¡disculpa!",
    "Me gusta jugar videojuegos, pero... ¡no sé cómo jugarlos!",
    "Disculpa si mis respuestas no son relevantes. :)",
    "¡Qué sueño tengo! :("
  ];
  var BOT_IMG = "https://repository-images.githubusercontent.com/423180394/51fb7f2b-0bb0-4c3e-a06c-840fa3a910eb";
  var PERSON_IMG = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt-F5GQg8qB2fWquF1ltQvAT2Z8Dv5pJLb9w&usqp=CAU";
  var BOT_NAME = "Educabot";
  var PERSON_NAME = session.name;

  useEffect(() => {
    msgerBtn.on('click', sendMessage())
  }, [])
  function sendMessage() {
    let msgText = msgerInput.val();
    console.log(msgText)
    if (!msgText) return;

    appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
    msgerInput.val("");

    BotResponse();
  }

  function appendMessage(name, img, side, text) {
    //   Simple solution for small apps
    const msgHTML = `
      <div class="msg ${side}-msg">
        <div class="msg-img" style="background-image: url(${img})"></div>
  
        <div class="msg-bubble">
          <div class="msg-info">
            <div class="msg-info-name">${name}</div>
            <div class="msg-info-time">${formatDate(new Date())}</div>
          </div>
  
          <div class="msg-text">${text}</div>
        </div>
      </div>
    `;

    msgerChat.before(msgHTML);
    msgerChat.scrollTop += 500;
  }

  function BotResponse() {
    let r = random(0, BOT_MSGS.length - 1);
    let msgText = BOT_MSGS[r];
    let delay = msgText.split(" ").length * 100;

    setTimeout(() => {
      appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
    }, delay);
  }

  // Utils
  function formatDate(date) {
    let h = "0" + date.getHours();
    let m = "0" + date.getMinutes();

    return `${h.slice(-2)}:${m.slice(-2)}`;
  }

  function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  return (
    <section className="msger">
      <header className="msger-header">
        <div className="msger-header-title">
          <i className="fas fa-comment-alt"></i> Educabot
        </div>
        <div className="msger-header-options">
          <span><i className="fas fa-cog"></i></span>
        </div>
      </header>

      <main className="msger-chat">
        <div className="msg left-msg">
          <div
            className="msg-img"
            style={{ backgroundImage: 'url(https://repository-images.githubusercontent.com/423180394/51fb7f2b-0bb0-4c3e-a06c-840fa3a910eb)' }}
          ></div>

          <div className="msg-bubble">
            <div className="msg-info">
              <div className="msg-info-name">BOT</div>
              <div className="msg-info-time">12:45</div>
            </div>

            <div className="msg-text">
              ¡Hola, bienvenido a Educabot! 😄
            </div>
          </div>
        </div>

        <div className="msg right-msg">
          <div
            className="msg-img"
            style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt-F5GQg8qB2fWquF1ltQvAT2Z8Dv5pJLb9w&usqp=CAU)' }}
          ></div>

          <div className="msg-bubble">
            <div className="msg-info">
              <div className="msg-info-name">Nombre</div>
              <div className="msg-info-time">Fecha/hora</div>
            </div>

            <div className="msg-text">
              Mensaje de usuario
            </div>
          </div>
        </div>
      </main>

      <form className="msger-inputarea">
        <input type="text" className="msger-input" placeholder="Enter your message..." />
        <button type="button" className="msger-send-btn">Send</button>
      </form>
    </section>
  )
}

export default Bot