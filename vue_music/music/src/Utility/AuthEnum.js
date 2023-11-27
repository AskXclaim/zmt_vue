const authTabs = Object.freeze({
    Login: 'Login',
    Register: 'Register'
});
const alertTypes = Object.freeze({
    RegistrationAlert: "RegistrationAlert",
    LoginAlert: "LoginAlert"
});

const authProcessStages = Object.freeze({
    NotStarted: "NotStarted",
    Processing: "Processing",
    ProcessingCompleted: "ProcessingCompleted"
});

const authAlertMsg = Object.freeze({
    Empty: "",
    RegistrationInProcess: "Your registration is processing...",
    RegistrationComplete: "Your registration is complete",
    LoginInProcess: "Login in process...",
    LoginComplete: "Login completed",
});
export default authTabs;
export {alertTypes, authProcessStages, authAlertMsg};
