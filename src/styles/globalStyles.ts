import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
.spin {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
}

.d-flex {
  display: flex;
}

.flex-grid .flex-grid-child {
  padding: 0 12px;
}

.align-center-v {
  display: flex;
  align-items: center;
}

.justify-content-between {
  justify-content: space-between;
}

.justify-content-center {
  justify-content: center;
}

.align-items-center {
  align-items: center;
}

.line-height-0 {
  line-height: 0;
}

.text-right {
  text-align: right;
}

.text-left {
  text-align: left;
}

.text-center {
  text-align: center;
}

.status {
  display: inline !important;
  font-size: 12px;
  font-weight: 500;
  background-color: #868eae10;
  padding: 4.5px 11.85px;
  border-radius: 15px;
}

.status.Success {
  background-color: #20c99710;
  color: #20c997;
}

.status.warning {
  background-color: #fa8b0c10;
  color: #fa8b0c;
}

.status.error {
  background-color: #ff4d4f10;
  color: #ff4d4f;
}

ul {
  list-style: outside none none;
  margin: 0;
  padding: 0;
}

/* spacing classes */

.m-0 {
  margin: 0 !important;
}

.mb-30 {
  margin-bottom: 30px;
}

.pb-30 {
  padding-bottom: 30px;
}

.mt-25 {
  margin-top: 25px;
}

.mb-25 {
  margin-bottom: 25px;
}

.pr-0 {
  padding-right: 0 !important;
}

/* default card style */

.ant-card {
  box-shadow: 0 5px 20px #9299b803;
}

.ant-card-body {
  padding: 25px !important;
}

.ant-card-head {
  padding-left: 25px !important;
  padding-right: 25px !important;
}

.ant-card-head-title span {
  display: inline-block;
  margin-left: 15px;
  font-size: 11px;
  font-weight: 500;
  color: #868eae;
}

html[dir='rtl'] .ant-card-head-title span {
  margin-right: 15px;
}

.ant-card-head .ant-card-extra {
  display: flex;
  align-items: center;
}

.ant-card-head .ant-card-extra a {
  color: #868eae;
}

.ant-card-extra .ant-dropdown-trigger {
  line-height: 0;
  order: 1;
  margin-left: 20px;
}

/* ant radio group */

.ant-radio-button-wrapper-checked {
  color: #fff !important;
}

/* card nav */

.card-nav ul {
  list-style: none;
  display: flex;
  margin: 0 -8px !important;
}

.card-nav ul li {
  margin: 0 8px !important;
  position: relative;
}

.card-nav ul li a {
  font-weight: 500;
  color: #868eae;
  font-size: 12px;
}

.card-nav ul li.active a {
  color: #5f63f2;
  font-weight: 500;
}

.card-nav ul li.active:before {
  position: absolute;
  content: '';
  width: 100%;
  height: 1px;
  background: #5f63f2;
  left: 0;
  bottom: -19px;
}

/* chart growth upward */

.growth-downward p,
.growth-upward p {
  font-size: 14px;
  color: #868eae;
  margin: 0;
}

.growth-downward h1 sub svg,
.growth-upward h1 sub svg {
  position: relative;
  top: 2px;
  font-size: 14px;
  font-weight: 600;
  left: 5px;
  bottom: 0;
}

/*
  .growth-downward h1, .growth-upward h1 {
    font-size: 22px;
    margin: 6px 0 0;
  } */

.growth-downward h1 sub {
  color: #ff4d4f;
}

.growth-upward h1 sub {
  color: #20c997;
}

/* Chart */

.chart-label {
  display: flex;
}

.chart-label .chart-label__single {
  align-items: center;
}

.chart-label .chart-label__single:not(:last-child) {
  margin-right: 40px;
}

.chart-label .chart-label__single p {
  margin: 0;
  color: #868eae;
}

/* revenue doughnut */

.revenue-doughnut {
  display: flex;
  justify-content: center;
}

.revenue-doughnut > div {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.revenue-doughnut .rd-labels {
  width: 100%;
  margin-top: 30px;
}

.revenue-chat-percentage span {
  display: block;
}

.revenue-chat-percentage span:not(:last-child) {
  margin-bottom: 15px;
}

/* progressbars */

.ant-progress {
  display: inline-flex !important;
  align-items: center;
}

.ant-progress > div {
  display: flex;
  flex-direction: column;
}

.ant-progress .ant-progress-outer {
  margin-right: 0 !important;
  padding-right: 0 !important;
}

.revenue-chat-percentage span {
  display: block;
  font-size: 13px;
  color: #868eae;
}

.revenue-chat-percentage span:not(:last-child) {
  margin-bottom: 20px;
}

.ant-progress-status-warning .ant-progress-bg {
  background: #fa8b0c;
}

/* progress bars */

.progress-primary .ant-progress-bg {
  background: #5f63f2;
}

.progress-secondary .ant-progress-bg {
  background: #ff69a5;
}

.progress-success .ant-progress-bg {
  background: #20c997;
}

.progress-success .progress-info .ant-progress-bg {
  background: #2c99ff;
}

.progress-warning .ant-progress-bg {
  background: #fa8b0c;
}

.progress-danger .ant-progress-bg {
  background: #ff4d4f;
}

/* color classes */

.color-primary {
  color: #5f63f2;
}

.color-secondary {
  color: #ff69a5;
}

.color-info {
  color: #2c99ff;
}

.color-warning {
  color: #fa8b0c;
}

.color-success {
  color: #20c997;
}

.color-danger {
  color: #ff4d4f;
}

.color-dark {
  color: #272b41;
}

.color-error {
  color: #f5222d;
}

.color-gray {
  color: #5a5f7d;
}

/* Button Styles */

.ant-btn.ant-btn-light:focus {
  background: #fff;
  color: #5a5f7d;
}

.button-example .ant-btn {
  margin: 4px;
}

.button-example .ant-btn-group .ant-btn {
  margin: 0;
}

.ant-btn-white {
  color: #5a5f7d !important;
  border-color: #e3e6ef !important;
}

.ant-btn-white:hover {
  color: #5f63f2 !important;
  background-color: #fff !important;
  border-color: #fff;
}

.ant-btn-white:focus {
  background-color: transparent !important;
}

.ant-btn-link {
  background-color: #fff;
  border-color: #fff;
  color: #5f63f2;
}

.ant-btn-link:hover {
  border-color: #fff;
  background: #fff;
}

.ant-btn-light,
.ant-btn-light:hover,
.ant-btn-link:hover,
.ant-btn-dashed {
  color: #5a5f7d !important;
}

.ant-btn-light {
  border-color: #e3e6ef;
  background: #f4f5f7 !important;
}

.ant-btn-light.btn-outlined {
  background: transparent !important;
}

.ant-btn-light.btn-transparent {
  background: #f4f5f715;
}

.ant-btn-dashed {
  border-width: 1px !important;
}

.ant-btn-dashed:hover {
  color: #5f63f2;
  border: 1px dashed #5f63f2;
}

.ant-btn-primary[disabled] {
  color: #fff;
  background: #5f63f260;
}

.ant-btn-light[disabled] {
  background: #fff;
}

.ant-btn-round.ant-btn-sm {
  height: 38px;
}

.ant-btn-white[disabled] {
  background-color: transparent;
  opacity: 0.6;
}

.ant-btn-white[disabled]:hover {
  color: #5a5f7d !important;
}

.ant-btn-primary[disabled]:hover {
  color: #fff !important;
  background: #5f63f260 !important;
}

.btn-icon {
  padding: 0 13px;
}

.btn-inc,
.btn-dec {
  height: 38px;
  width: 38px;
  font-size: 20px;
  padding: 0 12px !important;
  border-radius: 10px !important;
  border: 0 none;
}

.btn-inc:hover,
.btn-dec:hover {
  background: #5f63f210 !important;
  border: 0 none !important;
}

.btn-inc:hover i,
.btn-inc:hover svg,
.btn-dec:hover i,
.btn-dec:hover svg {
  color: #5f63f2;
}

/* input styles */

.ant-form-item-label > label {
  font-weight: 500;
}

.ant-picker-input > input::placeholder {
  color: #adb4d2 !important;
}

/* Calendar Styles */

.ant-picker-calendar-header .ant-select-selector {
  height: 32px !important;
}

.ant-picker-calendar-header .ant-select-selection-search-input {
  height: 30px !important;
}

.ant-select-single .ant-select-selector .ant-select-selection-item {
  line-height: 30px !important;
}

.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
  background: #fff !important;
  color: #5f63f2 !important;
}

/* pagination */

.ant-pagination .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
  height: 32px !important;
}

.ant-pagination-item-active {
  background-color: #5f63f2 !important;
}

.ant-pagination-item-active a {
  color: #fff !important;
}

.ant-pagination .ant-pagination-options .ant-select-selection-item {
  font-size: 13px;
  line-height: 30px !important;
}

.ant-pagination .ant-pagination-options .ant-pagination-options-quick-jumper {
  height: 30px;
  line-height: 30px;
}

.ant-pagination .ant-pagination-options .ant-pagination-options-quick-jumper input {
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}

.ant-pagination .ant-pagination-prev,
.ant-pagination .ant-pagination-next,
.ant-pagination .ant-pagination-jump-prev,
.ant-pagination .ant-pagination-jump-next,
.ant-pagination .ant-pagination-item,
.ant-pagination .ant-pagination-options .ant-select-selector {
  border: 1px solid #f1f2f6 !important;
  background-color: #fff;
}

.ant-pagination .ant-pagination-jump-prev .ant-pagination-item-ellipsis,
.ant-pagination .ant-pagination-jump-next .ant-pagination-item-ellipsis {
  color: #5a5f7d !important;
  line-height: 2.6;
}

.ant-pagination .ant-pagination-jump-prev .ant-pagination-item-link,
.ant-pagination .ant-pagination-jump-next .ant-pagination-item-link {
  display: block;
}

.ant-pagination-prev,
.ant-pagination-next {
  line-height: 28px !important;
}

.ant-pagination-prev .ant-pagination-item-link,
.ant-pagination-next .ant-pagination-item-link {
  border: 0 none !important;
}

.ant-pagination .ant-pagination-item a {
  color: #5a5f7d;
}

.ant-pagination .ant-select-single .ant-select-selector .ant-select-selection-item {
  line-height: 30px !important;
  color: #5a5f7d;
}

.ant-pagination .ant-select-single:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-search-input {
  height: 100% !important;
}

.ant-pagination {
  margin: -4px -12px !important;
}

.ant-pagination-item,
.ant-pagination-options,
.ant-pagination-prev,
.ant-pagination-jump-prev,
.ant-pagination-jump-next,
.ant-pagination-next {
  margin: 4px !important;
}

.ant-table-pagination {
  margin-top: 30px !important;
}

/* Wizard Modal */
.submission-successModal {
  text-align: center;
}
.submission-successModal .icon-success {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border: 1px solid #20c997;
}
.submission-successModal p {
  margin-bottom: 0;
}
.submission-successModal .icon-success svg {
  color: #20c997;
}
.submission-successModal .submission-action {
  margin: 30px -5px -5px -5px;
}
.submission-successModal .submission-action button {
  margin: 5px;
  height: 38px;
}

/* Tree Select */

.ant-tree-select.ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
  height: 42px !important;
  line-height: 40px;
}

.ant-tree-select.ant-select-single:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-search-input {
  height: 100% !important;
}

.ant-tree-select.ant-select-single .ant-select-selector .ant-select-selection-placeholder {
  line-height: 40px !important;
}

/* radio style */

.ant-radio-checked .ant-radio-inner {
  border-width: 5px !important;
}

.ant-radio-inner::after {
  content: none !important;
}

/* Statistics */

.ant-statistic .ant-statistic-title {
  color: #9299b8;
}

.ant-statistic .ant-statistic-content span {
  font-size: 20px;
}

/* Steps */

.steps-action.justify-content-center {
  justify-content: center !important;
}

/* rate */

.ant-rate-star.ant-rate-star-zero span svg {
  color: #c6d0dc;
}

.ant-rate-star:not(:last-child) {
  margin-right: 2px !important;
}

.ant-rate-text {
  color: #5a5f7d;
}

/* result */

.ant-result-icon {
  margin-bottom: 20px !important;
}

.ant-result-title {
  font-weight: 500;
  margin-bottom: 10px;
}

.ant-result-extra {
  height: 34px;
  padding: 4px 10.72px;
}

.ant-result-content .ant-typography strong {
  font-weight: 500;
}

.ant-result-content .ant-typography:last-child {
  margin-bottom: 0;
}

/* form select */

.ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
  height: 35px !important;
}

.ant-select-single .ant-select-selector .ant-select-selection-item,
.ant-select-single .ant-select-selector .ant-select-selection-placeholder {
  line-height: 33px !important;
}

.ant-select-multiple .ant-select-selector {
  padding-top: 2px !important;
  padding-bottom: 2px !important;
}

/* Nasted Comments Styles */

.nested-comment-wrapper .comment-title {
  font-size: 12px;
  padding-bottom: 10px;
  margin-bottom: 22px;
  border-bottom: 1px solid #e3e6ef;
}

/* calendar style */

.events {
  list-style: none;
  margin: 0;
  padding: 0;
}

.events .ant-badge-status {
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  text-overflow: ellipsis;
  font-size: 12px;
}

.notes-month {
  text-align: center;
  font-size: 28px;
}

.notes-month section {
  font-size: 28px;
}

/* Breadcrumb demo */

.demo {
  margin: 16px;
}

.demo-nav {
  height: 30px;
  line-height: 30px;
  margin-bottom: 16px;
  background: #f8f8f8;
}

.demo-nav a {
  line-height: 30px;
  padding: 0 8px;
}

.app-list {
  margin-top: 16px;
}

/* Modal */

.ant-modal .ant-modal-content {
  border-radius: 10px;
}

.ant-modal .ant-modal-header {
  border-radius: 10px 10px 0 0;
}

.ant-modal-body p:last-child {
  margin-bottom: 0;
}

.project-modal {
  padding: 5px !important;
}

.project-modal .projects-members {
  margin-top: -12px;
}

.project-modal .ant-form-item-control-input {
  margin-top: 10px;
  min-height: auto;
}

.project-modal .ant-select-selector {
  border-color: #e3e6ef;
}

.project-modal-footer {
  padding: 10px !important;
  text-align: left !important;
}

/* slider */

.ant-slider-handle {
  margin-top: -6px !important;
}

/* tags */

.ant-tag {
  font-weight: 600;
  padding: 0 9.5px;
}

/* tabs */

.ant-tabs-tab span {
  display: flex;
  align-items: center;
}

/* list */

.ant-list-bordered {
  border-color: #e3e6ef !important;
}

.ant-list-item-meta {
  padding: 10px 24px;
  border-bottom: 1px solid #f1f2f6;
}

/* popover */

.ant-popover {
  position: fixed;
  z-index: 99999;
}

.ant-popover-inner {
  padding: 15px;
  box-shadow: 0 5px 20px #9299b820;
  border-radius: 0 0 6px 6px;
}

.ant-popover-inner .ant-popover-title {
  padding: 5px 10px 10px;
}

.ant-popover-inner .ant-popover-inner-content a {
  color: #5a5f7d;
}

/* Drawer */

.ant-drawer {
  z-index: 99999;
}

/* Select Dropdwon */

.ant-select-dropdown {
  padding: 18px 0 !important;
  box-shadow: 0 5px 20px #9299b820 !important;
  border-radius: 0 0 6px 6px !important;
}

.ant-select-item {
  min-height: 20px !important;
  padding: 4px 12px !important;
}

.ant-select-item-group {
  color: #9299b8;
}

.ant-select-item.ant-select-item-option-grouped {
  padding-left: 25px !important;
}

.ant-select-dropdown .ant-select-item.ant-select-item-option-active {
  background: #5f63f205;
}

.ant-select-dropdown .ant-select-item.ant-select-item-option-selected .ant-select-item-option-content {
  padding-left: 10px;
}

.ant-select-dropdown .ant-select-item.ant-select-item-option-selected {
  color: #5f63f2;
  background: #5f63f206;
}

.ant-select-dropdown .ant-select-item.ant-select-item-option-selected .ant-select-item-option-content {
  color: #5f63f2;
  font-weight: 500;
}

.ant-select-dropdown .ant-select-item .ant-select-item-option-content {
  transition: 0.3s;
  color: #5a5f7d;
}

/* mail props dropdown */

.mail-props {
  padding: 5px 25px;
  border: 0 none;
  background: #fff;
  /* box-shadow: 0 5px 40px rgba(146, 153, 184, 0.25); */
}

.mail-props li {
  display: flex;
  margin-bottom: 12px;
}

.mail-props li span:first-child {
  margin-right: 50px;
  min-width: 40px;
}

.mail-props li span:last-child {
  color: #5a5f7d;
}

.mail-props li:last-child {
  margin-bottom: 0;
}

.mail-props li span {
  color: #9299b8;
}

/* Basic Dropdwon */

.ant-dropdown {
  box-shadow: 0 5px 30px #9299b820 !important;
}

.ant-dropdown.wide-dropdwon {
  min-width: 140px !important;
}

.ant-dropdown-menu {
  min-width: 200px;
  border-radius: 0 0 5px 5px;
  box-shadow: 0 0;
}

.ant-dropdown-menu li {
  color: #5a5f7d;
  padding: 5px 25px;
}

.ant-dropdown-menu li:hover {
  background-color: #5f63f205;
}

.atbd-top-dropdwon .atbd-top-dropdwon__title {
  background: #f4f5f7;
  width: 100%;
  margin-bottom: 12px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  min-height: 50px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.atbd-top-dropdwon {
  width: 340px;
}

.atbd-top-dropdwon .atbd-top-dropdwon__nav {
  height: 260px;
  overflow: hidden;
}

.atbd-top-dropdwon .atbd-top-dropdwon__nav.notification-list {
  padding: 0 10px;
}

.atbd-top-dropdwon .atbd-top-dropdwon__nav li {
  width: 100%;
}

.atbd-top-dropdwon .atbd-top-dropdwon__nav li a {
  padding: 13px 10px;
  position: relative;
  width: 100%;
}

.atbd-top-dropdwon .atbd-top-dropdwon__nav li:last-child {
  margin: 0;
}

.atbd-top-dropdwon a.btn-seeAll {
  position: relative;
  width: calc(100% + 30px);
  left: -15px;
  right: -15px;
  height: calc(100% + 15px);
  bottom: -15px;
  text-align: center;
  font-size: 13px;
  font-weight: 500;
  color: #5f63f2;
  padding: 15px 0;
  border-radius: 0 0 6px 6px;
  background: #fff;
}

.atbd-top-dropdwon a.btn-seeAll:before {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0 -15px 20px #9299b808;
  z-index: 1;
  content: '';
}

.atbd-top-dropdwon .atbd-top-dropdwon__nav li a.btn-seeAll:hover:after {
  box-shadow: 0 0;
}

.atbd-top-dropdwon .atbd-top-dropdwon__nav li a:hover {
  background: #fff;
}

.atbd-top-dropdwon .atbd-top-dropdwon__nav li a:hover:after {
  opacity: 1;
  visibility: visible;
}

.atbd-top-dropdwon .atbd-top-dropdwon__nav li a:after {
  position: absolute;
  left: -15px;
  right: -15px;
  top: 0;
  width: calc(100% + 30px);
  height: 100%;
  box-shadow: 0 15px 50px #9299b820;
  z-index: 1;
  content: '';
  opacity: 0;
  visibility: hidden;
}

.atbd-top-dropdwon .atbd-top-dropdwon__content {
  display: flex;
  align-items: flex-start;
  margin-bottom: 0;
}

.atbd-top-dropdwon .atbd-top-dropdwon__content .notification-icon {
  width: 39.2px;
  height: 32px;
  margin-right: 15px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.atbd-top-dropdwon .atbd-top-dropdwon__content .notification-icon.bg-primary {
  background: #5f63f215;
  color: #5f63f2;
}

.atbd-top-dropdwon .atbd-top-dropdwon__content .notification-icon.bg-secondary {
  background: #ff69a515;
  color: #ff69a5;
}

.atbd-top-dropdwon .atbd-top-dropdwon__content .notification-icon svg {
  width: 18px;
  height: 18px;
}

.atbd-top-dropdwon .atbd-top-dropdwon__content .notification-content {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.atbd-top-dropdwon .notification-text h1 {
  font-size: 14px;
  font-weight: 400;
  color: #5a5f7d;
  margin-bottom: 4px;
}

.atbd-top-dropdwon .notification-text h1 span {
  color: #5f63f2;
  font-weight: 500;
  padding-left: 0;
}

.atbd-top-dropdwon .notification-text p {
  font-size: 12px;
  color: #adb4d2;
  margin-bottom: 0;
}

.atbd-top-dropdwon .atbd-top-dropdwon__content img {
  max-width: 40px;
}

.atbd-top-dropdwon .atbd-top-dropdwon__content figcaption {
  margin: -4px 15px 0;
}

.atbd-top-dropdwon .atbd-top-dropdwon__content figcaption .ant-badge-count {
  font-size: 8px;
  min-width: 16px;
  width: 16px;
  height: 16px;
  line-height: 6px;
  border-radius: 8px;
}

.atbd-top-dropdwon .atbd-top-dropdwon__content figcaption p.ant-scroll-number-only-unit.current {
  height: 15px;
}

.atbd-top-dropdwon .atbd-top-dropdwon__content figcaption h1 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 2px;
}

.atbd-top-dropdwon .atbd-top-dropdwon__content figcaption h1 span {
  font-size: 12px;
  font-weight: 400;
}

.atbd-top-dropdwon .atbd-top-dropdwon__content figcaption p {
  display: flex;
  align-items: center;
  margin-bottom: 0;
}

/* Tooltip Styles */

.ant-tooltip .ant-tooltip-inner {
  min-height: 40px;
  padding: 6px 20px;
  font-size: 14px;
  color: #5a5f7d;
  background-color: #fff;
  border-radius: 3px;
  display: flex;
  align-items: center;
  border: 1px solid #f1f2f6;
  box-shadow: 0 8px 15px #9299b815;
}

.ant-tooltip .ant-tooltip-arrow {
  /* position: relative; */
}

.ant-tooltip .ant-tooltip-arrow:after {
  position: absolute;
  left: 50%;
  top: 12px;
  transform: translateX(-50%);
  width: 13px;
  height: 13px;
  background: #fff;
  content: '';
}

.ant-tooltip .ant-tooltip-arrow .ant-tooltip-arrow-content {
  width: 10px;
  height: 10px;
  background: #fff;
}

.ant-tooltip-placement-bottom .ant-tooltip-arrow .ant-tooltip-arrow-content {
  border: 1px solid #f1f2f6;
  box-shadow: 0 0;
}

.ant-tooltip-placement-bottom .ant-tooltip-arrow {
  top: -4.071068px;
}

/* Badge Styles */

.ant-badge.badge-success .ant-badge-count {
  background: #20c997;
}

.badge {
  font-size: 11px;
  font-weight: 500;
  padding: 0 6.5px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}

.badge.badge-primary {
  background: #5f63f210;
  color: #5f63f2;
}

/* Cascade Styles */

.custom-cascade-render .ant-cascader-picker {
  width: 100%;
}

.ant-cascader-picker input::placeholder {
  color: #adb4d2;
}

/* Comment Styles */

.ant-comment-actions li {
  margin-bottom: 0 !important;
}

/* Radio Vertical Button */

.ant-radio-vertical .ant-radio-wrapper {
  display: block;
}

.ant-radio-vertical .ant-radio-wrapper:not(:last-child) {
  margin-bottom: 14px;
}

/* Select Tree */

.ant-select-tree-list .ant-select-tree-node-content-wrapper:hover {
  background-color: #bae7ff !important;
}

.ant-select-tree-list .ant-select-arrow svg {
  font-size: 10px;
}

.ant-tree-select.ant-select-multiple .ant-select-selection-item {
  border: 0 none;
  border-radius: 3px;
  background: #f4f5f7;
  color: #5a5f7d;
  font-weight: 500;
}

/* Ant Switch */

.ant-switch:after {
  width: 14px !important;
  height: 14px !important;
}

.ant-switch-small:after {
  width: 10px !important;
  height: 10px !important;
}

/* Time Picker */

.ant-picker {
  min-width: 250px;
}

/* Input Affix */

.ant-input-affix-wrapper > input.ant-input {
  padding-left: 5px;
}

.ant-input-affix-wrapper .ant-input-prefix svg {
  color: #e3e6ef;
}

/* Space Item */

.ant-space-item .ant-btn span {
  font-size: 14px;
}

/* Pop confirm */

.pop-confirm .ant-btn {
  max-width: 90px;
  padding: 0px 35.5px;
  height: 44px;
}

.pop-confirm-top {
  margin-bottom: 10px;
}

.pop-confirm-bottom {
  margin-top: 10px;
}

.pop-confirm-top .ant-btn:not(:last-child),
.pop-confirm-bottom .ant-btn:not(:last-child) {
  margin-right: 10px;
}

.pop-confirm-left .ant-btn:not(:last-child),
.pop-confirm-right .ant-btn:not(:last-child) {
  margin-bottom: 10px;
}

/* Ant Upload */

.ant-upload .ant-btn {
  font-size: 14px;
  border-radius: 5px;
}

.ant-upload.ant-upload-select-picture-card {
  border-color: #e3e6ef !important;
  border-radius: 5px !important;
  background-color: #f8f9fb !important;
}

.ant-upload.ant-upload-select-picture-card .anticon {
  margin-bottom: 8px;
}

.ant-upload .anticon svg {
  color: #9299b8;
}

.ant-upload-list {
  margin-top: 10px !important;
}

/* Ant Picker */

.ant-picker {
  border-color: #e3e6ef !important;
}

/* Ant Dropdown */

.ant-dropdown {
  box-shadow: 0 5px 20px #9299b820;
  background: #fff;
  border-radius: 6px;
  padding: 15px 0 !important;
  border: 0 none;
}

.ant-dropdown a {
  display: flex;
  align-items: center;
  padding: 8px 24px;
  font-weight: 400;
  color: #5a5f7d;
}

.ant-dropdown a i,
.ant-dropdown a svg,
.ant-dropdown a img {
  margin-right: 8px;
}

.ant-dropdown div {
  box-shadow: 0 0;
  border-radius: 5px;
}

/* Picker Under Input */

.ant-form-item-control-input .ant-picker {
  padding: 0 12px 0 0;
}

/* Leaflet COntainer */

.leaflet-container {
  z-index: 0;
}

/* Table Bordered*/

.table-bordered .ant-table-tbody > tr.ant-table-row:hover > td {
  background: #f8f9fb !important;
}

.table-bordered .ant-table-thead > tr > th {
  background: #fff;
  border-top: 1px solid #f1f2f6;
}

.table-bordered .ant-table-tbody > tr > td {
  border-color: #f1f2f6 !important;
}

.table-bordered .ant-table-thead tr th,
.table-bordered .ant-table-tbody tr td {
  padding: 16px 25px;
}

.table-bordered .ant-table-thead tr th:last-child,
.table-bordered .ant-table-tbody tr td:last-child {
  text-align: right;
}

/* Full Width Table */

.full-width-table .ant-card-body {
  padding: 0 !important;
}

.full-width-table .ant-table {
  border-radius: 10px !important;
}

.full-width-table .top-seller-table {
  min-height: 406px;
}

.full-width-table .top-seller-table .ant-table-content .ant-table-cell {
  white-space: normal;
  padding: 16px 15px;
}

.full-width-table .top-seller-table .ant-table-content .ant-table-cell:first-child {
  padding-left: 25px;
}

.full-width-table .top-seller-table .ant-table-content .ant-table-cell:last-child {
  padding-right: 25px;
}

.full-width-table .top-seller-table th {
  text-align: right;
  color: #272b41;
  font-weight: 500;
}

.full-width-table .top-seller-table td {
  color: #5a5f7d;
}

.full-width-table .top-seller-table th:first-child,
.full-width-table .top-seller-table td:first-child {
  text-align: left;
}

/* Table Responsive */

.table-responsive .ant-table-content {
  display: block;
  width: 100%;
  overflow-x: auto;
}

.table-responsive .ant-table-content .ant-table-cell {
  white-space: nowrap;
}

/* Rich TextEditor  */

.RichTextEditor__root___2QXK- {
  border: 0 none !important;
}

.RichTextEditor__root___2QXK- .EditorToolbar__root___3_Aqz {
  margin: 0;
  border-color: #f1f2f6;
}

.RichTextEditor__root___2QXK- .ButtonWrap__root___1EO_R button {
  padding: 0;
  border: 0 none;
  background: #fff;
  margin-right: 8px;
}

.RichTextEditor__root___2QXK- .Dropdown__root___3ALmx .Dropdown__value___34Py9 {
  border: 0 none;
}

.RichTextEditor__root___2QXK- .Dropdown__root___3ALmx select {
  border-right-width: 0px;
}

.RichTextEditor__editor___1QqIU .DraftEditor-editorContainer {
  border: 0 none;
}

/* ChatBox Dropdwon */

.atbd-chatbox__messageControl {
  min-width: 210px;
}

.atbd-chatbox__messageControl ul li a {
  padding: 4px 24px;
}

.atbd-chatbox__emoji {
  margin: -4.48px 0;
  padding: 0 10px;
}

.atbd-chatbox__emoji ul {
  display: flex;
  align-items: center;
}

.atbd-chatbox__emoji ul li {
  display: inline-block;
}

.atbd-chatbox__emoji ul li a {
  display: block;
  font-size: 20px;
  padding: 4px 7px;
  background: #fff;
}

.atbd-chatbox__emoji ul li a:hover {
  background-color: transparent;
}

.atbd-chatbox__emoji ul li a svg {
  margin: 0;
}

.rdrMonths {
  flex-wrap: wrap;
}

.ant-space {
  flex-wrap: wrap;
}

.ant-menu .ant-menu-submenu .ant-menu-submenu-title {
  display: flex;
  align-items: center;
}

.ant-menu-submenu.ant-menu-submenu-inline .ant-menu-submenu-title,
.ant-menu-item {
  display: inline-flex;
}

.ant-menu-submenu-popup {
  z-index: 105;
}

.ant-menu-submenu-popup .ant-menu-sub {
  padding: 8px 0;
}

.ant-menu-submenu-popup .ant-menu-submenu.ant-menu-submenu-inline .ant-menu-submenu-title,
.ant-menu-submenu-popup .ant-menu-item {
  display: block;
}

.ant-menu-submenu-popup .ant-menu-item {
  margin-bottom: 0 !important;
}
.ant-menu-sub.ant-menu-vertical {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}
.ant-menu-sub.ant-menu-vertical .ant-menu-item a {
  color: #5a5f7d;
}

/* page heading */

.ant-page-header {
  padding: 26px 30px 26px 30px !important;
}

.ant-page-header-heading {
  align-items: center;
}

.ant-page-header-heading-title {
  text-transform: capitalize;
}

/* Antd drag & drop */

.row-dragging {
  /* background: #fafafa; */
  /* border: 1px solid #ccc; */
  box-shadow: 0 15px 50px #9299b820;
  display: flex;
}

.row-dragging tr {
  box-shadow: 0 15px 50px #9299b820;
}

.row-dragging td {
  padding: 16px;
  color: #000;
  position: relative;
  z-index: 9999;
  opacity: 0.5;
  vertical-align: middle;
}

.row-dragging td .ant-checkbox-checked .ant-checkbox-inner {
  background-color: #20c997;
  border-color: #20c997;
}

.row-dragging td .todos-action,
.row-dragging td .table-actions {
  display: none;
}

.row-dragging td .user-info figcaption {
  display: none;
}

.row-dragging td .feather-move,
.row-dragging td .drag_email,
.row-dragging td .drag_company,
.row-dragging td .drag_designation,
.row-dragging td .drag_join-date,
.row-dragging td .active {
  display: inline-block;
  margin-top: 10px;
}

.row-dragging .drag-visible {
  visibility: visible;
}

@media (max-width: 767px) {
  .ant-page-header {
    padding: 26px 15px 26px 15px !important;
  }
}

.page-header-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: -6px -4px;
}

.page-header-actions button {
  font-size: 12px;
  font-weight: 500;
  height: 34px;
  padding: 0 12.32px;
  box-shadow: 0 3px 5px #9299b805;
  margin: 6px 4px;
}

.page-header-actions button.ant-btn-white:focus {
  background-color: #fff !important;
}

.page-header-actions button + button {
  margin-left: 8px;
}

.page-header-actions button.ant-btn-white svg {
  width: 12px;
  height: 12px;
  margin-right: 2px;
  color: #5f63f2;
}

/* Layout Css */

.ant-menu-dark .ant-menu-inline.ant-menu-sub,
.ant-menu.ant-menu-dark,
.ant-menu-dark .ant-menu-sub {
  background: #272b41 !important;
}

.ant-menu-dark .ant-menu-item a {
  font-weight: 400;
  color: rgba(255, 255, 255, 0.65) !important;
}

.ant-menu-dark .ant-menu-item a:hover {
  color: #ffffff;
}

.ant-menu-dark .ant-menu-submenu span {
  color: rgba(255, 255, 255, 0.65) !important;
}

.ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal) .ant-menu-item-selected {
  background-color: rgba(255, 255, 255, 0.05);
}

.ant-menu-inline-collapsed-tooltip a {
  color: #000 !important;
}

.ant-menu.ant-menu-dark .ant-menu-submenu-title .ant-menu-submenu-arrow::before {
  background: transparent;
}

/* Chart Label */

.chart-label {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 6px;
  color: #5a5f7d;
}

.chart-label .label-dot {
  margin-right: 8px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
}

.chart-label .label-dot.dot-success {
  background: #20c997;
}

.chart-label .label-dot.dot-info {
  background: #5f63f2;
}

.chart-label .label-dot.dot-warning {
  background: #fa8b0c;
}

/* NOtification CSS */

.ant-notification {
  z-index: 99999 !important;
}

.rdrInputRange {
  padding-left: 10px !important;
}

/* Overlay Dark */
.overlay-dark {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #10122130;
  z-index: -1;
  opacity: 0;
  visibility: hidden;
}
.overlay-dark.show {
  z-index: 999;
  opacity: 1;
  visibility: visible;
}

/* Responsive CSS */

@media only screen and (max-width: 1500px) {
  .full-width-table .revenue-table {
    min-height: 100%;
  }
  .pop-confirm .ant-btn {
    padding: 0 20px;
    max-width: 60px;
  }
  .pop-confirm.pop-confirm-right {
    margin-left: 300px !important;
  }
  .pop-confirm.pop-confirm-bottom,
  .pop-confirm.pop-confirm-top {
    margin-left: 80px !important;
  }
}

@media only screen and (max-width: 1199px) {
  .ant-page-header {
    padding: 0 15px;
  }
}

@media only screen and (max-width: 991px) {
  .rdrMonths .rdrMonth {
    width: 100%;
    margin-bottom: 30px;
  }
  .rdrDateRangePickerWrapper.PreviewArea {
    max-height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .rdrCalendarWrapper.rdrDateRangeWrapper {
    margin-top: 20px;
  }
  .ant-menu-inline-collapsed-tooltip {
    display: none;
  }
}

@media only screen and (max-width: 800px) {
  .ant-page-header-heading-left {
    max-width: 320px;
  }
}

@media only screen and (max-width: 767px) {
  .ant-page-header {
    padding: 26px 15px 26px 15px !important;
  }
  .ant-page-header-heading {
    flex-flow: column;
    align-items: center;
    justify-content: center !important;
  }
  .ant-page-header-heading-left {
    max-width: 100%;
  }
  .ant-page-header-heading .ant-page-header-heading-title {
    margin-right: 0;
    white-space: normal;
    text-align: center;
  }
  .ant-page-header-heading-extra {
    white-space: normal !important;
    margin: 12px 0 4px !important;
  }
  .ant-page-header-heading-extra .page-header-actions {
    white-space: normal !important;
    text-align: center;
  }
  .ant-card-body {
    padding: 20px !important;
  }
  .ant-card-head {
    padding-left: 20px !important;
    padding-right: 20px !important;
  }
  .ant-pagination .ant-pagination-item,
  .ant-pagination .ant-pagination-item.ant-pagination-prev,
  .ant-pagination .ant-pagination-item.ant-pagination-next,
  .ant-pagination .ant-pagination-jump-prev {
    margin-right: 5px;
  }
  .ant-pagination li.ant-pagination-item,
  .ant-pagination li.ant-pagination-prev,
  .ant-pagination li.ant-pagination-next {
    height: 25px;
    min-width: 25px;
    line-height: 22px;
  }
  .ant-pagination li.ant-pagination-prev .anticon,
  .ant-pagination li.ant-pagination-next .anticon {
    vertical-align: 0.15em;
  }
  .ant-table-pagination {
    float: none !important;
    text-align: center;
  }
  .ant-table-pagination li.ant-pagination-total-text {
    display: block;
    margin-bottom: 8px;
  }
  .ant-table-pagination li {
    margin-right: 8px !important;
  }
  .ant-pagination .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    height: 25px !important;
  }
  .ant-pagination .ant-select-single .ant-select-selector .ant-select-selection-item {
    line-height: 23px !important;
  }
  .rdrDefinedRangesWrapper {
    border-right: 0 none;
  }
}

@media only screen and (max-width: 575px) {
  .btn-inc,
  .btn-dec {
    height: 30px;
    width: 30px;
  }
  .ant-page-header {
    padding: 16px 20px !important;
  }
  .ant-layout-header {
    height: auto;
  }
  .ant-card-head-title {
    white-space: normal !important;
  }
  .pop-confirm .ant-btn {
    max-width: 60px;
    padding: 0 20px;
  }
  .pop-confirm.pop-confirm-right {
    margin-left: 320px !important;
  }
  .pop-confirm.pop-confirm-bottom {
    margin-left: 95px !important;
  }
  /* Card Heading */
  .ant-card-head-wrapper {
    flex-flow: column;
    align-items: center;
  }
  .ant-card-head-wrapper .ant-card-extra {
    padding: 10px 0 16px !important;
    float: none;
    margin: 0;
    flex-flow: column;
  }
  .ant-card-head-wrapper .ant-card-extra .ant-dropdown-trigger + .card-nav {
    margin-bottom: 8px;
  }
  .ant-card-head-wrapper .ant-card-extra .ant-dropdown-trigger {
    margin: 0 !important;
  }
  .ant-card-head-wrapper .ant-card-head-title {
    padding: 18px 0 0px !important;
  }
  .card-nav ul li.active:before {
    display: none;
  }
  .ant-card-head-title > div {
    display: flex;
    flex-flow: column;
    align-items: center;
  }
  .ant-card-head-title > div span {
    margin: 8px 0 0;
  }
}

.bmzxig .ant-table tr th:first-child,
.bmzxig .ant-table tr td:first-child {
  padding-right: 15px;
}

/* Emprt */

.ant-empty .ant-empty-footer button {
  padding: 0px 15.58px !important;
}

/* Add Event Modal */
.addEvent-modal .ant-modal-header {
  padding: 20px 25px;
}
.addEvent-modal .ant-modal-header .ant-modal-close-x svg {
  color: #5a5f7d;
}
.addEvent-modal .ant-modal-header .ant-modal-title {
  font-size: 15px;
  font-weight: 500;
  color: #272b41;
}

.addEvent-modal .ant-modal-body {
  padding: 23px 25px;
}

/* Event Dropdown */

.event-dropdown {
  min-width: auto !important;
  max-width: 450px;
  padding: 0 !important;
  margin: 6px 0 0 !important;
  box-shadow: 0 10px 40px #9299b820 !important;
}

.event-dropdown div {
  border-radius: 8px;
}

.event-dropdown .ant-card {
  width: 100% !important;
  margin-bottom: 0 !important;
}

@media only screen and (max-width: 479px) {
  .placement-confirm {
    display: flex;
    flex-wrap: wrap;
    margin: -5px -10px 0 -5px;
  }
  .placement-confirm .pop-confirm {
    flex: 0 0 50%;
  }
  .pop-confirm .ant-btn {
    display: block;
    padding: 0 20px;
    max-width: 80px;
    min-width: 80px;
    margin: 10px;
  }
  .pop-confirm.pop-confirm-right {
    margin-left: 0px !important;
  }
  .pop-confirm.pop-confirm-top {
    margin-left: 0px !important;
  }
  .pop-confirm.pop-confirm-bottom {
    margin-left: 0px !important;
    margin-top: 0px !important;
  }
}

@media only screen and (max-width: 400px) {
  .ant-select {
    width: 100% !important;
  }
  .rdrDefinedRangesWrapper {
    width: 100% !important;
  }
  .rdrDateRangePickerWrapper {
    flex-wrap: wrap;
  }
  .atbd-top-dropdwon {
    width: 280px;
    min-width: 180px;
  }
  .atbd-top-dropdwon .atbd-top-dropdwon__title {
    min-height: 40px;
  }
  .atbd-top-dropdwon .atbd-top-dropdwon__nav li:not(:last-child) {
    margin-bottom: 10px;
  }
  .atbd-top-dropdwon .atbd-top-dropdwon__nav li a {
    padding: 10px 0px;
  }
  .atbd-top-dropdwon .atbd-top-dropdwon__content img {
    margin-right: 15px;
  }
  .atbd-top-dropdwon .atbd-top-dropdwon__content figcaption {
    margin-left: 0;
  }
  .atbd-top-dropdwon .atbd-top-dropdwon__content figcaption .atbd-top-dropdwonText {
    min-width: 155px;
  }
  .ant-drawer-content-wrapper {
    width: 260px !important;
  }
  .rdrCalendarWrapper.rdrDateRangeWrapper {
    margin-top: 0;
  }
}

@media only screen and (max-width: 379px) {
  .ant-card-head-wrapper .ant-card-extra .ant-radio-button-wrapper {
    height: 32px !important;
    line-height: 30px !important;
  }
  .ant-notification-notice {
    width: 275px;
  }
}

@media (max-width: 991px) {
  .mail-sideabr {
    box-shadow: 0 0 10px #00000020;
  }
}

/* .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn{
    color: #fff !important;
  } */

/* custom label */

/* card spin loader */

.ant-card-body .sd-spin div,
.ant-card-body .spin div {
  position: relative;
}

.ant-card-body .sd-spin,
.ant-card-body .spin {
  height: 200px;
}

.ant-card-body {
  position: relative;
}

.ant-card-body .sd-spin .ant-spin,
.ant-card-body .spin .ant-spin {
  display: flex;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  min-height: 200px;
}

.starActive svg {
  color: red;
}

/* vectormap zoom in / zoom out */

.jvectormap-zoomin,
.jvectormap-zoomout {
  width: 27px;
  height: 27px;
  background: none;
  color: #5a5f7d;
  border: 1px solid #f1f2f6;
  padding: 0;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  left: auto;
  right: 0;
  top: auto;
  background-color: #fff;
}

.jvectormap-zoomin {
  border-radius: 6px 6px 0 0;
  bottom: 36px;
}

.jvectormap-zoomout {
  border-radius: 0 0 6px 6px;
  bottom: 10px;
}

.jvectormap-tip {
  padding: 7px 12px;
  border: 0 none;
  font-size: 12px;
  background: #272b41;
}

.btn-rtl {
  width: 60px;
  height: 60px;
  border: 1px solid #fff;
  background: #4347d9;
  color: #fff;
  position: fixed;
  right: 0;
  top: 50%;
  margin-top: -30px;
  z-index: 99999999;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* masonry-grid start from here */

.my-masonry-grid {
  display: -webkit-box;
  /* Not needed if autoprefixing */
  display: -ms-flexbox;
  /* Not needed if autoprefixing */
  display: flex;
  margin-left: -10px;
  /* gutter size offset */
  width: auto;
}

.my-masonry-grid_column {
  padding-left: 10px;
  /* gutter size */
  background-clip: padding-box;
}

/* Style your items */

.my-masonry-grid_column > div {
  /* change div to reference your elements you put in <Masonry> */
  background: grey;
  margin-bottom: 30px;
}

html[dir='rtl'] .ant-menu.ant-menu-vertical {
  text-align: right !important;
}

html[dir='rtl'] .ant-menu.ant-menu-vertical .ant-menu-submenu-placement-rightTop {
  left: -170px !important;
}

html[dir='rtl'] .ant-menu.ant-menu-vertical .ant-menu-vertical-left {
  text-align: right;
}

html[dir='rtl'] .ant-menu.ant-menu-vertical .ant-menu-submenu-arrow {
  right: auto;
  left: 16px;
  transform: rotateY(180deg);
}

html[dir='rtl'] .ant-menu-vertical .ant-menu-submenu-title {
  padding-right: 15px !important;
}
`;

export default GlobalStyle;
