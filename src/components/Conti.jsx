import React from "react";
import GitHubCalendar from "react-github-calendar";

const selectLastHalfYear = (contributions) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const shownMonths = 16;

  return contributions.filter((activity) => {
    const date = new Date(activity.date);
    const monthOfDay = date.getMonth();

    return (
    
      monthOfDay > currentMonth - shownMonths &&
      monthOfDay <= currentMonth
    );
  });
};
const Conti = () => {
  return (
    <div id="work" className="mt-20 mb-20 relative">
         <div className="mb-10">
                <div className="flex text-center justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase text-gradient mb-2">
                    GitHub Contributions
                </div>
            </div>
      <div className="flex justify-start md:justify-center gap-[10px] mb-[50px] mt-28 overflow-auto">

        <div className="md:flex-col ">
        <div className="mb-7">
        <a href="https://github.com/arshu78" rel="nofollow"> <img align="center" src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/FFFFFF/external-github-with-cat-logo-an-online-community-for-software-development-logo-bold-tal-revivo.png" alt="external-github-with-cat-logo-an-online-community-for-software-development-logo-bold-tal-revivo" height="30" width="40"/> arshu78</a>
        
        </div>
        <GitHubCalendar
          username="arshu78"
          transformData={selectLastHalfYear}
          hideColorLegend
          labels={{
            totalCount: "{{count}} contributions in the last half year",
          }}
        />
        </div>
      </div>
    </div>
  );
};

export default Conti;
