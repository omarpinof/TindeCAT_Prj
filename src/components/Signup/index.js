import React from "react";
import Logo from '../../img/Logo_color.svg'

const logoStyle = {
    flex: 1,
    textAlign: 'left'
}

export const Signup = () => (
    <div>
        <div className="topbar">
            <div style={logoStyle}>
                <img width="200" src={Logo} />
            </div>
            <p>REGISTRO</p>
        </div>

        <div className="input-custom">
            <label>Nombre</label>
            <input type="text" />
        </div>
        <div className="input-custom">
            <label>Email</label>
            <input type="email" />
        </div>

        <div className="input-custom">
            <label>Genero</label>
            <input type="text" />
        </div>

        <div className="input-custom">
            <label>Nickname</label>
            <input type="text" />
        </div>

        <div className="input-custom">
            <label>Password</label>
            <input type="Password" />
        </div>

        <div className="input-custom">
            <label>Confirm Password</label>
            <input type="Password" />
        </div>

        <div className="button-primary">
            <input type="button" value="Aceptar" />
        </div>
    </div>
)