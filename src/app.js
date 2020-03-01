// import the store class
import Store from './classes/dist/Store.js';
// import the tests class
import Test from './classes/dist/Test.js';
// import the dom dispatcher function
import domDispatcher from './classes/dist/Dispatcher.js';

// get an instance of the store class
let main_store = new Store();

// Applying Dom Dispatcher for HtML elements with events listeners
domDispatcher([
	{
		// HTML Element : HTML Input with id 'app'
		// Event Description: If user type on [ctrl + shift], and set the correct password,
		// 					he will enter the secret test engine, and if he the user choose to start the test engine
		// 					all the tests methods will be lanched and the a result will be displayed
		name: 'app',
		settings: {
			event: {
				type: 'keydown',
				callback: (event) => {
					if (event.ctrlKey && event.shiftKey) {
						// initial the test engine
						let test_engine = new Test(main_store);

						// if the code is correct ...
						if (prompt('Enter the secret code', '') == 'secret') {
							// if the user choose to start the tests engine ...
							if (confirm('You want to start the test engine ?')) {
								// declare the start of the tests
								console.log('Starting now the test engine');
								// lanch the set name test
								test_engine.TestSetName(
									domDispatcher([
										{
											name: 'full_name'
										}
									])
								);
								// lanch the set email test
								test_engine.TestSetEmail(
									domDispatcher([
										{
											name: 'email_address'
										}
									])
								);
								// lanch the set website test
								test_engine.TestSetWebsite(
									domDispatcher([
										{
											name: 'website'
										}
									])
								);
								// lanch the set phone number test
								test_engine.TestSetPhone(
									domDispatcher([
										{
											name: 'phone_number'
										}
									])
								);
								// lanch the set address test
								test_engine.TestSetAddress(
									domDispatcher([
										{
											name: 'location_address'
										}
									])
								);
								// lanch the set experience test
								test_engine.TestAddExperience(
									domDispatcher([
										{
											name: 'experience_place'
										}
									]),
									domDispatcher([
										{
											name: 'experience_date'
										}
									]),
									domDispatcher([
										{
											name: 'experience_center'
										}
									]),
									domDispatcher([
										{
											name: 'experience_add'
										}
									])
								);
								// lanch the remove experience test
								test_engine.TestRemoveExperience(
									domDispatcher([
										{
											name: 'experience-item-remove'
										}
									])
								);
								// lanch the set formation test
								test_engine.TestAddFormation(
									domDispatcher([
										{
											name: 'formation_type'
										}
									]),
									domDispatcher([
										{
											name: 'formation_date'
										}
									]),
									domDispatcher([
										{
											name: 'formation_place'
										}
									]),
									domDispatcher([
										{
											name: 'formation_add'
										}
									])
								);
								// lanch the remove formation test
								test_engine.TestRemoveFormation(
									domDispatcher([
										{
											name: 'formation-item-remove'
										}
									])
								);
								// lanch the set skill test
								test_engine.TestAddSkill(
									domDispatcher([
										{
											name: 'skill'
										}
									])
								);
								// lanch the remove skill test
								test_engine.TestRemoveskill(
									domDispatcher([
										{
											name: 'CloseIcon'
										}
									])
								);
								// lanch the set hobbie test
								test_engine.TestAddHobbie(
									domDispatcher([
										{
											name: 'hobbie'
										}
									])
								);
								// lanch the remove hobbie test
								test_engine.TestRemoveHobbie(
									domDispatcher([
										{
											name: 'CloseIcon'
										}
									])
								);
							} else {
								// declare that the operation is cancelled
								alert('Operation cancelled');
							}
						} else {
							// declare for the wrong password
							alert('Wrong password');
						}

						// if there is errors on the status, end the operation with errors, else it ends without errors
						test_engine.getstatus().errors_exists
							? test_engine.BreakOperation()
							: test_engine.EndOperation();

						setTimeout(() => {
							// after a while, declare with the tests status
							alert(test_engine.getstatus().message);
						}, 3000);

						// initial the value of the inputs
						domDispatcher([
							{
								name: 'full_name',
								settings: {
									set_value: ' '
								}
							},
							{
								name: 'email_address',
								settings: {
									set_value: ' '
								}
							},
							{
								name: 'website',
								settings: {
									set_value: ' '
								}
							},
							{
								name: 'phone_number',
								settings: {
									set_value: ' '
								}
							},
							{
								name: 'location_address',
								settings: {
									set_value: ' '
								}
							}
						]);
					}
				}
			}
		}
	},
	{
		// HTML Element : HTML Input with id 'full_name'
		// Event Description: If user change on the name input, the new update of the name will be stored in the client instance
		name: 'full_name',
		settings: {
			event: {
				type: 'change',
				callback: (event) => {
					main_store.SetName(event.target.value);
				}
			}
		}
	},
	{
		// HTML Element : HTML Input with id 'email_address'
		// Event Description: If user change on the email input, the new update of the email will be stored in the client instance
		name: 'email_address',
		settings: {
			event: {
				type: 'change',
				callback: (event) => {
					main_store.SetEmail(event.target.value);
				}
			}
		}
	},
	{
		// HTML Element : HTML Input with id 'website'
		// Event Description: If user change on the website input, the new update of the website will be stored in the client instance
		name: 'website',
		settings: {
			event: {
				type: 'change',
				callback: (event) => {
					main_store.SetWebsite(event.target.value);
				}
			}
		}
	},
	{
		// HTML Element : HTML Input with id 'phone_number'
		// Event Description: If user change on the phone input, the new update of the phone will be stored in the client instance
		name: 'phone_number',
		settings: {
			event: {
				type: 'change',
				callback: (event) => {
					main_store.SetPhone(event.target.value);
				}
			}
		}
	},
	{
		// HTML Element : HTML Input with id 'location_address'
		// Event Description: If user change on the address input, the new update of the address will be stored in the client instance
		name: 'location_address',
		settings: {
			event: {
				type: 'change',
				callback: (event) => {
					main_store.SetAddress(event.target.value);
				}
			}
		}
	},
	{
		// HTML Element : HTML Input with id 'skill'
		// Event Description: If user insert a skill and type on enter, the inserted skill will be added in both of the html list and the client instance
		name: 'skill',
		settings: {
			event: {
				type: 'keydown',
				callback: (event) => {
					// if the typed key was 'enter' ...
					if (event.key === 'Enter') {
						domDispatcher([
							{
								// HTML Element : HTML Input with id 'skill-item'
								// Description: new div with the id 'skill-item' will be created on the "skills-list"
								name: 'div',
								settings: {
									new: true,
									id: 'skill-item',
									target: 'skills-list',
									classList: [ 'item' ]
								}
							},
							{
								// HTML Element : HTML Input with id 'CloseIcon'
								// Description: new span with the id 'CloseIcon' will be created on the "skill-item"
								// Event Description: If user click on this span, the selected skill will be removed from both the html list and the client instance
								name: 'span',
								settings: {
									new: true,
									id: 'CloseIcon',
									target: 'skill-item',
									last_father: true,
									classList: [ 'close-icon' ],
									innerText: 'X',
									brothers: [
										domDispatcher([
											{
												name: 'skill'
											}
										]).value
									],
									event: {
										type: 'click',
										callback: (event) => {
											// get the original item from the event target
											let original_item = event.target.parentNode;
											// get the original list from the original item html parent
											let original_list = original_item.parentNode;

											// remove the skill from the client instance
											main_store.RemoveSkill(original_item.innerText.substring(1));
											// remove the skill from the html list
											original_list.removeChild(original_item);
										}
									}
								}
							}
						]);

						// add the skill to the client instance
						main_store.AddSkill(
							domDispatcher([
								{
									name: 'skill'
								}
							]).value
						);
						// intialize the skill input
						domDispatcher([
							{
								name: 'skill',
								settings: {
									set_value: ' '
								}
							}
						]);
					}
				}
			}
		}
	},
	{
		// HTML Element : HTML Input with id 'hobbie'
		// Event Description: If user insert a hobbie and type on enter, the inserted hobbie will be added in both of the html list and the client instance
		name: 'hobbie',
		settings: {
			event: {
				type: 'keydown',
				callback: (event) => {
					// if the typed key was 'enter' ...
					if (event.key === 'Enter') {
						domDispatcher([
							{
								// HTML Element : HTML Input with id 'hobbie-item'
								// Description: new div with the id 'hobbie-item' will be created on the "hobbie-item"
								name: 'div',
								settings: {
									new: true,
									id: 'hobbie-item',
									target: 'hobbies-list',
									classList: [ 'item' ]
								}
							},
							{
								// HTML Element : HTML Input with id 'CloseIcon'
								// Description: new span with the id 'CloseIcon' will be created on the "hobbie-item"
								// Event Description: If user click on this span, the selected hobbie will be removed from both the html list and the client instance
								name: 'span',
								settings: {
									new: true,
									id: 'CloseIcon',
									target: 'hobbie-item',
									last_father: true,
									classList: [ 'close-icon' ],
									innerText: 'X',
									brothers: [
										domDispatcher([
											{
												name: 'hobbie'
											}
										]).value
									],
									event: {
										type: 'click',
										callback: (event) => {
											// get the original item from the event target
											let original_item = event.target.parentNode;
											// get the original list from the original item html parent
											let original_list = original_item.parentNode;

											// remove the hobbie from the client instance
											main_store.RemoveHobbie(original_item.innerText.substring(1));
											// remove the hobbie from the html list
											original_list.removeChild(original_item);
										}
									}
								}
							}
						]);

						// add the hobbie to the client instance
						main_store.AddHobbie(
							domDispatcher([
								{
									name: 'hobbie'
								}
							]).value
						);
						// intialize the hobbie input
						domDispatcher([
							{
								name: 'hobbie',
								settings: {
									set_value: ' '
								}
							}
						]);
					}
				}
			}
		}
	},
	{
		// HTML Element : HTML Input with id 'experience_add'
		// Event Description: If user click on the experience adding button, the experince will be added in both of the html table and the client instance
		name: 'experience_add',
		settings: {
			event: {
				type: 'click',
				callback: (event) => {
					domDispatcher([
						{
							// HTML Element : HTML Input with id 'experience-item'
							// Description: new div with the id 'experience-item' will be created on the "experiences_table"
							name: 'tr',
							settings: {
								new: true,
								id: 'experience-item',
								target: 'experiences_table'
							}
						},
						{
							// HTML Element : HTML Input with id 'experience-item-place'
							// Description: new div with the id 'experience-item-place' will be created on the "experience-item"
							name: 'td',
							settings: {
								new: true,
								id: 'experience-item-place',
								target: 'experience-item',
								last_father: true,
								innerText: domDispatcher([
									{
										name: 'experience_place'
									}
								]).value
							}
						},
						{
							// HTML Element : HTML Input with id 'experience-item-date'
							// Description: new div with the id 'experience-item-date' will be created on the "experience-item"
							name: 'td',
							settings: {
								new: true,
								id: 'experience-item-date',
								target: 'experience-item',
								last_father: true,
								innerText: domDispatcher([
									{
										name: 'experience_date'
									}
								]).value
							}
						},
						{
							// HTML Element : HTML Input with id 'experience-item-center'
							// Description: new div with the id 'experience-item-center' will be created on the "experience-item"
							name: 'td',
							settings: {
								new: true,
								id: 'experience-item-center',
								target: 'experience-item',
								last_father: true,
								innerText: domDispatcher([
									{
										name: 'experience_center'
									}
								]).value
							}
						},
						{
							// HTML Element : HTML Input with id 'experience-item-remove'
							// Description: new span with the id 'experience-item-remove' will be created on the "experience-item"
							// Event Description: If user click on this span, the selected experience will be removed from both the html list and the client instance
							name: 'td',
							settings: {
								new: true,
								id: 'experience-item-remove',
								target: 'experience-item',
								last_father: true,
								innerText: 'Remove',
								event: {
									type: 'click',
									callback: (event) => {
										// get the original item from the event target
										let original_item = event.target.parentNode;
										// get the original list from the original item html parent
										let original_list = original_item.parentNode;

										// remove the experience from the client instance
										main_store.RemoveExperience({
											place: original_item.childNodes[0].innerText,
											date: original_item.childNodes[1].innerText,
											center: original_item.childNodes[2].innerText
										});
										// remove the experience from the html list
										original_list.removeChild(original_item);
									}
								}
							}
						}
					]);
					// add the experience to the client instance
					main_store.AddExperience({
						place: domDispatcher([
							{
								name: 'experience_place'
							}
						]).value,
						date: domDispatcher([
							{
								name: 'experience_date'
							}
						]).value,
						center: domDispatcher([
							{
								name: 'experience_center'
							}
						]).value
					});
					// intialize the experience inputs
					domDispatcher([
						{
							name: 'experience_place',
							settings: {
								set_value: ' '
							}
						},
						{
							name: 'experience_date',
							settings: {
								set_value: ' '
							}
						},
						{
							name: 'experience_center',
							settings: {
								set_value: ' '
							}
						}
					]);
				}
			}
		}
	},
	{
		// HTML Element : HTML Input with id 'formation_add'
		// Event Description: If user click on the formation adding button, the formation will be added in both of the html table and the client instance
		name: 'formation_add',
		settings: {
			event: {
				type: 'click',
				callback: (event) => {
					domDispatcher([
						{
							// HTML Element : HTML Input with id 'formation-item'
							// Description: new div with the id 'formation-item' will be created on the "formations_table"
							name: 'tr',
							settings: {
								new: true,
								id: 'formation-item',
								target: 'formations_table'
							}
						},
						{
							// HTML Element : HTML Input with id 'formation-item-type'
							// Description: new div with the id 'formation-item-type' will be created on the "formation-item"
							name: 'td',
							settings: {
								new: true,
								id: 'formation-item-type',
								target: 'formation-item',
								last_father: true,
								innerText: domDispatcher([
									{
										name: 'formation_type'
									}
								]).value
							}
						},
						{
							// HTML Element : HTML Input with id 'formation-item-date'
							// Description: new div with the id 'formation-item-date' will be created on the "formation-item"
							name: 'td',
							settings: {
								new: true,
								id: 'formation-item-date',
								target: 'formation-item',
								last_father: true,
								innerText: domDispatcher([
									{
										name: 'formation_date'
									}
								]).value
							}
						},
						{
							// HTML Element : HTML Input with id 'formation-item-place'
							// Description: new div with the id 'formation-item-place' will be created on the "formation-item"
							name: 'td',
							settings: {
								new: true,
								id: 'formation-item-place',
								target: 'formation-item',
								last_father: true,
								innerText: domDispatcher([
									{
										name: 'formation_place'
									}
								]).value
							}
						},
						{
							// HTML Element : HTML Input with id 'formation-item-remove'
							// Description: new span with the id 'formation-item-remove' will be created on the "formation-item"
							// Event Description: If user click on this span, the selected formation will be removed from both the html list and the client instance
							name: 'td',
							settings: {
								new: true,
								id: 'formation-item-remove',
								target: 'formation-item',
								last_father: true,
								innerText: 'Remove',
								event: {
									type: 'click',
									callback: (event) => {
										// get the original item from the event target
										let original_item = event.target.parentNode;
										// get the original list from the original item html parent
										let original_list = original_item.parentNode;

										// remove the formation from the client instance
										main_store.RemoveFormation({
											type: original_item.childNodes[0].innerText,
											date: original_item.childNodes[1].innerText,
											place: original_item.childNodes[2].innerText
										});
										// remove the formation from the html list
										original_list.removeChild(original_item);
									}
								}
							}
						}
					]);
					// add the formation to the client instance
					main_store.AddFormation({
						type: domDispatcher([
							{
								name: 'formation_type'
							}
						]).value,
						date: domDispatcher([
							{
								name: 'formation_date'
							}
						]).value,
						place: domDispatcher([
							{
								name: 'formation_place'
							}
						]).value
					});
					// intialize the formation inputs
					domDispatcher([
						{
							name: 'formation_type',
							settings: {
								set_value: ' '
							}
						},
						{
							name: 'formation_date',
							settings: {
								set_value: ' '
							}
						},
						{
							name: 'formation_place',
							settings: {
								set_value: ' '
							}
						}
					]);
				}
			}
		}
	},
	{
		// HTML Element : HTML Input with id 'create_cv'
		// Event Description: If user click on the cv creating button, the client instance will be passed to the cv model
		name: 'create_cv',
		settings: {
			event: {
				type: 'click',
				callback: (event) => {
					// get the client instance
					let current_client = main_store.client;
					// set the client storage into the session storage
					sessionStorage.setItem('client', JSON.stringify(current_client));
					// declare for the success of the creating operation
					alert('Created Successfully');
					// redirect page to the cv model
					window.location.replace('http://localhost:5500/models/model1/');
				}
			}
		}
	}
]);
