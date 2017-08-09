$('.nav').on('show.bs.tab', function (e) {
  updateActiveTab(e)
  $(".dropdown-toggle").html(e.target.text + ' <img src="./Assets/SVGs/angle-down.svg" alt="">')
})

$('.top-menu li a').on('click', function (e) {
  updateActiveTab(e)
})

function updateActiveTab(e) {
  let activeTab = e.target.hash.slice(1)
  $('.nav-link.active').removeClass('active')
  $(`.nav-link.${activeTab}`).addClass('active')
}
