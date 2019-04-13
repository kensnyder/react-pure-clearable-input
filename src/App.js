import React, { useState } from 'react';
import { ClearableInput } from './components/ClearableInput.js';
import { WhatIsThis } from './components/WhatIsThis.js';

export function App() {
	const [text, setText] = useState('');
	return (
		<section>
			<WhatIsThis />
			<ClearableInput
				type="text"
				size="40"
				value={text}
				onUpdate={setText}
				searchIcon={true}
				placeholder="Type something"
			/>
		</section>
	);
}
