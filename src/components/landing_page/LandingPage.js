import React, { useState, useEffect, useCallback } from "react";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from "body-scroll-lock";
import { useSelector, useDispatch } from "react-redux";
import { Spring, Transition } from "react-spring/renderprops";
import SplashScreen from "./SplashScreen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./LandingPage.css";
import TopAnimationTopShelf from "./TopAnimationTopShelf";
import TopAnimationBottomShelf from "./TopAnimationBottomShelf";
import PottedPlant from "./TopShelf/PottedPlant";
import HandCream from "./TopShelf/HandCream";
import Cream from "./TopShelf/Cream";
import SmallPlant from "./TopShelf/SmallPlant";
import Mirror from "./BottomShelf/Mirror";
import Bottle from "./BottomShelf/Bottle";
import Qtips from "./BottomShelf/Qtips";
import Sunscreen from "./BottomShelf/Sunscreen";
import ACTION_BODY_SCROLL_ALLOW from "../../actions/Body_Scroll/ACTION_BODY_SCROLL_ALLOW";
import ACTION_USER_SCROLLED from "../../actions/Scroll/ACTION_USER_SCROLLED";
import ACTION_USER_SCROLLED_RESET from "../../actions/Scroll/ACTION_USER_SCROLLED_RESET";
import ACTION_SPLASH_SCREEN_COMPLETE from "../../actions/SplashScreenComplete/ACTION_SPLASH_SCREEN_COMPLETE";
import ACTION_SPLASH_SCREEN_HALFWAY from "../../actions/SplashScreenHalfway/ACTION_SPLASH_SCREEN_HALFWAY";

const LandingPage = React.forwardRef((props, ref) => {
  const { Treatments1Ref, LandingPageRef } = ref;
  const [lineRenderScroll, setLineRenderScroll] = useState(false);
  const navbarToggle = useSelector(state => state.navbarToggle.toggle);
  const bodyScrollToggle = useSelector(
    state => state.bodyScrollToggle.overflow
  );
  const scroll = useSelector(state => state.scrollToggle.scroll);
  const cartIsActive = useSelector(state => state.cartIsActive.cartIsActive);
  const splashScreenComplete = useSelector(
    state => state.splashScreenComplete.splashScreenComplete
  );
  const splashScreenHalfway = useSelector(
    state => state.splashScreenHalfway.splashScreenHalfway
  );

  // For comparison after splash screen halfway point
  const [
    currentOrientationSnapshot,
    changeCurrentOrientationSnapshot
  ] = useState(null);

  const dispatch = useDispatch();

  const [isSafari, changeIsSafari] = useState(false);

  const handleSplashScreenHalfway = useCallback(
    el => {
      if (
        Number(el.top.substr(0, 3)) === 100 ||
        Number(el.right.substr(0, 3)) === 100
      ) {
        changeCurrentOrientationSnapshot(props.currentScreenSize);
      } else {
        if (!splashScreenHalfway) {
          dispatch(ACTION_SPLASH_SCREEN_HALFWAY());
        } else {
          if (currentOrientationSnapshot !== props.currentScreenSize) {
            dispatch(ACTION_SPLASH_SCREEN_COMPLETE());
            dispatch(ACTION_BODY_SCROLL_ALLOW());
          }
        }
      }
    },
    [
      dispatch,
      props.currentScreenSize,
      splashScreenHalfway,
      currentOrientationSnapshot
    ]
  );

  useEffect(() => {
    if (splashScreenHalfway) {
      if (props.initialScreenSize >= 600) {
        if (currentOrientationSnapshot !== props.currentScreenSize) {
          dispatch(ACTION_SPLASH_SCREEN_COMPLETE());
          dispatch(ACTION_BODY_SCROLL_ALLOW());
        }
      }
    }
  }, [
    currentOrientationSnapshot,
    props.currentScreenSize,
    props.initialScreenSize,
    splashScreenHalfway,
    dispatch
  ]);

  useEffect(() => {
    if (navigator.vendor === "Apple Computer, Inc.") {
      changeIsSafari(true);
    } else {
      changeIsSafari(false);
    }
  }, [changeIsSafari]);

  const changeScroll = useCallback(() => {
    const userScroll = !props.currentScreenSize
      ? props.initialScreenSize >= 600
        ? window.scrollY < 50
        : window.scrollY < 345
      : props.currentScreenSize >= 600
      ? window.scrollY < 50
      : window.scrollY < 345;
    const userLineRenderScroll = window.scrollY < 40;

    if (!userScroll) {
      dispatch(ACTION_USER_SCROLLED());
    } else {
      dispatch(ACTION_USER_SCROLLED_RESET());
    }

    if (!userLineRenderScroll) {
      setLineRenderScroll(true);
    } else {
      setLineRenderScroll(false);
    }
  }, [
    dispatch,
    setLineRenderScroll,
    props.currentScreenSize,
    props.initialScreenSize
  ]);

  useEffect(() => {
    const preventScroll = e => e.preventDefault();

    if (bodyScrollToggle === "visible") {
      document.body.classList.remove("no_scroll");
      if (!navbarToggle) {
        document.body.classList.remove("no_scroll_no_fixed");
      }
      document.body.classList.add("scroll_reset");
    } else if (bodyScrollToggle === "hidden") {
      document.body.classList.remove("scroll_reset");
      if (navbarToggle) {
        document.body.classList.add("no_scroll_no_fixed");
      } else {
        document.body.classList.add("no_scroll");
      }

      // Required for iOS Landscape Scroll Disabling During Splash Screen
      if (!cartIsActive) {
        if (LandingPageRef) {
          LandingPageRef.current.addEventListener(
            "touchmove",
            preventScroll,
            false
          );
          setTimeout(
            () =>
              LandingPageRef.current.removeEventListener(
                "touchmove",
                preventScroll,
                false
              ),
            props.initialScreenSize >= 600 ? 5300 : 4000
          );
        }
      }
    }
  }, [
    bodyScrollToggle,
    LandingPageRef,
    props.initialScreenSize,
    props.currentScreenSize,
    navbarToggle,
    cartIsActive
  ]);

  useEffect(() => {
    document.addEventListener("scroll", changeScroll);
    return () => {
      document.removeEventListener("scroll", changeScroll);
    };
  }, [scroll, changeScroll]);

  useEffect(() => {
    const LandingPageRefTargetElement = LandingPageRef.current;

    if (!splashScreenComplete) {
      const handleDisableScroll = el => {
        disableBodyScroll({ targetElement: el });
      };

      handleDisableScroll(LandingPageRefTargetElement);
    } else {
      if (!cartIsActive) {
        const handleEnableScroll = el => {
          if (splashScreenComplete && !cartIsActive) {
            enableBodyScroll({ targetElement: el });
          }
        };

        handleEnableScroll(LandingPageRefTargetElement);
      }
    }

    if (!splashScreenComplete) {
      let bodyScrollTimer = setTimeout(
        () => {
          dispatch(ACTION_BODY_SCROLL_ALLOW());
          dispatch(ACTION_SPLASH_SCREEN_COMPLETE());
        },
        !props.currentScreenSize
          ? props.initialScreenSize >= 600
            ? 5300
            : 4400
          : props.initialScreenSize >= 600
          ? props.currentScreenSize >= 600
            ? 5300
            : 4400
          : props.currentScreenSize >= 600
          ? 3000
          : 4400
      );

      return () => {
        clearAllBodyScrollLocks();
        clearTimeout(bodyScrollTimer);
      };
    } else {
      clearAllBodyScrollLocks();
    }
  }, [
    dispatch,
    props.initialScreenSize,
    props.currentScreenSize,
    LandingPageRef,
    splashScreenComplete,
    cartIsActive
  ]);

  // For iOS Rubberbanding Effect on Navbar / Footer
  const portraitOverscroll = () => {
    if (!cartIsActive) {
      if (window.scrollY <= 50) {
        document.body.style.setProperty("background", "rgb(255, 198, 207)");
      } else if (window.scrollY >= 7100) {
        document.body.style.setProperty("background", "rgb(215, 156, 165)");
      } else {
        document.body.style.setProperty("background", "rgb(255, 255, 255)");
      }
    }
  };

  props.currentScreenSize === ""
    ? props.initialScreenSize <= 600
      ? portraitOverscroll()
      : document.body.style.setProperty("background", "rgb(255, 255, 255)")
    : props.currentScreenSize <= 600
    ? portraitOverscroll()
    : document.body.style.setProperty("background", "rgb(255, 255, 255)");

  return (
    <div className="landing_page_container" ref={LandingPageRef}>
      <section className="main_content">
        <div
          className="landing_page_drawing"
          style={{
            zIndex:
              props.currentScreenSize === ""
                ? props.initialScreenSize <= 1000 &&
                  props.initialScreenSize >= 600
                  ? window.scrollY <= 1
                    ? navbarToggle
                      ? "1"
                      : "500"
                    : "1"
                  : "1"
                : props.currentScreenSize <= 1000 &&
                  props.currentScreenSize >= 600
                ? window.scrollY <= 1
                  ? navbarToggle
                    ? "1"
                    : "500"
                  : "1"
                : "1"
          }}
        >
          <PottedPlant initialScreenSize={props.initialScreenSize} />
          <SmallPlant initialScreenSize={props.initialScreenSize} />
          <Cream initialScreenSize={props.initialScreenSize} />
          <HandCream initialScreenSize={props.initialScreenSize} />
          <TopAnimationTopShelf
            currentScreenSize={props.currentScreenSize}
            initialScreenSize={props.initialScreenSize}
            isSafari={isSafari}
          />
          <Mirror initialScreenSize={props.initialScreenSize} />
          <Bottle initialScreenSize={props.initialScreenSize} />
          <Qtips initialScreenSize={props.initialScreenSize} />
          <Sunscreen initialScreenSize={props.initialScreenSize} />
          <TopAnimationBottomShelf
            currentScreenSize={props.currentScreenSize}
            initialScreenSize={props.initialScreenSize}
            isSafari={isSafari}
          />
        </div>
        <Spring
          from={{
            top: !props.currentScreenSize
              ? "100%"
              : props.initialScreenSize >= 600
              ? props.currentScreenSize >= 600
                ? "0%"
                : "100%"
              : props.currentScreenSize >= 600
              ? "0%"
              : "0%",
            right: !props.currentScreenSize
              ? "100%"
              : props.initialScreenSize >= 600
              ? props.currentScreenSize >= 600
                ? "100%"
                : "0%"
              : props.currentScreenSize >= 600
              ? "100%"
              : "0%"
          }}
          to={{
            top: !props.currentScreenSize
              ? props.initialScreenSize >= 600
                ? "0%"
                : "50%"
              : props.initialScreenSize >= 600
              ? props.currentScreenSize >= 600
                ? "0%"
                : "50%"
              : props.currentScreenSize >= 600
              ? "0%"
              : "50%",
            right: !props.currentScreenSize
              ? props.initialScreenSize >= 600
                ? "50%"
                : "0%"
              : props.initialScreenSize >= 600
              ? props.currentScreenSize >= 600
                ? "50%"
                : "0%"
              : props.currentScreenSize >= 600
              ? "50%"
              : "0%"
          }}
          onFrame={el => handleSplashScreenHalfway(el)}
          config={{
            delay: !props.currentScreenSize
              ? props.initialScreenSize >= 600
                ? 3000
                : 2000
              : props.currentScreenSize >= 600
              ? 500
              : 2000,
            duration: 2000
          }}
        >
          {styles => (
            <div
              className="bottom_content"
              style={{
                top: splashScreenComplete
                  ? !props.currentScreenSize
                    ? props.initialScreenSize >= 600
                      ? "0%"
                      : "50%"
                    : props.currentScreenSize >= 600
                    ? "0%"
                    : "50%"
                  : !props.currentScreenSize
                  ? props.initialScreenSize >= 600
                    ? "0%"
                    : `${styles.top}`
                  : props.initialScreenSize >= 600
                  ? props.currentScreenSize >= 600
                    ? "0%"
                    : `${styles.top}`
                  : props.currentScreenSize >= 600
                  ? "0%"
                  : `${styles.top}`,
                right: splashScreenComplete
                  ? !props.currentScreenSize
                    ? props.initialScreenSize >= 600
                      ? "50%"
                      : "0%"
                    : props.currentScreenSize >= 600
                    ? "50%"
                    : "0%"
                  : !props.currentScreenSize
                  ? props.initialScreenSize >= 600
                    ? `${styles.right}`
                    : "0%"
                  : props.initialScreenSize >= 600
                  ? props.currentScreenSize >= 600
                    ? `${styles.right}`
                    : "0%"
                  : props.currentScreenSize >= 600
                  ? `${styles.right}`
                  : "0%"
              }}
            >
              <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{
                  delay: !props.currentScreenSize
                    ? props.initialScreenSize >= 600
                      ? 5000
                      : 4000
                    : props.initialScreenSize >= 600
                    ? props.currentScreenSize >= 600
                      ? 5000
                      : 4000
                    : 4000,
                  duration: 500
                }}
              >
                {styleprops => (
                  <div
                    className="landing_page_text_block"
                    style={{
                      zIndex:
                        props.currentScreenSize === ""
                          ? props.initialScreenSize <= 1000 &&
                            props.initialScreenSize >= 600
                            ? window.scrollY <= 2
                              ? navbarToggle
                                ? "1"
                                : "500"
                              : "1"
                            : "1"
                          : props.currentScreenSize <= 1000 &&
                            props.currentScreenSize >= 600
                          ? window.scrollY <= 2
                            ? navbarToggle
                              ? "1"
                              : "500"
                            : "1"
                          : "1"
                    }}
                  >
                    <h1
                      style={{
                        opacity: splashScreenComplete
                          ? "1"
                          : `${styleprops.opacity}`
                      }}
                    >
                      Customized skin care,
                      <br /> down to a science.
                    </h1>
                    <p
                      className="landing_page_description"
                      style={{
                        opacity: splashScreenComplete
                          ? "1"
                          : `${styleprops.opacity}`
                      }}
                    >
                      We've reimagined the traditional idea of a facial so that
                      we can do the thinking for you. Lay back, relax, and
                      listen to that Peruvian pan flute music. We'll figure out
                      the rest.
                    </p>
                    <div className="call_to_action_buttons_container">
                      <div
                        className="call_to_action_button"
                        style={{
                          opacity: splashScreenComplete
                            ? "1"
                            : `${styleprops.opacity}`
                        }}
                      >
                        <p
                          onClick={() =>
                            props.handleClickToScrollToTreatments(
                              Treatments1Ref
                            )
                          }
                        >
                          GET STARTED NOW
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        opacity: splashScreenComplete
                          ? "1"
                          : `${styleprops.opacity}`,
                        marginTop: lineRenderScroll
                          ? CSS.supports(`(-webkit-overflow-scrolling: touch)`)
                            ? "8rem"
                            : "8rem"
                          : CSS.supports(`(-webkit-overflow-scrolling: touch)`)
                          ? "8rem"
                          : "1.5rem"
                      }}
                      className="landing_page_cta"
                      onClick={() =>
                        props.handleClickToScrollToTreatments(Treatments1Ref)
                      }
                    >
                      <Transition
                        items={lineRenderScroll}
                        from={{
                          opacity: 0,
                          height: "0vh",
                          config: { duration: 100 }
                        }}
                        enter={{
                          opacity: 1,
                          height: "16vh",
                          config: { duration: 100 }
                        }}
                        leave={{
                          opacity: 0,
                          height: "0vh",
                          config: { duration: 100 }
                        }}
                      >
                        {lineRenderScroll =>
                          lineRenderScroll &&
                          (rendered => (
                            <span
                              style={{
                                opacity: `${rendered.opacity}`,
                                height: `${rendered.height}`
                              }}
                              className="cta_line"
                            />
                          ))
                        }
                      </Transition>
                      <FontAwesomeIcon
                        className="landing_page_bottom_icon"
                        icon={faChevronDown}
                      />
                    </div>
                  </div>
                )}
              </Spring>
            </div>
          )}
        </Spring>
        <div className="splash_screen">
          <SplashScreen currentScreenSize={props.currentScreenSize} />
        </div>
      </section>
    </div>
  );
});

export default LandingPage;
