const form = document.querySelector(".checkform");
const namefield = document.querySelector(".NameField");
const subject = document.querySelector(".SubjectField");
const email = document.querySelector(".EmailField");
const messagefield = document.querySelector(".messagefield");
const submitbutton = document.querySelector(".feedbacksend");
const msgbox = document.querySelector(".msg");
const validated = document.querySelector(".validated");
const fnmsgbox = document.querySelector(".fnmsg");
const emsgbox = document.querySelector(".emsg");
const smsgbox = document.querySelector(".sumsg");

let fnmsg = "";
let emsg = "";
let smsg = "";
let msg = "";

function verifyEmail(email) {
  if (/\S+@\S+\.\S+/.test(email)) {
    return true;
  }
  return false;
}

function checklength(string, len) {
  if (string.length > len) {
    return true;
  } else {
    return false;
  }
}

const validateForm = () => {
  msgbox.innerHTML = "";
  msg = "";
  fnmsgbox.innerHTML = "";
  fnmsg = "";
  emsgbox.innerHTML = "";
  emsg = "";
  smsgbox.innerHTML = "";
  smsg = "";

  validated.innerHTML = "";
  validationFlag = true;
  event.preventDefault();

  if (namefield.value === "") {
    fnmsg += "Name is required! <br>";
    validationFlag = false;
  } else if (namefield.value.length <= 2) {
    fnmsg += "Name is too short! <br>";
    validationFlag = false;
  }

  if (!email.value) {
    emsg += "Email is required! <br>";
    validationFlag = false;
  } else if (!verifyEmail(email.value)) {
    emsg += "Please enter a valid email! <br>";
    validationFlag = false;
  }

  if (!checklength(subject.value, 10)) {
    smsg += "Subject must be minimum 10 in length! <br>";
    validationFlag = false;
  }

  if (!checklength(messagefield.value, 25)) {
    msg += "Message must be minimum 25 in length! <br>";
    validationFlag = false;
  }

  fnmsgbox.innerHTML = fnmsg;
  emsgbox.innerHTML = emsg;
  smsgbox.innerHTML = smsg;
  msgbox.innerHTML = msg;

  if (validationFlag === true) {
    validated.innerHTML = "Success, form has been sent";
  }
};

form.addEventListener("submit", validateForm);
