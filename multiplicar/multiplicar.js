//reqiuereds
const filesystem = require('fs');

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        let data = '';
        for (let i = 1; i <= 10; i++) {
            //el signo +  mas el igual lo que hace es concatenar
            data += (`${base}*${i} = ${base*i}\n`);

        }


        filesystem.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {

            if (err) {
                reject(err);
            } else {

                resolve(`tabla-${base}.txt`);
            }

        });
    });

}

//Forma de exportar archivos para que se use en otros sitios.
module.exports = {
    crearArchivo
}