$('.nav').on('show.bs.tab', function (e) {
  let activeTab = e.target.hash.slice(1)
  $('.nav .active').removeClass('active')
  $(`.nav .${activeTab}`).addClass('active')
  $(".dropdown-toggle").html(e.target.text + ' <img src="./Assets/SVGs/angle-down.svg" alt="">')
})
