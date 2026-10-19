import React from "react";
import "./TechIcon.css";

export const TECH_ICONS_DATA = {
  python: {
    name: "Python",
    color: "#3776AB",
    bg: "rgba(55, 118, 171, 0.12)",
    svg: (
      <svg viewBox="0 0 128 128" width="100%" height="100%">
        <path
          fill="#3776AB"
          d="M63.8 0C32.4 0 34.3 13.6 34.3 13.6l.1 14.1h29.9v4.3H20.7S0 29.7 0 61.6c0 31.8 18 30.7 18 30.7h10.8V76.8s-.6-18.5 18.2-18.5h31.2s17.3.3 17.3-16.8V16.8S97.8 0 63.8 0zm-17 9.8a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8z"
        />
        <path
          fill="#FFD43B"
          d="M64.2 128c31.4 0 29.5-13.6 29.5-13.6l-.1-14.1H63.7V96h43.6s20.7 2.3 20.7-29.6c0-31.8-18-30.7-18-30.7H99.2v15.5s.6 18.5-18.2 18.5H49.8s-17.3-.3-17.3 16.8v24.7s-2.3 16.8 31.7 16.8zm17-9.8a4.9 4.9 0 1 1 0-9.8 4.9 4.9 0 0 1 0 9.8z"
        />
      </svg>
    ),
  },
  javascript: {
    name: "JavaScript",
    color: "#F7DF1E",
    bg: "rgba(247, 223, 30, 0.12)",
    svg: (
      <svg viewBox="0 0 128 128" width="100%" height="100%">
        <path fill="#F7DF1E" d="M0 0h128v128H0z" />
        <path
          fill="#000"
          d="M67.3 100.8c3.2 5.5 7.6 9.6 15.3 9.6 6.4 0 10.5-3.2 10.5-7.7 0-5.3-4.2-7.3-11.4-10.4l-3.9-1.7c-11.2-4.8-18.6-10.8-18.6-23.7 0-11.8 9-20.8 23.2-20.8 10.1 0 17.3 3.5 22.3 12.3l-8.7 5.6c-2.4-4.3-5.6-6.1-13.3-6.1-5.1 0-8.9 3.2-8.9 7.2 0 4.6 3.5 6.6 9.9 9.3l3.9 1.7c13.1 5.6 20.4 11.4 20.4 24.5 0 14.1-11 21.6-25.7 21.6-14.5 0-23.5-7-28-15.5l9-5.6zm-41.9.9c2.5 4.3 4.8 8 10.2 8 5.3 0 8.7-2.1 8.7-10.2V47h11.9v52.6c0 14.7-8.6 21.3-20.9 21.3-11.3 0-17.8-5.9-21.2-13.1l11.3-6.1z"
        />
      </svg>
    ),
  },
  java: {
    name: "Java",
    color: "#EA2D2E",
    bg: "rgba(234, 45, 46, 0.12)",
    svg: (
      <svg viewBox="0 0 128 128" width="100%" height="100%">
        <path
          fill="#EA2D2E"
          d="M48.8 87.2c-15.5-2.2-20.5 4.5-20.5 4.5s5.7-1.3 14.7.7c11.9 2.7 29.8 4 48.7 1.4 6.8-.9 17.5-3.1 17.5-3.1s-4.6 1.3-10.8 2.1c-17.9 2.5-35 2.1-49.6-5.6zm-1.8 13.7c-14.1-2-18.6 4.1-18.6 4.1s5.2-1.2 13.4.6c10.8 2.4 27.1 3.6 44.3 1.3 6.2-.8 15.9-2.8 15.9-2.8s-4.2 1.2-9.8 1.9c-16.3 2.3-31.9 1.9-45.2-5.1zm40.5-29.4c7.6-8.9-3.9-15.6-3.9-15.6s6.3 3.6 1.4 9.8c-5.7 7.2-17.4 12.3-25.4 13.9-13.1 2.6-26.6 2-35.3-2 0 0 5 2.5 16.5 2.5 13.3 0 28.5-2.5 38.3-9.1 5.9-4 8.4-9.5 8.4-9.5zm-15.4-25.2c6.4-7.5-3.3-13.1-3.3-13.1s5.3 3 1.2 8.3c-4.8 6.1-14.6 10.3-21.4 11.7-11 2.2-22.4 1.7-29.7-1.7 0 0 4.2 2.1 13.9 2.1 11.2 0 24-2.1 32.2-7.7 5-3.4 7.1-8 7.1-8zm11.7-20.5c5.3-6.2-2.7-10.8-2.7-10.8s4.4 2.5 1 6.8c-4 5-12.1 8.5-17.7 9.7-9.1 1.8-18.5 1.4-24.5-1.4 0 0 3.5 1.7 11.5 1.7 9.3 0 19.8-1.7 26.6-6.4 4.1-2.8 5.8-6.6 5.8-6.6z"
        />
        <path
          fill="#5382A1"
          d="M87.7 77.2s6.9-4.7 3.5-10.4c-4-6.8-13.5-6.2-13.5-6.2s3.6 1.5 4.9 4.3c1.5 3.3-1.8 5.6-1.8 5.6 11.3 1.8 23.3 6.7 6.9 6.7z"
        />
      </svg>
    ),
  },
  cpp: {
    name: "C++",
    color: "#00599C",
    bg: "rgba(0, 89, 156, 0.12)",
    svg: (
      <svg viewBox="0 0 128 128" width="100%" height="100%">
        <path fill="#00599C" d="M64 0l55.4 32v64L64 128 8.6 96V32L64 0z" />
        <path
          fill="#FFF"
          d="M60.8 83.6c-11.8 0-19.8-8.8-19.8-20.2 0-11.5 8-20.3 19.8-20.3 7.8 0 13.6 3.8 16.9 9.8l-8.4 5.3c-1.8-3.4-4.8-5.5-8.5-5.5-6.3 0-10.3 5-10.3 10.7 0 5.8 4 10.7 10.3 10.7 3.7 0 6.7-2.1 8.5-5.5l8.4 5.3c-3.3 6-9.1 9.7-16.9 9.7zm28-22.3h-4.6v-4.6h-4v4.6h-4.6v4h4.6v4.6h4v-4.6h4.6v-4zm15.4 0h-4.6v-4.6h-4v4.6H91v4h4.6v4.6h4v-4.6h4.6v-4z"
        />
      </svg>
    ),
  },
  c: {
    name: "C",
    color: "#A8B9CC",
    bg: "rgba(168, 185, 204, 0.12)",
    svg: (
      <svg viewBox="0 0 128 128" width="100%" height="100%">
        <path fill="#A8B9CC" d="M64 0l55.4 32v64L64 128 8.6 96V32L64 0z" />
        <path
          fill="#283593"
          d="M64 10l46.8 27v54L64 118 17.2 91V37L64 10z"
        />
        <path
          fill="#FFF"
          d="M65.3 90c-15.5 0-26-11.5-26-26.6 0-15.1 10.5-26.7 26-26.7 10.3 0 17.9 5 22.2 12.9l-11 7c-2.4-4.5-6.3-7.2-11.2-7.2-8.3 0-13.6 6.6-13.6 14s5.3 14 13.6 14c4.9 0 8.8-2.7 11.2-7.2l11 7c-4.3 7.9-11.9 12.8-22.2 12.8z"
        />
      </svg>
    ),
  },
  sql: {
    name: "SQL",
    color: "#00758F",
    bg: "rgba(0, 117, 143, 0.12)",
    svg: (
      <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#00758F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" fill="rgba(0, 117, 143, 0.25)" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  react: {
    name: "React.js",
    color: "#61DAFB",
    bg: "rgba(97, 218, 251, 0.12)",
    svg: (
      <svg viewBox="0 0 128 128" width="100%" height="100%">
        <path fill="#61DAFB" d="M64 54.3a9.7 9.7 0 1 0 0 19.4 9.7 9.7 0 0 0 0-19.4z" />
        <path
          fill="none"
          stroke="#61DAFB"
          strokeWidth="6"
          d="M64 21.2c27.6 0 50 19.2 50 42.8s-22.4 42.8-50 42.8-50-19.2-50-42.8S36.4 21.2 64 21.2z"
        />
        <path
          fill="none"
          stroke="#61DAFB"
          strokeWidth="6"
          d="M64 21.2c27.6 0 50 19.2 50 42.8s-22.4 42.8-50 42.8-50-19.2-50-42.8S36.4 21.2 64 21.2z"
          transform="rotate(60 64 64)"
        />
        <path
          fill="none"
          stroke="#61DAFB"
          strokeWidth="6"
          d="M64 21.2c27.6 0 50 19.2 50 42.8s-22.4 42.8-50 42.8-50-19.2-50-42.8S36.4 21.2 64 21.2z"
          transform="rotate(120 64 64)"
        />
      </svg>
    ),
  },
  html5: {
    name: "HTML5",
    color: "#E34F26",
    bg: "rgba(227, 79, 38, 0.12)",
    svg: (
      <svg viewBox="0 0 128 128" width="100%" height="100%">
        <path fill="#E34F26" d="M19.2 117.8L9.6 10.2h108.8l-9.6 107.6L64 128l-44.8-10.2z" />
        <path fill="#EF652A" d="M64 118.8l36.5-8.3 8-89.9H64v98.2z" />
        <path
          fill="#FFF"
          d="M64 53.6H46.4l-1.3-14.7H64V24.5H30.6l3.8 43.4H64V53.6zm0 35.8l-18.7-5-1.2-13.6H29.6l2.3 26.5L64 105.7V89.4z"
        />
        <path
          fill="#EBEBEB"
          d="M64 53.6h17.2l-1.6 18.2L64 76.8v14.4l22.2-6.2 3.1-34.8H64V38.9h27.4l1.3-14.4H64V53.6z"
        />
      </svg>
    ),
  },
  css3: {
    name: "CSS3",
    color: "#1572B6",
    bg: "rgba(21, 114, 182, 0.12)",
    svg: (
      <svg viewBox="0 0 128 128" width="100%" height="100%">
        <path fill="#1572B6" d="M19.2 117.8L9.6 10.2h108.8l-9.6 107.6L64 128l-44.8-10.2z" />
        <path fill="#33A9DC" d="M64 118.8l36.5-8.3 8-89.9H64v98.2z" />
        <path
          fill="#FFF"
          d="M64 53.7H46.4l-1.3-14.8H64V24.5H30.6l3.8 43.5H64V53.7zm0 35.8l-18.7-5-1.2-13.6H29.6l2.3 26.5L64 105.8V89.5z"
        />
        <path
          fill="#EBEBEB"
          d="M80.8 47.9l-1.6 18.2L64 71v14.4l22.2-6.2 3.1-34.8h-8.5zM64 24.5v14.4h28.7l1.3-14.4H64z"
        />
      </svg>
    ),
  },
  tailwind: {
    name: "Tailwind CSS",
    color: "#06B6D4",
    bg: "rgba(6, 182, 212, 0.12)",
    svg: (
      <svg viewBox="0 0 128 128" width="100%" height="100%">
        <path
          fill="#06B6D4"
          d="M32 48c2.7-10.7 8-16 16-16 12 0 13.3 10.7 21.3 16 5.3 3.6 10.7 5.3 16 5.3 8 0 13.3-5.3 16-16-2.7 10.7-8 16-16 16-12 0-13.3-10.7-21.3-16-5.3-3.6-10.7-5.3-16-5.3-8 0-13.3 5.3-16 16zm-16 32c2.7-10.7 8-16 16-16 12 0 13.3 10.7 21.3 16 5.3 3.6 10.7 5.3 16 5.3 8 0 13.3-5.3 16-16-2.7 10.7-8 16-16 16-12 0-13.3-10.7-21.3-16-5.3-3.6-10.7-5.3-16-5.3-8 0-13.3 5.3-16 16z"
        />
      </svg>
    ),
  },
  bootstrap: {
    name: "Bootstrap",
    color: "#7952B3",
    bg: "rgba(121, 82, 179, 0.12)",
    svg: (
      <svg viewBox="0 0 128 128" width="100%" height="100%">
        <path
          fill="#7952B3"
          d="M17.4 0h93.2C118.2 0 128 9.8 128 17.4v93.2c0 7.6-9.8 17.4-17.4 17.4H17.4C9.8 128 0 118.2 0 110.6V17.4C0 9.8 9.8 0 17.4 0z"
        />
        <path
          fill="#FFF"
          d="M48.2 96V32h21.4c9.1 0 15.3 2.1 19.2 6.3 3.9 4.1 5.9 9.8 5.9 17 0 5-1.2 9.2-3.6 12.5-2.4 3.3-5.9 5.8-10.4 7.4 5.3 1.5 9.4 4.2 12.2 8.2 2.8 3.9 4.2 8.9 4.2 15 0 7.7-2.3 13.9-6.8 18.5-4.5 4.6-11.2 6.9-20.2 6.9H48.2zm14.3-12h8.3c4.8 0 8.4-1.1 10.8-3.4 2.4-2.3 3.6-5.7 3.6-10.3 0-4.5-1.2-7.8-3.6-9.9-2.4-2.1-6-3.2-10.8-3.2h-8.3v26.8zm0-38.4h6.7c4.1 0 7.2-.9 9.3-2.8 2.1-1.9 3.2-4.8 3.2-8.7s-1.1-6.6-3.2-8.4c-2.1-1.8-5.2-2.7-9.3-2.7h-6.7v22.6z"
        />
      </svg>
    ),
  },
  gsap: {
    name: "GSAP Motion",
    color: "#88CE02",
    bg: "rgba(136, 206, 2, 0.12)",
    svg: (
      <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#88CE02" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="rgba(136, 206, 2, 0.25)" />
      </svg>
    ),
  },
  responsive: {
    name: "Responsive UI",
    color: "#38BDF8",
    bg: "rgba(56, 189, 248, 0.12)",
    svg: (
      <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <rect x="15" y="10" width="6" height="10" rx="1" fill="#0f172a" />
      </svg>
    ),
  },
  aspnet: {
    name: "ASP.NET",
    color: "#512BD4",
    bg: "rgba(81, 43, 212, 0.12)",
    svg: (
      <svg viewBox="0 0 128 128" width="100%" height="100%">
        <circle cx="64" cy="64" r="60" fill="#512BD4" />
        <path
          fill="#FFF"
          d="M33.6 86V42h8v36.6h17V86h-25zm34.2 0V42h7.8l16.2 27.5V42h7.9v44h-7.6L75.8 58.2V86h-8zm38.8-4.2a4.4 4.4 0 1 1 0-8.8 4.4 4.4 0 0 1 0 8.8z"
        />
      </svg>
    ),
  },
  dotnet: {
    name: ".NET Framework",
    color: "#512BD4",
    bg: "rgba(81, 43, 212, 0.12)",
    svg: (
      <svg viewBox="0 0 128 128" width="100%" height="100%">
        <rect width="128" height="128" rx="28" fill="#512BD4" />
        <path
          fill="#FFF"
          d="M26 84a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm18 0V44h9l18 26V44h9v40h-9L44 58v26h-9zm42 0V44h22v7H95v9h17v7H95v10h19v7H86z"
        />
      </svg>
    ),
  },
  laravel: {
    name: "Laravel",
    color: "#FF2D20",
    bg: "rgba(255, 45, 32, 0.12)",
    svg: (
      <svg viewBox="0 0 128 128" width="100%" height="100%">
        <path
          fill="#FF2D20"
          d="M123.6 34.2L68.8 3.5c-3.1-1.7-6.9-1.7-10 0L4.4 34.2c-3 1.7-4.4 4.9-4.4 8.3v60.9c0 3.4 1.4 6.6 4.4 8.3l54.4 30.7c1.5.9 3.3 1.3 5 1.3 1.7 0 3.5-.4 5-1.3l54.8-30.7c3-1.7 4.4-4.9 4.4-8.3V42.5c0-3.4-1.4-6.6-4.4-8.3zM63.8 13.9l43.2 24.3-15.6 8.8-43.2-24.3 15.6-8.8zM12.4 42.5l43.2 24.3v50.2L12.4 92.7V42.5zm59.6 74.5V66.8l17.4-9.8v22.7l25.8-14.5V42.5l8.4 4.7v50.2l-51.6 29.6z"
        />
      </svg>
    ),
  },
  codeigniter: {
    name: "CodeIgniter",
    color: "#EE4623",
    bg: "rgba(238, 70, 35, 0.12)",
    svg: (
      <svg viewBox="0 0 128 128" width="100%" height="100%">
        <path
          fill="#EE4623"
          d="M64 0C51.6 23.3 64.9 45.4 68 50.7c3.1 5.3 12.4 20.3 3.1 36.3-9.3 16-31 16-37.2 0-6.2-16 6.2-31 6.2-31S24.8 70.3 28 89c3.1 18.7 18.6 39 46.5 39s40.3-21.3 40.3-43.3C114.8 54.7 85.7 20 64 0z"
        />
      </svg>
    ),
  },
  api: {
    name: "REST APIs",
    color: "#10B981",
    bg: "rgba(16, 185, 129, 0.12)",
    svg: (
      <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 11a9 9 0 0 1 9 9" />
        <path d="M4 4a16 16 0 0 1 16 16" />
        <circle cx="5" cy="19" r="1" fill="#10B981" />
        <path d="M14 4h6v6" />
        <path d="M20 4l-7 7" />
      </svg>
    ),
  },
  mysql: {
    name: "MySQL",
    color: "#00758F",
    bg: "rgba(0, 117, 143, 0.12)",
    svg: (
      <svg viewBox="0 0 128 128" width="100%" height="100%">
        <path
          fill="#00758F"
          d="M109.9 59.8c-2.4-7.4-8.8-13.8-17.6-17.6-6-2.6-14-3.5-22.3-2.5-12.7 1.5-24 7.6-31.5 17.1-7.1 9-9.9 20.1-7.8 31.4 2.3 12.3 10.5 22.8 22.4 28.7 6.3 3.1 13.5 4.8 20.9 4.8 11.2 0 21.9-3.9 30.1-11.1 2.2-1.9 4-4.2 5.5-6.6l-8.5-5.3c-4.9 6.2-12.2 10.3-20.2 11.3-8.8 1-17.4-1.2-24.1-6.4-7.3-5.6-11.4-14-11.3-23.2.1-9.4 4.5-18.1 12.2-23.8 6.7-5 15.3-7.5 24.3-7 8.3.5 16 3.6 21.7 8.7 5.7 5.1 9 11.9 9.3 19.3h-34.9v9.7h45.4c.2-2.9.2-5.9-.1-8.9z"
        />
        <path fill="#F29111" d="M30 42c-4-8-12-14-22-16 5 9 12 16 22 16z" />
      </svg>
    ),
  },
  sqlite: {
    name: "SQLite",
    color: "#003B57",
    bg: "rgba(0, 59, 87, 0.12)",
    svg: (
      <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6c0-1.66 3.58-3 8-3s8 1.34 8 3-3.58 3-8 3-8-1.34-8-3z" fill="rgba(56, 189, 248, 0.2)" />
        <path d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
        <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
        <path d="M15 15l4 4m0-4l-4 4" stroke="#F59E0B" />
      </svg>
    ),
  },
  xampp: {
    name: "XAMPP",
    color: "#FB7A24",
    bg: "rgba(251, 122, 36, 0.12)",
    svg: (
      <svg viewBox="0 0 128 128" width="100%" height="100%">
        <rect width="128" height="128" rx="24" fill="#FB7A24" />
        <path
          fill="#FFF"
          d="M28 28l24 24-24 24 16 16 24-24 24 24 16-16-24-24 24-24-16-16-24 24-24-24-16 16z"
        />
      </svg>
    ),
  },
  burrito: {
    name: "Burrito AI / LLMs",
    color: "#F59E0B",
    bg: "rgba(245, 158, 11, 0.12)",
    svg: (
      <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a5 5 0 0 1 5 5v10a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5z" fill="rgba(245, 158, 11, 0.2)" />
        <path d="M9 12h6" />
        <path d="M9 16h6" />
        <path d="M19 6l2 2-2 2" stroke="#10B981" />
        <path d="M5 6L3 8l2 2" stroke="#38BDF8" />
      </svg>
    ),
  },
  opencv: {
    name: "OpenCV",
    color: "#5C3EE8",
    bg: "rgba(92, 62, 232, 0.12)",
    svg: (
      <svg viewBox="0 0 128 128" width="100%" height="100%">
        <circle cx="64" cy="38" r="28" fill="#EA4335" />
        <circle cx="36" cy="88" r="28" fill="#34A853" />
        <circle cx="92" cy="88" r="28" fill="#4285F4" />
        <circle cx="64" cy="38" r="14" fill="#0f172a" />
        <circle cx="36" cy="88" r="14" fill="#0f172a" />
        <circle cx="92" cy="88" r="14" fill="#0f172a" />
      </svg>
    ),
  },
  facerecog: {
    name: "Face Recognition",
    color: "#06B6D4",
    bg: "rgba(6, 182, 212, 0.12)",
    svg: (
      <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7V5a2 2 0 0 1 2-2h2" />
        <path d="M17 3h2a2 2 0 0 1 2 2v2" />
        <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
        <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
        <circle cx="9" cy="9" r="1" fill="#06B6D4" />
        <circle cx="15" cy="9" r="1" fill="#06B6D4" />
        <path d="M10 13c.5.5 1.5 1 2 1s1.5-.5 2-1" />
        <line x1="12" y1="11" x2="12" y2="12" />
      </svg>
    ),
  },
  biometrics: {
    name: "Biometrics ID",
    color: "#10B981",
    bg: "rgba(16, 185, 129, 0.12)",
    svg: (
      <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 12c0-3 2-5 5-5s5 2 5 5v5" />
        <path d="M2 12c0-5.5 4.5-10 10-10s10 4.5 10 10" />
        <path d="M5 14v-2c0-3.9 3.1-7 7-7s7 3.1 7 7v4" />
        <path d="M9 15v-3c0-1.7 1.3-3 3-3s3 1.3 3 3v6" />
        <path d="M12 12v6" />
      </svg>
    ),
  },
  computervision: {
    name: "Computer Vision",
    color: "#A855F7",
    bg: "rgba(168, 85, 247, 0.12)",
    svg: (
      <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" fill="rgba(168, 85, 247, 0.3)" />
        <path d="M12 9v6" stroke="#38BDF8" strokeWidth="1.5" />
        <path d="M9 12h6" stroke="#38BDF8" strokeWidth="1.5" />
      </svg>
    ),
  },
  lan: {
    name: "LAN Routing",
    color: "#3B82F6",
    bg: "rgba(59, 130, 246, 0.12)",
    svg: (
      <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="6" height="6" rx="1" fill="rgba(59, 130, 246, 0.2)" />
        <rect x="16" y="16" width="6" height="6" rx="1" fill="rgba(59, 130, 246, 0.2)" />
        <rect x="2" y="16" width="6" height="6" rx="1" fill="rgba(59, 130, 246, 0.2)" />
        <path d="M5 8v5h14v3" />
        <path d="M5 13v3" />
      </svg>
    ),
  },
  router: {
    name: "Routers & Switches",
    color: "#6366F1",
    bg: "rgba(99, 102, 241, 0.12)",
    svg: (
      <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="14" width="20" height="8" rx="2" fill="rgba(99, 102, 241, 0.2)" />
        <path d="M6 18h.01M10 18h.01" strokeWidth="3" />
        <path d="M6 14V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8" />
        <line x1="12" y1="2" x2="12" y2="6" stroke="#10B981" />
      </svg>
    ),
  },
  network: {
    name: "Network Topology",
    color: "#0EA5E9",
    bg: "rgba(14, 165, 233, 0.12)",
    svg: (
      <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="3" fill="rgba(14, 165, 233, 0.2)" />
        <circle cx="5" cy="19" r="3" fill="rgba(14, 165, 233, 0.2)" />
        <circle cx="19" cy="19" r="3" fill="rgba(14, 165, 233, 0.2)" />
        <line x1="12" y1="8" x2="5" y2="16" />
        <line x1="12" y1="8" x2="19" y2="16" />
        <line x1="8" y1="19" x2="16" y2="19" />
      </svg>
    ),
  },
  hardware: {
    name: "Hardware Repair",
    color: "#F97316",
    bg: "rgba(249, 115, 22, 0.12)",
    svg: (
      <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" fill="rgba(249, 115, 22, 0.2)" />
        <rect x="9" y="9" width="6" height="6" />
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
      </svg>
    ),
  },
  techsupport: {
    name: "Technical Support",
    color: "#14B8A6",
    bg: "rgba(20, 184, 166, 0.12)",
    svg: (
      <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" fill="rgba(20, 184, 166, 0.2)" />
      </svg>
    ),
  },
  helpdesk: {
    name: "Helpdesk Diagnostics",
    color: "#EC4899",
    bg: "rgba(236, 72, 153, 0.12)",
    svg: (
      <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="rgba(236, 72, 153, 0.15)" />
        <line x1="9" y1="10" x2="15" y2="10" />
        <line x1="12" y1="7" x2="12" y2="13" />
      </svg>
    ),
  },
  git: {
    name: "Git Version Control",
    color: "#F05032",
    bg: "rgba(240, 80, 50, 0.12)",
    svg: (
      <svg viewBox="0 0 128 128" width="100%" height="100%">
        <path
          fill="#F05032"
          d="M125.8 56.6L71.4 2.2c-3-3-7.8-3-10.7 0l-11 11 14.5 14.5c3.2-1.1 7-.3 9.4 2.2 2.5 2.5 3.3 6.2 2.2 9.4l14 14c3.2-1.1 7-.3 9.4 2.2 3.6 3.6 3.6 9.4 0 13s-9.4 3.6-13 0c-2.7-2.7-3.4-6.8-2-10.1L70.4 44.8v34.4c.9.5 1.7 1.1 2.3 1.8 3.6 3.6 3.6 9.4 0 13s-9.4 3.6-13 0c-3.6-3.6-3.6-9.4 0-13 .9-.9 2-1.6 3.2-2V43.8c-1.2-.5-2.3-1.1-3.2-2-2.7-2.7-3.4-6.8-2-10.1L43.4 17.5 2.2 58.7c-3 3-3 7.8 0 10.7l54.4 54.4c3 3 7.8 3 10.7 0l58.5-58.5c3-3 3-7.8 0-10.7z"
        />
      </svg>
    ),
  },
  github: {
    name: "GitHub",
    color: "#F8FAFC",
    bg: "rgba(248, 250, 252, 0.12)",
    svg: (
      <svg viewBox="0 0 128 128" width="100%" height="100%">
        <path
          fill="#F8FAFC"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M64 0C28.7 0 0 28.7 0 64c0 28.3 18.3 52.3 43.8 60.8 3.2.6 4.4-1.4 4.4-3.1v-10.8c-17.8 3.9-21.6-8.6-21.6-8.6-2.9-7.4-7.1-9.4-7.1-9.4-5.8-4 .4-3.9.4-3.9 6.4.5 9.8 6.6 9.8 6.6 5.7 9.8 15 7 18.6 5.3.6-4.1 2.2-7 4-8.6-14.2-1.6-29.2-7.1-29.2-31.6 0-7 2.5-12.7 6.6-17.2-.7-1.6-2.9-8.1.6-17 0 0 5.4-1.7 17.6 6.6 5.1-1.4 10.6-2.1 16-2.2 5.4.1 10.9.8 16 2.2 12.2-8.3 17.6-6.6 17.6-6.6 3.5 8.9 1.3 15.4.6 17 4.1 4.5 6.6 10.2 6.6 17.2 0 24.6-15 30-29.3 31.6 2.3 2 4.3 5.9 4.3 11.9v17.6c0 1.7 1.2 3.7 4.4 3.1C109.7 116.3 128 92.3 128 64c0-35.3-28.7-64-64-64z"
        />
      </svg>
    ),
  },
  techlead: {
    name: "Tech Lead & PM",
    color: "#F59E0B",
    bg: "rgba(245, 158, 11, 0.12)",
    svg: (
      <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="rgba(245, 158, 11, 0.2)" />
      </svg>
    ),
  },
  systemdesign: {
    name: "System Design",
    color: "#8B5CF6",
    bg: "rgba(139, 92, 246, 0.12)",
    svg: (
      <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" fill="rgba(139, 92, 246, 0.2)" />
        <rect x="14" y="3" width="7" height="7" rx="1" fill="rgba(139, 92, 246, 0.2)" />
        <rect x="14" y="14" width="7" height="7" rx="1" fill="rgba(139, 92, 246, 0.2)" />
        <rect x="3" y="14" width="7" height="7" rx="1" fill="rgba(139, 92, 246, 0.2)" />
      </svg>
    ),
  },
  dbarchitecture: {
    name: "DB Architecture",
    color: "#06B6D4",
    bg: "rgba(6, 182, 212, 0.12)",
    svg: (
      <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" fill="rgba(6, 182, 212, 0.2)" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  agile: {
    name: "Agile & Scrum",
    color: "#10B981",
    bg: "rgba(16, 185, 129, 0.12)",
    svg: (
      <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
      </svg>
    ),
  },
  testing: {
    name: "Testing & QA",
    color: "#EF4444",
    bg: "rgba(239, 68, 68, 0.12)",
    svg: (
      <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="rgba(239, 68, 68, 0.2)" />
        <polyline points="9 12 11 14 15 10" stroke="#FFF" strokeWidth="2.5" />
      </svg>
    ),
  },
};

export default function TechIcon({ iconKey, customLabel }) {
  const item = TECH_ICONS_DATA[iconKey] || {
    name: customLabel || iconKey,
    color: "#38bdf8",
    bg: "rgba(56, 189, 248, 0.12)",
    svg: (
      <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#38bdf8" strokeWidth="2">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  };

  const displayName = customLabel || item.name;

  return (
    <div
      className="tech-tile-card"
      style={{
        "--tech-color": item.color,
        "--tech-bg": item.bg,
      }}
      title={displayName}
    >
      <div className="tech-tile-icon-box">{item.svg}</div>
      <span className="tech-tile-label">{displayName}</span>
    </div>
  );
}
