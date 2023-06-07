const Footer: React.FunctionComponent = () => {
    return (
        <>
            <footer className="container-fluid mt-auto bg-secondary">
                <div className="row align-items-center justify-content-between mx-5">
                    <div className="col-3 col-lg-4 p-3">
                        <h3>Bugnaught</h3>
                        <p className="text-dark lead"> a bug tracker by <a className="link-info" href="http://www.nathanfreeman.com" target="_blank">Nathan Freeman</a></p>
                    </div>
                    <div className="col-9 col-lg-4 p-3">
                        <p className="text-end text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aliquam praesentium eveniet eius error quae aspernatur blanditiis repudiandae provident id!</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer