const Footer: React.FunctionComponent = () => {
    return (
        <>
            <footer className="container-fluid mt-auto bg-secondary">
                <div className="row align-items-center">
                    <div className="col-3 p-3">
                        <h3>Bugnaught</h3>
                        <p className="text-dark lead"> a bug tracker by Nathan Freeman</p>
                    </div>
                    <div className="col-9 p-3">
                        <p className="text-end text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aliquam praesentium eveniet eius error quae aspernatur blanditiis repudiandae provident id!</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer