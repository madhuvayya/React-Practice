import React, { Suspense } from "react";
import ReactDOM from "react-dom";

const CustomComponent = React.lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import("./custom-component")), 100)
    )
);

const CustomComponent2 = React.lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import("./custom-component")), 5000)
    )
);
/**
 * when one suspense is used, components are shown to be wait
 * the longest took component
 */
function LazyComponent() {
  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <CustomComponent label="Component 1" />
        </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <CustomComponent2 label="Component 2" />
      </Suspense>
    </>
  );
}

export default LazyComponent;