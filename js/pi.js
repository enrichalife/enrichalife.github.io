$(function () {

    $(document).ready(function () {

        // Build the chart
        $('#pichart').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'Expenditure breakdown for First PUC 2015'
            },
            tooltip: {
                pointFormat: '{series.name}'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                type: 'pie',
                name: 'Exp Category',
                data: [
                    ['Donation',   61],
     ['Tution Fees',    17],
                    
                    ['Uniform',    11],
                    ['Books',     4],
                    ['Travel',   7],
     
                ]
            }]
        });
    });

});