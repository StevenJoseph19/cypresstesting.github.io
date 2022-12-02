<script type="text/javascript">
    $(function () {
        $("#dialog").dialog({
            modal: true,
            autoOpen: false,
            title: "jQuery Dialog",
            width: 300,
            height: 150
        });
        $("#button1").click(function () {
            $('#dialog').dialog('open');
        });
    });
</script>