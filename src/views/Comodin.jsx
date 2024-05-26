import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Comodin = () => {

    const navigate = useNavigate();

    const volverAHome = () => {
        navigate('/')
    }

    return (
        <div className='container'>
            <div className='comodin'>
                <img src='/assets/imgs/notfound.jpg' alt="Imagen no encontrada" />
                {/* <img src='./src/assets/imgs/notfound.jpg' alt="Imagen no encontrada" /> */}
                <Button
                    variant='contained'
                    onClick={volverAHome}>
                    Volver al Inicio
                </Button>
            </div>
            
        </div>
    );
};

export default Comodin;
