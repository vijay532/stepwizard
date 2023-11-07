import React from 'react'
interface infoValue {
    name: string;
}

function Info(infoObj:infoValue) {
    const {name} = infoObj
    return (
        <div>
        <h1>{name}</h1>
        </div>
    )
}

export default Info
