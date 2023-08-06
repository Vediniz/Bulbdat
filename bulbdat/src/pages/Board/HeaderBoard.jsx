import React from "react";

export default function HeaderBoard({title, button=true}) {
    return (
        <div className="header flex justify-between items-baseline mb-5 p-1">
            <h1 className='text-3xl pb-5'>{title}</h1>
            {button ? <button className='text-xl border p-3 rounded-xl'>Adicionar</button> : null}
        </div>
    )
}