import IconAlert from './IconAlert.jsx';

export default function ViewHelp({view}) {
	if (view.filter(view => view.id === 'Help')[0].isActive) {
		return (
			<div className="pane help">
				<div className="content">
					<div className="alert" id="spoiler">
						<div className="icon">
							<IconAlert />
						</div>
						<div className="text">
							<span><b>This PDA contains spoilers.</b> If you have not yet completed <i>Subnautica</i>, proceed with caution!</span>
						</div>
					</div>
					<h1>Welcome aboard, Captain.</h1>
					<p><b>Subnautica PDA</b> is a second-screen companion app for the game <a href="https://subnautica.com/" target="_blank" title="Subnautica Official Site"><i>Subnautica</i></a>. It was made to assist with crafting recipes and other helpful reminders. It is best used on a phone or tablet, while playing the game on PC or console.</p>
					<p>To use <b>Subnautica PDA</b>: Click the <b>wrench</b> icon for a complete list of blueprints. Click a category to see the items in that category, and click on an item to add it to your personal List. Those items will appear here, in place of this welcome message. To get back to this message, just clear out your List, by clicking the <b>eye</b> next to each item. To keep any other miscellaneous reminders, use the Notes view by clicking the <b>note</b> icon. All of your items and notes will be saved if you leave the app and return later.</p>
					<p>This app uses material from the <a href="https://subnautica.fandom.com/wiki/Subnautica_Wiki" target="_blank">Subnautica Wiki</a> at <a href="https://www.fandom.com/" target="_blank">Fandom</a> and is licensed under the <a href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank">Creative Commons Attribution-Share Alike License</a>.</p>
				</div>
			</div>
		)
	}
}