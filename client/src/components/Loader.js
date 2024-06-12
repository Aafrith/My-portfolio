import React from "react";

function Loader() {
  return (
    <div className="h-screen w-screen flex items-center justify-center fixed inset-0 bg-primary z-50">
      <div className="flex gap-5 text-6xl font-semibold sm:text-3xl">
        <h1 className="text-secondary Mo">Mo</h1>
        <h1 className="text-tertiary Aa">Aa</h1>
      </div>
    </div>
  );
}

export default Loader;
