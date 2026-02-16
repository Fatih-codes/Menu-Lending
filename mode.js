document.addEventListener("DOMContentLoaded", function () {
    const collapses = document.querySelectorAll(".collapse");

    collapses.forEach(current => {
        current.addEventListener("show.bs.collapse", function () {

            collapses.forEach(other => {
                if (other !== current) {
                    const instance = bootstrap.Collapse.getInstance(other);
                    if (instance) {
                        instance.hide();
                    }
                }
            });

        });
    });
});
