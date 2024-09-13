interface Persona {
    nombre:string;
    edad:number;
    direccion:string;
}

function actualizarPersona(persona:Persona,cambios:Partial<Persona>):Persona {
    return {...persona,...cambios};
}

const alumno:Persona ={
    nombre:"Pablo",
    edad:25,
    direccion:"Calle loca 132"
};

const cambios:Partial<Persona> = {
    edad:50
}

const estudianteActualizado=actualizarPersona(alumno,cambios);

console.log(estudianteActualizado)