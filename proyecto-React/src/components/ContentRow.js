import React from "react";
import ContentRowCenter from "./ContentRowCenter";
import ContentRowLast from "./ContentRowLast";
import ContentQuantity from "./ContentQuantity";
// import LastProduct from './LastProduct';
// import LastUser from './LastUser';
function ContentRowTop() {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
        </div>
        <ContentQuantity />
        <ContentRowCenter />
        <ContentRowLast />
        {/* <LastProduct />
				<LastUser /> */}
      </div>
    </React.Fragment>
  );
}
export default ContentRowTop;
