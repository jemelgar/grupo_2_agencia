import React from 'react';
import ContentRow from './ContentRow.js';

function ContentWrapper() {
	return (
		<React.Fragment>
			{/*<!-- Content Wrapper -->*/}
			<div id="content-wrapper" className="d-flex flex-column">
				{/*<!-- Main Content -->*/}
				<div id="content">
					<ContentRow />
				</div>
			</div>
		</React.Fragment>
	);
}
export default ContentWrapper;
