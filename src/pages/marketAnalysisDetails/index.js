import React, { useState } from "react";
import TodayResultCollapse from "../../componets/todayResultCollapse/TodayResultCollapse";
import MonthResultCollapse from "../../componets/monthResultCollapse/MonthResultCollapse";
import MonthResultDataTable from "../../componets/monthResultDataTable/MonthResultDataTable";
import moment from "moment";
import dayjs from "dayjs";

// Styles
const MarketAnalysisDetails = ({ com }) => {
  const [date, setDate] = useState(dayjs());
  const convertDateFormat = moment(date).format("MM/DD/YYYY");
  return (
    <div className="odds">
      <TodayResultCollapse
        com={com}
        setDate={setDate}
        date={convertDateFormat}
      />
      {/* {com == 1 && (
        <>
          <MonthResultCollapse />
          <MonthResultDataTable date={convertDateFormat} />
        </>
      )} */}
    </div>
  );
};

export default MarketAnalysisDetails;
