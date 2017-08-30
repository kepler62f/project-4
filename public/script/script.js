$(document).ready(function () {
  var $form = $('#transact')
  var $buyInstrument = $('#buyInstrument')
  var $tableBody = $('#tableBody') // set at level of positionUl ensures newly ajax-added positions can be selected 
  var $instrumentsMenu = $('#instrumentsMenu')
  $('#positionsTable').DataTable({
        searching: false,
        ordering: false,
        select: false,
        paging: false,
        info: false
      })

  // handler for buying position
  $buyInstrument.on('click', function(event) { //'#buyInstrument'
      event.preventDefault() // prevents refresh of page

      var id = $('#instrumentsMenu option:selected').val()

      if (id !== '') { // only make ajax req is id not null

        var instrumentID = {instrumentID: id}
        console.log('instrumentID ', instrumentID)

        $.ajax({
          url: '/home/addPosition',
          type: 'POST',
          data: instrumentID,
        }).done(function (res) {
          console.log('success submitting buy selection')
          console.log('xx', res.savedPosition)
          var newPosition = res.savedPosition

          $('#tableBody').append(`<tr id="${newPosition.id}">
                                    <td>${newPosition.name}</td> 
                                    <td>${newPosition.quantity}</td>
                                    <td>${newPosition.unitCost}</td>
                                    <td><a id="sellPosition:${newPosition.id}" href="">Sell</a><td>
                                  </tr>`)

        }).fail(function (res) {
          console.log('error submitting buy selection')
        })
      }      
  })

  // handler for selling position
  $tableBody.on('click', `a[id*='sellPosition']` , function(event) {
        event.preventDefault()

        var positionID = {positionID: event.target.id.substring(13)}

        console.log(event.target.id)
        console.log(event.target.id.substring(13))

        $.ajax({
          url: '/home/sellPosition',
          type: 'POST',
          data: positionID,
        }).done(function (res) {
          console.log('success submitting sell selection')
          console.log('deletedId', res.deletedId)

          var element = '#' + res.deletedId
          $(element).remove()

        }).fail(function (res) {
          console.log('error submitting sell selection')
        })
  }) 

  $instrumentsMenu.change(function (event) {
    event.preventDefault()
    var id = $('#instrumentsMenu option:selected').val()

    $('#eodMktPricing').html('') // clears listing while waiting for res

    if (id !== '') { // send ajax req only if instrument is selected

      $('#eodMktPricing').html(

        `Downloading price...<img src="http://static.spotapps.co/assets/widgets/loading.gif" style="width:20px;height:20px;">`)

      var instrumentID = {instrumentID: id}
      
      $.ajax({
          url: '/home/eodMktPricing',
          type: 'POST',
          data: instrumentID
        }).done(function (res) {
          console.log('success getting market price thru backend')
          var parseRes = JSON.parse(res)
          var eodMktPrice = parseRes.dataset_data.data[0][4]
          var eodMktPriceDate = parseRes.dataset_data.data[0][0]
          console.log('price: ', eodMktPrice)
          console.log('date: ', eodMktPriceDate)
          $('#eodMktPricing').html(`End of Day Market Price (as of ${eodMktPriceDate}): \$${eodMktPrice} <br><i>Source: Quandl Inc.</i>`)

          // render price chart using MetricsGraphics
          var chartData = []
          if (parseRes.dataset_data.data.length < 252) {
            var num = parseRes.dataset_data.data.length
          } else {
            var num = 252
          }

          for (var i = 0; i < num; i++) {
            chartData[i] = {
              'date': new Date(parseRes.dataset_data.data[i][0]), 
              'price': parseRes.dataset_data.data[i][4]
            }
          }

          MG.data_graphic({
            title: "",
            //description: "End of Day Prices",
            data: chartData,
            width: 650,
            height: 300,
            target: '#graph',
            x_accessor: 'date',
            y_accessor: 'price',
            y_extended_ticks: true,
            min_y_from_data: true
          })

        }).fail(function (res) {
          console.log('error getting market price thru backend')
        })         
    }
  })
})
