import { Reporter } from "../reporter";

export class JsonReporter extends Reporter {
	/**
	 * @override
	 */
	log() {
		if (this.response.errors) {
			this.response.errors.forEach(error => error.message.forEach(message => {
				message.descr = message.rule + ': ' + message.descr;
			}))
		}
		console.log(JSON.stringify(this.response, null, 2));
	}
}