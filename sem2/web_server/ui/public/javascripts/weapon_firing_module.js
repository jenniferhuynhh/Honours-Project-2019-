var WeaponFiringModule = (function() {
	//Private
	var ftms_ui;
	var display;
	var div1, div2;
	var weapons_buttons = [];
	var fire_button;

	//Public
	return {
		initialise: function(ftms) {
			//link FTMS UI system
			ftms_ui = ftms;

			//create div for the module
			display = document.createElement("div");
			display.setAttribute('class', 'center_align');

			var weapons_button_names = ['1', '2', '3', '4'];
			
			//separate div for weapons buttons 
			div1 = document.createElement('div');	
			for (var i = 0; i < weapons_button_names.length; i++) {
				weapons_buttons.push(this.generateWeaponsButtons(weapons_button_names[i]));
				div1.appendChild(weapons_buttons[i]);
			}

			//seprate div for fire button 
			div2 = document.createElement('div');
			div2.setAttribute('class', 'center_align');
			fire_button = document.createElement('input');
			fire_button.setAttribute('class', 'unhighlighted_fire_button');
			fire_button.setAttribute('type', 'button');
			fire_button.setAttribute('value', 'FIRE');
			fire_button.addEventListener('mousedown', function() {
				this.classList.add('highlighted_fire_button');
			})
			fire_button.addEventListener('mouseup', function() {
				this.classList.remove('highlighted_fire_button');
			})
			fire_button.addEventListener('click', function() {			
				for(var i=0; i<weapons_buttons.length; i++) {
					weapons_buttons[i].classList.remove('highlighted_weapons_buttons');
				}
				//var audio = new Audio('../resources/boom.mp3');
				//audio.play();
			})
			div2.appendChild(fire_button);

			//append the weapons and button divs to display
			display.appendChild(div1);
			display.appendChild(div2);
			
			//append display to window
			ftms_ui.window_manager.appendToWindow('Weapon Firing Module', display);
		},

		generateWeaponsButtons: function(s) {
			var button = document.createElement('input');
			button.setAttribute('class', 'unhighlighted_weapons_buttons');
			button.setAttribute('type', 'button');
			button.setAttribute('value', s);
			button.addEventListener('click', function() {
				if(this.classList.contains('highlighted_weapons_buttons')) {
					this.classList.remove('highlighted_weapons_buttons');
				} 
				else{
					this.classList.add('highlighted_weapons_buttons');
				}
			});

			return button;
		}
	}
}());

