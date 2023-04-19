/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	const response = await fetch('/api/v1/search/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			q: '*',
			sort: ['created_at:desc']
		})
	});
	return {
		results: await response.json()
	};
}) satisfies PageLoad;
