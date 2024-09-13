interface Jugador {
    nombre: string;
    edad: number;
    posicion: string;
    equipo: string;
    nacionalidad: string;
}

type InfoJugador = Omit<Jugador, 'equipo' | 'posicion'>;

const jugador: InfoJugador = {
    nombre: 'Lionel Messi',
    edad: 35,
    nacionalidad: "Argentina",
    
};

console.log(jugador);
