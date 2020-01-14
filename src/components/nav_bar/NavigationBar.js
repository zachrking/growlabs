import React from "react";
import Hamburger from "./Hamburger";
import "./NavigationBar.css";

const NavigationBar = React.forwardRef((props, ref) => {
  const { LandingPageRef, Treatments1Ref, AddOnsRef, InstagramRef } = ref;

  const changeNavBarColor = () => {
    if (props.currentScreenSize === "") {
      if (props.initialScreenSize >= 600) {
        if (props.navbarToggle) {
          return "rgb(255, 198, 207)";
        } else {
          if (props.scroll) {
            return "rgb(255, 198, 207)";
          } else {
            return "linear-gradient(to right, rgb(251, 251, 251) 0%, rgb(251, 251, 251) 50%, rgb(255, 198, 207) 50.05%, rgb(255, 198, 207) 100%)";
          }
        }
      } else {
        return "rgb(255, 198, 207)";
      }
    } else {
      if (props.currentScreenSize >= 600) {
        if (props.navbarToggle) {
          return "rgb(255, 198, 207)";
        } else {
          if (props.scroll) {
            return "rgb(255, 198, 207)";
          } else {
            return "linear-gradient(to right, rgb(251, 251, 251) 0%, rgb(251, 251, 251) 50%, rgb(255, 198, 207) 50.05%, rgb(255, 198, 207) 100%)";
          }
        }
      } else {
        return "rgb(255, 198, 207)";
      }
    }
  };

  return (
    <nav
      className="navbar"
      style={{
        background: changeNavBarColor(),
        filter: props.navbarToggle
          ? "none"
          : props.scroll
          ? "drop-shadow(0 0 3px rgba(0, 0, 0, 0.4)"
          : "none",
        transition: "background 0.5s ease, filter 0.5s ease",
        height:
          props.currentScreenSize === ""
            ? props.initialScreenSize <= 1000 && props.initialScreenSize >= 600
              ? window.scrollY <= 1
                ? "30vh"
                : "15vh"
              : "8vh"
            : props.currentScreenSize <= 1000 && props.currentScreenSize >= 600
            ? window.scrollY <= 1
              ? "30vh"
              : "15vh"
            : "8vh",
        alignItems:
          props.currentScreenSize === ""
            ? props.initialScreenSize <= 1000 && props.initialScreenSize >= 600
              ? window.scrollY <= 1
                ? "flex-start"
                : "center"
              : "center"
            : props.currentScreenSize <= 1000 && props.currentScreenSize >= 600
            ? window.scrollY <= 1
              ? "flex-start"
              : "center"
            : "center"
      }}
    >
      <h1
        style={{
          alignSelf:
            props.currentScreenSize === ""
              ? props.initialScreenSize <= 1000 &&
                props.initialScreenSize >= 600
                ? window.scrollY <= 1
                  ? "flex-start"
                  : "center"
                : "center"
              : props.currentScreenSize <= 1000 &&
                props.currentScreenSize >= 600
              ? window.scrollY <= 1
                ? "flex-start"
                : "center"
              : "center"
        }}
      >
        <a className="logo" href="/">
          <svg
            height={
              props.currentScreenSize === ""
                ? props.initialScreenSize >= 1800
                  ? "8rem"
                  : "5rem"
                : props.currentScreenSize >= 1800
                ? "8rem"
                : "5rem"
            }
            viewBox="0 0 463.021 463.021"
          >
            <g
              transform={
                props.currentScreenSize === ""
                  ? props.initialScreenSize <= 1000 &&
                    props.initialScreenSize >= 600
                    ? window.scrollY <= 1
                      ? "translate(-35 185.02)"
                      : "translate(-35 275.02)"
                    : "translate(-35 275.02)"
                  : props.currentScreenSize <= 1000 &&
                    props.currentScreenSize >= 600
                  ? window.scrollY <= 1
                    ? "translate(-35 185.02)"
                    : "translate(-35 275.02)"
                  : "translate(-35 275.02)"
              }
            >
              <path d="M246.67-16.424c-6.717-.848-15.482-4.326-20.685-8.21-4.84-3.611-9.82-9.104-12.337-13.608-2.515-4.5-4.754-10.27-5.57-14.356-.662-3.31-.663-12.928-.002-16.468.999-5.346 4.36-13.258 7.488-17.63 3.103-4.335 7.404-8.506 11.815-11.456 2.44-1.632 8.649-4.679 10.037-4.926.842-.15 1.072-.075 1.636.534.64.692 1.75 3.487 1.75 4.41 0 .845-1.156 1.76-4.435 3.51-4.858 2.592-7.607 4.514-10.249 7.164-4.811 4.827-8.52 11.505-10.212 18.393-.54 2.196-.618 3.166-.62 7.673-.002 5.52.298 7.801 1.588 12.087.892 2.965 2.996 7.068 4.961 9.677 2.174 2.885 6.155 6.866 8.908 8.907 3.922 2.909 10.336 5.65 14.955 6.39 1.197.193 4.47.347 7.54.355 5.958.015 7.414-.23 11.861-1.995 5.817-2.31 9.732-4.906 13.96-9.258 3.076-3.167 4.394-5.025 6.34-8.94 2.992-6.016 3.9-9.705 3.917-15.9.023-8.972-1.59-14.401-6.43-21.643-4.124-6.17-9.598-10.763-15.97-13.401-2.517-1.042-8.964-2.792-10.286-2.792h-.82l.192 7.141.193 7.142-.796.796c-.746.746-.924.796-2.812.796-5.583 0-11.692 2.683-15.517 6.814-4.409 4.761-6.014 9.686-5.49 16.846.5 6.835 5.943 14.047 12.516 16.58 4.91 1.892 10.396 2.076 15.065.503 5.106-1.72 9.41-5.505 11.895-10.463 1.54-3.074 1.874-4.735 1.881-9.378.006-3.913-.031-4.205-.805-6.375-1.225-3.437-2.546-5.56-5.45-8.762-2.927-3.226-2.926-3.225-1.666-5.391.951-1.634 2.105-2.755 2.835-2.755 1.517 0 5.261 3.47 7.756 7.187 3.923 5.848 5.394 11.105 5.061 18.08-.239 4.992-1.575 9.24-4.127 13.12-7.295 11.087-19.97 15.866-32.505 12.256-4.571-1.316-8.159-3.509-12.053-7.366-3.367-3.334-5.26-6.45-6.879-11.318-1.026-3.088-1.306-5.02-1.293-8.94.01-2.943.13-4.026.683-6.158 2.12-8.165 7.91-15.431 15.12-18.972 2.852-1.402 6.424-2.65 7.583-2.65.395 0 .816-.15.933-.331s.28-3.486.358-7.342c.159-7.704.323-8.54 1.754-8.899 1.023-.257 7.698.114 10.009.556 3.025.579 8.774 2.591 12.006 4.202 5.47 2.727 9.603 5.86 13.367 10.132 4.587 5.206 6.946 9.266 9.025 15.532 1.382 4.167 1.865 6.431 2.266 10.637.977 10.24-1.977 21.02-8.154 29.753-2.37 3.352-7.48 8.438-10.605 10.555-5.575 3.778-11.934 6.413-17.99 7.453-3.557.612-10.565.873-13.494.503zm145.87-.26c-.29-.109-.736-.43-.99-.713-.256-.284-4.742-10.984-9.97-23.778a48508.244 48508.244 0 00-12.64-30.91c-1.723-4.206-3.336-7.776-3.585-7.932-.938-.592-.91-.651-8.009 16.77-8.71 21.377-9.22 22.52-10.209 22.859-1.492.511-1.935.113-3.28-2.946-1.521-3.456-9.317-22.38-16.296-39.556l-5.133-12.633-3.704.014c-4.655.017-5.85.209-5.743.92.104.688 10.04 25.45 19.85 49.467l7.89 19.315 5.704.07 5.704.072 3.638-9.067c5.412-13.489 7.208-17.693 7.848-18.374.634-.674 1.72-.802 2.414-.284.244.182 1.41 2.593 2.59 5.358 4.814 11.274 11.092 26.484 11.092 26.876 0 .112-.298.558-.663.991-.786.935-4.262 2.316-5.132 2.04-.994-.316-1.79-1.76-4.6-8.343-3.327-7.799-3.923-9.056-4.361-9.199-.404-.131-1.03 1.212-4.29 9.207-3.211 7.878-3.276 7.99-4.768 8.27-.654.124-5.348.17-10.43.105-8.484-.11-9.27-.158-9.587-.591-.886-1.211-17.367-41.14-28.39-68.78-5.875-14.73-5.612-13.992-5.194-14.563.548-.75 2.467-.874 13.798-.894 8.093-.015 10.703.058 11.04.311.596.448 2.198 3.975 5.742 12.634 10.722 26.201 12.92 31.311 13.526 31.428.512.099.024 1.196 8.837-19.918 8.613-20.635 8.113-19.527 8.996-19.929 1.923-.876 1.593-1.557 14.893 30.777 7.067 17.18 12.573 30.371 13.557 32.478.764 1.636.509 2.16 8.674-17.793 11.495-28.091 16.717-41.227 16.717-42.053 0-.53-.131-.545-4.432-.541-2.437.002-4.567.091-4.733.198-.352.228-.33.174-6.443 15.12-7.464 18.244-7.9 19.211-8.857 19.647-1.394.635-5.962-1.435-5.962-2.701 0-.778 9.183-24.041 14.056-35.606l1.574-3.736 1.217-.167c.67-.092 6.194-.167 12.274-.167h11.056l.549.697c.301.384.548.846.548 1.028 0 .8-33.41 83.364-33.965 83.937-.473.49-1.81.814-2.417.587zm-313.55-.247c-6.669-.512-14.214-3.282-20.737-7.611-2.252-1.495-3.958-2.931-6.507-5.482-6.062-6.065-9.682-12.435-12.093-21.278l-.84-3.08.01-6.88c.007-6.445.051-7.062.69-9.789 1.23-5.256 3.823-11.259 6.8-15.743 1.622-2.443 5.398-6.646 8-8.905 11.38-9.875 28.374-13.262 42.81-8.532 6.394 2.094 12.169 5.623 17.134 10.469 3.143 3.068 4.31 4.536 4.311 5.43.001.637-1.325 2.118-8.78 9.806l-6.608 6.813h-1.147c-1.072 0-1.243-.107-2.628-1.654-3.43-3.83-7.434-6.447-11.528-7.533-2.303-.611-6.93-.603-9.252.017-3.884 1.037-8.28 3.898-10.735 6.987-1.363 1.716-3.38 5.665-3.834 7.507-.187.759-.266 2.916-.208 5.688.104 4.94.25 5.5 2.358 9.016 2.46 4.1 6.354 7.32 10.637 8.793 2.025.697 6.446 1.182 8.814.967 4.745-.43 10.001-3.382 13.326-7.486 1.987-2.452 2.865-3.25 3.579-3.25.762-.003 3.578 1.395 4.431 2.198 1.135 1.068.993 2.122-.61 4.518-2.721 4.07-7.61 8.096-12.095 9.963-1.103.46-3.146 1.138-4.54 1.507-2.191.58-3.084.671-6.633.671-3.57 0-4.436-.088-6.688-.685-13.527-3.582-22.686-17-20.811-30.486.92-6.618 4.18-13.045 8.658-17.069 3.702-3.326 9.244-6.159 13.73-7.017 2.67-.51 8.953-.494 11.196.03 3.547.83 8.126 2.987 11.07 5.215l1.677 1.27.9-.556c.955-.59 5.139-4.964 5.139-5.372 0-.439-1.949-2.096-4.17-3.545-3.976-2.595-8.167-4.294-13.293-5.388-3.413-.729-11.099-.872-14.155-.264-2.474.493-7.412 2.206-9.75 3.382-5.198 2.616-10.22 7.07-13.76 12.206-2.337 3.391-4.79 9.638-5.593 14.238-.54 3.095-.533 10.444.012 13.317 1.21 6.378 4.707 12.945 9.633 18.086 5.445 5.683 11.335 8.98 19.061 10.671 3.235.708 12.427.706 15.478-.004 8.704-2.024 16.927-7.562 21.789-14.675 2.88-4.213 5.063-9.205 5.992-13.703.55-2.665.426-3.154-.855-3.366-.548-.09-6.316-.166-12.818-.167l-11.822-.003-.573-.804c-.508-.715-.562-1.08-.48-3.287.08-2.194.165-2.561.732-3.165l.641-.682h32.888l.576.612c.67.715.735 2.25.31 7.388-.33 3.963-.84 6.453-2.112 10.284-5.163 15.557-18.767 27.068-35.454 30.002-2.665.469-7.993.663-11.273.41zm65.838-3.335l-.86-.685v-80.825l.756-.724.756-.724 11.228.08c10.223.072 11.292.12 11.944.548l.716.469v55.294l-.86.541c-.737.464-1.194.527-3.183.443-1.97-.082-2.413-.187-2.91-.684l-.588-.587-.132-23.925c-.095-17.133-.216-24.009-.428-24.22-.348-.347-8.92-.261-9.274.094-.121.12-.255 14.619-.297 32.217-.07 28.895-.037 32.012.339 32.156.682.261 3.623-.915 22.742-9.092 20.02-8.563 21.873-9.333 22.468-9.333.222 0 .738.288 1.146.639l.743.638.091 10.673c.097 11.353-.054 15.235-.623 16.012-.328.448-.927.482-8.548.482-9.975 0-9.312.253-9.303-3.547.01-3.906-.099-3.83 5.646-3.994 2.543-.073 4.713-.221 4.822-.33.62-.623.36-9.38-.287-9.628-.19-.073-2.529.818-5.2 1.979-12.916 5.616-38.407 16.329-39.435 16.574-.414.099-.885-.074-1.47-.54z" />
            </g>
            <g
              transform={
                props.currentScreenSize === ""
                  ? props.initialScreenSize <= 1000 &&
                    props.initialScreenSize >= 600
                    ? window.scrollY <= 1
                      ? "translate(-35 85.146)"
                      : "translate(-35 175.146)"
                    : "translate(-35 175.146)"
                  : props.currentScreenSize <= 1000 &&
                    props.currentScreenSize >= 600
                  ? window.scrollY <= 1
                    ? "translate(-35 85.146)"
                    : "translate(-35 175.146)"
                  : "translate(-35 175.146)"
              }
            >
              <path
                id="L_labs"
                d="M315.71 97.96v.561l-.093.562-.188.514-.187.421-.046.327.046.234-.093.187-.14.187-.14.375-.188.514-.187.515-.094.327-.14.42-.187.422-.14.468-.14.374-.14.327-.095.421-.14.515-.187.374-.14.327-.14.328-.14.467-.094.281-.094.28-.047.234-.093.234-.094.187-.047.14-.14.188s.047 0-.094.187c-.14.187.14-.234.14-.234l-.28.748-.14.562-.234.514-.234.842-.187.421-.093.374-.187.28-.234.469-.187.56-.375 1.077-.187.42-.187.422-.187.56-.047.281-.093.188-.28.56-.141.422-.094.327-.28.655-.234.561-.047.187-.047.234-.047.094-.187.234-.093.233-.047.234-.047.28-.14.188-.14.374-.14.234-.141.327-.047.281-.187.327-.093.468-.047.094-.047.187-.047.093-.093.094-.14.234-.188.514-.14.234-.047.234-.093.187-.14.234-.047.187-.047.14-.094.094v.14l-.047.094-.046.093-.094.187-.093.14-.14.094v.28l-.048.281-.093.14-.047.188v.187l-.047.187-.093.093-.047.187-.093.188-.047.233-.14.187-.094.234-.14.234-.047.187-.094.468-.187.28-.047.235-.046.14-.14.374-.094.187-.047.187-.093.187-.14.187-.048.187-.046.188-.047.187-.094.14-.28.795-.094.374-.047.234-.093.187-.094.234-.14.28-.093.328-.14.234-.094.234-.094.28-.093.234-.14.328-.047.187-.14.608-.188.234v.28l-.047.281-.046.28-.094.281-.093.234-.234.28-.094.375-.14.42-.047.422-.093.28-.14.328-.094.374v.421l-.047.28-.14.422-.047.374v.795l.047.28.093.281.047.187.374.328.328.187.093.187.28.14.281.14.094.234.327.094.234.187.374.187.187.234.375.093.187.14.514.094.187.094.234.14.561.094.468-.047h.561l.328-.047.374-.047.28-.093.281-.187.374-.094.281-.187.28-.14.188-.234.234-.187.233-.047.234-.14.094-.14.187-.094.093-.187.281-.094.14-.187.281-.234.234-.047.234-.14.14-.14.28-.187.094-.14.28-.188.141-.187.187-.187.14-.14h.234v-.28l.281-.141.327-.094.234-.187.328-.187.187-.093.327-.281.14-.234.234-.14.14-.187.281-.187.234-.234.28-.187.235-.234.234-.28.233-.141.328-.234.327-.187.187-.187.234-.187.328-.187.093-.14.187-.188.234-.093.374-.28.28-.235.188-.187.327-.093.234-.234.234-.14.328-.188.233-.093.234-.14.14-.094.14-.14.235-.187.28-.187.375-.14.327-.188.327-.28.421-.234.421-.234.328-.187.28-.094.28-.234.328-.14.374-.187.328-.234.234-.14.234-.14.374-.234.468-.234.327-.187.28-.094.14-.187.188-.14.14-.047.187-.047.234-.187.187-.047.187-.14.421-.047.14-.14.281-.14.234-.14.328-.141.467-.14.328-.188.514-.093.14-.14.328-.14.327-.094.562-.14.42-.094.281-.234.374-.093.14-.14.375-.141.093-.234.14-.093v-.094l-.093-.187-.327-.187-.187-.14-.094-.094-.187-.093-.187-.14-.14-.094-.234-.14-.328-.094-.327-.047-.374-.047-.608-.093h-1.17l-.467.093-.468.14-.327.047-.421.047-.374.14-.328.188-.28.14-.281.14-.328.094-.28.093-.328.094-.327.14-.234.187-.327.047-.28.187-.188.094-.327.046-.375.188-.42.14-.421.28-.234.094-.281.14-.234.234-.28.14-.328.14-.374.141-.421.28-.374.141-.374.187-.375.28-.28.188-.421.327-.328.094-.187.187-.233.14-.328.094-.42.374-.281.234-.281.187-.468.28-.28.14-.375.188-.187.234-.655.374-.467.234-.28.234-.235.187-.561.374-.374.327-.14.187-.234.234-.375.28-.327.048-.42.42-.235.234-.28.234-.281.281-.28.234-.375.187-.28.234-.234.187-.421.327-.234.187-.421.328-.327.327-.421.374-.234.047-.374.047-.281.28-.468.422-.28.233-.328.375-.187.093-.28.14-.094.094-.28.093h-.141l-.047-.14v-.327l.094-.328.093-.234.047-.187.047-.187v-.561l.187-.187.14-.187.14-.28.047-.469v-.467l.28-.234.141-.515.187-.42v-.562l.094-.187.187-.514.14-.608.094-.375.14-.14.234-.234.047-.234.093-.234v-.701l.187-.187v-.328l.14-.187.14-.28.048-.328.047-.187.327-.234.047-.28.187-.187v-.608l.093-.188.094-.14.047-.28.14-.281.093-.187.047-.094.094-.14v-.28l.047-.188.14-.28.093-.14.094-.188.047-.093.046-.234.094-.14.28-.188.14-.234.048-.233-.047-.281-.047-.234.094-.28.14-.188.14-.14.047-.187.187-.234.14-.234v-.374l.094-.28.14-.234.14-.234.094-.234.094-.234v-.28l.093-.188.094-.187.187-.14v-.234l.093-.093v-.188l-.047-.093.047-.047.094-.14.093-.28.094-.141.093-.234.094-.187.047-.327.093-.14.14-.141.14-.187v-.28l.048-.281.093-.188.094-.187.14-.093.093-.234.047-.374.047-.421.14-.187.047-.374.14-.187.14-.328.094-.234.094-.14.14-.187.14-.234.094-.28v-.468l.14-.187.187-.281.094-.421.093-.468.234-.374.187-.28v-.281l.187-.234.14-.234.048-.42.046-.328.14-.28.141-.235.047-.28.187-.234.14-.28.047-.235.187-.374.047-.234.14-.187.14-.514v-.328l.14-.234.141-.327.094-.374.234-.234.093-.468.14-.468.14-.28.234-.328.094-.233.094-.328-.047-.28.047-.281.28-.421.047-.374.094-.374.187-.281.046-.374.14-.187.094-.468.094-.234v-.234l.047-.28.187-.515.233-.327v-.234l.14-.328.048-.327v-.42l-.094-.282-.047-.374-.187-.42-.187-.281-.093-.234-.515-.234-.093-.14-.234-.094-.187-.093-.234-.094-.234-.047-.327-.093h-.281l-.327-.047h-.608z"
              />
              <path
                id="BS_labs"
                d="M349.07 133.82l-.033-.43.132-.628.066-.397.232-.695.066-.297.033-.232.132-.198.199-.232v-.165l.099-.166.132-.198.066-.198v-.364l.133-.166.198-.165v-.066l.066-.165v-.166l.033-.066.033-.1.265-.198.033-.231.066-.132.1-.166v-.066l.066-.165.099-.1v-.065l.033-.166.132-.132.1-.1.065-.132v-.066l.1-.198.033-.199.066-.099.033-.198.132-.066.066-.1.1-.099.033-.165.066-.165.066-.1.099-.066.033-.231.165-.1.034-.099.099-.099.165-.132.132-.232.133-.264.165-.265.066-.198.066-.166.1-.198.099-.166.099-.099.033-.099.1-.165.032-.166.166-.165.099-.265.1-.165.164-.198.265-.563.165-.297.232-.364.165-.132.199-.298.132-.232.1-.198.198-.397.165-.298.265-.297.132-.232.033-.165.265-.298.297-.397.265-.363.132-.298.232-.364.231-.264.199-.331.165-.265.132-.364.199-.198.33-.298.199-.33.198-.397.298-.364.33-.463.133-.232.165-.33.133-.298.132-.33.231-.331.364-.397.33-.265.166-.33.166-.2.132-.264.231-.397.364-.264.166-.562.33-.331.199-.43.198-.232.166-.264.231-.265.199-.231.297-.397.33-.53.398-.495.33-.397.364-.463.265-.397.264-.364.298-.463.43-.562.298-.463.297-.397.199-.53.364-.23.231-.265.166-.166.099-.132.231-.132.397-.033.364.099.33.198.298.166.232.165.198.165.265.232.198.231.1.232.099.33.066.2.033.297v.297l-.166.232-.198.264-.298.43-.198.331-.198.298-.298.297-.265.397-.165.331-.199.43-.297.265-.132.264-.199.199-.165.363-.133.232-.198.33-.298.232-.066.265-.264.364-.232.363-.33.43-.232.331-.232.364-.165.297-.198.199-.199.33-.198.331-.1.232-.264.264-.298.166-.132.198-.165.298-.066.231-.199.232-.364.496-.297.43-.199.33-.198.265-.331.463-.132.265-.133.231-.132.232-.264.364-.199.231-.231.331-.166.198-.165.265-.165.198-.067.133-.033.165.033.1.232-.1.43-.463.264-.33.331-.265.33-.232.53-.397.265-.198.198-.265.43-.43.595-.33.596-.463.397-.199.198-.231.265-.166.496-.198.297-.298.166-.132.43-.132.297-.166.199-.132.132-.232.298-.099.397-.264.231-.033.364-.199.298-.165.562-.232.628-.264.397-.166.298-.132.33-.132.629-.265.727-.165.629-.066.86-.033h.694l.728.033.628.132.562.165.53.199.43.364.496.264.33.232.563.463.33.33.232.298.33.53.1.43.099.43-.033.495.066.728v.562l-.033.232-.033.198.628-.364.629-.364.562-.165.595-.364.53-.297.462-.265.662-.298.959-.43.893-.33.794-.364.562-.298.893-.33 1.058-.364.53-.397.76-.132.86-.364.529-.1.562-.165 1.059-.463.793-.496 1.158-.628.827-.43.893-.43.76-.298.827-.43.794-.397.96-.43 1.024-.363.893-.298 1.555-.43.76-.364 1.323-.264.827-.265.76-.165 1.026-.331.96-.33.561-.133.596-.066.628-.033h1.125l.363.033.265.033.1.1.098.131.1.133.297.363.265.232.033.198.198.265.331.463.132.298.265.397.265.562.066.397v.793l.231.53-.165.132-.232.231-.297.166-.298.231-.33.066-.232.166-.265.132-.297.198-.298.265-.232.198-.396-.165-.232-.298-.198-.198-.067-.198-.132-.199-.033-.198-.1-.166-.065-.231.033-.166-.033-.231-.066-.165-.1-.1-.198-.066-.165-.033h-.199l-.264.033-.232.066-.33.066-.232.067-.364.099-.595.132-.695.364-.628-.033-.265.099-.231.066-.364.199-.232.132-.264.033-.265.066-.231.198-.397.067h-.33l-.2.132-.198.165-.099.132-.33.067-.43.066-.331.132s-.133.165-.298.165c-.165 0-.463.033-.463.033l-.628.364-.562.298-.496.198-.496.1-.298.165-.298.33-.33.067-.331.231-.43.1-.43.297-.298.198-.397.298-.562.232-.397.198-.463.232-.694.43-.728.396-.463.265-.694.364-.364.231-.364.298-.397.165-.364.331-.43.265-.661.363-.496.265-.232.298-.297.231-.166.232-.198.231.033.199.132.066.232.099h.33l.364.033s.43.033.53.066c.099.033.462.132.462.132l.43.066.53.199.893.1.793.164.794.232.992.364.926.297.992.364.96.364.628.364.794.529.694.595.695.629.463.496.33.43 1.092-.794.33-.033h.2l.297-.033.397-.298.893-.496.33-.132.496-.265.397-.132.827-.463.893-.364.827-.43.496-.264.298-.199.595-.165.562-.298.397-.1.33-.396.265-.232.232-.099.298-.066.661-.165.562-.1.199-.065.165-.199.364-.132.992-.463.463-.43.96-.1.925-.132.53-.099.66-.033h.563l.397.165.198.397.133.364v.364l-.133.33-.165.298-.231.298-.364.298-.364.231-.463.165-.33.265-.298.198-.331.265-.43.1-.463.165-.629.231-.463.33-.463.2-.396.032-.265.265-.595.33-.331.2-.298.264-.463.364-.628.43-.827.396-.628.331-.397.33-.53.232-.396.033h-.331l-.33.331-.2.199-.33-.033-.231.165-.265.298-.364.297-.661.033-.827.331-.463.33-.397.265-.496.199-.265.165-.165.33v.563l.165.43-.033.463v.628l-.099.364-.132.496-.232.596-.397.628-.595.53-.628.462-.397.397-.496.298-.463.297-.364.265-.496.298-.496.297-.794.364-1.091.562-.993.364-.926.298-.33.264-.794.298-.96.463-1.058.265-.86.297-.727.232-.628.132-.364.033h-.265l-.43-.066-.364-.33-.297-.199-.232-.33-.364-.497-.198-.43-.165-.463-.066-.297-.133-.397-.231-.629-.033-.595.033-.562.165-.43.33-.166.464-.132.397-.463.529-.364.727-.463.53-.529.959-.794.992-.562.595-.397.596-.43.562-.364.86-.529.694-.397.86-.463 1.125-.727.562-.33.86-.398.33-.198.331-.166.166-.165.033-.165-.133-.133-.264-.066-.595-.198-.761-.199-.794-.264-1.224-.298-.893-.297-1.124-.199-.926-.198-1.257-.298-1.058-.33-.992-.298-.86-.397-.728-.397-.595-.595-.496-.596-.463-.727-.232-.397-.099-.463-.066-.463-.199-.629-.099-.363-.1-.265v-.232l-.032-.165-.1-.066-.23.033-.166.198-.298.1-.33.165-.596.231-.694.397-.728.43-.76.397-.265.265-.364.099-.562.397-.993.628-.826.496-.662.397-.496.298-.86.397-.827.496-.661.595-.53.662-.396.595-.893.86-.595.727-.629.794-.43.463-.43.595-.496.629-.364.397-.397.562-.463.53-.562.66-.562.629-.662.694-.231.397-.298.265-.297.265-.596.628-.33.496-.298.298-.397.397-.496.463-.53.628-.33.298-.231.363-.43.331-.463.364-.364.463-.728.794-.727.661-.761.794-.265.397-.363.33-.463.397-.199.066-.132.331-.33.199-.43.33-.53.629-.628.463-.761.595-.53.463-.694.364-.33.132-.364.066-.397.034h-.43l-.43-.1-.397-.297-.496-.298-.364-.43-.198-.132-.298-.199-.265-.264-.099-.298v-.231l.033-.199.1-.132.231-.232.165-.33.067-.298.396-.53.463-.462.497-.662.463-.496.231-.264.132-.43.133-.298.231-.198.33-.1.332-.396.198-.331.1-.199.297-.198.1-.298.297-.364.297-.231.364-.364.43-.397.364-.43.43-.595.595-.53.298-.396.43-.298.694-.694.364-.662.397-.231.364-.232.496-.397.231-.463.662-.463.661-.661.86-.728.596-.496.562-.661.43-.232.694-.595.662-.463.529-.496.694-.53.596-.528.661-.464.662-.562.463-.364.727-.661.53-.53.86-.892.396-.629.298-.529.496-.628.397-.695.496-.595.364-.562.297-.562.298-.596.265-.463.198-.595.066-.43.232-.33.099-.63-.066-.33-.166-.1h-.297l-.397.067-.562.165-.364.034-.43.066-.298.099-.364.132-.562.165-.794.265-.595.265-.893.397-1.157.661-.926.463-.662.463-.562.463-.728.43-.827.628-.86.629-.694.694-.794.728-.76.694-.86.827-.926.827-.728.827-.364.661-.529.364-.76.96-.563.628-.529.628-.397.53-.463.595-.595.76-.496.76-.53.728-.628.927-.562.826-.496.86-.463.728-.43.794-.463.793-.199.43-.132.331-.1.562-.33.265-.364.1-.397.065-.727-.033-.53-.231-.43-.232-.363-.298-.364-.33-.33-.397-.298-.232-.166-.264z"
              />
              <path d="M355.85 105.35l-.364-.033-.297-.033h-.96l-.165-.033-.231.165-.298.198-.199.133-.165.165-.1.1-.098.165-.1.165-.165.1-.165.132-.133.165-.231.165-.132.166-.133.132-.099.066-.132.165-.265.166-.099.165-.1.1-.131.065-.232.199-.198.231-.1.133-.132.132-.165.132-.066.166-.133.165-.099.132-.165.133-.132.132-.331.364-.232.264-.33.298-.199.165-.165.166-.166.165-.066.066-.33-.132-.497-.166-.264-.099-.232-.066-.529-.066-.529-.033-.562-.066h-1.488l-.364.033-.265.033-.727.43-.497.364-.43.297-.463.298-.297.199-.298.264-.463.463-.198.232-.298.363-.33.265-.331.232-.133.198-.066.165-.099.166-.165.099-.298.165-.232.232-.231.297-.232.364-.231.232-.132.198-.133.133-.198.231-.199.33-.231.298-.132.199-.166.264-.231.397-.232.199-.099.231-.132.232-.166.364-.132.165-.132.165-.199.298-.066.231-.099.166-.1.198-.131.199-.066.198-.199.265-.033.132-.066.165-.033.1-.066.165-.066.132-.1.166-.033.099-.099.099-.066.165-.033.133v.165l-.066.1-.066.198-.033.165-.1.198-.033.166.133.595-.034.166.298.397.231.264.165.199.166.066.165.132.265.132.066.133.231.066.265.165.265.066.099.132.264.1.232.099.198.066.397.066.265.1.33.032.43.033.265.066h.562l.496-.066.364-.066.265-.099.264-.132.232-.199.132-.099.33-.132.166-.199.265-.099.165-.231.232-.133.132-.165.198-.066.1-.165.231-.133.132-.198.199-.133.165-.231.33-.232.232-.264.166-.165.099-.166.231-.132.298-.33.232-.2.099-.198.165-.132.1-.1.132-.098.033.231-.066.265-.066.264-.133.265-.132.231-.066.232-.166.231-.066.133-.066.132-.132.132-.132.166-.066.198-.1.232-.198.264-.033.232-.166.33-.132.199-.033.099-.132.397-.199.264-.099.43-.231.298-.033.232-.034.231-.066.165-.165.232-.066.265-.066.297-.199.43-.132.166-.1.33-.098.199-.133.264-.165.364-.066.265-.033.132-.1.298-.066.198-.066.132-.165.232-.132.231-.1.133-.033.264-.066.364-.066.232-.033.198-.066.198-.1.232-.032.231-.166.199-.033.298v.264l-.066.199.033.198v.33l-.165.067v.33l.165.232v.1l-.033.23v.232l.066.199.199.397-.033.198.231.198.165.034.166.066.033.231.231.066.232.1.165.099.232.033.066.099.033.1.265.098.297.033.166.067.066.066.33.132.265.033h.893l.066-.132.033-.133v-.132l-.066-.198-.033-.1-.132-.099-.1-.099-.066-.099-.033-.496.033-.265v-.33l.034-.199.099-.231.099-.199v-.165l.066-.397v-.43l.033-.198.066-.1.066-.231v-.232l.033-.231.199-.166v-.198l.198-.132.166-.298-.033-.265.066-.264.066-.265.099-.132.1-.232.065-.363.133-.232.033-.231.099-.298.132-.198.166-.166.165-.496.1-.33.032-.199.066-.198.133-.1.099-.099.033-.165v-.133l.033-.099.33-.297.1-.232.066-.298.033-.231.066-.265.1-.165.066-.198v-.166l.066-.132.132-.265.198-.099.232-.43.132-.496.066-.231.066-.199.1-.1.099-.23.165-.199.066-.232.033-.198.1-.232.297-.165.1-.33.099-.232.165-.364.397-.562.132-.397.199-.265.132-.396.165-.166.1-.264.23-.199.1-.397.132-.198.033-.232.133-.231.132-.364.232-.265.231-.297.033-.133.1-.297.198-.166.297-.132.1-.33.231-.265.199-.232v-.264l.099-.265.198-.132v-.232l.133-.297.198-.298.165-.231.133-.133.231-.264.066-.232.1-.364.363-.43.298-.264.1-.298.164-.264.1-.199.033-.165.132-.298.199-.231.33-.397.166-.331.165-.33.198-.365.232-.231.165-.298.232-.297.099-.331.232-.232.231-.363.232-.199.231-.231.1-.166.23-.33.133-.298.198-.165v-.298l-.033-.562-.033-.1-.231-.099-.199-.132-.132-.1-.165.034-.298-.132-.1-.1h-.23l-.1-.033-.165-.066h-.232l-.066-.132z" />
              <path
                d="M346.75 112.52l-.33.066-.331.1-.199.165-.33.165-.232.199-.166.066-.165.099-.165.033-.199.231-.363.265-.199.198-.298.265-.231.232-.232.198-.165.132-.265.298-.231.165-.198.166-.133.165-.165.132-.199.1-.264.132-.066.198-.033.133-.199.264-.198.166-.166.198-.132.066-.033.165-.198.199-.1.132-.066.199-.165.132-.165.198-.166.1-.165.463-.166.132-.099.198-.066.166-.264.297-.067.166-.066.198-.099.199-.099.165-.1.132-.165.298-.132.165-.033.133-.066.165-.1.165-.165.1-.099.165-.066.231-.066.199v.231l.066.133.066.099.199-.133.165-.165.1-.165.23-.232.166-.165.165-.199.199-.099v-.165l.132-.132.132-.166.166-.066.165-.066.1-.132.132-.199.066-.165.132-.132.198-.298.199-.066.1-.132.098-.166.298-.264.265-.199.033-.132.165-.165.232-.199.099-.165.132-.166.232-.363.264-.133.165-.132.1-.198.066-.133.198-.132.166-.132.132-.166.165-.132.066-.198.1-.067.066-.165.132-.132.132-.1.1-.165.198-.231.198-.199.265-.198.132-.166.066-.165.1-.165.165-.1.198-.231.1-.165.132-.199.165-.132.066-.165.133-.067.066-.165.165-.165.199-.199.165-.132.033-.1z"
                fill="#fff"
              />
            </g>
          </svg>
        </a>
      </h1>
      <div className="spacer" />
      <Hamburger
        onClick={props.handleNavbarToggle}
        navbarToggle={props.navbarToggle}
        currentScreenSize={props.currentScreenSize}
        initialScreenSize={props.initialScreenSize}
      />
      <div className="nav_links">
        <ul>
          <li onClick={() => props.handleClickToScrollToHome(LandingPageRef)}>
            HOME
          </li>
          <li
            onClick={() =>
              props.handleClickToScrollToTreatments(Treatments1Ref)
            }
          >
            TREATMENTS
          </li>
          <li onClick={() => props.handleClickToScrollToAddOns(AddOnsRef)}>
            ADD-ONS
          </li>
          <li
            onClick={() => props.handleClickToScrollToInstagram(InstagramRef)}
          >
            REAL CLIENTS
          </li>
          <li>CONTACT</li>
        </ul>
      </div>
    </nav>
  );
});

export default NavigationBar;
