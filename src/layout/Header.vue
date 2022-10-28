<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<template>
  <div id="layout-header">
    <div class="left">
      <span>ui系统</span>
    </div>
    <div class="center">
      <el-menu
        :default-active="$route.path"
        mode="horizontal"
        :ellipsis="false"
        router
      >
        <el-menu-item index="/home">首页</el-menu-item>
        <el-sub-menu index="/management">
          <template #title>管理</template>
          <el-menu-item index="/management/org">org管理</el-menu-item>
          <el-menu-item index="/management/user">用户管理</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
    <div class="right"></div>
  </div>
</template>

<style lang="scss">
@mixin active {
  color: #2865e3;
  background-color: #fff;
  border-radius: 0.1rem 0.1rem 0 0;

  &::before,
  &::after {
    content: '';
    display: block;
    height: 4px;
    width: 4px;
    position: absolute;
    bottom: 0;
    background: radial-gradient(4px at 4px 0, transparent 4px, #fff 4px);
  }

  &::before {
    left: -4px;
    transform: scaleX(-1);
  }
  &::after {
    right: -4px;
  }
}
#layout-header {
  display: flex;
  justify-content: space-between;
  height: 0.6rem;
  line-height: 0.6rem;
  color: #fff;
  background-color: #409eff;

  padding: 0 0.32rem;
  position: sticky;
  top: 0;
  z-index: 2000;

  .left {
    display: flex;
    cursor: pointer;

    .logo {
      display: inline-block;
      width: 0.32rem;
      padding: 0 0.08rem 0 0;
    }

    .title {
      font-size: 0.26rem;
      font-weight: 700;
    }
  }

  .center {
    display: flex;
    align-items: flex-end;

    .menu.horizontal {
      font-size: 0.16rem;
      display: flex;
      align-items: flex-end;

      & > .menu-item,
      & > .submenu {
        height: 0.56rem !important;
        line-height: 0.56rem !important;
        margin: 0 0.04rem;
        position: relative;

        &.is-active,
        &:hover {
          @include active();
        }

        & > .menu {
          top: 0.63rem;
        }
      }

      .submenu-title {
        height: 100%;
      }
    }
  }

  .right {
    // width: 2rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    width: 1.16rem;

    .user {
      display: flex;
      padding: 0 !important;
      justify-content: center;
      .el-icon-arrow-down {
        margin-top: 0.22rem;
        font-size: 0.14rem;
      }

      .username {
        color: #fff;
        font-size: 0.14rem;
        max-width: 0.7rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin: 0 0.04rem;
      }
    }

    .menu.horizontal {
      & > .submenu {
        padding: 0 0.04rem;
        & > .menu {
          // width: 1.24rem;
          top: 0.67rem;
        }
      }

      > li {
        &:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
      }

      .menu-item {
        min-width: 0.72rem;
        // width: 100px;

        &.area {
          font-size: 0.14rem;
          color: #606266 !important;
          cursor: default;

          &:hover {
            color: #606266 !important;
            background-color: #fff !important;
          }
        }
      }
    }

    .line {
      border: 1px solid #ebeef5;
    }
  }
}
</style>
