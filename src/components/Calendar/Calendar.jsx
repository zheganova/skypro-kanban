import {
  CalendarContainer,
  CalendarTitle,
  CalendarBlock,
  CalendarNav,
  CalendarMonth,
  NavActions,
  NavAction,
  CalendarContent,
  CalendarDaysNames,
  CalendarDayName,
  CalendarCells,
  CalendarCell,
  CalendarPeriod,
  CalendarP,
} from "../Calendar/Calendar.styled";

export const Calendar = () => {
  return (
    <CalendarContainer>
      <CalendarTitle>Даты</CalendarTitle>
      <CalendarBlock>
        <CalendarNav>
          <CalendarMonth>Сентябрь 2023</CalendarMonth>
          <NavActions>
            <NavAction data-action="prev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
              </svg>
            </NavAction>
            <div className="nav__action" data-action="next">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
              </svg>
            </div>
          </NavActions>
        </CalendarNav>
        <CalendarContent>
          <CalendarDaysNames>
            <CalendarDayName>пн</CalendarDayName>
            <CalendarDayName>вт</CalendarDayName>
            <CalendarDayName>ср</CalendarDayName>
            <CalendarDayName>чт</CalendarDayName>
            <CalendarDayName>пт</CalendarDayName>
            <CalendarDayName className="-weekend-">сб</CalendarDayName>
            <CalendarDayName className="-weekend-">вс</CalendarDayName>
          </CalendarDaysNames>
          <CalendarCells>
            <CalendarCell className="_other-month">28</CalendarCell>
            <CalendarCell className="_other-month">29</CalendarCell>
            <CalendarCell className="_other-month">30</CalendarCell>
            <CalendarCell className="_cell-day">31</CalendarCell>
            <CalendarCell className="_cell-day">1</CalendarCell>
            <CalendarCell className="_cell-day _weekend">2</CalendarCell>
            <CalendarCell className="_cell-day _weekend">3</CalendarCell>
            <CalendarCell className="_cell-day">4</CalendarCell>
            <CalendarCell className="_cell-day">5</CalendarCell>
            <CalendarCell className="_cell-day">6</CalendarCell>
            <CalendarCell className="_cell-day">7</CalendarCell>
            <CalendarCell className="_cell-day _current">8</CalendarCell>
            <CalendarCell className="_cell-day _weekend">9</CalendarCell>
            <CalendarCell className="_cell-day _weekend">10</CalendarCell>
            <CalendarCell className="_cell-day">11</CalendarCell>
            <CalendarCell className="_cell-day">12</CalendarCell>
            <CalendarCell className="_cell-day">13</CalendarCell>
            <CalendarCell className="_cell-day">14</CalendarCell>
            <CalendarCell className="_cell-day">15</CalendarCell>
            <CalendarCell className="_cell-day _weekend">16</CalendarCell>
            <CalendarCell className="_cell-day _weekend">17</CalendarCell>
            <CalendarCell className="_cell-day">18</CalendarCell>
            <CalendarCell className="_cell-day">19</CalendarCell>
            <CalendarCell className="_cell-day">20</CalendarCell>
            <CalendarCell className="_cell-day">21</CalendarCell>
            <CalendarCell className="_cell-day">22</CalendarCell>
            <CalendarCell className="_cell-day _weekend">23</CalendarCell>
            <CalendarCell className="_cell-day _weekend">24</CalendarCell>
            <CalendarCell className="_cell-day">25</CalendarCell>
            <CalendarCell className="_cell-day">26</CalendarCell>
            <CalendarCell className="_cell-day">27</CalendarCell>
            <CalendarCell className="_cell-day">28</CalendarCell>
            <CalendarCell className="_cell-day">29</CalendarCell>
            <CalendarCell className="_cell-day _weekend">30</CalendarCell>
            <CalendarCell className="_other-month _weekend">1</CalendarCell>
          </CalendarCells>
        </CalendarContent>
        <input type="hidden" id="datepick_value" value="08.09.2023" />
        <CalendarPeriod>
          <CalendarP className="date-end">
            Выберите срок исполнения <span className="date-control"></span>.
          </CalendarP>
        </CalendarPeriod>
      </CalendarBlock>
    </CalendarContainer>
  );
};
