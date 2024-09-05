import { useState } from 'react';

function HomeView() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className="pane" id="notes-pane">
				<div id="spoiler">
						"Alert" by Gautam Arora, IN: https://thenounproject.com/term/alert/574450/ 
					<svg viewBox="0 0 12 12">
						<path d="M10.447693,11.402344H1.553162c-0.561523,0-1.063477-0.290039-1.34375-0.776367    c-0.280273-0.485352-0.280273-1.06543,0.000977-1.550781l4.447266-7.702148C4.936951,0.887695,5.43988,0.597656,6.000427,0.597656    s1.063477,0.290039,1.34375,0.775391l4.446289,7.702148c0.280273,0.486328,0.280273,1.066406,0,1.551758    S11.00824,11.402344,10.447693,11.402344z M6.000427,1.597656c-0.095703,0-0.333984,0.026367-0.476562,0.275391L1.075623,9.575195    c-0.143555,0.249023-0.047852,0.46875,0,0.551758s0.19043,0.275391,0.477539,0.275391h8.894531    c0.287109,0,0.428711-0.192383,0.476562-0.275391s0.144531-0.302734,0-0.551758L6.477966,1.873047    C6.334412,1.624023,6.09613,1.597656,6.000427,1.597656z"></path>
						<path d="M6.085388,7.578125c-0.276367,0-0.5-0.223633-0.5-0.5v-2.75293c0-0.276367,0.223633-0.5,0.5-0.5    s0.5,0.223633,0.5,0.5v2.75293C6.585388,7.354492,6.361755,7.578125,6.085388,7.578125z"></path>
						<circle cx="6.085185" cy="8.744164" r="0.6"></circle>
					</svg>
					<span><b>Spoiler Alert!</b> If you have not yet completed <i>Subnautica</i>, you <b>will</b> encounter spoilers using this app.</span>
						"Alert" by Gautam Arora, IN: https://thenounproject.com/term/alert/574450/ 
					<svg viewBox="0 0 12 12">
						<path d="M10.447693,11.402344H1.553162c-0.561523,0-1.063477-0.290039-1.34375-0.776367    c-0.280273-0.485352-0.280273-1.06543,0.000977-1.550781l4.447266-7.702148C4.936951,0.887695,5.43988,0.597656,6.000427,0.597656    s1.063477,0.290039,1.34375,0.775391l4.446289,7.702148c0.280273,0.486328,0.280273,1.066406,0,1.551758    S11.00824,11.402344,10.447693,11.402344z M6.000427,1.597656c-0.095703,0-0.333984,0.026367-0.476562,0.275391L1.075623,9.575195    c-0.143555,0.249023-0.047852,0.46875,0,0.551758s0.19043,0.275391,0.477539,0.275391h8.894531    c0.287109,0,0.428711-0.192383,0.476562-0.275391s0.144531-0.302734,0-0.551758L6.477966,1.873047    C6.334412,1.624023,6.09613,1.597656,6.000427,1.597656z"></path>
						<path d="M6.085388,7.578125c-0.276367,0-0.5-0.223633-0.5-0.5v-2.75293c0-0.276367,0.223633-0.5,0.5-0.5    s0.5,0.223633,0.5,0.5v2.75293C6.585388,7.354492,6.361755,7.578125,6.085388,7.578125z"></path>
						<circle cx="6.085185" cy="8.744164" r="0.6"></circle>
					</svg>
				</div>
				<h1>Welcome aboard, Captain.</h1>
				<p><b>Subnautica PDA</b> is a second-screen companion app for the game <a href="https://subnautica.com/" target="_blank" title="Subnautica Official Site"><i>Subnautica</i></a>. It was made to assist with crafting recipes and other helpful reminders. It is best used on a phone or tablet, while playing the game on PC or console.</p>
				<p>To use <b>Subnautica PDA</b>: Click the <b>wrench</b> icon for a complete list of blueprints. Click a category to see the items in that category, and click on an item to add it to your personal List. Those items will appear here, in place of this welcome message. To get back to this message, just clear out your List, by clicking the <b>eye</b> next to each item. To keep any other miscellaneous reminders, use the Notes view by clicking the <b>note</b> icon. All of your items and notes will be saved if you leave the app and return later.</p>
				<p>This app uses material from the <a href="https://subnautica.fandom.com/wiki/Subnautica_Wiki" target="_blank">Subnautica Wiki</a> at <a href="https://www.fandom.com/" target="_blank">Fandom</a> and is licensed under the <a href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank">Creative Commons Attribution-Share Alike License</a>.</p>
			</div>
    	</>
	)
}

export default HomeView;