/* =====================
# ACORDION
Se acota por cada .acordeon (no por document) para que dos acordeones
independientes en la misma página no cierren los paneles del otro.
===================== */
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.acordeon').forEach(group => {
        const headers = group.querySelectorAll('.acordeon-header');

        headers.forEach(header => {
            header.addEventListener('click', function() {
                const body = this.nextElementSibling;
                const isOpen = body.style.display === "block";

                // Cerrar todos los paneles de este acordeón
                headers.forEach(h => {
                    h.nextElementSibling.style.display = "none";
                    h.classList.remove('open');
                });

                // Si no estaba abierto, abrir el panel actual
                if (!isOpen) {
                    body.style.display = "block";
                    this.classList.add('open');
                }
            });
        });
    });
});
