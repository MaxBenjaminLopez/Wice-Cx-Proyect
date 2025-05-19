import { Navbar } from './navbar'
import '../css/Layout-Generator.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileLines } from '@fortawesome/free-regular-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faRotate } from '@fortawesome/free-solid-svg-icons';

export function Generator() {
    return (
        <>
            <Navbar />

    {/*--------------------------Botones generador-----------------------------------*/}
            <section className='Layout_Generator-content'>
                <button
                    className='Layout_Generator-button'>
                    <FontAwesomeIcon icon={faFileLines} />
                    Generador
                </button>
                <button
                    className='Layout_Generator-button'>
                    <FontAwesomeIcon icon={faClock} />
                    Historico
                </button>
                <button
                    className='Layout_Generator-button'>
                    <FontAwesomeIcon icon={faGear} />
                    Panel de administracion
                </button>
            </section>


        {/*-------------------------- Generador de propuestas-----------------------------------*/}
            <section className='Layout_Generator-content-section Layout_Generator-content-middle'>
                <h2 className='Layout_Generator-h2'>Generador de Propuestas</h2>

                <div className=''>
                    <label for="nombre" className='Layout_Generator-label'>Nombre de la Empresa</label>
                    <input className='Layout_Generator-input' type="text" id="nombre" placeholder='Ingrese el nombre de la empresa' />
                </div>

                <div className='selected'>
                    <label for="pais" className='Layout_Generator-label'>Filial</label>
                    <select name="pais" id="pais" className='Layout_Generator-select'>
                        <option value="">Selecciona una Filial</option>
                        <option value="argentina">Argentina</option>
                        <option value="colombia">Colombia</option>
                        <option value="eeuu">United States</option>
                        <option value="espana">Spain</option>
                    </select>
                </div>

                <div className='boton'>
                    <button className='Layout_Generator-button-1'>
                    <FontAwesomeIcon icon={faFileLines} />
                        Generar Propuesta
                    </button>

                    <button className='Layout_Generator-button-2'>
                        <FontAwesomeIcon icon={faRotate} />
                        Resetear
                    </button>
                </div>


            </section>
        </>
    )

}