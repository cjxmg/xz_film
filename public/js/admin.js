$(function() {
    $('.delete').on('click', function(event) {
        var isConfirm = confirm('确认删除吗？！');
        if(!isConfirm){
            return;
        }

        var target = $(event.target);
        var tr = target.parent().parent();
        var id = target.data('id');

        $.ajax({
            type: 'delete',
            url: '/admin/list?id=' + id,
            success: function (msg) {
                if(msg.success == 1){
                    tr.remove();
                }

            }
        })

    })
})


