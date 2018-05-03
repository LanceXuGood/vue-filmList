import Vue from "vue"; // 注册
Vue.filter('titleformat', function (value) {
  // 返回处理后的值
  if (value.length > 10) {
    let va = value.substring(0, 6);
    return `${va}...`;
  } else {
    return value;
  }
});
