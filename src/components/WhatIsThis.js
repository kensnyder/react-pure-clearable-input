import React, { useState } from 'react';
import './WhatIsThis.css';

export function WhatIsThis() {
	const [isExpanded, setExpanded] = useState(false);

	return (
		<div className="WhatIsThis">
			<a
				href={null}
				className="about-badge clickable"
				onClick={setExpanded.bind(0, true)}
			>
				<span className="about-icon">🧐</span>
				<span className="about-label">What is this demo about?</span>
			</a>
			{isExpanded && (
				<div className="about-text-area">
					<div className="about-text">
						<a
							href={null}
							className="about-close clickable"
							onClick={setExpanded.bind(0, false)}
						>
							&times;
						</a>
						<h3>
							This demo shows a React component for an input that
							has a X button to clear input when the value is
							non-empty
						</h3>
					</div>
				</div>
			)}
		</div>
	);
}
