(($) => {
    $('document').ready(() => {
        const $xhr = $.ajax({
            url: 'ajax/employees.json'
        });

        $xhr.done((response) => {
            if (response.success) {
                response.data.forEach((elem, i, arr) => {
                    const $list = $(
                        '<div class="list__item"/>'
                    );
                    $('#employeeList').append($list);
                    $list.html(elem.name);

                    if (elem.inoffice === 'in') {
                        $('.list__item').addClass('in');
                    }else {
                        $('.list__item').addClass('out');
                    }

                });
            } else {
                console.log('Error! AJAX response');
            }
        });
    })
})(jQuery);