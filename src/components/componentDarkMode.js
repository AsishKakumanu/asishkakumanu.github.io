import Darkmode from "darkmode-js";

var options = {
  bottom: "15px", // default: '32px'
  right: "unset", // default: '32px'
  left: "15px", // default: 'unset'
  time: "0.4s", // default: '0.3s'
  mixColor: "#fff", // default: '#fff'
  backgroundColor: "#fff", // default: '#fff'
  buttonColorDark: "#100f2c", // default: '#100f2c'
  buttonColorLight: "#fff", // default: '#fff'
  saveInCookies: true, // default: true,
  label: "🔆", // default: ''
  autoMatchOsTheme: true, // default: true
};

const ComponentDarkMode = new Darkmode(options).showWidget();

export default ComponentDarkMode;
