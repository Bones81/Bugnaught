import './footer.css'

const Footer: React.FunctionComponent = () => {
    return (
        <>
            <footer className="container-fluid mt-auto bg-secondary sticky-bottom">
                <div className="row align-items-center justify-content-between mx-5">
                    <div className="col-3 col-lg-4 p-3">
                        <h3 className='my-0'>Bugnaught</h3>
                        <p className="text-dark lead"> a bug tracker by <a className="link-info" href="http://www.nathanfreeman.com" target="_blank">Nathan Freeman</a></p>
                    </div>
                    <div className="col-9 col-lg-4 p-3">
                        <p className="text-end text-dark footer-script">Built with React, TypeScript, Bootstrap on the front end. Back end is Flask/Python accessing a MySQL database hosted on PlanetScale. Bugnaught is a hypothetical engineering team bug tracking application. It has been designed primarily as a showcase project for software engineer Nathan Freeman.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer