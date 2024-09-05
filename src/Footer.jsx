import { useState } from 'react';
import IconGitHub from './IconGitHub.jsx';

function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<>
			<footer>
				<div className="title">
					<h1 id="title"><span>SUB</span>NAUTICA PDA</h1>
				</div>
				<div className="copyright">© 2020 - {currentYear} <a href="https://benmiles.com/" target="_blank">Ben Miles</a>. <a href="#" target="_self">Subnautica PDA</a> is not affiliated with <a href="http://subnauticagame.com/" target="_blank">Subnautica</a> or <a href="https://unknownworlds.com/" target="_blank">Unknown Worlds</a>. See <a href="https://github.com/ben-miles/subnauticapda" target="_blank">the <IconGitHub /> GitHub repo</a> for more information!</div>
			</footer>
		</>
	)
}

export default Footer;