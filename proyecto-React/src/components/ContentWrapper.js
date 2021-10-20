import React from "react";
import ContentRow from "./ContentRow.js";
import TopBar from "./TopBar.js";

function ContentWrapper() {
  return (
    <React.Fragment>
      {/*<!-- Content Wrapper -->*/}
      <div id="content-wrapper" className="d-flex flex-column">
        {/*<!-- Main Content -->*/}
        <div id="content">
          {/* <TopBar /> */}
          <ContentRow />
        </div>
      </div>
    </React.Fragment>
  );
}
export default ContentWrapper;
