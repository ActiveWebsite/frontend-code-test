$('.nav').on('show.bs.tab', function (e) {
  let activeTab = e.target.hash.slice(1)
  $('.nav .active').removeClass('active')
  $(`.nav .${activeTab}`).addClass('active')
  $(".dropdown-toggle").html(e.target.text + ' <span class="caret-right caret"></span>')
})
