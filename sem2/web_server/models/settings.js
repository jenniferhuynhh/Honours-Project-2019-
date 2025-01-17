var mongoose = require('mongoose');

var UserSettingsSchema = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true
	},
	settings: {
		audio_on: {
			type: Boolean,
			required: true
		},
		dark_theme: {
			type: Boolean,
			required: true
		},
		colourblind: {
			type: Boolean,
			required: true
		},
		icon_sizing: {
			type: Number,
			required: true/*,
			min: 30,
			max: 55*/
		},
		default_layout: {
			type: String
		},
		ownship_id: {
			type: Number
		}
	}
});

var UserSettings = mongoose.model('UserSettings', UserSettingsSchema, "userSettings");
module.exports = UserSettings;