import nameOf from "@/Utility/utility";
import {Form as VeeForm, Field as VeeField, defineRule, ErrorMessage} from "vee-validate";
import {
    required, min, max, alpha_spaces as alphaSpaces, email,
    min_value as minValue, max_value as maxValue, confirmed,
    not_one_of as excluded
} from "@vee-validate/rules";

export default {
    install(app) {
        app.component(nameOf(VeeForm, "Vee"), VeeForm);
        app.component(nameOf(VeeField, "Vee"), VeeField);
        app.component(nameOf(ErrorMessage), ErrorMessage);
        // console.log(nameOf(excluded));
        defineRule(nameOf(required), required);
        defineRule(nameOf(min), min);
        defineRule(nameOf(max), max);
        defineRule(nameOf(alphaSpaces), alphaSpaces);
        defineRule(nameOf(email), email);
        defineRule(nameOf(minValue), minValue);
        defineRule(nameOf(maxValue), maxValue);
        defineRule(nameOf(confirmed), confirmed);
        defineRule("excluded", excluded);
    }
}