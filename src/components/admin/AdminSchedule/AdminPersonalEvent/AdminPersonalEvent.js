import React, { useEffect, useState } from "react";
import { Transition, Spring } from "react-spring/renderprops";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltLeft,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import ACTION_ADMIN_PERSONAL_EVENT_TITLE from "../../../../actions/Admin/AdminPersonalEvent/AdminPersonalEventTitle/ACTION_ADMIN_PERSONAL_EVENT_TITLE";
import ACTION_ADMIN_PERSONAL_EVENT_ALL_DAY_RESET from "../../../../actions/Admin/AdminPersonalEvent/AdminPersonalEventAllDay/ACTION_ADMIN_PERSONAL_EVENT_ALL_DAY_RESET";
import ACTION_ADMIN_PERSONAL_EVENT_BLOCK_TIME_RESET from "../../../../actions/Admin/AdminPersonalEvent/AdminPersonalEventBlockTime/ACTION_ADMIN_PERSONAL_EVENT_BLOCK_TIME_RESET";
import ACTION_ADMIN_PERSONAL_EVENT_TITLE_RESET from "../../../../actions/Admin/AdminPersonalEvent/AdminPersonalEventTitle/ACTION_ADMIN_PERSONAL_EVENT_TITLE_RESET";
import ACTION_ADMIN_PERSONAL_EVENT_DATE_RESET from "../../../../actions/Admin/AdminPersonalEvent/AdminPersonalEventDate/ACTION_ADMIN_PERSONAL_EVENT_DATE_RESET";
import ACTION_ADMIN_PERSONAL_EVENT_STAFF_RESET from "../../../../actions/Admin/AdminPersonalEvent/AdminPersonalEventStaff/ACTION_ADMIN_PERSONAL_EVENT_STAFF_RESET";
import ACTION_ADMIN_PERSONAL_EVENT_NOTES_RESET from "../../../../actions/Admin/AdminPersonalEvent/AdminPersonalEventNotes/ACTION_ADMIN_PERSONAL_EVENT_NOTES_RESET";
import ACTION_ADMIN_PERSONAL_EVENT_START_TIME_RESET from "../../../../actions/Admin/AdminPersonalEvent/AdminPersonalEventStartTime/ACTION_ADMIN_PERSONAL_EVENT_START_TIME_RESET";
import ACTION_ADMIN_PERSONAL_EVENT_END_TIME_RESET from "../../../../actions/Admin/AdminPersonalEvent/AdminPersonalEventEndTime/ACTION_ADMIN_PERSONAL_EVENT_END_TIME_RESET";
import ACTION_ADMIN_PERSONAL_EVENT_NOTES from "../../../../actions/Admin/AdminPersonalEvent/AdminPersonalEventNotes/ACTION_ADMIN_PERSONAL_EVENT_NOTES";
import ACTION_ADMIN_PERSONAL_EVENT_DATE from "../../../../actions/Admin/AdminPersonalEvent/AdminPersonalEventDate/ACTION_ADMIN_PERSONAL_EVENT_DATE";
import ACTION_ADMIN_PERSONAL_EVENT_START_TIME from "../../../../actions/Admin/AdminPersonalEvent/AdminPersonalEventStartTime/ACTION_ADMIN_PERSONAL_EVENT_START_TIME";
import ACTION_ADMIN_PERSONAL_EVENT_END_TIME from "../../../../actions/Admin/AdminPersonalEvent/AdminPersonalEventEndTime/ACTION_ADMIN_PERSONAL_EVENT_END_TIME";
import ACTION_ADMIN_PERSONAL_EVENT_STAFF from "../../../../actions/Admin/AdminPersonalEvent/AdminPersonalEventStaff/ACTION_ADMIN_PERSONAL_EVENT_STAFF";
import { formatDate, parseDate } from "react-day-picker/moment";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "../AdminCreateAppointment/AdminCreateAppointment.css";
import "./AdminPersonalEvent.css";
import Dropdown from "react-dropdown";
import ACTION_ADMIN_PERSONAL_EVENT_ALL_DAY from "../../../../actions/Admin/AdminPersonalEvent/AdminPersonalEventAllDay/ACTION_ADMIN_PERSONAL_EVENT_ALL_DAY";
import ACTION_ADMIN_PERSONAL_EVENT_BLOCK_TIME from "../../../../actions/Admin/AdminPersonalEvent/AdminPersonalEventBlockTime/ACTION_ADMIN_PERSONAL_EVENT_BLOCK_TIME";
import { useMutation } from "@apollo/react-hooks";
import { addPersonalEventMutation } from "../../../../graphql/queries/queries";

const AdminPersonalEvent = (props) => {
  const {
    initialScreenSize,
    currentScreenSize,
    stopTransition,
    personalEventClicked,
    changeStopTransition,
    changePersonalEventClicked,
    changeCreateAppointmentClicked,
    timeOptions,
    employeeOptions,
  } = props;

  const dispatch = useDispatch();

  const adminPersonalEventTitle = useSelector(
    (state) => state.adminPersonalEventTitle.title
  );
  const adminPersonalEventNotes = useSelector(
    (state) => state.adminPersonalEventNotes.notes
  );
  const adminPersonalEventAllDay = useSelector(
    (state) => state.adminPersonalEventAllDay.all_day
  );
  const adminPersonalEventBlockTime = useSelector(
    (state) => state.adminPersonalEventBlockTime.block_time
  );
  const adminPersonalEventDate = useSelector(
    (state) => state.adminPersonalEventDate.date
  );
  const adminAppointmentDate = useSelector(
    (state) => state.adminAppointmentDate.admin_appointment_date
  );
  const adminPersonalEventStartTime = useSelector(
    (state) => state.adminPersonalEventStartTime.start_time
  );
  const adminPersonalEventEndTime = useSelector(
    (state) => state.adminPersonalEventEndTime.end_time
  );
  const adminPersonalEventStaff = useSelector(
    (state) => state.adminPersonalEventStaff.staff
  );
  const adminAppointmentStaffMember = useSelector(
    (state) => state.adminAppointmentStaffMember.admin_appointment_staff_member
  );
  const logoutClicked = useSelector(
    (state) => state.logoutClicked.log_out_clicked
  );
  const loadingSpinnerActive = useSelector(
    (state) => state.loadingSpinnerActive.loading_spinner
  );

  const [clickOutsideDayPicker, changeClickOutsideDayPicker] = useState(true);
  const [pageOpened, changePageOpened] = useState(false);

  const [addPersonalEvent] = useMutation(addPersonalEventMutation);

  useEffect(() => {
    changePageOpened(true);
    const pageNowOpen = setTimeout(() => {
      changePageOpened(false);
    }, 500);
    return () => {
      clearTimeout(pageNowOpen);
    };
  }, []);

  const handleBackToSchedule = () => {
    changePersonalEventClicked(false);

    dispatch(ACTION_ADMIN_PERSONAL_EVENT_ALL_DAY_RESET());
    dispatch(ACTION_ADMIN_PERSONAL_EVENT_BLOCK_TIME_RESET());
    dispatch(ACTION_ADMIN_PERSONAL_EVENT_TITLE_RESET());
    dispatch(ACTION_ADMIN_PERSONAL_EVENT_DATE_RESET());
    dispatch(ACTION_ADMIN_PERSONAL_EVENT_STAFF_RESET());
    dispatch(ACTION_ADMIN_PERSONAL_EVENT_NOTES_RESET());
    dispatch(ACTION_ADMIN_PERSONAL_EVENT_START_TIME_RESET());
    dispatch(ACTION_ADMIN_PERSONAL_EVENT_END_TIME_RESET());

    changeClickOutsideDayPicker(false);
  };

  useEffect(() => {
    const dayPickerClickFunction = (e) => {
      if (e.target) {
        if (e.target.placeholder === "Enter your event date here") {
          if (clickOutsideDayPicker) {
            changeClickOutsideDayPicker(false);
          }
        } else if (e.target.getAttribute("class")) {
          if (typeof (e.target.className === "string")) {
            if (!e.target.className.baseVal) {
              if (
                e.target.className.split(" ").includes("DayPicker-Day") ||
                e.target.className.split(" ").includes("DayPicker-NavButton")
              ) {
                if (clickOutsideDayPicker) {
                  changeClickOutsideDayPicker(false);
                }
              } else {
                if (!clickOutsideDayPicker) {
                  changeClickOutsideDayPicker(true);
                }
              }
            } else {
              if (!clickOutsideDayPicker) {
                changeClickOutsideDayPicker(true);
              }
            }
          } else {
            if (!clickOutsideDayPicker) {
              changeClickOutsideDayPicker(true);
            }
          }
        } else {
          if (!clickOutsideDayPicker) {
            changeClickOutsideDayPicker(true);
          }
        }
      }
    };

    window.addEventListener("click", dayPickerClickFunction);

    return () => {
      window.removeEventListener("click", dayPickerClickFunction);
    };
  }, [clickOutsideDayPicker]);

  const handleAllDayToggle = () => {
    if (adminPersonalEventAllDay) {
      dispatch(ACTION_ADMIN_PERSONAL_EVENT_ALL_DAY_RESET());
    } else {
      dispatch(ACTION_ADMIN_PERSONAL_EVENT_ALL_DAY());
    }
  };

  const handleBlockTimeToggle = () => {
    if (adminPersonalEventBlockTime) {
      dispatch(ACTION_ADMIN_PERSONAL_EVENT_BLOCK_TIME_RESET());
    } else {
      dispatch(ACTION_ADMIN_PERSONAL_EVENT_BLOCK_TIME());
    }
  };

  const checkMark = () => {
    return (
      <Spring from={{ x: 100 }} to={{ x: 0 }} config={{ duration: 2000 }}>
        {(styles) => (
          <svg
            width="100%"
            style={{
              marginTop:
                currentScreenSize === ""
                  ? initialScreenSize >= 1800
                    ? "-0.2rem"
                    : initialScreenSize >= 1600
                    ? "-0.2rem"
                    : initialScreenSize >= 1200
                    ? "-0.5rem"
                    : initialScreenSize >= 360
                    ? "-0.5rem"
                    : "0rem"
                  : currentScreenSize >= 1800
                  ? "-0.2rem"
                  : currentScreenSize >= 1600
                  ? "-0.2rem"
                  : currentScreenSize >= 1200
                  ? "-0.5rem"
                  : currentScreenSize >= 360
                  ? "-0.5rem"
                  : "0rem",
              display: "block",
            }}
            viewBox="0 0 13.229 13.229"
          >
            <path
              d="M2.851 7.56l2.45 2.482 5.36-6.958"
              fill="none"
              stroke="#000"
              strokeDasharray="100"
              strokeDashoffset={pageOpened ? 0 : `${styles.x}`}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
            />
          </svg>
        )}
      </Spring>
    );
  };

  const handleSavePersonalEvent = () => {
    addPersonalEvent({
      variables: {
        title: adminPersonalEventTitle,
        date: adminPersonalEventDate,
        startTime: adminPersonalEventStartTime,
        endTime: adminPersonalEventEndTime,
        staff:
          adminAppointmentStaffMember && !adminPersonalEventStaff
            ? adminAppointmentStaffMember
            : adminPersonalEventStaff,
        notes: adminPersonalEventNotes,
        allDay: adminPersonalEventAllDay,
        blockTime: adminPersonalEventBlockTime,
      },
    });
  };

  return (
    <Transition
      items={personalEventClicked}
      from={{ transform: "translateX(-100%)" }}
      enter={{ transform: "translateX(0%)" }}
      leave={{ transform: "translateX(-100%)" }}
      config={{ duration: 200 }}
      immediate={stopTransition}
    >
      {(personalEventClicked) =>
        personalEventClicked &&
        ((styleprops) => (
          <div
            className="admin_personal_event_container"
            style={{
              ...styleprops,
              zIndex: logoutClicked || loadingSpinnerActive ? 0 : 5,
            }}
          >
            <div className="admin_individual_selected_client_back_container">
              <FontAwesomeIcon
                icon={faLongArrowAltLeft}
                className="admin_individual_selected_client_back_arrow_icon"
                onClick={handleBackToSchedule}
              />
              <p onClick={handleBackToSchedule}>Back to schedule</p>
              <div className="admin_individual_selected_client_top_page_options">
                <p className="admin_individual_selected_client_chosen_create_page">
                  Create Personal Event
                </p>
                <p>/</p>
                <p
                  onClick={() => {
                    changePersonalEventClicked(false);
                    changeCreateAppointmentClicked(true);
                    changeStopTransition(true);
                    setTimeout(() => {
                      changeStopTransition(false);
                    }, 1000);
                  }}
                >
                  Create Appointment
                </p>
              </div>
            </div>
            <div className="admin_create_appointment_section_header">
              <h2>Personal Event Information</h2>
            </div>
            <div className="admin_create_appointment_input_information_container">
              <div className="admin_create_appointment_label">Title</div>
              <div
                role="combobox"
                aria-haspopup="listbox"
                aria-owns="react-autowhatever-1"
                aria-controls="react-autowhatever-1"
                aria-expanded="false"
                className="react-autosuggest__container"
              >
                <input
                  type="text"
                  autoComplete="off"
                  aria-autocomplete="list"
                  aria-controls="react-autowhatever-1"
                  className="react-autosuggest__input"
                  placeholder={"Create a title for your event"}
                  value={adminPersonalEventTitle}
                  maxLength={200}
                  onChange={(e) =>
                    dispatch(ACTION_ADMIN_PERSONAL_EVENT_TITLE(e.target.value))
                  }
                />
              </div>
            </div>
            <div className="admin_create_appointment_input_information_container">
              <div className="admin_create_appointment_label">Notes</div>
              <div
                role="combobox"
                aria-haspopup="listbox"
                aria-owns="react-autowhatever-1"
                aria-controls="react-autowhatever-1"
                aria-expanded="false"
                className="react-autosuggest__container"
              >
                <input
                  type="text"
                  autoComplete="off"
                  aria-autocomplete="list"
                  aria-controls="react-autowhatever-1"
                  className="react-autosuggest__input"
                  placeholder={"Enter optional notes here"}
                  value={adminPersonalEventNotes}
                  maxLength={200}
                  onChange={(e) =>
                    dispatch(ACTION_ADMIN_PERSONAL_EVENT_NOTES(e.target.value))
                  }
                />
              </div>
            </div>
            <div className="admin_create_appointment_input_information_container">
              <div className="admin_create_appointment_label">Staff</div>
              <Dropdown
                options={employeeOptions()}
                onChange={(choice) =>
                  dispatch(ACTION_ADMIN_PERSONAL_EVENT_STAFF(choice))
                }
                value={
                  adminAppointmentStaffMember && !adminPersonalEventStaff
                    ? adminAppointmentStaffMember
                    : adminPersonalEventStaff
                }
                controlClassName="react-autosuggest__input"
                className="react-autosuggest__container"
                placeholder={
                  adminAppointmentStaffMember && !adminPersonalEventStaff
                    ? adminAppointmentStaffMember
                    : adminPersonalEventStaff
                    ? adminPersonalEventStaff
                    : "Enter staff member with which to associate this personal event"
                }
                placeholderClassName={
                  adminAppointmentStaffMember && !adminPersonalEventStaff
                    ? "admin_create_appointent_dropdown_placeholder_time"
                    : adminPersonalEventStaff
                    ? "admin_create_appointent_dropdown_placeholder_time"
                    : "admin_create_appointent_dropdown_placeholder_no_time"
                }
              />
            </div>
            <div className="admin_create_appointment_section_header">
              <h2>Personal Event Time</h2>

              <div className="admin_personal_event_checkbox_container">
                <p>All day?</p>
                <span
                  className="fa-layers fa-fw client_consent_form_checkbox"
                  onClick={handleAllDayToggle}
                >
                  <FontAwesomeIcon
                    color="rgba(155, 155, 155, 0.4)"
                    transform="grow-10"
                    icon={faSquare}
                  />
                  {adminPersonalEventAllDay ? checkMark() : null}
                </span>
                <p>Block time?</p>
                <span
                  className="fa-layers fa-fw client_consent_form_checkbox"
                  onClick={handleBlockTimeToggle}
                >
                  <FontAwesomeIcon
                    color="rgba(155, 155, 155, 0.4)"
                    transform="grow-10"
                    icon={faSquare}
                  />
                  {adminPersonalEventBlockTime ? checkMark() : null}
                </span>
              </div>
            </div>
            <div className="admin_create_appointment_input_information_container">
              <div className="admin_create_appointment_label">Date</div>
              <DayPickerInput
                classNames={{
                  container: "react-autosuggest__container",
                  overlay: "",
                  overlayWrapper: clickOutsideDayPicker
                    ? "react-autosuggest__input_hide"
                    : "",
                }}
                dayPickerProps={{ disabledDays: { before: new Date() } }}
                inputProps={{
                  className: "react-autosuggest__input",
                  style: {
                    color: "rgb(74, 144, 226)",
                  },
                }}
                formatDate={formatDate}
                parseDate={parseDate}
                onDayChange={(day) =>
                  dispatch(ACTION_ADMIN_PERSONAL_EVENT_DATE(day))
                }
                format="L"
                value={
                  adminAppointmentDate && !adminPersonalEventDate
                    ? adminAppointmentDate
                    : adminPersonalEventDate
                }
                placeholder="Enter your event date here"
              />
            </div>
            <div className="admin_create_appointment_input_information_container">
              <div className="admin_create_appointment_label admin_create_appointment_double_label">
                Start Time
              </div>
              <Dropdown
                options={timeOptions()}
                onChange={(choice) =>
                  dispatch(ACTION_ADMIN_PERSONAL_EVENT_START_TIME(choice.value))
                }
                value={adminPersonalEventStartTime}
                controlClassName="react-autosuggest__input"
                className="react-autosuggest__container"
                placeholder={
                  adminPersonalEventStartTime
                    ? adminPersonalEventStartTime
                    : "Start Time"
                }
                placeholderClassName={
                  adminPersonalEventStartTime
                    ? "admin_create_appointent_dropdown_placeholder_time"
                    : "admin_create_appointent_dropdown_placeholder_no_time"
                }
              />
              <div className="admin_create_appointment_label admin_create_appointment_double_label">
                End Time
              </div>
              <Dropdown
                options={timeOptions()}
                onChange={(choice) =>
                  dispatch(ACTION_ADMIN_PERSONAL_EVENT_END_TIME(choice.value))
                }
                value={adminPersonalEventEndTime}
                controlClassName="react-autosuggest__input"
                className="react-autosuggest__container"
                placeholder={
                  adminPersonalEventEndTime
                    ? adminPersonalEventEndTime
                    : "End Time"
                }
                placeholderClassName={
                  adminPersonalEventEndTime
                    ? "admin_create_appointent_dropdown_placeholder_time"
                    : "admin_create_appointent_dropdown_placeholder_no_time"
                }
              />
            </div>
            <div className="admin_square_payment_form_container">
              <div className="sq-payment-form">
                <div
                  className="sq-creditcard"
                  onClick={handleSavePersonalEvent}
                >
                  Save Personal Event
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </Transition>
  );
};

export default AdminPersonalEvent;
