import React from "react";
import FooterFilters from "../footer-filters";

const AppFooter = () => {
  return (
    <div className="app-footer">
      <span className="app-footer_counter">5 Заметок</span>
      <FooterFilters />
    </div>
  );
};

export default AppFooter;
