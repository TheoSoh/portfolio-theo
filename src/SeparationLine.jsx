function SeparationLine() {

    const divStyles = {
        display: "flex",
        justifyContent: "center"
    }
    const hrStyles = {
        height: "0.125rem",
        width: "80%",
        border: "none",
        background: "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.75), rgba(0,0,0,0))"
    }

    return (
        <div style={divStyles}>
            <hr style={hrStyles}/>
        </div>
    );
}

export default SeparationLine