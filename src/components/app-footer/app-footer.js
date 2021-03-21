import React from "react";
import FooterFilters from "../footer-filters";

const AppFooter = () => {
  return (
    <div className="app-footer d-flex justify-content-between align-items-center border rounded mb-2">
      <FooterFilters />
      <span className="app-footer_counter mr-3">Всего 5 Заметок</span>
    </div>
  );
};

export default AppFooter;
