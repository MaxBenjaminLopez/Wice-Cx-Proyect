import { Navbar } from './navbar'
import '../css/Layout-Generator.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileLines } from '@fortawesome/free-regular-svg-icons';
import { faRotate } from '@fortawesome/free-solid-svg-icons';
import { Links } from './Links';

export function Generator() {
    return (
        <>
            <Navbar />

            {/*--------------------------Botones generador-----------------------------------*/}
            
            <Links />

            {/*-------------------------- Generador de propuestas-----------------------------------*/}
            <section className='Layout_Generator-content-section'>
                <h2 className='Layout_Generator-h2'>Generador de Propuestas</h2>

                <div >
                    <label for="nombre" className='Layout_Generator-label'>Nombre de la Empresa</label>
                    <input className='Layout_Generator-input' type="text" id="nombre" placeholder='Ingrese el nombre de la empresa' />
                </div>

                <div>
                    <label for="pais" className='Layout_Generator-label'>Filial</label>
                    <select name="pais" id="pais" className='Layout_Generator-select'>
                        <option value="">Selecciona una Filial</option>
                        <option value="argentina">Argentina</option>
                        <option value="colombia">Colombia</option>
                        <option value="eeuu">United States</option>
                        <option value="espana">Spain</option>
                    </select>
                </div>

                <div className='Layout_Generator-div-button'>
                    <button className='Layout_Generator-button-1'>
                        <FontAwesomeIcon icon={faFileLines} className='icon' />
                        Generar Propuesta
                    </button>

                    <button className='Layout_Generator-button-2'>
                        <FontAwesomeIcon icon={faRotate} className='icon' />
                        Resetear
                    </button>
                </div>


            </section>
        </>
    )

}