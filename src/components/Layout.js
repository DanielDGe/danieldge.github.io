import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Layout = ({ children, title, footer = true }) => {

    const location = useLocation();
    console.log(location);

    useEffect(() => {

        //NProgress.start();
        //NProgress.done();

    }, []);

    return (

        <div>

            <main className="container">

                {/* Title */}
                {title && (
                    <h2 className="mt-3">
                        {title}
                    </h2>
                )}

                <br />

                {/* Content */}
                {children}

            </main>

            {footer && (
                <footer className="bg-primary text-white text-center mt-3">
                    <div className="container p-4">
                        <h4 className='d-inline'>Daniel García Portfolio</h4> <span>&copy;</span>
                        <p>Me considero un joven dinámico y autodidacta con muchas ganas de trabajar,
                            aprender y emprender.</p>
                        <p>2022 - {new Date().getFullYear()}</p>
                        <p>All rights Reserved.</p>
                    </div>
                </footer>
            )}

        </div>

    )
}

export default Layout