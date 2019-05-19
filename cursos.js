const fs = require('fs');

let cursos = [
    {
        id: 1,
        nombre: "Fundamentos de JavaScript",
        duracion: "20 horas",
        valor: "100.000 COP"
    },
    {
        id: 2,
        nombre: "Fundamentos de Python",
        duracion: "20 horas",
        valor: "130.000 COP"
    },
    {
        id: 3,
        nombre: "Técnicas de Machine Learning",
        duracion: "40 horas",
        valor: "300.000 COP"
    }
]

const opciones = {
    id: {
        demand: true
    },
    nombre: {
        demand: true
    },
    cedula: {
        demand: true
    }
}

let imprimirCursos = () => {
    cursos.forEach((curso, index) => {
        setTimeout(()=>{
            console.log(`------\n Id: ${curso.id}\n Nombre: ${curso.nombre}\n Duración: ${curso.duracion}\n Valor: ${curso.valor}`)
        }, index * 2000);
    });
}

let imprimirCurso = (curso) => {
    console.log(`------\n Id: ${curso.id}\n Nombre: ${curso.nombre}\n Duración: ${curso.duracion}\n Valor: ${curso.valor}`)
}

const argv = require('yargs')
                .command('inscribir', 'Inscripción de estudiante en el curso', opciones)
                .argv

if (argv._.includes('inscribir')) {
    let curso = cursos.find(curso => curso.id === argv.id);
    if(curso){
        console.log('\nCurso seleccioando: \n')
        imprimirCurso(curso)
        texto = `------\n Id: ${curso.id}\n Nombre: ${curso.nombre}\n Duración: ${curso.duracion}\n Valor: ${curso.valor}\n-------\n
Estudiante:\n Nombre: ${argv.nombre}\n Duración: ${argv.cedula}\n`
        fs.writeFile('info.txt', texto, function (err) {
            if (err) throw err;
            console.log('Archivo generado');
          });
    } else {
        console.log(`\nNo se encontró curso con ID: ${argv.id} \n\nLos siguientes son los cursos disponibles:\n`)
        imprimirCursos()
    }
} else {
    imprimirCursos()
}

