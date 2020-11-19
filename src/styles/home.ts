import styled from 'styled-components';

const NoteWrapper = styled.div`
  position: relative;
  .sidebar-card {
    .ant-card {
      min-height: 710px;
      .ant-card-body {
        padding: 25px 0 !important;
      }
    }
  }
  .ant-card-body {
    padding: 30px 30px 0 30px !important;
  }
  .trigger-close.ant-btn-link {
    margin: 0 !important;
    position: absolute;
    ${({ theme }) => (!theme.rtl ? 'right' : 'left')}: 20px;
    top: 20px;
    z-index: 99;
    padding: 0;
    background: transparent !important;
  }
  .trigger-col {
    @media only screen and (max-width: 991px) {
      text-align: center;
    }
  }
  .ant-btn-link {
    background: #fff !important;
    margin-bottom: 25px;
    border-radius: 6px;
    color: ${({ theme }) => theme['primary-color']} !important;
    &:focus {
      color: ${({ theme }) => theme['primary-color']} !important;
    }
  }
  .note-sideabr {
    &.hide {
      transform: translateX(${({ theme }) => (theme.rtl ? '100%' : '-100%')});
      transition: 0.35s ease-in;
    }
    &.show {
      transform: translateX(0%);
      transition: 0.35s ease-in;
    }
    @media only screen and (max-width: 991px) {
      display: block;
      background: #fff;
      position: fixed;
      ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 0;
      top: 60px;
      width: 280px;
      height: 100%;
      z-index: 99;
    }
    .ant-card {
      min-height: 900px;
      .ant-card-body {
        padding: 0px !important;
      }
    }
  }

  .note-sidebar-top {
    padding: 30px 30px 0;
    @media only screen and (max-width: 991px) {
      padding: 60px 30px 0;
    }
    .ant-btn {
      height: 44px;
    }
  }

  .note-sidebar-bottom {
    padding: 0 15px 25px 15px;
  }

  table {
    .ant-table-tbody {
      .ant-table-cell {
        vertical-align: top;
      }
    }
  }
`;

export { NoteWrapper };
