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
    BeingProcessed: "Your registration is processing...",
    CompletedProcessing: "Your registration is complete"
});
export default authTabs;
export {alertTypes, authProcessStages, authAlertMsg};
