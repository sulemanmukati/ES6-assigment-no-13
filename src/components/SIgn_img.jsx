import React from 'react'
import singimg from '../../public/sign.svg'

const SIgn_img = () => {
    return (
        <>
            <div className="right_data mt-5" style={{ width: "100%" }}>
                <div className="sign_img mt-5">
                    <img src={singimg} style={{ maxWidth: 400 }} alt="" />
                </div>
            </div>
        </>
    )
}

export default SIgn_img