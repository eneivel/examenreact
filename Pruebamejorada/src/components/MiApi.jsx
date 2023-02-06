import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';




const MiApp = () => {

    const [info, setInfo] = useState([])
    const [personajeFiltrado, setPersonajeFiltrado] = useState('');
    const [filtroActivado, setFiltroActivado] = useState(false);
    const [listaFiltrada, setListaFiltrada] = useState('')


    useEffect(() => {
        informacionConsultada()
    }, [])

    const informacionConsultada = async () => {
        const url = 'https://rickandmortyapi.com/api/character'
        const response = await fetch(url)
        const data = await response.json()
        setInfo(data.results)
    }

    const validarDatos = (e) => {
        e.preventDefault()
    }


    const filtrar = () => {
        setFiltroActivado(true)
        setListaFiltrada(info.filter(e => e.name === personajeFiltrado))
        setPersonajeFiltrado('');
    }

    const busqueda = (e) => {
        setPersonajeFiltrado(e.target.value)
    }


    const borrarFiltro = () => {
        setFiltroActivado(false)
    }



    return (

        <form onSubmit={validarDatos}>
            <Stack direction="horizontal" gap={3}>
                <Form.Control className="me-auto" placeholder="Busca un personaje exactamente como aparece escrito!!!" onChange={busqueda} />
                <Button variant="primary" onClick={filtrar}>Aplicar Filtro</Button>
                <div className="vr" />
                <Button variant="primary" onClick={borrarFiltro}>Resetear Filtro</Button>
                <div className="vr" />
                <Button variant="primary">Ordena Alfabeticamente</Button>
            </Stack>

               <ul>
                {filtroActivado === false ?
                    info.map(e => <li key={e.id}><img src={e.image} alt='Imagenes de cada personaje' width='50'  height='50'/> {e.name}  /  {e.species}  </li>) :
                    listaFiltrada.map(e => <li key={e.id}> <img src={e.image} alt='Imagenes de cada personaje' width='50' height='' />{e.name}  /  {e.species} </li>)}
            </ul> 

            

        </form>
    )
}

export default MiApp;


