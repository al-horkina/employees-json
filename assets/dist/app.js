(($) => {
    $('document').ready(() => {
        const $xhr = $.ajax({
            url: 'ajax/employees.json'
        });

        $xhr.done((response) => {
            if (response.success) {
                response.data.forEach((elem, i, arr) => {
                    let $list;

                    if (elem.inoffice === 'in') {
                        $list = $(
                            '<div class="list__item in"/>'
                        );
                    }else {
                        $list = $(
                            '<div class="list__item out"/>'
                        );
                    }
                    $('#employeeList').append($list);
                    $list.html(elem.name);
                });
            } else {
                console.log('Error! AJAX response');
            }
        });
    })
})(jQuery);