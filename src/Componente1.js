import React from 'react'

const Componente1 = () => {
    return (
        <section>
            <Saluto />
            <Saluto />
            <Saluto />
        </section>
    );
};

const Persona = () => {
    return <h2>Ciao Sono Enzo</h2>;
};

const Messaggio = () => <h4>Sono un messaggio</h4>;

const Saluto = () => {
    return (
    <React.Fragment>
        <Persona />
        <Messaggio></Messaggio>
    </React.Fragment>
    );
};

export default Componente1