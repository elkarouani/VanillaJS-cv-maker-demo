// import the client interface
import Client from "./Client";
// import the experience interface
import Experience from "./Experience";
// import the formation interface
import Formation from "./Formation";

// Description: This class is for organising the business logic for the app using also 
//              the client interface and the other interfaces to manage its content by changes sent from the user

export default class Store {
    // a constructor for the store class
    constructor(private _client: Client) {
        // intialize the client instance
        this._client = {
            name: "",
            email: "",
            website: "",
            phone: "",
            address: "",
            experiences: [],
            skills: [],
            formations: [],
            hobbies: []
        };
    }

    // a getter for the client instance
    get client(): Client {
        return this._client;
    }

    // a setter for the client instance
    set client(data) {
        this._client = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            address: data.address,
            experiences: data.experiences,
            skills: data.skills,
            formations: data.formations,
            hobbies: data.hobbies
        };
    }

    // method for adding name to the client instance
    SetName(name: string): void {
        this._client.name = name;
    }

    // method for adding email to the client instance
    SetEmail(email: string): void {
        this._client.email = email;
    }

    // method for adding website to the client instance
    SetWebsite(website: string): void {
        this._client.website = website;
    }

    // method for adding phone number to the client instance
    SetPhone(phone: string): void {
        this._client.phone = phone;
    }

    // method for adding address to the client instance
    SetAddress(address: string): void {
        this._client.address = address;
    }

    // method for adding skill to the client instance
    AddSkill(skill: string): void {
        this._client.skills.push(skill);
    }

    // method for removing a skill from the client instance
    RemoveSkill(selected_skill: string): void {
        this._client.skills = this._client.skills.filter(skill => { if(skill != selected_skill) { return skill; }})
    }

    // method for adding a hobbie to the client instance
    AddHobbie(hobbie: string): void {
        this._client.hobbies.push(hobbie);
    }

    // method for removing a hobbie from the client instance
    RemoveHobbie(selected_hobbie: string): void {
        this._client.hobbies = this._client.hobbies.filter(hobbie => { if(hobbie != selected_hobbie) { return hobbie; }})
    }

    // method for adding an experience to the client instance
    AddExperience(experience: Experience): void {
        this._client.experiences.push({
            place: experience.place,
            date: experience.date,
            center: experience.center
        })
    }

    // method for removing en experience to the client instance
    RemoveExperience(selected_experience: Experience): void {
        this._client.experiences = this._client.experiences.filter(experience => {
            if(
                experience.place != selected_experience.place && 
                experience.date != selected_experience.date && 
                experience.center != selected_experience.center
            ) {
                return experience;
            }
        })
    }

    // method for adding a formation to the client instance
    AddFormation(formation: Formation): void {
        this._client.formations.push({
            type: formation.type,
            date: formation.date,
            place: formation.place
        })
    }

    // method for removing a formation from the client instance
    RemoveFormation(selected_formation: Formation): void {
        this._client.formations = this._client.formations.filter(formation => {
            if(
                formation.type != selected_formation.type &&
                formation.date != selected_formation.date &&
                formation.place != selected_formation.place
            ) {
                return formation;
            }
        })
    }
}