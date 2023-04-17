const imagenes = document.querySelectorAll('img.imagenita');

for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener('mouseover', function () {
        
        const nuevaImagen = document.createElement('img');
        nuevaImagen.setAttribute('src', this.getAttribute('src'));
        nuevaImagen.classList.add('copia');

        
        document.body.appendChild(nuevaImagen);

        
        const rect = this.getBoundingClientRect();
        nuevaImagen.style.top = rect.top + 'px';
        nuevaImagen.style.left = rect.right + '10px';
        nuevaImagen.style.width = this.offsetWidth * 1.2 + 'px'; 
        nuevaImagen.style.height = this.offsetHeight * 1.2 + 'px'; 
    });

    imagenes[i].addEventListener('mouseout', function () {
        const copia = document.querySelector('img.copia');
        if (copia) {
            copia.remove();
        }
    });
}

const filterSelect = document.querySelector('select[name="filter"]');
const filterButton = document.querySelector('input[value="Filtrar"]');


function filterTable() {
    const selectedGenre = filterSelect.value;
    console.log(selectedGenre)
    const rows = document.querySelectorAll('#art tbody tr');
    rows.forEach(row => {
        if (row.classList.contains(selectedGenre) || selectedGenre === '0') {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

filterButton.addEventListener('click', filterTable);

document.addEventListener('DOMContentLoaded', filterTable);
