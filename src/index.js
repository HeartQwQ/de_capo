const breadSlices = document.querySelector(".breadSlices")
const main = document.querySelector("main");
const sideNavBar = document.querySelector("#sideNavBar");
const SideNavBarMask = document.querySelector("#SideNavBarMask")

isMainTop();
// 滚动事件
document.addEventListener("scroll", function () {
  isMainTop()
});

breadSlices.addEventListener("click", function () {
  this.classList.toggle("open");
  if (this.className.includes("open")) {
    sideNavBar.style.transform = "translateX(0)";
    SideNavBarMask.style.display = "block";
  } else {
    sideNavBar.style.transform = "translateX(100%)";
    SideNavBarMask.style.display = "none";
  }
});

SideNavBarMask.addEventListener("click", function () {
  breadSlices.classList.remove("open")
  sideNavBar.style.transform = "translateX(100%)";
  SideNavBarMask.style.display = "none";
})











function isMainTop() {
  if (document.documentElement.clientWidth > 1223) {
    // 获取 页面顶部到当前位置的距离
    const scrollY =
      document.documentElement.scrollTop || document.body.scrollTop;
    // 判断是否超过Main
    if (main && scrollY > main.offsetTop - 10) {
      sideNavBar.classList.add("fiexd");
    } else if (main && scrollY < main.offsetTop) {
      sideNavBar.classList.remove("fiexd");
    }
  }
}