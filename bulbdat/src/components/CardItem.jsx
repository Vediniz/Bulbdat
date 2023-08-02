import React from "react";

export default function CardItem(props) {
    return (
        <div className='h-60 w-80 bg-white rounded-lg shadow-lg'>
            <div className='flex flex-col items-center justify-center h-full'>
                <h1 className='text-2xl font-bold h-2/3 flex justify-center items-center'>
                    {props.item}
                </h1>
                <div className="buttons p-2 flex justify-end w-full">
                    <button className='text-sm border p-3 mr-2 rounded-xl'>Editar</button>
                    <button className='text-sm border p-3 rounded-xl'>Excluir</button>
                </div>
            </div>
        </div>
    )
}