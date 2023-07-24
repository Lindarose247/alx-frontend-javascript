export default function taskblock(trueOrFalse) {
	const task = false;
	const task2 =true;

	if (trueOrFalse) {
		//eslint-disable-nextline
	const task = true;
		//eslint-disable-next-line
	const task2 = false;
	}

	return [task, task2];
}
