let back_button = document.querySelector(".back-btn");
let chat_thread = document.querySelector(".chat-thread");

let chat_window = document.querySelector(".chat-window");
let chat_window_message = document.querySelector(".chat-window-message");

let sideSwitch = false;

let chat_messages = [
  {
    side: "left-message",
    message:
      "Hey Stijn! While I was traveling I again found myself in the situation where I wanted to go to another co-working space that was empty again... So annoying. Can’t wait for your app to come out!",
    time: "12:59",
  },
  {
    side: "right-message",
    message: "Hey Dylan!",
    time: "13:11",
  },
  {
    side: "right-message",
    message: "Nomad Spot should by ready to be used by 14/06 this year!",
    time: "13:12",
  },
  {
    side: "left-message",
    message:
      "That sounds great! No more wasting money on empty co-working spaces and hostels. I will for sure use it!",
    time: "13:20",
  },
  {
    side: "right-message",
    message: "Hahaha yeah, it will definitely help with that!",
    time: "13:57",
  },
  {
    side: "right-message",
    message: "Btw, could we meet up so you could test the design of the app?",
    time: "13:57",
  },
  {
    side: "left-message",
    message: "Sure! When are you free?",
    time: "13:59",
  },
  {
    side: "left-message",
    message: "I have some spare time tomorrow evening :)",
    time: "13:59",
  },
  {
    side: "right-message",
    message: "Sounds great! I will send you the Zoom link in a bit.",
    time: "14:08",
  },
  {
    side: "left-message",
    message: "Received the link via email",
    time: "14:23",
  },
  {
    side: "left-message",
    message: "Will be there. See ya tomorrow!",
    time: "14:24",
  },
];

// ============ Chat back button ============ //

back_button.addEventListener("click", function (e) {
  history.back();
});

// ============ Load chat ============ //

window.addEventListener("load", function (e) {
  for (let i = 0; i < chat_messages.length; i++) {
    const messageEl = document.createElement("li");
    messageEl.classList.add("chat-box", chat_messages[i].side);
    const messageTimeEl = document.createElement("p");
    messageTimeEl.classList.add("chat-time");
    //   const time = new Date();
    messageTimeEl.innerText = chat_messages[i].time;
    const messageInput = chat_messages[i].message;
    messageEl.innerText = messageInput;
    messageEl.appendChild(messageTimeEl);
    chat_thread.appendChild(messageEl);
  }

  chat_thread.scrollTop = chat_thread.scrollHeight;
});

// ============ Send message ============ //

chat_window.addEventListener("submit", function (e) {
  e.preventDefault();
  const messageEl = document.createElement("li");

  if (sideSwitch == true) {
    messageEl.classList.add("chat-box", "left-message");
    sideSwitch = false;
  } else {
    messageEl.classList.add("chat-box", "right-message");
    // sideSwitch = true;
  }

  const messageTimeEl = document.createElement("p");
  messageTimeEl.classList.add("chat-time");
  const time = new Date();
  messageTimeEl.innerText = time.getHours() + ":" + time.getMinutes();
  const messageInput = chat_window_message;
  messageEl.innerText = messageInput.value;
  messageEl.appendChild(messageTimeEl);
  chat_thread.appendChild(messageEl);
  messageInput.value = "";

  chat_thread.scrollTop = chat_thread.scrollHeight;
});

// const messageEl = document.createElement("li");
// const messageTimeEl = document.createElement("span");
// const time = new Date();
// messageTimeEl.innerText = time.getHours() + ":" + time.getMinutes();
// const messageInput = document.querySelector(".chat-window-message");
// messageEl.innerText = messageInput.value;
// messageEl.appendChild(messageTimeEl);
// document.querySelector(".chat-thread").appendChild(messageEl);
// messageInput.value = "";

window.addEventListener("keydown", onKeyboardEvent);
var keycode = {
  F2: 113,
};

function onKeyboardEvent(event) {
  switch (event.keyCode) {
    case keycode.F2:
      sideSwitch = true;
      break;
  }
}
