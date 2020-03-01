// Description: This class is for the unit tests that interact 
//              with the user actions and check the changes from the result class instance
export default class Test {
    // a constructor for the store class
    constructor(store) {
        this._message = "";
        this._errors_exists = false;
        this._main_store = store;
    }
    // method for getting the test operation status
    getstatus() {
        return { message: this._message, errors_exists: this._errors_exists };
    }
    // method for testing the client's name adding event
    TestSetName(name_input) {
        // set a default value to the name input
        name_input.value = "test";
        // invoke the event from the name input
        name_input.dispatchEvent(new Event("change"));
        // print on the console that the test is completed
        console.log("Testing Set name method completed");
        // add the state of was the name of the client instance had the default value or not
        this._errors_exists = this._main_store.client.name != "test";
    }
    // method for testing the client's email adding event
    TestSetEmail(email_input) {
        // set a default value to the email input
        email_input.value = "test";
        // invoke the event from the email input
        email_input.dispatchEvent(new Event("change"));
        // print on the console that the test is completed
        console.log("Testing Set email method completed");
        // add the state of was the email of the client instance had the default value or not
        this._errors_exists = this._main_store.client.email != "test";
    }
    // method for testing the client's website adding event
    TestSetWebsite(website_input) {
        // set a default value to the website input
        website_input.value = "test";
        // invoke the event from the website input
        website_input.dispatchEvent(new Event("change"));
        // print on the console that the test is completed
        console.log("Testing Set website method completed");
        // add the state of was the website of the client instance had the default value or not
        this._errors_exists = this._main_store.client.website != "test";
    }
    // method for testing the client's phone number adding event
    TestSetPhone(phone_input) {
        // set a default value to the phone number input
        phone_input.value = "test";
        // invoke the event from the phone number input
        phone_input.dispatchEvent(new Event("change"));
        // print on the console that the test is completed
        console.log("Testing Set phone method completed");
        // add the state of was the phone number of the client instance had the default value or not
        this._errors_exists = this._main_store.client.phone != "test";
    }
    // method for testing the client's address adding event
    TestSetAddress(address_input) {
        // set a default value to the address input
        address_input.value = "test";
        // invoke the event from the address input
        address_input.dispatchEvent(new Event("change"));
        // print on the console that the test is completed
        console.log("Testing Set address method completed");
        // add the state of was the address of the client instance had the default value or not
        this._errors_exists = this._main_store.client.address != "test";
    }
    // method for testing the client's experience adding event
    TestAddExperience(experience_place_input, experience_date_input, experience_center_input, experience_add_action) {
        // set a default value to the experience place input
        experience_place_input.value = "test";
        // set a default value to the experience date input
        experience_date_input.value = "test";
        // set a default value to the experience center input
        experience_center_input.value = "test";
        // invoke the event from the adding experience button
        experience_add_action.dispatchEvent(new Event("click"));
        // print on the console that the test is completed
        console.log("Testing add experience method completed");
        // add the state of was the experience of the client instance had the default values or not
        this._errors_exists = (this._main_store.client.experiences[0].place != "test" &&
            this._main_store.client.experiences[0].date != "test" &&
            this._main_store.client.experiences[0].center != "test");
    }
    // method for testing the client's experience removing event
    TestRemoveExperience(experience_remove_action) {
        // invoke the event from the removing experience button
        experience_remove_action.dispatchEvent(new Event("click"));
        // print on the console that the test is completed
        console.log("Testing remove experience method completed");
        // add the state of was the experience of the client instance has removed or not
        this._errors_exists = this._main_store.client.experiences.length != 0;
    }
    // method for testing the client's formation adding event
    TestAddFormation(formation_type_input, formation_date_input, formation_place_input, formation_add_action) {
        // set a default value to the formation type input
        formation_type_input.value = "test";
        // set a default value to the formation date input
        formation_date_input.value = "test";
        // set a default value to the formation place input
        formation_place_input.value = "test";
        // invoke the event from the adding formation button
        formation_add_action.dispatchEvent(new Event("click"));
        // print on the console that the test is completed
        console.log("Testing add formation method completed");
        // add the state of was the formation of the client instance had the default values or not
        this._errors_exists = (this._main_store.client.formations[0].type != "test" &&
            this._main_store.client.formations[0].date != "test" &&
            this._main_store.client.formations[0].place != "test");
    }
    // method for testing the client's formation removing event
    TestRemoveFormation(formation_remove_action) {
        // invoke the event from the removing formation button
        formation_remove_action.dispatchEvent(new Event("click"));
        // print on the console that the test is completed
        console.log("Testing remove formation method completed");
        // add the state of was the formation of the client instance has removed or not
        this._errors_exists = this._main_store.client.formations.length != 0;
    }
    // method for testing the client's skill adding event
    TestAddSkill(skill_input) {
        // set a default value to the skill input
        skill_input.value = "test";
        // invoke the event from the skill input
        skill_input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
        // print on the console that the test is completed
        console.log("Testing add skill method completed");
        // add the state of was the skill of the client instance had the default value or not
        this._errors_exists = this._main_store.client.skills[0] != 'test';
    }
    // method for testing the client's hobbie adding event
    TestAddHobbie(hobbie_input) {
        // set a default value to the hobbie input
        hobbie_input.value = "test";
        // invoke the event from the hobbie input
        hobbie_input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
        // print on the console that the test is completed
        console.log("Testing add hobbie method completed");
        // add the state of was the hobbie of the client instance had the default value or not
        this._errors_exists = this._main_store.client.hobbies[0] == 'test';
    }
    // method for testing the client's skill removing event
    TestRemoveskill(skill_remove_action) {
        // invoke the event from the removing skill button
        skill_remove_action.dispatchEvent(new Event("click"));
        // print on the console that the test is completed
        console.log("Testing remove skill method completed");
        // add the state of was the skill of the client instance has removed or not
        this._errors_exists = this._main_store.client.skills.length != 0;
    }
    // method for testing the client's hobbie removing event
    TestRemoveHobbie(hobbie_remove_action) {
        // invoke the event from the removing hobbie button
        hobbie_remove_action.dispatchEvent(new Event("click"));
        // print on the console that the test is completed
        console.log("Testing remove hobbie method completed");
        // add the state of was the hobbie of the client instance has removed or not
        this._errors_exists = this._main_store.client.hobbies.length != 0;
    }
    // method for declaring the end of the unit tests without errors
    EndOperation() {
        this._message = "The test operation ended successfully";
    }
    // method for declaring the end of the unit tests with errors
    BreakOperation() {
        this._message = "The test operation ended with errors";
    }
}
