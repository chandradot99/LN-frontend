<template>
  <div class="h-100">
    <vue-progress-bar></vue-progress-bar>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto');

  body {
    margin: 0;
    height: 100vh;
    font-family: 'Roboto', sans-serif !important;
    input {
      height: 45px !important;
      border-radius: 4px !important;
      &::placeholder {
        font-size: 13px;
        color: #6d6d6d;
      }
      &:focus {
        outline: none !important;
        box-shadow: none !important;
        border-color: #e2e2e2 !important;
      }
    }
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
      -webkit-appearance: none; 
      margin: 0; 
    }
    .custom-control-input:checked ~ .custom-control-label::before {
      border-color: #FFAF2A;
      background-color: #FFAF2A;
    }
    .btn-secondary {
      border-radius: 4px;
      background-color: #FFAF2A;
      border: 1px solid #FFAF2A;
      outline: none;
      box-shadow: none;
      height: 45px;
      &:focus {
        outline: none;
        box-shadow: none;
        border-color: #e2e2e2 !important;
      }
    }
  }
  .h-100 {
    height: 100%;
  }
  .table {
    width: 100%;
    overflow: auto;
    .thead-light {
      font-size: 14px;
      tr {
        th {
          background-color: #ffffff;
          text-transform: uppercase;
          border-top: 1px solid #f2f2f2;
          border-bottom: 1px solid #f2f2f2;
          &:focus {
            outline: none;
          }
          &:first-child {
            padding-left: 60px;
          }
        }
      }
    }
    tbody {
      font-size: 14px;
      color: #6d6d6d;
      tr {
        &:nth-of-type(even) {
          background-color: rgba(0, 0, 0, 0.02);
        }
        td {
          border-top: 1px solid #f2f2f2;
          .icon {
            width: 21px;
            height: 21px;
            cursor: pointer;
          }
          &:first-child {
            padding-left: 60px;
          }
        }
      }
    }
  }
  .b-table-sticky-header {
    max-height: 100% !important;
  }
  .form-group--error {
    input {
      border-color: #f79483;
      &::placeholder {
        color: #f57f6c;
      }
    }
    .error {
      color: #f57f6c;
      font-size: 13px;
      padding-top: 4px;
      padding-left: 4px;
    }
  }
</style>
