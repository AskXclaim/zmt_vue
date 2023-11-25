const authTabs = Object.freeze({
    Login: 'Login',
    Register: 'Register'
});
const alertTypes = Object.freeze({
    RegistrationAlert: "RegistrationAlert",
    LoginAlert: "LoginAlert"
});

const registrationStages = Object.freeze({
    NotStarted: "NotStarted",
    Processing: "Processing",
    ProcessingCompleted: "ProcessingCompleted"
});

const registrationAlertMsg = Object.freeze({
    BeingProcessed: "Your registration is processing...",
    CompletedProcessing: "Your registration is complete"
});
export default authTabs;
export {alertTypes, registrationStages, registrationAlertMsg};
