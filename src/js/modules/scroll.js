export function doSomethingOnScroll() {
  const scrollArea = document.documentElement;
  let scrollTotal = scrollArea.scrollHeight - scrollArea.clientHeight;
  let bowl = document.querySelector('.bowl');
  // the window is scrolling that's where you listen
  window.addEventListener('scroll', function (e) {
    let degVal = Math.floor(scrollArea.scrollTop / scrollTotal);
    if ((scrollArea.scrollTop / scrollTotal) > 0) {

      //console.log(scrollArea.scrollTop / scrollTotal); find area when you want to take action
      bowl.style.right = 400 - (degVal * 3) + 'px';
      bowl.style.top = 730 - (degVal * 5) + 'px';
    }

  });
}